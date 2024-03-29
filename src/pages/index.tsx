import type { NextPage } from "next";
import Layout from "./Layout/Layout";
import axios from "axios";
import useSWR from "swr";
import Link from "next/link";
import Header from "../components/header/Header";
import { css } from "@emotion/react";


const siteName = "HOME";
const desc = "トップページ";
const bgImg = "url('./bgImg/homepink.jpg')"

const url = "http://localhost:8000";

const classes = {
  backcolor:css`
    background-color: #EBF0F4;
    opacity: 0.88;
  `,
  flex:css`
    display: flex;
    
    @media(max-width: 1000px){
      width: 100%;
    }
  `,
  mobileChange:css`
    @media(max-width: 1000px){
      display: none;
    }
  `,
  container:css`
    @media(max-width: 1000px){
      width: 100%;
    }
  `,

 }

const fetcher = (url: string) => axios.get(url).then((res) => res.data);

const Home: NextPage = () => {
  // データ取得
  const { data, error } = useSWR(url, fetcher);
  if (error) return <div>読み込みに失敗しました。</div>;
  if (!data) return <div>少々お待ちください。。。</div>;
  console.log(data)
  
  return (
    <Layout siteName={siteName} desc={desc} bgDesign={bgImg}>
    </Layout>
  );
};

export default Home;
