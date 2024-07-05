import React from 'react'

const Headings = () => {
  return (
    <div className="browser__breadcrumb">
    <div className="browser__breadcrumb-previous-1">
      <a
        href="/server-browser"
        className="browser__breadcrumb-back-w w-inline-block"
      >
        <img
          src="https://uploads-ssl.webflow.com/6013fff62154adaa4600f932/601ab21dde67c22de2b6d61b_back.svg"
          loading="lazy"
          alt=""
          className="browser__breadcrumb-back"
        />
      </a>
      <a
        href="http://battlefield-4-webflow-rebuild.webflow.io/game?tab=tab-multiplayer"
        className="browser__breadcrumb-previous-1"
      >
        multiplayer
      </a>
      <div className="browser__breadcrumb-bar">/</div>
      <a
        href="/server-browser"
        className="browser__breadcrumb-previous-2"
      >
        server Browser
      </a>
      <div className="browser__breadcrumb-bar">/</div>
    </div>
    <div className="browser__breadcrumb-h">server info</div>
  </div>
  )
}

export default Headings