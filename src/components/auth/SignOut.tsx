import { css } from "@emotion/react";
import { signOut } from "firebase/auth";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { auth } from "../utils/firebase/firebase";

export type Props = {
  closeModal: Function;
};

const SignOut: NextPage<Props> = ({ closeModal }) => {
  const router = useRouter();

  const closeModalOutSide = (e: any, closeModal: Function) => {
    if (e.target === e.currentTarget) closeModal(false);
  };

  const signOutMethod = () => {
    localStorage.clear();
    signOut(auth)
      .then(() => {
        if (window.location.pathname == "/") {
          router.reload();
        } else {
          router.push("/");
        }
      })
      .catch((error: string) => {
        console.log(error);
      });
  };
  return (
    <div
      css={classes.Background}
      onClick={(e) => closeModalOutSide(e, closeModal)}
    >
      <div css={classes.Container}>
        <ul>
          <li>
            <button css={classes.SignOutButton} onClick={signOutMethod}>
              ログアウト
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SignOut;

const classes = {
  SignOutButton: css`
    padding: 10px;
    font-weight: bold;
    color: #619ec4;
  `,
  Background: css`
    position: fixed;
    right: 50px;
    top: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10;
  `,
  Container: css`
    min-width: 100px;
    height: 35px;
    background-color: #fff;
    border-radius: 5px;
    display: flex;
    align-items: center;
    flex-direction: column;
    position: relative;
    box-shadow: #777 0 2px 4px ;
    z-index: 20;
  `,
};
