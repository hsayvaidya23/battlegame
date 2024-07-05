import React from "react";

const Invite = () => {
  return (
    <>
      <div className="invite">
        <div className="invite__line"></div>
        <div className="invite__squad">
          <div className="invite__squad-h-w">
            <img
              src="https://uploads-ssl.webflow.com/6013fff62154adaa4600f932/601ab15999e303e7c202c28c_squad.svg"
              loading="lazy"
              alt=""
              className="invite__squad-icon"
            />
            <div className="invite__squad-h">squad</div>
          </div>
          <div
            className="invite__join-w"
          >
            <img
              src="https://uploads-ssl.webflow.com/6013fff62154adaa4600f932/601ab1596100550691c84f76_home__join-black.svg"
              loading="lazy"
              alt=""
              className="invite__join-icon invite__join-icon--black"
            />
            <img
              src="https://uploads-ssl.webflow.com/6013fff62154adaa4600f932/601ab158769fa828e95f98df_home__join-default.svg"
              loading="lazy"
              alt=""
              className="invite__join-icon invite__join-icon--default"
            />
            <div className="invite__join-h">squad join</div>
          </div>
        </div>
        <div className="invite__line"></div>
        <div className="invite__online">
          <div className="invite__online-h-w">
            <img
              src="https://uploads-ssl.webflow.com/6013fff62154adaa4600f932/601ab159d334e32483dbbcbb_online.svg"
              loading="lazy"
              alt=""
              className="invite__online-icon"
            />
            <div className="invite__online-h">online</div>
          </div>
          <div
            className="invite__online-friend"
          >
            <div className="invite__friend-picture-w">
              <div className="invite__online-bar"></div>
              <img
                src="https://uploads-ssl.webflow.com/6013fff62154adaa4600f932/601ab1585908791f051d4af4_home__friend-picture-MaryJane.png"
                loading="lazy"
                alt=""
                className="invite__friend-picture"
              />
            </div>
            <div className="invite__friend-info">
              <div className="invite__friend-name">MaryJane</div>
              <div className="invite__friend-status">Online</div>
            </div>
          </div>
        </div>
        <div className="invite__line"></div>
        <div className="invite__offline">
          <div className="invite__offline-h-w">
            <img
              src="https://uploads-ssl.webflow.com/6013fff62154adaa4600f932/601ab15904900760dbfa7f70_offline.svg"
              loading="lazy"
              alt=""
              className="invite__offline-icon"
            />
            <div className="invite__offline-h">offline</div>
          </div>
          <div
            className="invite__offline-friend"
          >
            <div className="invite__friend-picture-w">
              <div className="invite__offline-bar"></div>
              <img
                src="https://uploads-ssl.webflow.com/6013fff62154adaa4600f932/601ab1583424fd3ddf23a848_home__friend-picture-420.png"
                loading="lazy"
                alt=""
                className="invite__friend-picture"
              />
            </div>
            <div className="invite__friend-info">
              <div className="invite__friend-name">420</div>
              <div className="invite__friend-status">offline</div>
            </div>
          </div>
        </div>
      </div>
      <script
        src="https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=6013fff62154adaa4600f932"
        type="text/javascript"
        integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0="
        crossOrigin="anonymous"
      ></script>
      <script
        src="https://uploads-ssl.webflow.com/6013fff62154adaa4600f932/js/webflow.eb8cdd807.js"
        type="text/javascript"
      ></script>
    </>
  );
};

export default Invite;
