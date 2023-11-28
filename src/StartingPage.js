import React from "react";
import styles from "./StartingPage.module.css";
import UpWrapper from "./Wrapper/UpWrapper.js";
import Wrapper from "./Wrapper/Wrapper.js"
import MainPageHeader from "./Components/Header/MainPageHeader.js";
import MainPageChats from "./Components/Body/Chats/MainPageChats.js";
import Header from "./Components/Footer/Footer.js";
const StartingPage = () => {
  return (
    <div>
      <UpWrapper>
        <MainPageHeader />
      </UpWrapper>
      <MainPageChats />
      <Wrapper>
        <Header/>
      </Wrapper>
    </div>
  );
};

export default StartingPage;
