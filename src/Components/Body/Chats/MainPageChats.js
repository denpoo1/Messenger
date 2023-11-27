import React from "react";
import styles from "./MainPageChats.module.css";
import firstChatImage from "../../../img/firstChatImage.jpg";
import uncheck from "../../../img/unchek.svg";
import check from "../../../img/check.svg";
import groupIcon from "../../../img/Team.svg";

const MainPageChats = () => {
  const chats = [
    {
      type: "chat",
      ava: `${firstChatImage}`,
      name: "Ling Ju Jung",
      displayedText:
        "It`s the one week of the year in which you get the chance to take",
      time: "12:11",
      checked: true,
    },
  ];
  return (
      <div className={`${styles.chatList}`}>
        {chats.map((chat, index) =>(

        
        <div key={index} className={styles.chatWrapper}>
          <div className={styles.ava}>
            
          </div>
          <div className={styles.chatTextWrapper}>
            <div className={styles.nameAndTime}>
              <div className={styles.nameWrapper}>
                <img src={chat.type === "chat" ? groupIcon : ""}/>
                <h2 className={styles.name}>{chat.name}</h2>
              </div>

              <div className={styles.timeAndCheck}>
                <img className={styles.check} src={chat.checked == true ? check : uncheck}/>
                <span className={styles.time}>{chat.time}</span>
              </div>
            </div>
            <div className={styles.chatMsg}>
              <span className={styles.receiver}>You</span>
              <span className={styles.previewMsg}>{chat.displayedText}</span>
            </div>
          </div>
        </div>
        ))}
      </div>
  );
};

export default MainPageChats;
