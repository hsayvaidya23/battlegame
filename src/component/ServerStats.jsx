import React, { useEffect, useState } from "react";
import "../style/ServerSettings.css";
import axios  from 'axios';

const ServerStats = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // const backendUrl = process.env.PORT;
        const response = await axios.get(`https://backendforbattlefield-production.up.railway.app/api/fetchData`); 
        setData(response.data); 
        console.log(response.data)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData(); 
  }, []); //

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="server__current-stats-w">
        <div className="server__current-stats">
          <div className="server__current-stats-h">players</div>
          <div className="server__current-stats-i-w">
            <div className="server__current-stats-i">60</div>
            <div className="server__current-stats-iline">/</div>
            <div className="server__current-stats-i">64</div>
          </div>
        </div>
        <div className="server__current-stats">
          <div className="server__current-stats-h">ping</div>
          <div className="server__current-stats-i-w">
            <div className="server__current-stats-i">104</div>
            <div className="server__current-stats-ping">ms</div>
          </div>
        </div>
        <div className="server__current-stats">
          <div className="server__current-stats-h">tickrate</div>
          <div className="server__current-stats-i-w">
            <div className="server__current-stats-i">60</div>
            <div className="server__current-stats-hz">Hz</div>
          </div>
        </div>
      </div>
      <div className="server__settings-w">
        <div className="server__settings">
          <div className="server__settings-h">settings</div>
          <div className="server__setting">
            <div className="server__setting-text">region</div>
            <div className="server__setting-text">{data.settings.region}</div>
          </div>
          <div className="server__setting">
            <div className="server__setting-text">punkbuster</div>
            <div className="server__setting-text">{data.settings.punkbuster}</div>
          </div>
          <div className="server__setting">
            <div className="server__setting-text">fairfight</div>
            <div className="server__setting-text">{data.settings.fairfight}</div>
          </div>
          <div className="server__setting">
            <div className="server__setting-text">password</div>
            <div className="server__setting-text">{data.settings.password}</div>
          </div>
          <div className="server__setting">
            <div className="server__setting-text">preset</div>
            <div className="server__setting-text">{data.settings.preset}</div>
          </div>
        </div>
        <div className="server__settings">
          <div className="server__settings-h">advanced</div>
          <div className="server__setting">
            <div className="server__setting-text">minimap</div>
            <div className="server__setting-text">{data.advanced.minimap}</div>
          </div>
          <div className="server__setting">
            <div className="server__setting-text">only squad leader spawn</div>
            <div className="server__setting-text">{data.advanced.onlySquadLeaderSpawn}</div>
          </div>
          <div className="server__setting">
            <div className="server__setting-text">vehicles</div>
            <div className="server__setting-text">{data.advanced.vehicles}</div>
          </div>
          <div className="server__setting">
            <div className="server__setting-text">team balance</div>
            <div className="server__setting-text">{data.advanced.teamBalance}</div>
          </div>
          <div className="server__setting">
            <div className="server__setting-text">minimap spotting</div>
            <div className="server__setting-text">{data.advanced.minimapSpotting}</div>
          </div>
          <div className="server__setting">
            <div className="server__setting-text">hud</div>
            <div className="server__setting-text">{data.advanced.hud}</div>
          </div>
          <div className="server__setting">
            <div className="server__setting-text">3p vehicle cam</div>
            <div className="server__setting-text">{data.advanced.thirdPersonVehicleCamera}</div>
          </div>
          <div className="server__setting">
            <div className="server__setting-text">regenerative health</div>
            <div className="server__setting-text">{data.advanced.regenerativeHealth}</div>
          </div>
          <div className="server__setting">
            <div className="server__setting-text">kill cam</div>
            <div className="server__setting-text">{data.advanced.killCam}</div>
          </div>
          <div className="server__setting">
            <div className="server__setting-text">friendly fire</div>
            <div className="server__setting-text">{data.advanced.friendlyFire}</div>
          </div>
          <div className="server__setting">
            <div className="server__setting-text">3d spotting</div>
            <div className="server__setting-text">{data.advanced.threeDSpotting}</div>
          </div>
          <div className="server__setting">
            <div className="server__setting-text">enemy name tags</div>
            <div className="server__setting-text">{data.advanced.enemyNameTags}</div>
          </div>
        </div>
        <div className="server__settings">
          <div className="server__settings-h">rules</div>
          <div className="server__setting">
            <div className="server__setting-text">tickets</div>
            <div className="server__setting-text server__setting-text--yellow">
              {data.rules.tickets}
            </div>
          </div>
          <div className="server__setting">
            <div className="server__setting-text">vehicle spawn delay</div>
            <div className="server__setting-text server__setting-text--yellow">
              {data.rules.vehicleSpawnDelay}
            </div>
          </div>
          <div className="server__setting">
            <div className="server__setting-text">bullet damage</div>
            <div className="server__setting-text">{data.rules.bulletDamage}</div>
          </div>
          <div className="server__setting">
            <div className="server__setting-text">kick after team kills</div>
            <div className="server__setting-text">{data.rules.kickAfterTeamKills}</div>
          </div>
          <div className="server__setting">
            <div className="server__setting-text">player health</div>
            <div className="server__setting-text">{data.rules.playerHealth}</div>
          </div>
          <div className="server__setting">
            <div className="server__setting-text">player respawn time</div>
            <div className="server__setting-text">{data.rules.playerRespawnTime}</div>
          </div>
          <div className="server__setting">
            <div className="server__setting-text">kick after idle</div>
            <div className="server__setting-text">{data.rules.kickAfterIdle}</div>
          </div>
          <div className="server__setting">
            <div className="server__setting-text">ban after kicks</div>
            <div className="server__setting-text">{data.rules.banAfterKicks}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServerStats;
