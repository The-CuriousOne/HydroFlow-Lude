"use client";

export default function PrivacyPolicy() {
  return (
    <div className="w-full max-w-[100vw] p-[5rem] box-border bg-[url('/images/background.jpg')] max-[900px]:p-[4rem] max-[500px]:p-[1rem] text-black">
      <div className="bg-[rgba(255,255,255,0.75)] py-[7rem] px-[5rem] box-border max-[900px]:py-[5rem] max-[900px]:px-[4rem] max-[700px]:py-[4rem] max-[700px]:px-[3rem] max-[500px]:py-[2.5rem] max-[500px]:px-[1.5rem]">
        {/* Privacy Head */}
        <div className="flex flex-col box-border border-t-2 border-b-2 border-solid border-t-[rgba(0,0,0,0.5)] border-b-[rgba(0,0,0,0.5)]">
          <h2 className="self-center font-medium text-[48px] py-[2.5rem] max-[500px]:text-center">
            Privacy Policy
          </h2>
          <div className="p-[1.5rem] text-[18px] box-border">
            <h3 className="my-[0.25rem] font-medium">
              IoT-Powered Hydroponics: Farming the Smart Way
            </h3>
            <p className="my-[0.25rem] font-light">Effective Date: 01/02/2025</p>
            <p className="my-[0.25rem] font-light">Last Updated: 01/02/2027</p>
          </div>
        </div>

        {/* Privacy Content */}
        <div className="px-[2rem] max-[900px]:px-0" style={{ hyphens: "auto" }}>
          {/* Component 1 */}
          <div className="p-[2.5rem] border-b-2 border-solid border-b-[rgba(0,0,0,0.5)] max-[900px]:py-[2.5rem] max-[900px]:px-[2rem] max-[700px]:py-[2.5rem] max-[700px]:px-[1rem]">
            <p className="my-[1rem] font-light text-[18px]">
              This Privacy Policy describes how IoT-Powered Hydroponics: Farming the Smart Way (hereinafter referred to as the “Website” or “Project”) collects, uses, shares, and protects user information when interacting with the website, web applications, or IoT platforms linked to the project.
            </p>
            <p className="my-[1rem] font-light text-[18px]">
              By accessing and using the Website, you agree to the collection and use of your information in accordance with this Privacy Policy.
            </p>
          </div>

          {/* Component 2 – Information We Collect */}
          <div className="p-[2.5rem] border-b-2 border-solid border-b-[rgba(0,0,0,0.5)] max-[900px]:py-[2.5rem] max-[900px]:px-[2rem] max-[700px]:py-[2.5rem] max-[700px]:px-[1rem]">
            <h3 className="font-medium text-[24px]">1. Information We Collect</h3>
            <p className="my-[1rem] font-light text-[18px]">
              We may collect different types of information depending on how you interact with our Website and IoT system. These include:
            </p>
            <h4 className="font-medium text-[20px] my-[1rem]">1.1. Information You Provide Directly</h4>
            <ul className="my-[1rem] mx-[2rem] list-disc text-[18px] max-[500px]:m-[1rem]">
              <li className="my-[0.5rem]">
                <span className="font-normal">Personal Information:</span> If you voluntarily submit forms or contact us, we may collect your name, email address, and any details you provide in your message.
              </li>
              <li className="my-[0.5rem]">
                <span className="font-normal">Feedback &amp; Support Requests:</span> If you contact us for inquiries, feedback, or troubleshooting, we may store communications to improve our service.
              </li>
            </ul>
            <h4 className="font-medium text-[20px] my-[1rem]">1.2. Information Collected Automatically</h4>
            <ul className="my-[1rem] mx-[2rem] list-disc text-[18px] max-[500px]:m-[1rem]">
              <li className="my-[0.5rem]">
                <span className="font-normal">Device Information:</span> Type of device, operating system, and browser.
              </li>
              <li className="my-[0.5rem]">
                <span className="font-normal">Usage Data:</span> Pages visited, time spent on the Website, interactions, and navigation patterns.
              </li>
              <li className="my-[0.5rem]">
                <span className="font-normal">IP Address &amp; Location Data:</span> Approximate geographic location based on your IP address.
              </li>
              <li className="my-[0.5rem]">
                <span className="font-normal">Cookies &amp; Tracking Technologies:</span> Small data files stored on your browser to enhance user experience.
              </li>
            </ul>
            <h4 className="font-medium text-[20px] my-[1rem]">1.3. IoT System Data (If Applicable)</h4>
            <ul className="my-[1rem] mx-[2rem] list-disc text-[18px] max-[500px]:m-[1rem]">
              <li className="my-[0.5rem]">
                <span className="font-normal">Sensor Data:</span> The hydroponics system may collect real-time data on temperature, humidity, pH levels, and nutrient concentrations.
              </li>
              <li className="my-[0.5rem]">
                <span className="font-normal">Remote Access Logs:</span> Logs of user interactions with the IoT-based monitoring system.
              </li>
            </ul>
          </div>

          {/* Component 3 – How We Use Your Information */}
          <div className="p-[2.5rem] border-b-2 border-solid border-b-[rgba(0,0,0,0.5)] max-[900px]:py-[2.5rem] max-[900px]:px-[2rem] max-[700px]:py-[2.5rem] max-[700px]:px-[1rem]">
            <h3 className="font-medium text-[24px]">2. How We Use Your Information</h3>
            <ul className="my-[1rem] mx-[2rem] list-disc text-[18px] max-[500px]:m-[1rem]">
              <li className="my-[0.5rem]">
                To improve the website and user experience by analyzing website traffic.
              </li>
              <li className="my-[0.5rem]">
                To monitor system performance and provide real-time analytics on hydroponics efficiency.
              </li>
              <li className="my-[0.5rem]">
                To respond to user inquiries and support requests.
              </li>
              <li className="my-[0.5rem]">
                To enhance security and detect unauthorized access.
              </li>
              <li className="my-[0.5rem]">
                To develop new features and optimize the IoT system.
              </li>
              <li className="my-[0.5rem]">
                To comply with legal requirements and protect against fraud.
              </li>
            </ul>
          </div>

          {/* Component 4 – How We Share Your Information */}
          <div className="p-[2.5rem] border-b-2 border-solid border-b-[rgba(0,0,0,0.5)] max-[900px]:py-[2.5rem] max-[900px]:px-[2rem] max-[700px]:py-[2.5rem] max-[700px]:px-[1rem]">
            <h3 className="font-medium text-[24px]">3. How We Share Your Information</h3>
            <p className="my-[1rem] font-light text-[18px]">
              We do not sell, trade, or rent your personal information to third parties. However, we may share data in the following cases:
            </p>
            <ul className="my-[1rem] mx-[2rem] list-disc text-[18px] max-[500px]:m-[1rem]">
              <li className="my-[0.5rem]">
                <span className="font-normal">With Academic &amp; Research Institutions:</span> For research collaboration, only in anonymized format.
              </li>
              <li className="my-[0.5rem]">
                <span className="font-normal">With Service Providers:</span> Trusted third-party services (e.g., hosting, analytics) may process data on our behalf.
              </li>
              <li className="my-[0.5rem]">
                <span className="font-normal">Legal Compliance &amp; Security:</span> If required by law, we may disclose information to government authorities or law enforcement.
              </li>
              <li className="my-[0.5rem]">
                <span className="font-normal">Mergers &amp; Changes in Ownership:</span> If the project is transferred or integrated into another research initiative, data may be shared with successors.
              </li>
            </ul>
          </div>

          {/* Component 5 – Cookies & Tracking Technologies */}
          <div className="p-[2.5rem] border-b-2 border-solid border-b-[rgba(0,0,0,0.5)] max-[900px]:py-[2.5rem] max-[900px]:px-[2rem] max-[700px]:py-[2.5rem] max-[700px]:px-[1rem]">
            <h3 className="font-medium text-[24px]">4. Cookies &amp; Tracking Technologies</h3>
            <p className="my-[1rem] font-light text-[18px]">
              We use cookies to enhance website performance and analytics. Users can manage cookie preferences through their browser settings.
            </p>
            <p className="my-[1rem] font-light text-[18px]">
              <span className="font-normal">Types of Cookies Used:</span>
            </p>
            <ul className="my-[1rem] mx-[2rem] list-disc text-[18px] max-[500px]:m-[1rem]">
              <li className="my-[0.5rem]">
                <span className="font-normal">Essential Cookies:</span> Necessary for website functionality.
              </li>
              <li className="my-[0.5rem]">
                <span className="font-normal">Analytical Cookies:</span> Help us understand visitor interactions.
              </li>
              <li className="my-[0.5rem]">
                <span className="font-normal">Functional Cookies:</span> Remember user preferences.
              </li>
            </ul>
            <p className="my-[1rem] font-light text-[18px]">
              Users can opt-out of non-essential cookies, but disabling them may affect website functionality.
            </p>
          </div>

          {/* Component 6 – Data Security */}
          <div className="p-[2.5rem] border-b-2 border-solid border-b-[rgba(0,0,0,0.5)] max-[900px]:py-[2.5rem] max-[900px]:px-[2rem] max-[700px]:py-[2.5rem] max-[700px]:px-[1rem]">
            <h3 className="font-medium text-[24px]">5. Data Security</h3>
            <p className="my-[1rem] font-light text-[18px]">
              We take reasonable steps to protect user data, including:
            </p>
            <ul className="my-[1rem] mx-[2rem] list-disc text-[18px] max-[500px]:m-[1rem]">
              <li className="my-[0.5rem]">
                <span className="font-normal">Encryption:</span> Secure transmission of data between users and the Website.
              </li>
              <li className="my-[0.5rem]">
                <span className="font-normal">Access Control:</span> Restricting system access to authorized personnel only.
              </li>
              <li className="my-[0.5rem]">
                <span className="font-normal">Regular Monitoring:</span> Reviewing system logs for suspicious activity.
              </li>
            </ul>
            <p className="my-[1rem] font-light text-[18px]">
              However, no online transmission is 100% secure, and users should exercise caution when sharing personal data.
            </p>
          </div>

          {/* Component 7 – Data Retention */}
          <div className="p-[2.5rem] border-b-2 border-solid border-b-[rgba(0,0,0,0.5)] max-[900px]:py-[2.5rem] max-[900px]:px-[2rem] max-[700px]:py-[2.5rem] max-[700px]:px-[1rem]">
            <h3 className="font-medium text-[24px]">6. Data Retention</h3>
            <p className="my-[1rem] font-light text-[18px]">
              We retain collected data only as long as necessary:
            </p>
            <ul className="my-[1rem] mx-[2rem] list-disc text-[18px] max-[500px]:m-[1rem]">
              <li className="my-[0.5rem]">
                Website logs and analytics: Up to 12 months
              </li>
              <li className="my-[0.5rem]">
                Contact form submissions: Up to 6 months
              </li>
              <li className="my-[0.5rem]">
                IoT sensor data: Variable based on project needs
              </li>
            </ul>
            <p className="my-[1rem] font-light text-[18px]">
              Users can request deletion of their personal data at any time.
            </p>
          </div>

          {/* Component 8 – Your Rights & Choices */}
          <div className="p-[2.5rem] border-b-2 border-solid border-b-[rgba(0,0,0,0.5)] max-[900px]:py-[2.5rem] max-[900px]:px-[2rem] max-[700px]:py-[2.5rem] max-[700px]:px-[1rem]">
            <h3 className="font-medium text-[24px]">7. Your Rights &amp; Choices</h3>
            <p className="my-[1rem] font-light text-[18px]">
              Depending on your location, you may have the following rights regarding your personal data:
            </p>
            <ul className="my-[1rem] mx-[2rem] list-disc text-[18px] max-[500px]:m-[1rem]">
              <li className="my-[0.5rem]">
                <span className="font-normal">Right to Access:</span> Request a copy of the data we store about you.
              </li>
              <li className="my-[0.5rem]">
                <span className="font-normal">Right to Correction:</span> Update inaccurate or incomplete data.
              </li>
              <li className="my-[0.5rem]">
                <span className="font-normal">Right to Deletion:</span> Request removal of your data.
              </li>
              <li className="my-[0.5rem]">
                <span className="font-normal">Right to Restrict Processing:</span> Limit how we use your data.
              </li>
              <li className="my-[0.5rem]">
                <span className="font-normal">Right to Withdraw Consent:</span> Stop receiving communications from us.
              </li>
            </ul>
            <p className="my-[1rem] font-light text-[18px]">
              To exercise your rights, please contact us at [Insert Contact Email].
            </p>
          </div>

          {/* Component 9 – Third-Party Links */}
          <div className="p-[2.5rem] border-b-2 border-solid border-b-[rgba(0,0,0,0.5)] max-[900px]:py-[2.5rem] max-[900px]:px-[2rem] max-[700px]:py-[2.5rem] max-[700px]:px-[1rem]">
            <h3 className="font-medium text-[24px]">8. Third-Party Links</h3>
            <p className="my-[1rem] font-light text-[18px]">
              Our Website may contain links to external websites. We are not responsible for their privacy practices and encourage users to review their policies.
            </p>
          </div>

          {/* Component 10 – Children’s Privacy */}
          <div className="p-[2.5rem] border-b-2 border-solid border-b-[rgba(0,0,0,0.5)] max-[900px]:py-[2.5rem] max-[900px]:px-[2rem] max-[700px]:py-[2.5rem] max-[700px]:px-[1rem]">
            <h3 className="font-medium text-[24px]">9. Children’s Privacy</h3>
            <p className="my-[1rem] font-light text-[18px]">
              Our Website is not intended for children under 13 years old. We do not knowingly collect personal data from minors. If such data is found, we will delete it promptly.
            </p>
          </div>

          {/* Component 11 – Changes to This Privacy Policy */}
          <div className="p-[2.5rem] border-b-2 border-solid border-b-[rgba(0,0,0,0.5)] max-[900px]:py-[2.5rem] max-[900px]:px-[2rem] max-[700px]:py-[2.5rem] max-[700px]:px-[1rem]">
            <h3 className="font-medium text-[24px]">10. Changes to This Privacy Policy</h3>
            <p className="my-[1rem] font-light text-[18px]">
              We may update this Privacy Policy periodically. Any changes will be posted on this page with a revised “Last Updated” date.
            </p>
            <p className="my-[1rem] font-light text-[18px]">
              If changes significantly affect user rights, we will notify users via email or a prominent website notice.
            </p>
          </div>

          {/* Component 12 – Contact Information */}
          <div className="p-[2.5rem] border-b-2 border-solid border-b-[rgba(0,0,0,0.5)] max-[900px]:py-[2.5rem] max-[900px]:px-[2rem] max-[700px]:py-[2.5rem] max-[700px]:px-[1rem]">
            <h3 className="font-medium text-[24px]">11. Contact Information</h3>
            <p className="my-[1rem] font-light text-[18px]">
              For any questions or concerns about this Privacy Policy, please contact:
            </p>
            <blockquote className="my-[1rem] px-[2rem] border-l-[5px] border-solid border-l-[#122A2C] rounded-[10px]">
              <p className="italic">
                <span className="font-normal">Project Team – Group 18</span>
                <br />
                Department of Electrical Engineering
                <br />
                Assam Engineering College, Guwahati
              </p>
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  );
}
