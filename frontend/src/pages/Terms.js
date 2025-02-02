import React from "react";
import "./Terms.css";

const Terms = () => {
  return (
    <div className="terms">
      <div className="termsAgreement">
        <div className="termsHead">
          <h2>Terms of Service</h2>
          <div className="projectDetail">
            <h3>IoT-Powered Hydroponics: Farming the Smart Way</h3>
          </div>
        </div>
        <div className="termsContent">
          <div className="termsComponent">
            <h3>1. Introduction</h3>
            <p>
              Welcome to the official website of the IoT-Powered Hydroponics
              project ("Website"). By accessing or using this Website, you agree
              to comply with and be bound by the following Terms of Service
              ("Terms"). If you do not agree with these Terms, please do not use
              this Website.
            </p>
          </div>
          <div className="termsComponent">
            <h3>2. Description of Service</h3>
            <p>
              This Website provides information about the IoT-Powered
              Hydroponics project, including system design, methodology,
              implementation, and future work. The Website serves as a platform
              for sharing updates, research findings, and project developments.
            </p>
          </div>
          <div className="termsComponent">
            <h3>3. User Obligations</h3>
            <p>By using this Website, you agree to:</p>
            <ul>
              <li>Use the Website only for lawful purposes.</li>
              <li>
                Not engage in any activity that may interfere with or disrupt
                the Website’s functionality.
              </li>
              <li>
                Not copy, distribute, or modify any content without proper
                authorization.
              </li>
            </ul>
          </div>
          <div className="termsComponent">
            <h3>4. Intellectual Property</h3>
            <p>
              All content, including text, images, diagrams, and research
              findings, is the intellectual property of the project team and/or
              its affiliated institutions. Unauthorized use, reproduction, or
              distribution of any content from this Website is strictly
              prohibited.
            </p>
          </div>
          <div className="termsComponent">
            <h3>5. Privacy Policy</h3>
            <p>
              This Website does not collect personal data unless voluntarily
              provided by users through contact forms or other interactive
              features. Any information shared will be used solely for
              communication related to the project.
            </p>
          </div>
          <div className="termsComponent">
            <h3>6. Disclaimer of Warranties</h3>
            <p>
              The Website and its content are provided on an "as-is" and
              "as-available" basis. We make no warranties, expressed or implied,
              regarding the accuracy, reliability, or completeness of the
              information provided.
            </p>
          </div>
          <div className="termsComponent">
            <h3>7. Limitation of Liability</h3>
            <p>
              The project team shall not be liable for any direct, indirect,
              incidental, or consequential damages resulting from the use or
              inability to use this Website or its content.
            </p>
          </div>
          <div className="termsComponent">
            <h3>8. External Links</h3>
            <p>
              The Website may contain links to third-party websites. We are not
              responsible for the content, policies, or practices of any
              third-party websites linked from our platform.
            </p>
          </div>
          <div className="termsComponent">
            <h3>9. Changes to Terms</h3>
            <p>
              We reserve the right to update or modify these Terms at any time
              without prior notice. Continued use of the Website constitutes
              acceptance of any changes.
            </p>
          </div>
          <div className="termsComponent">
            <h3>10. Contact Information</h3>
            <p>
              For any inquiries regarding these Terms, please contact the
              project team through the designated contact section on the
              Website.
            </p>
          </div>
          <div className="termsComponent">
            <p>
              By using this Website, you acknowledge that you have read,
              understood, and agree to these Terms of Service.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;