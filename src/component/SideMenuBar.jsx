import React from "react";
import "../style/SideMenu.css";

const SideMenuBar = () => {
  return (
    <>
      <div className="side-menu__tabs">
        <a
          href='$'
          className="side-menu__game side-menu__game--bfv w-inline-block"
        >
          <div className="side-menu__popup">
            <div className="side-menu__text">Battlefield v</div>
          </div>
        </a>
        <a
          href='$'
          className="side-menu__game side-menu__game--bf1 w-inline-block"
        >
          <div className="side-menu__popup">
            <div className="side-menu__text">Battlefield 1</div>
          </div>
        </a>
        <a
          href='$'
          className="side-menu__game side-menu__game--bf4 side-menu__game--bf4-fake w-inline-block"
        >
          <div className="side-menu__popup">
            <div className="side-menu__text">Battlefield 4</div>
          </div>
        </a>
        <a

          href='$'
          className="side-menu__game side-menu__game--bfh w-inline-block"
        >
          <div className="side-menu__popup">
            <div className="side-menu__text">Battlefield Hardline</div>
          </div>
        </a>
        <a
          href='$'
          className="side-menu__career w-inline-block"
        >
          <div className="side-menu__popup">
            <div className="side-menu__text">career</div>
          </div>
        </a>
        <a
          href='$'
          className="side-menu__watch w-inline-block"
        >
          <div className="side-menu__popup">
            <div className="side-menu__text">watch</div>
          </div>
        </a>
        <a
          href='$'
          className="side-menu__news w-inline-block"
        >
          <div className="side-menu__popup">
            <div className="side-menu__text">news</div>
          </div>
        </a>
        <a
          href='$'
          className="side-menu__help w-inline-block"
        >
          <div className="side-menu__popup">
            <div className="side-menu__text">help</div>
          </div>
        </a>
      </div>
      <div
        className="side-menu__quit"
      >
        <div className="side-menu__quit-popup">
          <div className="side-menu__text">quit</div>
        </div>
      </div>
      <div className="side-menu__bar"></div>
    </>
  );
};

export default SideMenuBar;
