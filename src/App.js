// import { useState } from 'react';
import "./App.css";
import Headings from "./component/Headings";
import Invite from "./component/Invite";
import ServerButtons from "./component/ServerButtons";
import ServerInfo from "./component/ServerInfo";
import ServerNext from "./component/ServerNext";
import ServerStats from "./component/ServerStats";
import SideMenuBar from "./component/SideMenuBar";

function App() {
  return (
    <div className="App">
      <div className="server__body">
        <div className="server">
          <SideMenuBar />
          <Headings />
          <div data-w-id="Div Block 12" className="server__next-overlay"></div>
          <div className="server__content">
            <ServerInfo />
            <ServerButtons />
            <ServerStats />
            <ServerNext />
          </div>
        </div>
  <Invite />
      </div>
    </div>
  );
}

export default App;
