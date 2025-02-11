"use client";

import Image from "next/image";
import Link from "next/link";
import PlantInfoCard from "@/components/PlantInfoCard";

export default function Home() {
  return (
    <div className="w-full max-w-full">
      {/* Welcome Section */}
      <div className="w-full h-[50rem] box-border bg-[url('/images/home/welcome.jpg')] bg-no-repeat bg-cover bg-top text-white flex items-start justify-center transition-all duration-500 ease-in-out">
        <div
          className="w-[50rem] box-border py-[5rem] px-[2.5rem] transition-all duration-500 ease-in-out flex flex-col 
          max-[900px]:w-[45rem] max-[800px]:w-[40rem] max-[650px]:w-[35rem] max-[650px]:py-[4rem] max-[650px]:px-[2rem]"
        >
          <h3 className="font-light text-[28px] transition-all duration-500 ease-in-out max-[650px]:text-[26px]">
            Welcome To
          </h3>
          <h2 className="font-normal text-[54px] self-center transition-all duration-500 ease-in-out mb-[1rem] max-[650px]:text-[45px]">
            HydroFlow Lude
          </h2>
          <p className="font-light text-[18px]">
            — where innovation meets sustainability! Harnessing the power of IoT
            and advanced hydroponic technology, we revolutionize modern farming
            <span className="transition-all duration-500 ease-in-out max-[650px]:hidden">
              {" "}
              by optimizing water and nutrient efficiency for a smarter, greener
              future
            </span>
            .
          </p>
        </div>
      </div>

      {/* Plant Info Section */}
      <div className="w-full min-h-[60rem] h-auto p-[2.55rem] text-white box-border bg-[url('/images/home/plantInfo.jpg')] bg-no-repeat bg-center bg-cover flex flex-col justify-center items-center">
        <div
          className="w-[70rem] flex flex-col items-center justify-center py-[5rem] px-[2.5rem] box-border transition-all duration-500 ease-in-out
          max-[1200px]:w-[60rem] max-[1100px]:w-[50rem] max-[950px]:w-[40rem] max-[800px]:w-[30rem] max-[650px]:w-[25rem]"
        >
          <h2 className="font-normal text-[42px]">
            Vital Signs: Unlocking Peak Plant Health
          </h2>
          <p className="my-[2rem] font-light text-[18px]">
            Just like humans thrive with the right balance of nutrients, plants
            in a hydroponic system flourish when their environment is fine-tuned
            to perfection. By harnessing real-time IoT monitoring, we ensure
            that every drop of water and every nutrient particle is delivered
            with precision. Here are the{" "}
            <span className="font-normal">key health indicators</span> that keep
            our plants happy, strong, and thriving!
          </p>
        </div>
        <div
          className="p-[1rem] w-[70rem] mb-[5rem] h-auto box-border flex justify-evenly transition-all duration-500 ease-in-out
          max-[1200px]:w-[60rem] max-[1100px]:w-[50rem] max-[950px]:w-[40rem] max-[950px]:flex-col max-[950px]:items-center max-[950px]:gap-[3.5rem] max-[800px]:w-[30rem] max-[650px]:w-[25rem]"
        >
          <Link href="/track" className="no-underline">
            <PlantInfoCard
              plantName="My Plant"
              pH={5.6}
              tds={1100}
              temperature={22}
            />
          </Link>
          <Link href="/track" className="no-underline">
            <PlantInfoCard
              plantName="My Plant"
              pH={5.6}
              tds={1100}
              temperature={22}
            />
          </Link>
        </div>
      </div>

       {/* About Section */}
       <div className="w-full text-black">
        {/* About SubSection #aS1 */}
        <div
          id="aS1"
          className="w-full h-[50rem] box-border flex flex-row transition-all duration-500 ease-in-out"
        >
          <div className="aboutSubSectionText bg-[#FBF8EF] h-full w-[40rem] box-border p-[4rem] flex flex-col justify-center transition-all duration-500 ease-in-out">
            <h2 className="text-[42px] font-normal">
              Farming Reimagined: The Future of Hydroponics
            </h2>
            <p
              className="text-[20px] font-light p-[2rem] text-justify transition-all duration-500 ease-in-out"
              style={{ textJustify: "inter-word", hyphens: "auto" }}
            >
              Imagine a world where plants grow without soil, thriving in a
              nutrient-rich water ecosystem. Our{" "}
              <span className="font-normal">
                Smart Hydroponics System
              </span>{" "}
              is designed to make farming more sustainable, reducing water waste
              while maximizing growth—perfect for urban spaces and eco-conscious
              growers.
            </p>
            <Link
              href="/about"
              replace
              className="no-underline text-[#15B392] font-normal"
            >
              <span>Continue reading . . .</span>
            </Link>
          </div>
          <div
            id="aSSP1"
            className="aboutSubSectionPic w-[60%] h-full transition-all duration-500 ease-in-out bg-[url('/images/home/Hydroponics.jpg')] bg-no-repeat bg-center bg-cover"
          ></div>
        </div>
        {/* About SubSection #aS2 */}
        <div
          id="aS2"
          className="w-full h-[50rem] box-border flex flex-row-reverse transition-all duration-500 ease-in-out"
        >
          <div className="aboutSubSectionText bg-[#FBF8EF] h-full w-[40rem] box-border p-[4rem] flex flex-col justify-center items-end transition-all duration-500 ease-in-out">
            <h2 className="text-[42px] font-normal text-end">
              Intelligent Farming with IoT
            </h2>
            <p
              className="text-[20px] font-light p-[2rem] text-justify transition-all duration-500 ease-in-out"
              style={{ textJustify: "inter-word", hyphens: "auto" }}
            >
              Gone are the days of guesswork! Our system is equipped with{" "}
              <span className="font-normal">
                real-time monitoring sensors
              </span>{" "}
              that track pH, temperature, humidity, and nutrients with precision.
              The data is displayed on an LCD screen and accessible remotely,
              ensuring your plants always get the care they need—even when you're
              away!
            </p>
            <Link
              href="/about"
              className="no-underline text-[#15B392] font-normal"
            >
              <span>Continue reading . . .</span>
            </Link>
          </div>
          <div
            id="aSSP2"
            className="aboutSubSectionPic w-[60%] h-full transition-all duration-500 ease-in-out bg-[url('/images/home/Farming_with_IoT.jpg')] bg-no-repeat bg-center bg-cover"
          ></div>
        </div>
        {/* About SubSection #aS3 */}
        <div
          id="aS3"
          className="w-full h-[50rem] box-border flex flex-row transition-all duration-500 ease-in-out"
        >
          <div className="aboutSubSectionText bg-[#FBF8EF] h-full w-[40rem] box-border p-[4rem] flex flex-col justify-center transition-all duration-500 ease-in-out">
            <h2 className="text-[42px] font-normal">
              Sustainable & Automated Growth
            </h2>
            <p
              className="text-[20px] font-light p-[2rem] text-justify transition-all duration-500 ease-in-out"
              style={{ textJustify: "inter-word", hyphens: "auto" }}
            >
              Why waste resources when you can optimize them? Our{" "}
              <span className="font-normal">
                closed-loop hydroponic design
              </span>{" "}
              recycles water and nutrients efficiently, reducing waste and
              boosting yields. With automated controls, your crops flourish
              with minimal effort—ushering in a new era of smart, sustainable
              farming.
            </p>
            <Link
              href="/about"
              className="no-underline text-[#15B392] font-normal"
            >
              <span>Continue reading . . .</span>
            </Link>
          </div>
          <div
            id="aSSP3"
            className="aboutSubSectionPic w-[60%] h-full transition-all duration-500 ease-in-out bg-[url('/images/home/Sustainable_&_Automated_Growth.jpg')] bg-no-repeat bg-center bg-cover"
          ></div>
        </div>

        {/* Additional Media Query Adjustments */}
        <style jsx>{`
          @media (max-width: 1000px) {
            #aS1 {
              background: url('/images/home/Hydroponics.jpg');
              background-repeat: no-repeat;
              background-position: center;
              background-size: cover;
              transition: all 0.5s ease-in-out;
            }
            #aS2 {
              background: url('/images/home/Farming_with_IoT.jpg');
              background-repeat: no-repeat;
              background-position: center;
              background-size: cover;
              transition: all 0.5s ease-in-out;
            }
            #aS3 {
              background: url('/images/home/Sustainable_&_Automated_Growth.jpg');
              background-repeat: no-repeat;
              background-position: center;
              background-size: cover;
              transition: all 0.5s ease-in-out;
            }
            .aboutSubSectionText {
              width: 35rem !important;
              height: fit-content !important;
              margin: 5rem !important;
              background: rgba(255, 255, 255, 0.775) !important;
              transition: all 0.5s ease-in-out !important;
            }
            .aboutSubSectionPic {
              display: none !important;
              transition: all 0.5s ease-in-out !important;
            }
          }
          @media (max-width: 650px) {
            #aS1{
              height: 55rem;
            }
            #aS2{
              height: 55rem;
            }
            #aS3{
              height: 55rem;
            }
            .aboutSubSectionText {
              margin: 4rem 3rem !important;
              transition: all 0.5s ease-in-out !important;
            }
          }
          @media (max-width: 400px) {
            .aboutSubSectionText {
              margin: 3rem 2rem !important;
              padding: 3rem 2rem !important;
              transition: all 0.5s ease-in-out !important;
            }
            .aboutSubSectionText p {
              padding: 2rem 0rem !important;
              transition: all 0.5s ease-in-out !important;
            }
          }
        `}</style>
      </div>
    </div>
  );
}
