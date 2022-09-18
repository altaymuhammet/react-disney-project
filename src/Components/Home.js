import React, { useEffect } from "react";
import styled from "styled-components";
import ImgSlider from "./ImgSlider";
import Viewers from "./Viewers";
import Recommends from "./Recommends";
import NewDisney from "./NewDisney";
import Originals from "./Originals";
import Trending from "./Trending";
import { useSelector, useDispatch } from "react-redux";
import db from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import { setMovies } from "../ReduxStorage/movieSlice";

const Home = (props) => {
  const dispatch = useDispatch();
  const userName = useSelector((state) => state.user.name);

  useEffect(() => {
    let all = [];
    let recommends = [];
    let newDisneys = [];
    let originals = [];
    let trending = [];

    const getDataFromFirestore = async () => {
      const querySnapshot = await getDocs(collection(db, "movie"));

      querySnapshot.docs.forEach((doc) => {
        all.push({ id: doc.id, ...doc.data() });
        if (doc.data().type === "recommend") {
          recommends = [...recommends, { id: doc.id, ...doc.data() }];
        }
        if (doc.data().type === "new") {
          newDisneys = [...newDisneys, { id: doc.id, ...doc.data() }];
        }
        if (doc.data().type === "original") {
          originals = [...originals, { id: doc.id, ...doc.data() }];
        }
        if (doc.data().type === "trending") {
          trending = [...trending, { id: doc.id, ...doc.data() }];
        }
      });
      dispatch(
        setMovies({
          all: all,
          recommend: recommends,
          newDisney: newDisneys,
          original: originals,
          trending: trending,
        })
      );
    };

    getDataFromFirestore();
  }, [userName, dispatch]);

  return (
    <HomeContainer>
      <ImgSlider />
      <Viewers />
      <Recommends />
      <NewDisney />
      <Originals />
      <Trending />
    </HomeContainer>
  );
};

const HomeContainer = styled.main`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);

  &:after {
    background: url("/images/home-background.png") center center / cover
      no-repeat fixed;
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`;

export default Home;
