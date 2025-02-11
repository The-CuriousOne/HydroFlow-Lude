// app/terms/page.js
"use client";

export default function TermsOfService() {
  return (
    <div className="text-black w-full max-w-[100vw] p-[5rem] box-border bg-[url('/images/background.jpg')] max-[900px]:p-[4rem] max-[500px]:p-[1rem]">
      <div className="bg-[rgba(255,255,255,0.75)] py-[7rem] px-[5rem] box-border max-[900px]:py-[5rem] max-[900px]:px-[4rem] max-[700px]:py-[4rem] max-[700px]:px-[3rem] max-[500px]:py-[2.5rem] max-[500px]:px-[1.5rem]">
        <div className="flex flex-col box-border border-t-2 border-b-2 border-solid border-t-[rgba(0,0,0,0.5)] border-b-[rgba(0,0,0,0.5)]">
          <h2 className="self-center font-medium text-[48px] py-[2.5rem] max-[500px]:text-center">
            Terms of Service
          </h2>
          <div className="p-[1.5rem] text-[18px] box-border">
            <h3 className="my-[0.25rem] font-medium">
              IoT-Powered Hydroponics: Farming the Smart Way
            </h3>
          </div>
        </div>
        <div className="px-[2rem] hyphens-auto max-[900px]:px-0">
          {/* 1. Introduction */}
          <div className="p-[2.5rem] border-b-2 border-solid border-b-[rgba(0,0,0,0.5)] max-[900px]:py-[2.5rem] max-[900px]:px-[2rem] max-[700px]:py-[2.5rem] max-[700px]:px-[1rem]">
            <h3 className="font-medium text-[24px]">1. Introduction</h3>
            <p className="my-[1rem] font-light text-[18px]">
              Welcome to the official website of the IoT-Powered Hydroponics
              project ("Website"). By accessing or using this Website, you agree
              to comply with and be bound by the following Terms of Service ("Terms").
              If you do not agree with these Terms, please do not use this Website.
            </p>
          </div>

          {/* 2. Description of Service */}
          <div className="p-[2.5rem] border-b-2 border-solid border-b-[rgba(0,0,0,0.5)] max-[900px]:py-[2.5rem] max-[900px]:px-[2rem] max-[700px]:py-[2.5rem] max-[700px]:px-[1rem]">
            <h3 className="font-medium text-[24px]">2. Description of Service</h3>
            <p className="my-[1rem] font-light text-[18px]">
              This Website provides information about the IoT-Powered Hydroponics
              project, including system design, methodology, implementation, and
              future work. The Website serves as a platform for sharing updates,
              research findings, and project developments.
            </p>
          </div>

          {/* 3. User Obligations */}
          <div className="p-[2.5rem] border-b-2 border-solid border-b-[rgba(0,0,0,0.5)] max-[900px]:py-[2.5rem] max-[900px]:px-[2rem] max-[700px]:py-[2.5rem] max-[700px]:px-[1rem]">
            <h3 className="font-medium text-[24px]">3. User Obligations</h3>
            <p className="my-[1rem] font-light text-[18px]">
              By using this Website, you agree to:
            </p>
            <ul className="my-[1rem] mx-[2rem] list-disc text-[18px] max-[500px]:m-[1rem]">
              <li className="my-[0.5rem]">
                Use the Website only for lawful purposes.
              </li>
              <li className="my-[0.5rem]">
                Not engage in any activity that may interfere with or disrupt the
                Website’s functionality.
              </li>
              <li className="my-[0.5rem]">
                Not copy, distribute, or modify any content without proper
                authorization.
              </li>
            </ul>
          </div>

          {/* 4. Intellectual Property */}
          <div className="p-[2.5rem] border-b-2 border-solid border-b-[rgba(0,0,0,0.5)] max-[900px]:py-[2.5rem] max-[900px]:px-[2rem] max-[700px]:py-[2.5rem] max-[700px]:px-[1rem]">
            <h3 className="font-medium text-[24px]">4. Intellectual Property</h3>
            <p className="my-[1rem] font-light text-[18px]">
              All content, including text, images, diagrams, and research findings,
              is the intellectual property of the project team and/or its affiliated
              institutions. Unauthorized use, reproduction, or distribution of any
              content from this Website is strictly prohibited.
            </p>
          </div>

          {/* 5. Privacy Policy */}
          <div className="p-[2.5rem] border-b-2 border-solid border-b-[rgba(0,0,0,0.5)] max-[900px]:py-[2.5rem] max-[900px]:px-[2rem] max-[700px]:py-[2.5rem] max-[700px]:px-[1rem]">
            <h3 className="font-medium text-[24px]">5. Privacy Policy</h3>
            <p className="my-[1rem] font-light text-[18px]">
              This Website does not collect personal data unless voluntarily provided
              by users through contact forms or other interactive features. Any
              information shared will be used solely for communication related to
              the project.
            </p>
          </div>

          {/* 6. Disclaimer of Warranties */}
          <div className="p-[2.5rem] border-b-2 border-solid border-b-[rgba(0,0,0,0.5)] max-[900px]:py-[2.5rem] max-[900px]:px-[2rem] max-[700px]:py-[2.5rem] max-[700px]:px-[1rem]">
            <h3 className="font-medium text-[24px]">6. Disclaimer of Warranties</h3>
            <p className="my-[1rem] font-light text-[18px]">
              The Website and its content are provided on an "as-is" and "as-available"
              basis. We make no warranties, expressed or implied, regarding the accuracy,
              reliability, or completeness of the information provided.
            </p>
          </div>

          {/* 7. Limitation of Liability */}
          <div className="p-[2.5rem] border-b-2 border-solid border-b-[rgba(0,0,0,0.5)] max-[900px]:py-[2.5rem] max-[900px]:px-[2rem] max-[700px]:py-[2.5rem] max-[700px]:px-[1rem]">
            <h3 className="font-medium text-[24px]">7. Limitation of Liability</h3>
            <p className="my-[1rem] font-light text-[18px]">
              The project team shall not be liable for any direct, indirect, incidental,
              or consequential damages resulting from the use or inability to use this
              Website or its content.
            </p>
          </div>

          {/* 8. External Links */}
          <div className="p-[2.5rem] border-b-2 border-solid border-b-[rgba(0,0,0,0.5)] max-[900px]:py-[2.5rem] max-[900px]:px-[2rem] max-[700px]:py-[2.5rem] max-[700px]:px-[1rem]">
            <h3 className="font-medium text-[24px]">8. External Links</h3>
            <p className="my-[1rem] font-light text-[18px]">
              The Website may contain links to third-party websites. We are not
              responsible for the content, policies, or practices of any third-party
              websites linked from our platform.
            </p>
          </div>

          {/* 9. Changes to Terms */}
          <div className="p-[2.5rem] border-b-2 border-solid border-b-[rgba(0,0,0,0.5)] max-[900px]:py-[2.5rem] max-[900px]:px-[2rem] max-[700px]:py-[2.5rem] max-[700px]:px-[1rem]">
            <h3 className="font-medium text-[24px]">9. Changes to Terms</h3>
            <p className="my-[1rem] font-light text-[18px]">
              We reserve the right to update or modify these Terms at any time without
              prior notice. Continued use of the Website constitutes acceptance of any
              changes.
            </p>
          </div>

          {/* 10. Contact Information */}
          <div className="p-[2.5rem] border-b-2 border-solid border-b-[rgba(0,0,0,0.5)] max-[900px]:py-[2.5rem] max-[900px]:px-[2rem] max-[700px]:py-[2.5rem] max-[700px]:px-[1rem]">
            <h3 className="font-medium text-[24px]">10. Contact Information</h3>
            <p className="my-[1rem] font-light text-[18px]">
              For any inquiries regarding these Terms, please contact the project team
              through the designated contact section on the Website.
            </p>
          </div>

          {/* Final Acknowledgment */}
          <div className="p-[2.5rem] border-b-2 border-solid border-b-[rgba(0,0,0,0.5)] max-[900px]:py-[2.5rem] max-[900px]:px-[2rem] max-[700px]:py-[2.5rem] max-[700px]:px-[1rem]">
            <p className="my-[1rem] font-light text-[18px]">
              By using this Website, you acknowledge that you have read, understood, and agree
              to these Terms of Service.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
