import React, { useEffect, useCallback } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import {
  auth,
  signInWithPopup,
  provider,
  onAuthStateChanged,
  signOut,
} from "../firebase";
import { userActions } from "../ReduxStorage/userSlice";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userLoginInfos = {
    name: useSelector((state) => state.user.name),
    email: useSelector((state) => state.user.email),
    photoUrl: useSelector((state) => state.user.photoUrl),
  };

  const setUser = useCallback(
    (user) => {
      dispatch(
        userActions.setUserLoginDetails({
          name: user.displayName,
          email: user.email,
          photoUrl: user.photoURL,
        })
      );
    },
    [dispatch]
  );

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        navigate("home");
      } else {
      }
    });
  }, [userLoginInfos.name, navigate, setUser]);

  const authhandler = async () => {
    if (!userLoginInfos.name) {
      try {
        await signInWithPopup(auth, provider);
      } catch (err) {
        console.error(err);
      }
    } else {
      try {
        await signOut(auth);
        dispatch(userActions.setSignOutState());
        navigate("/");
      } catch (err) {
        console.error(err);
      }
    }
  };

  return (
    <Container>
      <MainLogo>
        <img src="images/logo.svg" alt="Disney+" />
      </MainLogo>
      {userLoginInfos.name ? (
        <>
          <NavMenu>
            <ul>
              <li>
                <Link to="/">
                  <img src="images/home-icon.svg" alt="Home" />
                  <span>HOME</span>
                </Link>
              </li>
              <li>
                <Link to="/">
                  <img src="images/search-icon.svg" alt="search" />
                  <span>SEARCH</span>
                </Link>
              </li>
              <li>
                <Link to="/">
                  <img src="images/watchlist-icon.svg" alt="watchlist" />
                  <span>WATCHLIST</span>
                </Link>
              </li>
              <li>
                <Link to="/">
                  <img src="images/original-icon.svg" alt="originals" />
                  <span>ORIGINALS</span>
                </Link>
              </li>
              <li>
                <Link to="/">
                  <img src="images/movie-icon.svg" alt="movies" />
                  <span>MOVIES</span>
                </Link>
              </li>
              <li>
                <Link to="/">
                  <img src="images/series-icon.svg" alt="series" />
                  <span>SERIES</span>
                </Link>
              </li>
            </ul>
          </NavMenu>
          <SignOutDiv>
            <UserPic
              src={userLoginInfos.photoUrl}
              alt="Photo"
            />
            <LogoutBtn onClick={authhandler}>Logout</LogoutBtn>
          </SignOutDiv>
        </>
      ) : (
        <LoginButton onClick={authhandler}>LOGIN</LoginButton>
      )}
    </Container>
  );
};

const Container = styled.nav`
  width: 100%;
  height: 70px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 36px;
  background-color: #040714;
  z-index: 9;
  border-bottom: 1px solid #fff;
`;

const MainLogo = styled.a`
  padding: 0;
  margin-bottom: 10px;
  width: 80px;
  max-height: 70px;
  font-size: 0;
  display: inline-block;
  cursor: pointer;

  img {
    width: 100%;
    display: block;
    transition: all cubic-bezier(0.55, 0.055, 0.675, 0.19) 50ms;

    :hover {
      opacity: 0.7;
    }
  }
`;

const LoginButton = styled.a`
  width: 150px;
  height: 45px;
  border: 1px solid grey;
  border-radius: 5px;
  cursor: pointer;
  font-size: 0.9rem;
  letter-spacing: 1.5px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.96);

  :hover {
    background-color: #f9f9f9;
    color: #040714;
  }
`;

const NavMenu = styled.div`
  height: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  margin-right: auto;
  margin-left: 30px;

  ul {
    list-style: none;
    display: flex;
    justify-content: center;
    align-items: center;

    li {
      margin-left: 30px;

      a {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: flex-end;

        img {
          width: 20px;
        }

        span {
          margin-left: 5px;
          font-size: 0.8rem;
          letter-spacing: 2px;
          white-space: nowrap;
          position: relative;

          :before {
            content: "";
            display: block;
            background-color: #f9f9f9;
            border-radius: 4px;
            height: 1px;
            width: 0;
            position: absolute;
            opacity: 0;
            bottom: -6px;
            transition: all 150ms cubic-bezier(0.25, 0.46, 0.45, 0.96);
          }
        }

        :hover {
          span:before {
            width: 100%;
            opacity: 1;
          }
        }
      }
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const LogoutBtn = styled.a`
  width: 110px;
  height: 45px;
  position: absolute;
  right: -25px;
  bottom: -45px;
  background-color: #040714;
  color: #fff;
  border: 1px solid #fff;
  border-radius: 10px;
  text-align: center;
  padding-top: 12px;
  cursor: pointer;
  display: none;
  opacity: 0;
  transition: all 250ms ease-in-out;
  animation: animateOpc 0.5s;

  :hover {
    background-color: #fff;
    color: #000;
    border: 1px solid #fff;
  }
`;

const UserPic = styled.img`
  height: 50px;
  width: 50px;
  border-radius: 50%;
  cursor: pointer;
`;

const SignOutDiv = styled.div`
  position: relative;

  :hover {
    ${LogoutBtn} {
      display: block;
      opacity: 1;
    }
  }

  @keyframes animateOpc {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export default Header;
