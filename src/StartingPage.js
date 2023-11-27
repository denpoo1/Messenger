import React from "react";
import styles from "./StartingPage.module.css";
import UpWrapper from "./Wrapper/UpWrapper.js";
import MainPageHeader from "./Components/Header/MainPageHeader.js";
import MainPageChats from "./Components/Body/Chats/MainPageChats.js";

const StartingPage = () => {
  return (
    <div>
      <UpWrapper>
        <MainPageHeader />
      </UpWrapper>
      <MainPageChats />
    </div>
  );
};

export default StartingPage;
