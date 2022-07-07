import { useState, useEffect } from "react";
import Loading from "./components/Loading";
import Schedule from "./components/Schedule";
import Error from "./components/Error";
import Logo from "./assets/logo.png";
import AssetSpray from "./assets/spray.png";
import SubwayIcon from "./assets/subway_icon.png";

function App() {
  const axios = require("axios").default;

  // -------------------- STATE MANAGEMENT -------------------- //

  const [isLoading, setLoading] = useState(true);
  const [selectedLine, setSelectedLine] = useState("1");
  const [allStation, setAllStation] = useState([]);
  const [selectedStation, setSelectedStation] = useState(
    "chateau+de+vincennes"
  );
  const [schedules, setSchedules] = useState();
  const [apiError, setApiError] = useState();

  // -------------------- ALL SUBWAY LINES -------------------- //

  const lines = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
  ];

  // -------------------- HANDLE EVENT MANAGEMENT -------------------- //

  const handleChangeLine = (event) => {
    setSelectedLine(event.target.value);
  };

  const handleChangeStation = (event) => {
    setSelectedStation(event.target.value);
  };

  // -------------------- GET ALL STATIONS WITH SPECIFIC LINE -------------------- //

  useEffect(() => {
    axios
      .get(
        `https://api-ratp.pierre-grimaud.fr/v4/stations/metros/${selectedLine}`
      )
      .then((response) => {
        setAllStation(response.data.result.stations);
        setLoading(false);
      });
  }, [selectedLine]);

  // -------------------- GET SCHEDULES WITH SPECIFIC LINE AND STATION -------------------- //

  useEffect(() => {
    axios
      .get(
        `https://api-ratp.pierre-grimaud.fr/v4/schedules/metros/${selectedLine}/${selectedStation}/A%2BR`
      )
      .then((response) => {
        setSchedules(response.data.result.schedules);
        setLoading(false);
      })
      .catch((error) => {
        setApiError(error);
      });
  }, [selectedLine, selectedStation]);

  return (
    <div className="App">
      {/* -------------------- HEADER -------------------- */}
      <div>
        <div className="header">
          <p>|| Votre métro, en direct comme si vous y étiez 🚈</p>
        </div>
        <div className="main">
          <img
            src={AssetSpray}
            className="main-assetSpray"
            alt="Étincelle verte."
          />
          <img src={Logo} className="logo" alt="Icône représentant un métro." />
          <div className="request">
            <div className="request-select">
              <div className="request-select-header">
                <h2>Lignes</h2>
              </div>

              {/* -------------------- LINE SELECT -------------------- */}

              <select value={selectedLine} onChange={handleChangeLine}>
                {lines.map((line) => (
                  <option value={line} key={line}>
                    {line}
                  </option>
                ))}
              </select>
            </div>

            {/* -------------------- STATION SELECT -------------------- */}

            {allStation ? (
              <div className="request-select">
                <div className="request-select-header">
                  <h2>Stations</h2>
                </div>
                <select value={selectedStation} onChange={handleChangeStation}>
                  {allStation.map((station) => (
                    <option value={station.name} key={station.name}>
                      {station.name}
                    </option>
                  ))}
                </select>
              </div>
            ) : (
              <></>
            )}
          </div>
          <div className="schedule">
            {/* -------------------- LOADING COMPONENT DEPENDENCY FROM GETTER -------------------- */}

            {isLoading && <Loading />}

            {/* -------------------- SCHEDULE DISPLAY -------------------- */}

            {schedules && selectedLine && selectedStation ? (
              <Schedule schedule={schedules} />
            ) : (
              <h2>Sélectionner une line et une station 👀</h2>
            )}
          </div>
        </div>
      </div>

      {/* -------------------- ERROR DISPLAY -------------------- */}

      {apiError && <Error text={apiError.message} />}

      {/* -------------------- SUBWAY ICON -------------------- */}

      <img
        src={SubwayIcon}
        className="subway-icon"
        alt="Icône d'un arrêt de métro."
      />
    </div>
  );
}

export default App;
