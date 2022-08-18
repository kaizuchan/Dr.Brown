import { css } from "@emotion/react";
import { Button } from "@mui/material";
import { NextPage } from "next";
import Link from "next/link";
import Layout from "./Layout/Layout";

const pageProps = {
  name: "撮影診断",
  desc: "あなたのブラウン君から健康状態を調べるよ",
  bgImg: "url('./bgImg/hospital.jpg')",
};

const BrownFinal: NextPage = () => {
  const result = 85;

  return (
    <Layout
      siteName={pageProps.name}
      desc={pageProps.desc}
      bgDesign={pageProps.bgImg}
    >
      <div css={classes.container}>
        <h2>検査の結果からあなたのスコアは、</h2>
        <div css={classes.contents}>
          <div className="box">
            <div className="wave -one"></div>
            <div className="wave -two"></div>
            <div className="wave -three"></div>
            <span
              style={{
                fontSize: "8rem",
                color: "#fff",
                fontWeight: "bold",
                zIndex: 20,
                position: "relative",
                top: "25%",
              }}
            >
              {result}点
            </span>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "5% 0 0 0",
          }}
        >
          <Link href={"/"}>
            <Button
              variant="contained"
              sx={{ width: "200px", fontSize: 14, fontWeight: "bold", p: "10px 0" }}
            >
              HOMEに戻る
            </Button>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default BrownFinal;

const classes = {
  container: css`
    background-color: #ffffffcc;
    width: 100%;
    height: 80vh;

    h2 {
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
};
