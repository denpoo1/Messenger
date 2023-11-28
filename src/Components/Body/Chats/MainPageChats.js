import React, { useEffect, useState } from "react";
import styles from "./MainPageChats.module.css";
import group25c from "../../../img/25c.jpg";
import img1 from "../../../img/1.jpg";
import img2 from "../../../img/2.jpg";
import img3 from "../../../img/3.jpg";
import img4 from "../../../img/4.jpg";
import img5 from "../../../img/5.jpg";
import img6 from "../../../img/6.jpg";
import img7 from "../../../img/7.jpg";
import img8 from "../../../img/8.jpg";
import img9 from "../../../img/9.jpg";
import img10 from "../../../img/10.jpg";
import uncheck from "../../../img/unchek.svg";
import check from "../../../img/check.svg";
import groupIcon from "../../../img/Team.svg";

const MainPageChats = () => {
  const cutText = (text) => {
    if (text.length > 50) {
      return text.slice(0, 50) + "...";
    }
    console.log(text);
    return text;
  };

  const chats = [
    {
      type: "chat",
      ava: `${img1}`,
      name: "Хлопчик Горобчик (Львів)",
      displayedText:
        "Сука, я заебался эту хуйню учить, я твою джаву в рот ебал",
      time: "04:12",
      checked: false,
      youReceiver: true
    },
    {
      type: "group",
      ava: `${img2}`,
      name: "25c eng",
      displayedText:
        "Та й якщо чотири людини сидять, а на атенданс лісті буде людей 15 то буде підозріло",
      time: "17:57",
      checked: true,
      youReceiver: false
    },
    
    {
      type: "chat",
      ava: `${img3}`,
      name: "Кот (не) Леопольд",
      displayedText:
        "Илюха, вообщем когда мы погуляли с Соней она мне сделала ",
      time: "19:11",
      checked: true,
      youReceiver: false
    },
    {
      type: "group",
      ava: `${img4}`,
      name: "Девелоперс",
      displayedText:
        "привет всем, в это воскресенье ивайчу всех на настолочки, около 18:00",
      time: "19:28",
      checked: true,
      youReceiver: true
    },
    {
      type: "chat",
      ava: `${img5}`,
      name: "Арсений Мантанович",
      displayedText:
        "Прикинь, йду на асд, зайшов в ліфт а там Іда і ми там",
      time: "20:41",
      checked: true,
      youReceiver: false
    },
    {
      type: "chat",
      ava: `${img6}`,
      name: "Михаил Киевский (торт)",
      displayedText:
        "Мені похуй",
      time: "18:05",
      checked: false,
      youReceiver: false
    },
    {
      type: "chat",
      ava: `${img7}`,
      name: "Антоний Кашин",
      displayedText:
        "антошка картошка, а ты проект по скж сделал?",
      time: "15:01",
      checked: false,
      youReceiver: true
    },
    {
      type: "chat",
      ava: `${img8}`,
      name: "Викенд Викендович",
      displayedText:
        "можешь прийти в 2 очках и 2 куртках?",
      time: "12:11",
      checked: true,
      youReceiver: true
    },
    {
      type: "chat",
      ava: `${img9}`,
      name: "Вованус",
      displayedText:
        "ку, скинь матан ",
      time: "8:11",
      checked: true,
      youReceiver: false
    },
    {
      type: "chat",
      ava: `${img10}`,
      name: "Дениска",
      displayedText:
        "Не хотите завтра с Вовой в 17.00 собраться у нас и сыграть во что-то ?",
      time: "18:49",
      checked: false,
      youReceiver: false
    },
  ];
  return (
    <div className={`${styles.chatList}`}>
      {chats.map((chat, index) => (
        <div key={index} className={styles.qwe}>
        <div  className={styles.chatWrapper}>
            <img className={styles.ava} src={chat.ava}/>
          <div className={styles.chatTextWrapper}>
            <div className={styles.nameAndTime}>
              <div className={styles.nameWrapper}>
              <img className={chat.type === "group" ? styles.notdeletePhoto : styles.deletePhoto} src={chat.type === "group" ? groupIcon : ""} />
                <h2 className={styles.name}>{chat.name}</h2>
              </div>

              <div className={styles.timeAndCheck}>
                <img
                  className={styles.check}
                  src={chat.checked == true ? check : uncheck}
                />
                <span className={styles.time}>{chat.time}</span>
              </div>
            </div>
            <div className={styles.chatMsg}>
              <span className={styles.receiver}>{chat.youReceiver == true ? "You" : ""}</span>
              <span className={styles.previewMsg}>
                {cutText(chat.displayedText)}
              </span>
            </div>
            
          </div>
          </div>
          {index < chats.length - 1 && <div className={styles.hrLine}></div>}
        </div>

      ))}
    </div>
  );
};

export default MainPageChats;
