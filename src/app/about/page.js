"use client";

export default function About() {
  return (
    <div className="w-full max-w-[100vw] p-20 bg-[url('/images/about/aboutBackground.jpg')] bg-[position:bottom_right] bg-cover text-black">
      <div className="bg-white/75 py-28 px-20">
        {/* Header */}
        <div className="flex flex-col border-b-2 border-b-black/50 border-t-2 border-t-black/50">
          <h2 className="text-center font-medium text-[48px] py-10 px-12 text-[#15B392]">
            About IoT-Powered Hydroponics: Farming the Smart Way
          </h2>
        </div>

        {/* Main Body */}
        <div className="p-10 border-b-2 border-b-black/50">
          {/* Introduction Section */}
          <div className="p-10 border-b-2 border-b-black/50">
            <h3 className="text-center mb-10 font-medium text-[32px] text-[#15B392]">
              Introduction
            </h3>
            <p className="mb-4 font-light text-[18px]">
              Agriculture is at the heart of human civilization, but traditional
              farming methods are often inefficient, requiring{" "}
              <span className="font-normal">
                large amounts of water, space, and labor
              </span>
              . With urbanization increasing and arable land decreasing, the
              need for{" "}
              <span className="font-normal">
                innovative, space-efficient, and resource-conscious farming
                solutions
              </span>{" "}
              has never been greater.
            </p>
            <div className="mb-8">
              <h4 className="mb-4 text-2xl font-normal text-[#15B392]">
                What is Hydroponics?
              </h4>
              <p className="mb-4 font-light text-[18px]">
                Hydroponics is a{" "}
                <span className="font-normal">soilless farming method</span>{" "}
                where plants grow in a nutrient-rich water solution instead of
                soil. This method:
              </p>
              <ul className="mx-8 mb-4 text-[18px] font-light list-none">
                <li className="relative pl-6">
                  <span className="absolute left-0 top-1/2 -translate-y-1/2 w-[15px] h-[15px] bg-[url('/images/about/bullet.png')] bg-contain bg-no-repeat"></span>
                  <span className="ml-2">
                    <span className="font-normal">
                      Reduces water consumption
                    </span>{" "}
                    by up to <span className="font-normal">90%</span> compared
                    to soil-based farming.
                  </span>
                </li>
                <li className="relative pl-6">
                  <span className="absolute left-0 top-1/2 -translate-y-1/2 w-[15px] h-[15px] bg-[url('/images/about/bullet.png')] bg-contain bg-no-repeat"></span>
                  <span className="ml-2">
                    <span className="font-normal">
                      Allows farming in urban areas
                    </span>
                    , rooftops, or indoor environments.
                  </span>
                </li>
                <li className="relative pl-6">
                  <span className="absolute left-0 top-1/2 -translate-y-1/2 w-[15px] h-[15px] bg-[url('/images/about/bullet.png')] bg-contain bg-no-repeat"></span>
                  <span className="ml-2">
                    <span className="font-normal">
                      Promotes faster plant growth
                    </span>{" "}
                    by providing{" "}
                    <span className="font-normal">
                      precisely controlled nutrients
                    </span>
                    .
                  </span>
                </li>
                <li className="relative pl-6">
                  <span className="absolute left-0 top-1/2 -translate-y-1/2 w-[15px] h-[15px] bg-[url('/images/about/bullet.png')] bg-contain bg-no-repeat"></span>
                  <span className="ml-2">
                    <span className="font-normal">
                      Eliminates soil-borne diseases and pests
                    </span>
                    , reducing the need for pesticides.
                  </span>
                </li>
              </ul>
            </div>
            <div className="mb-8">
              <h4 className="mb-4 text-2xl font-normal text-[#15B392]">
                How Does IoT Enhance Hydroponics?
              </h4>
              <p className="mb-4 font-light text-[18px]">
                Traditional hydroponics requires{" "}
                <span className="font-normal">manual monitoring</span> of{" "}
                <span className="font-normal">
                  pH levels, water temperature, and nutrient concentration
                </span>
                . By integrating{" "}
                <span className="font-normal">Internet of Things (IoT)</span>{" "}
                technology, we{" "}
                <span className="font-normal">
                  automate the monitoring and control process
                </span>
                , making farming more{" "}
                <span className="font-normal">
                  efficient, precise, and scalable
                </span>
                .
              </p>
              <ul className="mx-8 mb-4 text-[18px] font-light list-none">
                <li className="relative pl-6">
                  <span className="absolute left-0 top-1/2 -translate-y-1/2 w-[15px] h-[15px] bg-[url('/images/about/bullet.png')] bg-contain bg-no-repeat"></span>
                  <span className="ml-2">
                    <span className="font-normal">
                      Real-time Data Monitoring
                    </span>{" "}
                    – Sensors measure pH, humidity, temperature, and nutrient
                    levels.
                  </span>
                </li>
                <li className="relative pl-6">
                  <span className="absolute left-0 top-1/2 -translate-y-1/2 w-[15px] h-[15px] bg-[url('/images/about/bullet.png')] bg-contain bg-no-repeat"></span>
                  <span className="ml-2">
                    <span className="font-normal">Automated Adjustments</span> –
                    The system automatically adjusts{" "}
                    <span className="font-normal">
                      water flow and nutrient concentration
                    </span>
                    .
                  </span>
                </li>
                <li className="relative pl-6">
                  <span className="absolute left-0 top-1/2 -translate-y-1/2 w-[15px] h-[15px] bg-[url('/images/about/bullet.png')] bg-contain bg-no-repeat"></span>
                  <span className="ml-2">
                    <span className="font-normal">Remote Control & Alerts</span>{" "}
                    – Farmers can monitor and{" "}
                    <span className="font-normal">
                      control their hydroponics system from anywhere
                    </span>{" "}
                    using a{" "}
                    <span className="font-normal">web-based dashboard</span>.
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* How It Works Section */}
          <div className="p-10 border-b-2 border-b-black/50">
            <h3 className="text-center mb-10 font-medium text-[32px] text-[#15B392]">
              How It Works
            </h3>
            <div className="mb-8">
              <h4 className="mb-4 text-2xl font-normal text-[#15B392]">
                1. System Design
              </h4>
              <p className="mb-4 font-light text-[18px]">
                The hydroponic system follows a horizontal layout using PVC
                pipes, where:
              </p>
              <ul className="mx-8 mb-4 text-[18px] font-light list-none">
                <li className="relative pl-6">
                  <span className="absolute left-0 top-1/2 -translate-y-1/2 w-[15px] h-[15px] bg-[url('/images/about/bullet.png')] bg-contain bg-no-repeat"></span>
                  <span className="ml-2">
                    <span className="font-normal">Hydroponic Cups</span> are
                    inserted into the pipes, each holding a plant.
                  </span>
                </li>
                <li className="relative pl-6">
                  <span className="absolute left-0 top-1/2 -translate-y-1/2 w-[15px] h-[15px] bg-[url('/images/about/bullet.png')] bg-contain bg-no-repeat"></span>
                  <span className="ml-2">
                    <span className="font-normal">Water and Nutrients</span>{" "}
                    flow through the pipes, directly reaching the plant roots.
                  </span>
                </li>
                <li className="relative pl-6">
                  <span className="absolute left-0 top-1/2 -translate-y-1/2 w-[15px] h-[15px] bg-[url('/images/about/bullet.png')] bg-contain bg-no-repeat"></span>
                  <span className="ml-2">
                    <span className="font-normal">A Water Pump</span> circulates
                    the solution, ensuring an{" "}
                    <span className="font-normal">
                      oxygenated and nutrient-rich environment.
                    </span>
                  </span>
                </li>
                <li className="relative pl-6">
                  <span className="absolute left-0 top-1/2 -translate-y-1/2 w-[15px] h-[15px] bg-[url('/images/about/bullet.png')] bg-contain bg-no-repeat"></span>
                  <span className="ml-2">
                    <span className="font-normal">A Closed-loop System</span>{" "}
                    recirculates excess water, minimizing wastage.
                  </span>
                </li>
              </ul>
            </div>
            <div className="mb-8">
              <h4 className="mb-4 text-2xl font-normal text-[#15B392]">
                2. IoT Integration & Remote Monitoring
              </h4>
              <p className="mb-4 font-light text-[18px]">
                Using <span className="font-normal">IoT sensors</span>, the
                system collects{" "}
                <span className="font-normal">real-time data</span> and
                transmits it via a{" "}
                <span className="font-normal">Wi-Fi module</span> (ESP8266) to a{" "}
                <span className="font-normal">cloud-based web dashboard</span>.
                Users can:
              </p>
              <ul className="mx-8 mb-4 text-[18px] font-light list-none">
                <li className="relative pl-6">
                  <span className="absolute left-0 top-1/2 -translate-y-1/2 w-[15px] h-[15px] bg-[url('/images/about/bullet.png')] bg-contain bg-no-repeat"></span>
                  <span className="ml-2">
                    <span className="font-normal">
                      Monitor pH, temperature, humidity, and nutrients
                    </span>{" "}
                    from any device.
                  </span>
                </li>
                <li className="relative pl-6">
                  <span className="absolute left-0 top-1/2 -translate-y-1/2 w-[15px] h-[15px] bg-[url('/images/about/bullet.png')] bg-contain bg-no-repeat"></span>
                  <span className="ml-2">
                    <span className="font-normal">Receive Alerts</span> when
                    conditions fall outside the optimal range.
                  </span>
                </li>
                <li className="relative pl-6">
                  <span className="absolute left-0 top-1/2 -translate-y-1/2 w-[15px] h-[15px] bg-[url('/images/about/bullet.png')] bg-contain bg-no-repeat"></span>
                  <span className="ml-2">
                    <span className="font-normal">Automate Adjustments</span> –
                    The system activates pumps to regulate water/nutrient flow.
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Key Components & Technologies Section */}
          <div className="p-10 border-b-2 border-b-black/50">
            <h3 className="text-center mb-10 font-medium text-[32px] text-[#15B392]">
              Key Components & Technologies
            </h3>
            <div className="mb-8">
              <h4 className="mb-4 text-2xl font-normal text-[#15B392]">
                1. Sensors & Hardware
              </h4>
              <p className="mb-4 font-light text-[18px]">
                Each component plays a critical role in{" "}
                <span className="font-normal">
                  ensuring optimal plant growth:
                </span>
              </p>
              <ul className="mx-8 mb-4 text-[18px] font-light list-none">
                <span className="font-normal">pH Sensor</span>
                <li className="relative pl-6">
                  <span className="absolute left-0 top-1/2 -translate-y-1/2 w-[15px] h-[15px] bg-[url('/images/about/bullet.png')] bg-contain bg-no-repeat"></span>
                  <span className="ml-2">
                    Measures the{" "}
                    <span className="font-normal">acidity or alkalinity</span>{" "}
                    of the nutrient solution.
                  </span>
                </li>
                <li className="relative pl-6">
                  <span className="absolute left-0 top-1/2 -translate-y-1/2 w-[15px] h-[15px] bg-[url('/images/about/bullet.png')] bg-contain bg-no-repeat"></span>
                  <span className="ml-2">
                    Ensures nutrients remain in the optimal range for{" "}
                    <span className="font-normal">maximum absorption</span> by
                    plants.
                  </span>
                </li>
              </ul>
              <ul className="mx-8 mb-4 text-[18px] font-light list-none">
                <span className="font-normal">
                  TDS (Total Dissolved Solids) Sensor
                </span>
                <li className="relative pl-6">
                  <span className="absolute left-0 top-1/2 -translate-y-1/2 w-[15px] h-[15px] bg-[url('/images/about/bullet.png')] bg-contain bg-no-repeat"></span>
                  <span className="ml-2">
                    Monitors the{" "}
                    <span className="font-normal">
                      concentration of nutrients
                    </span>{" "}
                    in water.
                  </span>
                </li>
                <li className="relative pl-6">
                  <span className="absolute left-0 top-1/2 -translate-y-1/2 w-[15px] h-[15px] bg-[url('/images/about/bullet.png')] bg-contain bg-no-repeat"></span>
                  <span className="ml-2">
                    Prevents{" "}
                    <span className="font-normal">
                      over-fertilization or nutrient deficiency
                    </span>
                    .
                  </span>
                </li>
              </ul>
              <ul className="mx-8 mb-4 text-[18px] font-light list-none">
                <span className="font-normal">DHT Sensor</span>
                <li className="relative pl-6">
                  <span className="absolute left-0 top-1/2 -translate-y-1/2 w-[15px] h-[15px] bg-[url('/images/about/bullet.png')] bg-contain bg-no-repeat"></span>
                  <span className="ml-2">
                    Records{" "}
                    <span className="font-normal">
                      temperature and humidity
                    </span>
                    , crucial for plant growth.
                  </span>
                </li>
                <li className="relative pl-6">
                  <span className="absolute left-0 top-1/2 -translate-y-1/2 w-[15px] h-[15px] bg-[url('/images/about/bullet.png')] bg-contain bg-no-repeat"></span>
                  <span className="ml-2">
                    Helps in{" "}
                    <span className="font-normal">
                      maintaining a stable growing environment
                    </span>
                    .
                  </span>
                </li>
              </ul>
              <ul className="mx-8 mb-4 text-[18px] font-light list-none">
                <span className="font-normal">LCD Display (20×4)</span>
                <li className="relative pl-6">
                  <span className="absolute left-0 top-1/2 -translate-y-1/2 w-[15px] h-[15px] bg-[url('/images/about/bullet.png')] bg-contain bg-no-repeat"></span>
                  <span className="ml-2">
                    Displays{" "}
                    <span className="font-normal">real-time data locally</span>.
                  </span>
                </li>
                <li className="relative pl-6">
                  <span className="absolute left-0 top-1/2 -translate-y-1/2 w-[15px] h-[15px] bg-[url('/images/about/bullet.png')] bg-contain bg-no-repeat"></span>
                  <span className="ml-2">
                    Ensures users can{" "}
                    <span className="font-normal">
                      monitor conditions without needing an external device
                    </span>
                    .
                  </span>
                </li>
              </ul>
              <ul className="mx-8 mb-4 text-[18px] font-light list-none">
                <span className="font-normal">
                  Water Pump & Circulation System
                </span>
                <li className="relative pl-6">
                  <span className="absolute left-0 top-1/2 -translate-y-1/2 w-[15px] h-[15px] bg-[url('/images/about/bullet.png')] bg-contain bg-no-repeat"></span>
                  <span className="ml-2">
                    Circulates{" "}
                    <span className="font-normal">
                      oxygenated, nutrient-rich water
                    </span>{" "}
                    to all plants.
                  </span>
                </li>
                <li className="relative pl-6">
                  <span className="absolute left-0 top-1/2 -translate-y-1/2 w-[15px] h-[15px] bg-[url('/images/about/bullet.png')] bg-contain bg-no-repeat"></span>
                  <span className="ml-2">
                    Controlled by the{" "}
                    <span className="font-normal">Arduino Uno</span>, which
                    adjusts flow{" "}
                    <span className="font-normal">
                      based on sensor readings
                    </span>
                    .
                  </span>
                </li>
              </ul>
            </div>
            <div className="mb-8">
              <h4 className="mb-4 text-2xl font-normal text-[#15B392]">
                2. Software & Cloud-Based Dashboard
              </h4>
              <ul className="mx-8 mb-4 text-[18px] font-light list-none">
                <span className="font-normal">
                  Arduino Microcontroller & Code
                </span>
                <li className="relative pl-6">
                  <span className="absolute left-0 top-1/2 -translate-y-1/2 w-[15px] h-[15px] bg-[url('/images/about/bullet.png')] bg-contain bg-no-repeat"></span>
                  <span className="ml-2">
                    Collects data from sensors and{" "}
                    <span className="font-normal">processes it</span>.
                  </span>
                </li>
                <li className="relative pl-6">
                  <span className="absolute left-0 top-1/2 -translate-y-1/2 w-[15px] h-[15px] bg-[url('/images/about/bullet.png')] bg-contain bg-no-repeat"></span>
                  <span className="ml-2">
                    Controls the water pump{" "}
                    <span className="font-normal">
                      based on real-time conditions
                    </span>
                    .
                  </span>
                </li>
              </ul>
              <ul className="mx-8 mb-4 text-[18px] font-light list-none">
                <span className="font-normal">Cloud-Based IoT Platform</span>
                <li className="relative pl-6">
                  <span className="absolute left-0 top-1/2 -translate-y-1/2 w-[15px] h-[15px] bg-[url('/images/about/bullet.png')] bg-contain bg-no-repeat"></span>
                  <span className="ml-2">
                    Stores <span className="font-normal">historical data</span>{" "}
                    for long-term analysis.
                  </span>
                </li>
                <li className="relative pl-6">
                  <span className="absolute left-0 top-1/2 -translate-y-1/2 w-[15px] h-[15px] bg-[url('/images/about/bullet.png')] bg-contain bg-no-repeat"></span>
                  <span className="ml-2">
                    Enables remote monitoring through a{" "}
                    <span className="font-normal">web-based dashboard</span>.
                  </span>
                </li>
              </ul>
              <ul className="mx-8 mb-4 text-[18px] font-light list-none">
                <span className="font-normal">
                  Wi-Fi Connectivity (ESP8266 Module)
                </span>
                <li className="relative pl-6">
                  <span className="absolute left-0 top-1/2 -translate-y-1/2 w-[15px] h-[15px] bg-[url('/images/about/bullet.png')] bg-contain bg-no-repeat"></span>
                  <span className="ml-2">
                    Ensures{" "}
                    <span className="font-normal">
                      seamless data transmission
                    </span>{" "}
                    from sensors to the web.
                  </span>
                </li>
                <li className="relative pl-6">
                  <span className="absolute left-0 top-1/2 -translate-y-1/2 w-[15px] h-[15px] bg-[url('/images/about/bullet.png')] bg-contain bg-no-repeat"></span>
                  <span className="ml-2">
                    Allows{" "}
                    <span className="font-normal">
                      farmers to access real-time data from anywhere
                    </span>
                    .
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* System Architecture Overview */}
          <div className="p-10 border-b-2 border-b-black/50">
            <h3 className="text-center mb-10 font-medium text-[32px] text-[#15B392]">
              System Architecture Overview
            </h3>
            <div className="mb-8">
              <p className="mb-4 font-light text-[18px]">
                The system consists of three interconnected layers:
              </p>
              <ul className="mx-8 mb-4 text-[18px] font-light list-none">
                <li className="relative pl-6">
                  <span className="absolute left-0 top-1/2 -translate-y-1/2 w-[15px] h-[15px] bg-[url('/images/about/bullet.png')] bg-contain bg-no-repeat"></span>
                  <span className="ml-2">
                    <span className="font-normal">Sensor Layer</span> – Collects
                    data on{" "}
                    <span className="font-normal">
                      pH, nutrients, temperature, and humidity
                    </span>
                    .
                  </span>
                </li>
                <li className="relative pl-6">
                  <span className="absolute left-0 top-1/2 -translate-y-1/2 w-[15px] h-[15px] bg-[url('/images/about/bullet.png')] bg-contain bg-no-repeat"></span>
                  <span className="ml-2">
                    <span className="font-normal">
                      Processing & Control Layer
                    </span>{" "}
                    – The{" "}
                    <span className="font-normal">Arduino microcontroller</span>{" "}
                    analyzes data and adjusts system operations.
                  </span>
                </li>
                <li className="relative pl-6">
                  <span className="absolute left-0 top-1/2 -translate-y-1/2 w-[15px] h-[15px] bg-[url('/images/about/bullet.png')] bg-contain bg-no-repeat"></span>
                  <span className="ml-2">
                    <span className="font-normal">
                      Communication & Display Layer
                    </span>{" "}
                    – Transmits data to the{" "}
                    <span className="font-normal">
                      LCD screen and web dashboard
                    </span>{" "}
                    for monitoring.
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Challenges & Solutions */}
          <div className="p-10 border-b-2 border-b-black/50">
            <h3 className="text-center mb-10 font-medium text-[32px] text-[#15B392]">
              Challenges & Solutions
            </h3>
            <div className="mb-8">
              <h4 className="mb-4 text-2xl font-normal text-[#15B392]">
                1. Sensor Calibration Issues
              </h4>
              <p className="mb-4 font-light text-[18px]">
                <span className="font-normal">Solution</span>: Regular
                calibration ensures{" "}
                <span className="font-normal">accurate measurements</span>.
              </p>
            </div>
            <div className="mb-8">
              <h4 className="mb-4 text-2xl font-normal text-[#15B392]">
                2. Gradual Nutrient Addition
              </h4>
              <p className="mb-4 font-light text-[18px]">
                <span className="font-normal">Solution</span>: The system{" "}
                <span className="font-normal">
                  automatically controls nutrient flow
                </span>{" "}
                to prevent <span className="font-normal">overloading</span>.
              </p>
            </div>
            <div className="mb-8">
              <h4 className="mb-4 text-2xl font-normal text-[#15B392]">
                3. Water Leakage & Pipe Alignment
              </h4>
              <p className="mb-4 font-light text-[18px]">
                <span className="font-normal">Solution</span>: The{" "}
                <span className="font-normal">PVC structure</span> is sealed
                with <span className="font-normal">precision fittings</span> to{" "}
                <span className="font-normal">prevent leaks</span>.
              </p>
            </div>
          </div>

          {/* Future Plans & Enhancements */}
          <div className="p-10 border-b-2 border-b-black/50">
            <h3 className="text-center mb-10 font-medium text-[32px] text-[#15B392]">
              Future Plans & Enhancements
            </h3>
            <div className="mb-8">
              <h4 className="mb-4 text-2xl font-normal text-[#15B392]">
                1. AI-Powered Analytics
              </h4>
              <p className="mb-4 font-light text-[18px]">
                Use{" "}
                <span className="font-normal">machine learning algorithms</span>{" "}
                to{" "}
                <span className="font-normal">predict plant growth trends</span>
                .
              </p>
            </div>
            <div className="mb-8">
              <h4 className="mb-4 text-2xl font-normal text-[#15B392]">
                2. Web App Development
              </h4>
              <p className="mb-4 font-light text-[18px]">
                Build a{" "}
                <span className="font-normal">user-friendly web app</span> for{" "}
                <span className="font-normal">easier monitoring & control</span>
                .
              </p>
            </div>
            <div className="mb-8">
              <h4 className="mb-4 text-2xl font-normal text-[#15B392]">
                3. Advanced IoT Sensors
              </h4>
              <p className="mb-4 font-light text-[18px]">
                Add{" "}
                <span className="font-normal">
                  CO2 and light intensity sensors
                </span>{" "}
                to further{" "}
                <span className="font-normal">optimize plant growth</span>.
              </p>
            </div>
          </div>

          {/* Why It Matters */}
          <div className="p-10 border-b-2 border-b-black/50">
            <h3 className="text-center mb-10 font-medium text-[32px] text-[#15B392]">
              Why IoT-Powered Hydroponics Matters
            </h3>
            <p className="mb-4 font-light text-[18px]">
              This project represents a{" "}
              <span className="font-normal">major step forward</span> in{" "}
              <span className="font-normal">sustainable agriculture</span>. By
              integrating{" "}
              <span className="font-normal">hydroponics with IoT</span>, we:
            </p>
            <div className="mb-8">
              <ul className="mx-8 mb-4 text-[18px] font-light list-none">
                <li className="relative pl-6">
                  <span className="absolute left-0 top-1/2 -translate-y-1/2 w-[15px] h-[15px] bg-[url('/images/about/bullet.png')] bg-contain bg-no-repeat"></span>
                  <span className="ml-2">
                    <span className="font-normal">Reduce Resource Wastage</span>{" "}
                    – Up to <span className="font-normal">90% less water</span>{" "}
                    usage than soil farming.
                  </span>
                </li>
                <li className="relative pl-6">
                  <span className="absolute left-0 top-1/2 -translate-y-1/2 w-[15px] h-[15px] bg-[url('/images/about/bullet.png')] bg-contain bg-no-repeat"></span>
                  <span className="ml-2">
                    <span className="font-normal">
                      Enable Precision Agriculture
                    </span>{" "}
                    – Automated{" "}
                    <span className="font-normal">
                      pH and nutrient monitoring
                    </span>{" "}
                    improves plant health.
                  </span>
                </li>
                <li className="relative pl-6">
                  <span className="absolute left-0 top-1/2 -translate-y-1/2 w-[15px] h-[15px] bg-[url('/images/about/bullet.png')] bg-contain bg-no-repeat"></span>
                  <span className="ml-2">
                    <span className="font-normal">Support Urban Farming</span> –
                    Ideal for{" "}
                    <span className="font-normal">
                      rooftop gardens, greenhouses, and indoor farms
                    </span>
                    .
                  </span>
                </li>
                <li className="relative pl-6">
                  <span className="absolute left-0 top-1/2 -translate-y-1/2 w-[15px] h-[15px] bg-[url('/images/about/bullet.png')] bg-contain bg-no-repeat"></span>
                  <span className="ml-2">
                    <span className="font-normal">Improve Crop Yields</span> –
                    Faster{" "}
                    <span className="font-normal">
                      growth cycles with higher efficiency
                    </span>
                    .
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Join Section */}
          <div className="p-10 border-b-2 border-b-black/50">
            <h3 className="text-center mb-10 font-medium text-[32px] text-[#15B392]">
              Join the Future of Smart Farming!
            </h3>
            <p className="mb-4 font-light text-[18px]">
              IoT-Powered Hydroponics isn’t just about farming—it’s about{" "}
              <span className="font-normal">
                creating a smarter, more efficient way to grow food
              </span>{" "}
              in the <span className="font-normal">21st century</span>. Whether
              you’re an{" "}
              <span className="font-normal">
                urban farmer, researcher, or tech enthusiast
              </span>
              , this system offers{" "}
              <span className="font-normal">a sustainable solution</span> for{" "}
              <span className="font-normal">
                high-yield, low-waste agriculture
              </span>
              .
            </p>
            <span className="flex justify-center items-center font-normal">
              Monitor your plants, optimize their growth, and revolutionize
              farming—one sensor at a time!
            </span>
          </div>

          {/* Download Section */}
          <div className="py-10">
            <p className="mb-4 font-light text-[18px]">
              <span className="flex justify-center items-center font-normal">
                Curious to dive deeper?{" "}
                <img
                  src="/images/about/docs.png"
                  alt="doc"
                  className="h-4 mx-[5px]"
                />{" "}
                Download our research paper below and explore the science behind
                smart hydroponics!
              </span>
            </p>
            <div className="w-full flex justify-center mt-8">
              <a
                href="/Hydroponics_Report.pdf"
                download="Hydroponics_Report.pdf"
              >
                <button className="py-4 px-8 h-[3.5rem] w-[19rem] text-[18px] font-light bg-[#15B392] text-white text-[18px] font-light rounded-[1rem] hover:bg-white hover:text-[#15B392] hover:font-normal hover:border hover:border-[#15B392] transition duration-300 ease-in-out">
                  Download Research Paper
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
