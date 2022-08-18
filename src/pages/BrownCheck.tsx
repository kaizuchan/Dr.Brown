import { css } from "@emotion/react";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useState } from "react";
import Layout from "./Layout/Layout";

const pageProps = {
  name: "撮影診断",
  desc: "あなたのブラウン君から健康状態を調べるよ",
  bgImg: "url('./bgImg/hospital.jpg')",
};

const BrownCheck: NextPage = () => {
  const router = useRouter();
  const [image, setImage] = useState({ preview: "", raw: "" });

  const handleChange = (e: any) => {
    if (e.target.files.length) {
      setImage({
        preview: URL.createObjectURL(e.target.files[0]),
        raw: e.target.files[0],
      });
    }
  };

  const handleUpload = async (e: any) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", image.raw);

    // await fetch("http://localhost:8000/images", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "form-data",
    //   },
    //   body: formData,
    // });
    router.push("/BrownResult")
  };

  return (
    <Layout
      siteName={pageProps.name}
      desc={pageProps.desc}
      bgDesign={pageProps.bgImg}
    >
      <div css={classes.container}>
        <h1>画像診断から健康状態を調べてみよう！</h1>
        <div css={classes.contents}>
          <div css={classes.wrap}>
            <label htmlFor="upload-button" style={{overflow: "hidden"}}>
              {image.preview ? (
                <img src={image.preview} alt="dummy" max-height="400px" width="" />
              ) : (
                <div css={classes.uploadButton}>
                  <p>画像を選択する</p>
                </div>
              )}
            </label>
            <input
              type="file"
              id="upload-button"
              style={{ display: "none" }}
              onChange={handleChange}
            />
          </div>
          <button css={classes.uploadBtn} onClick={handleUpload}>次へ</button>
        </div>
      </div>
    </Layout>
  );
};

export default BrownCheck;

const classes = {
  container: css`
    background-color: #ffffffcc;
    width: 100%;
    height: 80vh;

    h1 {
      font-size: 2rem;
      padding: 5% 5%;
    }
  `,
  contents: css`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  `,
  uploadButton: css`
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #5898c0;
    width: 200px;
    height: 50px;
    border-radius: 10px;
    box-shadow: #777 0 2px 3px;
    transition: .2s;

    &:hover {
      box-shadow: none;
    }

    &:active {
      box-shadow: inset #777 0 2px 3px;
    }

    p {
      font-size: 16px;
      font-weight: bold;
      color: white;
    }
  `,
  wrap: css`
   margin-top: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    height: 30vh;
    width: 300px;
    background-color: #ddd;
  `,
  uploadBtn: css`
    width: 200px;
    height: 50px;
    background-color: white;
    position: relative;
    top: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #5898c0;
    font-weight: bold;
    font-size: 16px;
    border-radius: 10px;
    box-shadow: #777 0 2px 3px;
    transition: .2s;

    &:hover {
      box-shadow: none;
    }

    &:active {
      box-shadow: inset #777 0 2px 3px;
    }
  `,
};
