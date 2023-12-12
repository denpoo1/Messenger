import React from "react";
import styles from "./ChatModelWindow.module.css";
import UpWrapper from "../../Wrapper/UpWrapper";
import DownWrapper from "../../Wrapper/Wrapper";
import img1 from "../../img/1.jpg";
import img2 from "../../img/2.jpg";
import img3 from "../../img/3.jpg";
import img4 from "../../img/4.jpg";
import img5 from "../../img/5.jpg";
import img6 from "../../img/6.jpg";
import img7 from "../../img/7.jpg";
import img8 from "../../img/8.jpg";
import img9 from "../../img/9.jpg";
import img10 from "../../img/10.jpg";
const ChatModelWindow = (props) => {
  const chats = [
    {
      id: "1",
      type: "chat",
      ava: `${img1}`,
      name: "Хлопчик Горобчик (Львів)",
      displayedText:
        "Сука, я заебался эту хуйню учить, я твою джаву в рот ебал",
      time: "04:12",
      checked: false,
      youReceiver: true,
    },
    {
      type: "group",
      ava: `${img2}`,
      name: "25c eng",
      displayedText:
        "Та й якщо чотири людини сидять, а на атенданс лісті буде людей 15 то буде підозріло",
      time: "17:57",
      checked: true,
      youReceiver: false,
    },

    {
      type: "chat",
      ava: `${img3}`,
      name: "Кот (не) Леопольд",
      displayedText:
        "Илюха, вообщем когда мы погуляли с Соней она мне сделала ",
      time: "19:11",
      checked: true,
      youReceiver: false,
    },
    {
      type: "group",
      ava: `${img4}`,
      name: "Девелоперс",
      displayedText:
        "привет всем, в это воскресенье ивайчу всех на настолочки, около 18:00",
      time: "19:28",
      checked: true,
      youReceiver: true,
    },
    {
      type: "chat",
      ava: `${img5}`,
      name: "Арсений Мантанович",
      displayedText: "Прикинь, йду на асд, зайшов в ліфт а там Іда і ми там",
      time: "20:41",
      checked: true,
      youReceiver: false,
    },
    {
      type: "chat",
      ava: `${img6}`,
      name: "Михаил Киевский (торт)",
      displayedText: "Мені похуй",
      time: "18:05",
      checked: false,
      youReceiver: false,
    },
    {
      type: "chat",
      ava: `${img7}`,
      name: "Антоний Кашин",
      displayedText: "антошка картошка, а ты проект по скж сделал?",
      time: "15:01",
      checked: false,
      youReceiver: true,
    },
    {
      type: "chat",
      ava: `${img8}`,
      name: "Викенд Викендович",
      displayedText: "можешь прийти в 2 очках и 2 куртках?",
      time: "12:11",
      checked: true,
      youReceiver: true,
    },
    {
      type: "chat",
      ava: `${img9}`,
      name: "Вованус",
      displayedText: "ку, скинь матан ",
      time: "8:11",
      checked: true,
      youReceiver: false,
    },
    {
      type: "chat",
      ava: `${img10}`,
      name: "Дениска",
      displayedText:
        "Не хотите завтра с Вовой в 17.00 собраться у нас и сыграть во что-то ?",
      time: "18:49",
      checked: false,
      youReceiver: false,
    },
  ];
  const cutText = (text) => {
    if (text.length > 15) {
      return text.slice(0, 15) + "...";
    }
    return text;
  };
  const selectedChatData = chats.find((chat) => chat.name === props.chatName);
  console.log(selectedChatData);
  return (
    <div className={styles.chatWrapper}>
      <UpWrapper>
        <div className={styles.chat}>
          <div className={styles.firstPartWrapper}>
            <div className={styles.svgBtnWrapper}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="calc((16 / 390) * 100vmin)"
                height="calc((29 / 390) * 100vmin)"
                viewBox="0 0 16 29"
                fill="none"
              >
                <path
                  d="M2 14L14.0002 2.00015"
                  stroke="white"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <path
                  d="M2 14L14 26"
                  stroke="white"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <div className={styles.chatHeaderInfo}>
              <img className={styles.chatAva} src={selectedChatData.ava}></img>
              <div className={styles.chatNameWrapper}>
                <span className={styles.chatName}>
                  {cutText(selectedChatData.name)}
                </span>
                <span className={styles.chatStatus}>online</span>
              </div>
            </div>
          </div>
          <div className={styles.callAndOther}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="calc((20 / 390) * 100vmin)"
              height="calc((20 / 390) * 100vmin)"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3.92167 8.38923C5.48167 11.4369 7.995 13.9246 11.0608 15.4862L13.4442 13.1169C13.7367 12.8262 14.17 12.7292 14.5492 12.8585C15.7625 13.2569 17.0733 13.4723 18.4167 13.4723C19.0125 13.4723 19.5 13.9569 19.5 14.5492V18.3077C19.5 18.9 19.0125 19.3846 18.4167 19.3846C8.24417 19.3846 0 11.1892 0 1.07692C0 0.484615 0.4875 0 1.08333 0H4.875C5.47083 0 5.95833 0.484615 5.95833 1.07692C5.95833 2.42308 6.175 3.71538 6.57583 4.92154C6.695 5.29846 6.60833 5.71846 6.305 6.02L3.92167 8.38923Z"
                fill="white"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="calc((16 / 390) * 100vmin)"
              height="calc((24 / 390) * 100vmin)"
              viewBox="0 0 16 24"
              fill="none"
            >
              <circle cx="8" cy="19" r="2" fill="white" />
              <circle cx="8" cy="12" r="2" fill="white" />
              <circle cx="8" cy="5" r="2" fill="white" />
            </svg>
          </div>
        </div>
      </UpWrapper>
    </div>
  );
};

export default ChatModelWindow;
