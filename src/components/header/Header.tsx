import { NextPage } from "next";
import Link from "next/link";
import { css } from "@emotion/react";
import PersonIcon from "@mui/icons-material/Person";
import MobileBottomNav from "./MobileBottomNav";
import HamburgerMenu from "./HamburgerMenu";
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
    color: #eee;
    height: 10vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    z-index: 10;
    @media (max-width: 1000px) {
      width: 100vw;
    }
  `,
  headerCover: css`
    height: 100%;
    width: 100%;
    background-color: #5899c1;
    opacity: 0.95;
    position: absolute;
    top: 0;
    right: 0;
    z-index: -10;
    @media (max-width: 1000px) {
      width: 100vw;
    }
  `,
  h1: css`
    font-size: 2.5rem;
    margin-left: 10%;
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
    display: inline-flex;
    align-items: center;
    position: relative;
    @media (max-width: 481px) {
      display: none;
    }
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
  MenuIcon: css`
    @media (min-width: 480px) {
      display: none;
    }
    margin: 0 0 0 30%;
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

  return (
    <header css={classes.header}>
      <div css={classes.headerCover}></div>
      <h1 css={classes.h1}>{name}</h1>

      {user != null ? (
        <div css={classes.myPage}>
          <Link href="./MyPage">
            <div css={classes.accountIcon}>
              <PersonIcon style={{ fontSize: "50px", color: "#CDE9FE" }} />
            </div>
          </Link>
          <div css={classes.userMenu}  onClick={() => setBurgerOpen(!burgerOpen)}>
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
      
      <div css={classes.MenuIcon}>
        <HamburgerMenu />
      </div>

      <MobileBottomNav />
    </header>
  );
};

export default TopContent;
