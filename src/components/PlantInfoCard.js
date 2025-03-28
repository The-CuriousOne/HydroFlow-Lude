"use client";

import React from "react";

const PlantInfoCard = ({ plantName, pH, tds, temperature, water, humidity }) => {
  const getBarColor = (value, min, max) => {
    return value >= min && value <= max ? "#4CAF50" : "#E63946";
  };

  return (
    <div className="w-[25rem] h-[35rem] rounded-[2rem] transition-all duration-500 ease-in-out shadow-[12px_12px_0px_rgba(255,255,255,0.1)] max-[500px]:w-[21rem]">
      <div className="w-full h-[70%] bg-[url('/images/plantInfoCard/defaultPlantPic.jpg')] bg-no-repeat bg-bottom bg-cover rounded-t-[inherit] text-white flex flex-col-reverse">
        <div className="p-4 text-[20px] font-normal bg-[rgba(0,0,0,0.2)]">
          {plantName}
        </div>
      </div>
      <div className="w-full h-[30%] py-[1rem] px-[2rem] bg-[#FBF8EF] text-black rounded-bl-[inherit] rounded-br-[inherit] box-border">
        <div className="py-1">
          <div className="text-[18px] font-normal">
            pH Level : <span className="font-light">{pH}</span>
          </div>
          <div className="w-full h-[0.4rem] bg-[#ddd] border-[0.5px] border-solid border-[rgba(0,0,0,0.2)] rounded-[5px] overflow-hidden mt-[4px]">
            <div
              className="h-full transition-[width] duration-500 ease-in-out"
              style={{
                width: `${(pH / 14) * 100}%`,
                backgroundColor: getBarColor(pH, 5.5, 6.5),
              }}
            ></div>
          </div>
        </div>
        <div className="py-1">
          <div className="text-[18px] font-normal">
            TDS (ppm) Levels : <span className="font-light">{tds} ppm</span>
          </div>
          <div className="w-full h-[0.4rem] bg-[#ddd] border-[0.5px] border-solid border-[rgba(0,0,0,0.2)] rounded-[5px] overflow-hidden mt-[4px]">
            <div
              className="h-full transition-[width] duration-500 ease-in-out"
              style={{
                width: `${(tds / 2000) * 100}%`,
                backgroundColor: getBarColor(tds, 500, 1200),
              }}
            ></div>
          </div>
        </div>
        <div className="py-1">
          <div className="text-[18px] font-normal">
            Temperature (°C) Levels :{" "}
            <span className="font-light">{temperature}°C</span>
          </div>
          <div className="w-full h-[0.4rem] bg-[#ddd] border-[0.5px] border-solid border-[rgba(0,0,0,0.2)] rounded-[5px] overflow-hidden mt-[4px]">
            <div
              className="h-full transition-[width] duration-500 ease-in-out"
              style={{
                width: `${(temperature / 50) * 100}%`,
                backgroundColor: getBarColor(temperature, 18, 24),
              }}
            ></div>
          </div>
        </div>
        <div className="py-1">
          <div className="text-[18px] font-normal">
            Water (%) Levels :{" "}
            <span className="font-light">{water}%</span>
          </div>
          <div className="w-full h-[0.4rem] bg-[#ddd] border-[0.5px] border-solid border-[rgba(0,0,0,0.2)] rounded-[5px] overflow-hidden mt-[4px]">
            <div
              className="h-full transition-[width] duration-500 ease-in-out"
              style={{
                width: `${(water / 100) * 100}%`,
                backgroundColor: getBarColor(water, 50, 80),
              }}
            ></div>
          </div>
        </div>
        <div className="py-1">
          <div className="text-[18px] font-normal">
            Humidity (%) Levels :{" "}
            <span className="font-light">{humidity}%</span>
          </div>
          <div className="w-full h-[0.4rem] bg-[#ddd] border-[0.5px] border-solid border-[rgba(0,0,0,0.2)] rounded-[5px] overflow-hidden mt-[4px]">
            <div
              className="h-full transition-[width] duration-500 ease-in-out"
              style={{
                width: `${(humidity / 100) * 100}%`,
                backgroundColor: getBarColor(humidity, 50, 60),
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlantInfoCard;
