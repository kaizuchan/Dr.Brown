import { css } from "@emotion/react";
import { signInWithPopup } from "firebase/auth";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { auth, provider } from "../utils/firebase/firebase";

export type Props = {
  closeModal: Function;
};

const SignIn: NextPage<Props> = ({ closeModal }) => {
  const router = useRouter();

  const SignIn = async () => {
    const { user } = await signInWithPopup(auth, provider);

    const { providerData } = user;

    localStorage.setItem("user", JSON.stringify(providerData));
    router.reload();
  };

  const closeModalOutSide = (e: any, closeModal: Function) => {
    if (e.target === e.currentTarget) closeModal(false);
  };
  return (
    <div
      css={classes.Background}
      onClick={(e) => closeModalOutSide(e, closeModal)}
    >
      <div css={classes.Container}>
        <div css={classes.Header}>
          <img css={classes.Logo} src="/logo/logo1.jpg" alt="logo" />
          <button css={classes.CloseButton} onClick={() => closeModal(false)}>
            <img src="/images/close_icon.svg" alt="" width={20} height={20} />
          </button>
        </div>
        <div css={classes.Content}>
          <p>
            Dr.Brownは、健康診断アプリです。
            <br />
            画像をアップロードしてスコアを出してみましょう。
          </p>
          <button css={classes.LoginWithButton} onClick={SignIn}>
            <img src="/images/google_icon.svg" alt="" width={30} height={30} />
            <span style={{fontWeight: "bold", letterSpacing: .7}}>Login with Google</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignIn;

const classes = {
  Background: css`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10;
  `,
  Container: css`
    min-width: 300px;
    min-height: 35vh;
    height: 30%;
    background-color: #fff;
    border-radius: 10px;
    display: flex;
    align-items: center;
    flex-direction: column;
    position: relative;
    box-shadow: #777 0 5px 15px 5px;
    z-index: 20;
  `,
  Header: css`
    width: 100%;
    background: #aed4ec;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px 10px 0 0;
  `,
  Logo: css`
    max-height: 48px;
    padding: 4px 0;
  `,
  CloseButton: css`
    width: 32px;
    padding: 0;
    display: flex;
    justify-content: center;
    align-content: center;
    border: none;
    position: absolute;
    background-color: transparent;
    right: 10px;
  `,
  Content: css`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    p {
      color: #555;
      font-size: 14px;
      max-width: 300px;
      padding: 0 30px;
      margin-bottom: 10%;
    }
  `,
  LoginWithButton: css`
    width: 200px;
    background-color: #f1faff;
    border: 1px solid #eee;
    box-shadow: #ddd 0px 2px 2px 0px;
    border-radius: 5px;
    padding: 5px 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.2s;

    span {
      color: #555;
      padding-top: 3px;
      margin: 0 5px;
      font-size: 14px;
      letter-spacing: -0.5px;
    }

    &:hover {
      background-color: #e6f5fd;
    }

    &:active {
      box-shadow: none;
    }
  `,
};
