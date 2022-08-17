import type { NextPage } from "next";
import Layout from "./Layout/Layout";
import axios from "axios";
import useSWR from "swr";
import Link from "next/link";
import { css } from "@emotion/react";
import Image from "next/image";

const siteName = "HOME";
const desc = "トップページ";
const bgImg = "url('./bgImg/homepink.jpg')";

const url = "http://localhost:8000";

const fetcher = (url: string) => axios.get(url).then((res) => res.data);

const Home: NextPage = () => {
  // データ取得
  // const { data, error } = useSWR(url, fetcher);
  // if (error) return <div>読み込みに失敗しました。</div>;
  // if (!data) return <div>少々お待ちください。。。</div>;
  // console.log(data)

  return (
    <Layout siteName={siteName} desc={desc} bgDesign={bgImg}>
      <div css={classes.container}>
        <h1>Dr.Brownへようこそ!!</h1>
        <div css={classes.wrap1}>
          <div css={classes.comments1}></div>
          <Image src="/home/DrBrown2.png" alt="" width="300px" height="250px" />
        </div>
        <div css={classes.contents}>
          <section css={classes.section}>
            <h2>Dr.Brownができること その１</h2>
            <div css={classes.section1}>
              <div>
                <p>
                  実は、うんちから健康状態を調べることができるんだ。
                  <br />
                  そこで、僕が実際に君たちのうんちを調べて健康チェックをして、点数をつけてあげるよ。
                </p>
              </div>
              <div>
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
          </section>
          <section css={classes.section}>
            <h2>Dr.Brownができること その２</h2>
            <div css={classes.section2}>
              <div>
                <p>
                  過去に受けた診断結果からスコアを振り返ることができるよ。
                  <br />
                  これで、体調崩した日が客観的に見れるから、原因について振り返りやすいね。
                </p>
              </div>
              <div>
              </div>
            </div>
          </section>
          <div css={classes.sime}>
              <p>Dr.Brownと共にあなたの体調管理をしよう！</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;

const classes = {
  container: css`
    background-color: #ffffffee;
    width: 100%;
    height: 80%;

    h1 {
      font-weight: bold;
      font-size: 3rem;
      padding: 5% 5% 5% 10%;
    }
  `,
  contents: css`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  `,
  wrap1: css`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    width: 100%;
    min-height: 250px;
  `,
  comments1: css`
    width: 250px;
    height: 250px;
    background: url("/home/aisatu.jpg") center center;
    background-size: cover;
  `,
  section: css`
    width: 80%;
    margin-top: 50px;
    padding: 20px 0;
    min-height: 500px;
    /* background-color: #eee; */
    margin-bottom: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h2 {
      width: 100%;
      text-align: center;
      font-size: 2.5rem;
      color: #5899c1;
      padding: 20px 0 10px;
      margin: 20px 0 50px;
      font-weight: bold;
      position: relative;

      @media (max-width: 420px) {
        font-size: 2rem;
      }
      &:after {
        content: "";
        position: absolute;
        left: 15%;
        right: 15%;
        bottom: 0;
        height: 7px;
        background: -webkit-repeating-linear-gradient(
          -45deg,
          #6458c1,
          #5899c1 2px,
          #fff 2px,
          #fff 4px
        );
        background: repeating-linear-gradient(
          -45deg,
          #6458c1,
          #5899c1 2px,
          #fff 2px,
          #fff 4px
        );

        @media (max-width: 420px) {
          left: 0;
          right: 0;
        }
      }
    }

    & > div {
      height: 80%;
      width: 100%;
      /* background-color: #ddd; */
    }
  `,
  section1: css`
    width: 100%;
    min-height: 400px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

    p {
      font-size: 16px;
    }

    & > div:nth-of-type(1) {
      min-width: 230px;
      padding: 30px 10% 0;
    }

    & > div:nth-of-type(2) {
      position: relative;
      border: 2px solid #5899c1;
      border-radius: 10px;
      padding: 50px 20px;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      min-width: 50%;
      min-height: 220px;
      @media (max-width: 420px) {
        width: 80%;
        margin: 40px 0;
        padding: 10px 0;
      }

      & > div:nth-of-type(1) {
        width: 130px;
        height: 130px;
        margin-right: 30px;
        background-image: url(/home/unchi1.png);
        background-position: center;
        background-size: cover;
      }
      & > div:nth-of-type(2) {
        width: 120px;
        height: 120px;
        margin-right: 30px;
        background-image: url(/home/unchi4.png);
        background-position: center;
        background-size: cover;
      }
      & > div:nth-of-type(3) {
        width: 120px;
        height: 120px;
        background-image: url(/home/unchi3.png);
        background-position: center;
        background-size: cover;
      }
    }
  `,
  section2: css`
  width: 100%;
  min-height: 400px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  p {
    font-size: 16px;
  }

  & > div:nth-of-type(1) {
    min-width: 230px;
    padding: 30px 10% 0;
    margin-bottom: 50px;
  }
  & > div:nth-of-type(2) {
    background: url("/home/logSample.png");
    background-size: cover;
    background-position: center;
    border: 5px solid #5899c1;
    border-radius: 10px;
    width: 70%;
    height: 350px;
  }
  `,
  sime: css`
    margin: 80px 0 120px;

    p {
      font-size: 2.5rem;
      color: #5899c1;
      font-weight: bold;
    }
  `,
};
