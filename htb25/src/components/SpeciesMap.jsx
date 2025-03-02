import React, { useEffect, useState } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Assuming speciesData is passed in as a prop
const SpeciesMap = ({ speciesData }) => {
  const [currentYear, setCurrentYear] = useState(1770.0);
  const [map, setMap] = useState(null);
  const [markers, setMarkers] = useState({});

  useEffect(() => {
    // Initialize the map
    const mapInstance = L.map("map").setView([-25, 135], 4);
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(mapInstance);

    setMap(mapInstance);

    return () => {
      if (mapInstance) {
        mapInstance.remove();
      }
    };
  }, []);

  // Function to update the map for a specific year
  const updateMap = (year) => {
    if (!map) return;

    // Remove existing markers
    Object.values(markers).forEach((groupMarkers) => {
      groupMarkers.forEach((marker) => map.removeLayer(marker));
    });

    const newMarkers = {};

    // Add new markers for the current year
    for (const group in speciesData) {
      newMarkers[group] = [];
      for (const record of speciesData[group]) {
        if (record.year === year) {
          const marker = L.circleMarker(
            [record.decimalLatitude, record.decimalLongitude],
            {
              radius: 5,
              fillColor:
                group === "snakes"
                  ? "red"
                  : group === "rats_mice"
                  ? "green"
                  : "blue", // Dynamically assign colors
              color: "#000",
              weight: 1,
              opacity: 1,
              fillOpacity: 0.6,
            }
          ).bindPopup(
            `Species: ${record.scientificName}<br>Year: ${record.year}`
          );

          marker.addTo(map);
          newMarkers[group].push(marker);
        }
      }
    }

    setMarkers(newMarkers);
  };

  useEffect(() => {
    // Update map whenever the current year changes
    updateMap(currentYear);
  }, [currentYear, speciesData]);

  return (
    <div>
      <div className="slider-container" style={styles.sliderContainer}>
        <label htmlFor="slider">
          Year: <span id="year">{currentYear}</span>
        </label>
        <input
          type="range"
          id="slider"
          min="1770.0"
          max="2025.0"
          value={currentYear}
          step="1"
          onChange={(e) => setCurrentYear(parseFloat(e.target.value))}
        />
      </div>
      <div id="map" style={styles.map}></div>
    </div>
  );
};

const styles = {
  map: {
    width: "100%",
    height: "100vh",
  },
  sliderContainer: {
    position: "absolute",
    top: "10px",
    left: "50px",
    zIndex: 1000,
    background: "white",
    padding: "10px",
    borderRadius: "5px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
  },
};

export default SpeciesMap;
