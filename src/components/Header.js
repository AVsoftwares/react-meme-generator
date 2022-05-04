import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  return (
    <header className="header">
      <img
        src={process.env.PUBLIC_URL + "/images/troll-face.png"}
        alt="trollface"
        className="header--img"
      />
      <h1 className="header--title">Meme generator</h1>
      <h4 className="header-subtitle">
        made with <FontAwesomeIcon icon={faHeart} /> by Andrea
      </h4>
    </header>
  );
}
