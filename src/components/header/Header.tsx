import { NextPage } from "next";
import Link from "next/link";
import { css } from "@emotion/react";
import PersonIcon from "@mui/icons-material/Person";
import MobileBottomNav from "./MobileBottomNav";
import { useEffect, useState } from "react";
import { useAtom } from "jotai";
import { fetchUser } from "../utils/firebase/fetchUser";
import { googleUserAtom } from "../utils/atoms";
import SignIn from "../auth/SignIn";
import SignOut from "../auth/SignOut";

export type Props = {
  name: string;
};

const classes = {
  // ヘッダー
  header: css`
  background-color: #5899c1;
    color: #eee;
    height: 10vh;
    width: calc(100% - 300px);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 60px;
    position: fixed;
    z-index: 10;

    @media (max-width: 1000px) {
      width: 100vw;
    }
  `,
  h1: css`
    font-size: 2.5rem;
    letter-spacing: 1.8px;
    @media (max-width: 780px) {
      font-size: 2rem;
    }
    @media (max-width: 480px) {
      font-size: 1.5rem;
    }
  `,
  myPage: css`
    text-align: center;
    display: flex;
    align-items: center;
    position: relative;
    z-index: 100;
  `,
  accountIcon: css`
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 0 10px;
  `,
  login: css`
    padding: 0 10px;
  `,
  logout: css`
    padding: 0 10px;
  `,
  userMenu: css`
    display: flex;
    border-radius: 50%;
    align-items: center;
    border: none;
    background-color: #eee;
    z-index: 20;
  `,
  userImg: css`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    cursor: pointer;
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);
    transition: all 0.1s ease-in;

    &:hover {
      box-shadow: none;
    }

    &:active {
      box-shadow: 0px 0px 1px 1px #000;
    }
  `,
  signIn: css`
    border: none;
    padding: 3px 10px;
    border-radius: 5px;
    padding: 7px 15px;
    box-shadow: #777 0px 1.8px 3px 0px;
    transition: all ease-in 0.1s;
    background-color: #eee;
    z-index: 20;

    &:hover {
      box-shadow: none;
    }

    &:active {
      box-shadow: inset #777 0px 1px 3px 0px;
    }

    p {
      color: #619ec4;
      font-size: 16px;
      font-weight: bold;
      letter-spacing: 0.8px;

      @media (max-width: 420px) {
        font-size: 14px;
        letter-spacing: 0px;
      }
    }
  `,
  bottomNav: css`
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  `,
};

const TopContent: NextPage<Props> = ({ name }) => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [burgerOpen, setBurgerOpen] = useState<boolean>(false);

  const [user, setUser] = useAtom<object | null>(googleUserAtom);

  useEffect(() => {
    const userInfo = fetchUser();
    try {
      setUser(userInfo[0]);
    } catch (error) {
      setUser(null);
    }
  }, []);

  // console.log(user);
  
  return (
    <header css={classes.header}>
      <h1 css={classes.h1}>{name}</h1>

      {user != null ? (
        <div css={classes.myPage}>
          <Link href="./MyPage">
            <div css={classes.accountIcon} style={{ cursor: "pointer" }}>
              <PersonIcon style={{ fontSize: "50px", color: "#CDE9FE" }} />
            </div>
          </Link>
          <div
            css={classes.userMenu}
            onClick={() => setBurgerOpen(!burgerOpen)}
          >
            <img css={classes.userImg} src={user.photoURL} />
          </div>
        </div>
      ) : (
        <div>
          <button
            css={classes.signIn}
            onClick={() => {
              setOpenModal(!openModal);
            }}
          >
            <p>Sign in</p>
          </button>
        </div>
      )}

      {openModal && <SignIn closeModal={setOpenModal} />}
      {burgerOpen && <SignOut closeModal={setBurgerOpen} />}

      <div css={classes.bottomNav}>
        <MobileBottomNav />
      </div>
    </header>
  );
};

export default TopContent;
