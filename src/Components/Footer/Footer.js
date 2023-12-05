import React, { useState } from "react";
import styles from "./Footer.module.css";
import chatActive from "../../img/chatActive.svg";
import phoneActive from "../../img/phoneActive.svg";
import profileActive from "../../img/profileActive.svg";
import chatNotActive from "../../img/chatNotActive.svg";
import phoneNotActive from "../../img/phoneNotAcrive.svg";
import profileNotActive from "../../img/profileNotActive.svg";

const Footer = () => {
  const [activeElement, setActiveElement] = useState(0);

  const icons = [
    {
      name: "Chats",
      activeImg: chatActive,
      notActiveImg: chatNotActive,
    },
    {
      name: "Calls",
      activeImg: phoneActive,
      notActiveImg: phoneNotActive,
    },
    {
      name: "Account",
      activeImg: profileActive,
      notActiveImg: profileNotActive,
    },
  ];

  const handleIconClick = (index) => {
    setActiveElement(index);
  };

  return (
    <div className={styles.footerWrapper}>
      <div className={styles.listOfFooterIcons}>
        {icons.map((elem, index) => (
          <div
            className={`${styles.elemOfFooter} ${
              activeElement === index ? styles.active : ""
            }`}
            key={index}
            onClick={() => handleIconClick(index)}
          >
            <img
              className={styles.footerImg}
              src={activeElement === index ? elem.activeImg : elem.notActiveImg}
              alt={elem.name}
            />
            {activeElement === index && (
              <span className={styles.footerImgLabel}>{elem.name}</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Footer;