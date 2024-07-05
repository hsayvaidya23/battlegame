import React from 'react'

const ServerInfo = () => {
  return (
    <div className="server__info-w">
    <div className="server__name">! RC3-BASEMAPS</div>
    <div className="server__info">
      <img
        alt=""
        loading="lazy"
        src="https://uploads-ssl.webflow.com/6022d2c0d37628c87d9e16ab/6022d74ce15ae958f20e10a9_america-flag.svg"
        className="server__flag"
      />
      <div className="server__mode">conquest large</div>
      <div className="server__linfo-line">-</div>
      <div className="server__game">Lancang Dam</div>
      <div className="server__linfo-line">-</div>
      <div className="server__preset">Custom</div>
      <div className="server__linfo-line">-</div>
      <div className="server__no-hz">60</div>
      <div className="server__hz">hz</div>
    </div>
    <div className="server__desc">
      Server protected by The_K-50 AntiCheat. Vip !Rules, Questions,
      Request, Appeal, Visit us: www.epg.gg | Discord
      https://discord.gg/3r5NK4d
    </div>
  </div>
  )
}

export default ServerInfo