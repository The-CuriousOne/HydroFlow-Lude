import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import PlantInfoCard from "../components/PlantInfoCard";

const Home = () => {
  return (
    <div className="Home">
      <div className="welcomeSection">
        <div className="welcomeText">
          <h3>Welcome To</h3>
          <h2>HydroFlow Lude</h2>
          <p>
            — where innovation meets sustainability! Harnessing the power of IoT
            and advanced hydroponic technology, we revolutionize modern farming
            <span>
              {" "}
              by optimizing water and nutrient efficiency for a smarter, greener
              future
            </span>
            .
          </p>
        </div>
      </div>

      <div className="plantInfoSection">
        <div className="plantInfoText">
          <h2>Vital Signs: Unlocking Peak Plant Health</h2>
          <p>
            Just like humans thrive with the right balance of nutrients, plants
            in a hydroponic system flourish when their environment is fine-tuned
            to perfection. By harnessing real-time IoT monitoring, we ensure
            that every drop of water and every nutrient particle is delivered
            with precision. Here are the <span>key health indicators</span> that
            keep our plants happy, strong, and thriving!
          </p>
        </div>
        <div className="plantInfoCards">
          <Link to="/track">
            <PlantInfoCard
              plantName="My Plant"
              pH={5.6}
              tds={1100}
              temperature={22}
            />
          </Link>
          <Link to="/track">
            <PlantInfoCard
              plantName="My Plant"
              pH={5.6}
              tds={1100}
              temperature={22}
            />
          </Link>
        </div>
      </div>

      <div className="aboutSection">
        <div className="aboutSubSection" id="aS1">
          <div className="aboutSubSectionText">
            <h2>Farming Reimagined: The Future of Hydroponics</h2>
            <p>
              Imagine a world where plants grow without soil, thriving in a
              nutrient-rich water ecosystem. Our{" "}
              <span>Smart Hydroponics System</span> is designed to make farming
              more sustainable, reducing water waste while maximizing
              growth—perfect for urban spaces and eco-conscious growers.
            </p>
            <Link to="/about" replace>
              <span>Continue reading . . .</span>
            </Link>
          </div>
          <div className="aboutSubSectionPic" id="aSSP1"></div>
        </div>
        <div className="aboutSubSection" id="aS2">
          <div className="aboutSubSectionText">
            <h2>Intelligent Farming with IoT</h2>
            <p>
              Gone are the days of guesswork! Our system is equipped with{" "}
              <span>real-time monitoring sensors</span> that track pH,
              temperature, humidity, and nutrients with precision. The data is
              displayed on an LCD screen and accessible remotely, ensuring your
              plants always get the care they need—even when you're away!
            </p>
            <Link to="/about">
              <span>Continue reading . . .</span>
            </Link>
          </div>
          <div className="aboutSubSectionPic" id="aSSP2"></div>
        </div>
        <div className="aboutSubSection" id="aS3">
          <div className="aboutSubSectionText">
            <h2>Sustainable & Automated Growth</h2>
            <p>
              Why waste resources when you can optimize them? Our{" "}
              <span>closed-loop hydroponic design</span> recycles water and
              nutrients efficiently, reducing waste and boosting yields. With
              automated controls, your crops flourish with minimal
              effort—ushering in a new era of smart, sustainable farming.
            </p>
            <Link to="/about">
              <span>Continue reading . . .</span>
            </Link>
          </div>
          <div className="aboutSubSectionPic" id="aSSP3"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
