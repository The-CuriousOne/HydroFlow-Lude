import React from "react";
import "./PlantInfoCard.css";

const PlantInfoCard = ({ plantName, pH, tds, temperature}) => {
    const getBarColor = (value, min, max) => {
        return value >= min && value <= max ? "#4CAF50" : "#E63946";
    };

  return (
    <div className="plantInfoCard">
      <div className="plantPic">
        <div className="plantName">{plantName}</div>
      </div>
      <div className="nutrientLevels">
        <div className="nutrient">
            <div className="nutrientLevel">pH Level : <span className="nutrientValue">{pH}</span></div>
            <div className="progressBar">
                <div
                    className="progressFill"
                    style={{
                      width: `${(pH / 14) * 100}%`,
                      backgroundColor: getBarColor(pH, 5.5, 6.5),
                    }}
                ></div>
            </div>
        </div>
        <div className="nutrient">
            <div className="nutrientLevel">TDS (ppm) Levels : <span className="nutrientValue">{tds} ppm</span></div>
            <div className="progressBar">
                <div
                    className="progressFill"
                    style={{
                      width: `${(tds / 2000) * 100}%`,
                      backgroundColor: getBarColor(tds, 500, 1200),
                    }}
                ></div>
            </div>
        </div>
        <div className="nutrient">
            <div className="nutrientLevel">Temperature (°C) Levels : <span className="nutrientValue">{temperature}°C</span></div>
            <div className="progressBar">
                <div
                    className="progressFill"
                    style={{
                      width: `${(temperature / 50) * 100}%`,
                      backgroundColor: getBarColor(temperature, 18, 24),
                    }}
                ></div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default PlantInfoCard;
