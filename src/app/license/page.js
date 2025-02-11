"use client";

export default function License() {
  return (
    <div className="w-full max-w-[100vw] p-[5rem] box-border bg-[url('/images/background.jpg')] max-[900px]:p-[4rem] max-[500px]:p-[1rem] text-black">
      <div className="bg-[rgba(255,255,255,0.75)] py-[7rem] px-[5rem] box-border max-[900px]:py-[5rem] max-[900px]:px-[4rem] max-[700px]:py-[4rem] max-[700px]:px-[3rem] max-[500px]:py-[2.5rem] max-[500px]:px-[1.5rem]">
        {/* License Head */}
        <div className="flex flex-col box-border border-t-2 border-b-2 border-t-[rgba(0,0,0,0.5)] border-b-[rgba(0,0,0,0.5)]">
          <h2 className="self-center font-medium text-[48px] py-[2.5rem] max-[500px]:text-center">
            LICENSE AGREEMENT
          </h2>
          <div className="p-[1.5rem] text-[18px] box-border">
            <h3 className="my-[0.25rem] font-medium">
              IoT-Powered Hydroponics: Farming the Smart Way
            </h3>
            <p className="my-[0.25rem] font-light">
              Final Year Project – Department of Electrical Engineering, Assam Engineering College, Guwahati
            </p>
            <h4 className="my-[0.25rem] font-medium">
              Effective Date: 01/02/2025
            </h4>
          </div>
        </div>

        {/* License Content */}
        <div className="px-[2rem] max-[900px]:px-0" style={{ hyphens: "auto" }}>
          {/* 1. Preamble */}
          <div className="p-[2.5rem] border-b-2 border-b-[rgba(0,0,0,0.5)] max-[900px]:px-[2rem] max-[700px]:px-[1rem]">
            <h3 className="font-medium text-[24px]">1. Preamble</h3>
            <p className="my-[1rem] font-light text-[18px]">
              This License Agreement (“Agreement”) governs the use, reproduction, modification, and distribution of all materials associated with the project{" "}
              <span className="italic">“IoT-Powered Hydroponics: Farming the Smart Way”</span>{" "}
              (hereinafter, the “Materials”). The Materials include but are not limited to hardware design documents, software source code, schematics, sensor integration documentation, simulation data, system architecture diagrams, and the accompanying project report. This Agreement is entered into between{" "}
              <span className="font-normal">Group 18</span> of Assam Engineering College (the “Licensor”) and any individual or entity (the “Licensee”) that accesses or uses the Materials.
            </p>
          </div>

          {/* 2. Definitions */}
          <div className="p-[2.5rem] border-b-2 border-b-[rgba(0,0,0,0.5)] max-[900px]:px-[2rem] max-[700px]:px-[1rem]">
            <h3 className="font-medium text-[24px]">2. Definitions</h3>
            <ul className="my-[1rem] mx-[2rem] list-disc text-[18px] max-[500px]:m-[1rem]">
              <li className="my-[0.5rem]">
                <span className="font-normal">"Materials":</span> All content, designs, source code, documentation, reports, and related intellectual property associated with the IoT-Powered Hydroponics project.
              </li>
              <li className="my-[0.5rem]">
                <span className="font-normal">"Licensee":</span> Any person, organization, or entity that uses, modifies, or distributes the Materials.
              </li>
              <li className="my-[0.5rem]">
                <span className="font-normal">"Permitted Uses":</span> Uses that are expressly allowed under this Agreement as detailed in Section 3.
              </li>
              <li className="my-[0.5rem]">
                <span className="font-normal">"Restricted Uses":</span> Any uses not explicitly allowed by this Agreement, including commercial exploitation without prior written consent.
              </li>
            </ul>
          </div>

          {/* 3. Grant of License */}
          <div className="p-[2.5rem] border-b-2 border-b-[rgba(0,0,0,0.5)] max-[900px]:px-[2rem] max-[700px]:px-[1rem]">
            <h3 className="font-medium text-[24px]">3. Grant of License</h3>
            <p className="my-[1rem] font-light text-[18px]">
              The Licensor hereby grants the Licensee a worldwide, non-exclusive, royalty-free license to use, reproduce, modify, and distribute the Materials solely for personal, educational, research, and non-commercial purposes, under the conditions specified in this Agreement.
            </p>
            <ul className="my-[1rem] mx-[2rem] list-disc text-[18px] max-[500px]:m-[1rem]">
              <li className="my-[0.5rem]">
                <span className="font-normal">Non-commercial Use:</span> The Licensee may use and modify the Materials for non-commercial projects, academic research, or personal experimentation.
              </li>
              <li className="my-[0.5rem]">
                <span className="font-normal">Attribution:</span> All copies and derivative works must include proper credit to the original authors and the institution as detailed in Section 5 below.
              </li>
              <li className="my-[0.5rem]">
                <span className="font-normal">Modification and Redistribution:</span> Modified versions of the Materials may be distributed provided that the same license terms are imposed on such modifications and that a notice of modification is clearly stated.
              </li>
            </ul>
          </div>

          {/* 4. Permitted Uses */}
          <div className="p-[2.5rem] border-b-2 border-b-[rgba(0,0,0,0.5)] max-[900px]:px-[2rem] max-[700px]:px-[1rem]">
            <h3 className="font-medium text-[24px]">4. Permitted Uses</h3>
            <p className="my-[1rem] font-light text-[18px]">
              Under this Agreement, the Licensee is authorized to:
            </p>
            <ul className="my-[1rem] mx-[2rem] list-disc text-[18px] max-[500px]:m-[1rem]">
              <li className="my-[0.5rem]">
                <span className="font-normal">Use and Study:</span> Access and analyze the Materials to understand the design and operation of an IoT-powered hydroponics system.
              </li>
              <li className="my-[0.5rem]">
                <span className="font-normal">Modify and Enhance:</span> Adapt the Materials for personal experimentation, improvements, or academic projects.
              </li>
              <li className="my-[0.5rem]">
                <span className="font-normal">Distribute and Share:</span> Share the original or modified Materials with peers or within academic settings, as long as the redistribution adheres to the terms of this Agreement.
              </li>
            </ul>
          </div>

          {/* 5. Attribution Requirements */}
          <div className="p-[2.5rem] border-b-2 border-b-[rgba(0,0,0,0.5)] max-[900px]:px-[2rem] max-[700px]:px-[1rem]">
            <h3 className="font-medium text-[24px]">5. Attribution Requirements</h3>
            <p className="my-[1rem] font-light text-[18px]">
              Any use or distribution of the Materials must include clear attribution to the original project team. The attribution should appear in any distributed copies or derivative works as follows:
            </p>
            <blockquote className="my-[1rem] px-[2rem] border-l-[5px] border-l-solid border-l-[#122A2C] rounded-[10px]">
              <p className="italic">
                <span className="font-normal">Original Project:</span> IoT-Powered Hydroponics: Farming the Smart Way <br />
                <span className="font-normal">Developed by:</span> Group 18 – Ronil Baruah, Harshanya Darathi, Shreyosi Roy Choudhury, Angsuman Sharma <br />
                <span className="font-normal">Under the Guidance of:</span> Dr. Sarmila Patra <br />
                <span className="font-normal">Institution:</span> Department of Electrical Engineering, Assam Engineering College, Guwahati
              </p>
            </blockquote>
            <p className="my-[1rem] font-light text-[18px]">
              This attribution must be included in the documentation, in any user interfaces displaying the project data, and in all distributed versions of the Materials.
            </p>
          </div>

          {/* 6. Restrictions and Prohibited Uses */}
          <div className="p-[2.5rem] border-b-2 border-b-[rgba(0,0,0,0.5)] max-[900px]:px-[2rem] max-[700px]:px-[1rem]">
            <h3 className="font-medium text-[24px]">6. Restrictions and Prohibited Uses</h3>
            <p className="my-[1rem] font-light text-[18px]">
              The Licensee agrees that the Materials shall not be used for any of the following:
            </p>
            <ul className="my-[1rem] mx-[2rem] list-disc text-[18px] max-[500px]:m-[1rem]">
              <li className="my-[0.5rem]">
                <span className="font-normal">Commercial Exploitation:</span> The Materials may not be used for any commercial purpose, including but not limited to selling products, licensing the technology for profit, or integrating the Materials into a product or service offered commercially, without explicit, prior written permission from the Licensor.
              </li>
              <li className="my-[0.5rem]">
                <span className="font-normal">Misrepresentation:</span> The Licensee shall not claim or represent the Materials as their own original work or remove any proprietary notices included in the Materials.
              </li>
              <li className="my-[0.5rem]">
                <span className="font-normal">Unlawful Purposes:</span> The Materials shall not be used in any manner that violates applicable laws or regulations, or in any way that could harm the reputation of the Licensor or the associated institution.
              </li>
            </ul>
          </div>

          {/* 7. Disclaimer of Warranty */}
          <div className="p-[2.5rem] border-b-2 border-b-[rgba(0,0,0,0.5)] max-[900px]:px-[2rem] max-[700px]:px-[1rem]">
            <h3 className="font-medium text-[24px]">7. Disclaimer of Warranty</h3>
            <p className="my-[1rem] font-light text-[18px]">
              The Materials are provided “as is” without any express or implied warranty, including but not limited to the warranties of merchantability, fitness for a particular purpose, and non-infringement. The Licensor makes no guarantee regarding the accuracy, reliability, or completeness of the Materials. Use of the Materials is at the Licensee’s sole risk.
            </p>
          </div>

          {/* 8. Limitation of Liability */}
          <div className="p-[2.5rem] border-b-2 border-b-[rgba(0,0,0,0.5)] max-[900px]:px-[2rem] max-[700px]:px-[1rem]">
            <h3 className="font-medium text-[24px]">8. Limitation of Liability</h3>
            <p className="my-[1rem] font-light text-[18px]">
              In no event shall the Licensor or Assam Engineering College be liable for any direct, indirect, incidental, consequential, or punitive damages arising out of or relating to the use of, or inability to use, the Materials, even if advised of the possibility of such damages.
            </p>
          </div>

          {/* 9. Indemnification */}
          <div className="p-[2.5rem] border-b-2 border-b-[rgba(0,0,0,0.5)] max-[900px]:px-[2rem] max-[700px]:px-[1rem]">
            <h3 className="font-medium text-[24px]">9. Indemnification</h3>
            <p className="my-[1rem] font-light text-[18px]">
              The Licensee agrees to indemnify, defend, and hold harmless the Licensor and Assam Engineering College from any and all claims, liabilities, damages, losses, or expenses (including reasonable attorneys’ fees) arising out of or in connection with any violation of this Agreement or the use of the Materials.
            </p>
          </div>

          {/* 10. Governing Law and Jurisdiction */}
          <div className="p-[2.5rem] border-b-2 border-b-[rgba(0,0,0,0.5)] max-[900px]:px-[2rem] max-[700px]:px-[1rem]">
            <h3 className="font-medium text-[24px]">10. Governing Law and Jurisdiction</h3>
            <p className="my-[1rem] font-light text-[18px]">
              This Agreement shall be governed by and construed in accordance with the laws of India. Any disputes arising out of or related to this Agreement shall be subject to the exclusive jurisdiction of the courts located in Guwahati, Assam, India.
            </p>
          </div>

          {/* 11. Termination */}
          <div className="p-[2.5rem] border-b-2 border-b-[rgba(0,0,0,0.5)] max-[900px]:px-[2rem] max-[700px]:px-[1rem]">
            <h3 className="font-medium text-[24px]">11. Termination</h3>
            <p className="my-[1rem] font-light text-[18px]">
              This Agreement is effective until terminated. The Licensee’s rights under this Agreement will terminate automatically if the Licensee fails to comply with any of the terms and conditions described herein. Upon termination, the Licensee must cease all use of the Materials and destroy all copies, in whole or in part, of the Materials.
            </p>
          </div>

          {/* 12. Entire Agreement and Amendments */}
          <div className="p-[2.5rem] border-b-2 border-b-[rgba(0,0,0,0.5)] max-[900px]:px-[2rem] max-[700px]:px-[1rem]">
            <h3 className="font-medium text-[24px]">12. Entire Agreement and Amendments</h3>
            <p className="my-[1rem] font-light text-[18px]">
              This Agreement constitutes the entire understanding between the parties with respect to the subject matter hereof and supersedes all prior or contemporaneous oral or written agreements concerning such subject matter. No amendment or modification of this Agreement shall be valid unless in writing and signed by the Licensor.
            </p>
          </div>

          {/* 13. Contact Information */}
          <div className="p-[2.5rem] border-b-2 border-b-[rgba(0,0,0,0.5)] max-[900px]:px-[2rem] max-[700px]:px-[1rem]">
            <h3 className="font-medium text-[24px]">13. Contact Information</h3>
            <p className="my-[1rem] font-light text-[18px]">
              For further inquiries, permissions, or clarifications regarding this Agreement, please contact:
            </p>
            <blockquote className="my-[1rem] px-[2rem] border-l-[5px] border-l-solid border-l-[#122A2C] rounded-[10px]">
              <p className="italic">
                <span className="font-normal">Group 18</span>
                <br />
                Department of Electrical Engineering
                <br />
                Assam Engineering College, Guwahati
                <br />
              </p>
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  );
}
