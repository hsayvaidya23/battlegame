import React from 'react'

const ServerButtons = () => {
  return (
    <div data-w-id="Div Block 3" className="server__buttons-w">
    <div data-w-id="Div Block 4" className="server__button">
      <div className="server__button-text">join</div>
    </div>
    <div
      className="server__button"
    >
      <div className="server__button-text">spectate</div>
    </div>
    <div
      className="server__button"
    >
      <div className="server__button-text">join as commander</div>
    </div>
    <div
      class="server__button server__button--favorite"
    >
      <img
        src="https://uploads-ssl.webflow.com/6013fff62154adaa4600f932/601ab1b8ba5feb6d6e9bb7f6_favorites%20-%20black.svg"
        loading="lazy"
        alt=""
        class="server__favorite server__favorite--black"
      />
      <img
        src="https://uploads-ssl.webflow.com/6013fff62154adaa4600f932/601ab1b8abc05e847f1ac43f_favorites%20-%20white.svg"
        loading="lazy"
        alt=""
        class="server__favorite server__favorite--white"
      />
      <div class="server__button-text">13672</div>
    </div>
  </div>
  )
}

export default ServerButtons