import Link from "next/link";

const Footer = () => {
  return (
    <div
      className="bg-[#101828] text-white relative p-[2%] bottom-0 w-full max-w-full h-[25rem] flex flex-col justify-end items-center text-[18px] z-[999] transition-all duration-500 ease-in-out max-[1000px]:h-[35rem]"
    >
      {/* Top Component */}
      <div className="w-[90%] h-[70%] flex flex-row justify-around items-center max-[1000px]:h-[25rem] max-[1000px]:flex-col">
        {/* Left Top Component */}
        <div className="w-[30%] h-[90%] flex flex-col justify-evenly transition-all duration-500 ease-in-out max-[1000px]:w-full max-[1000px]:h-[10rem]">
          <div className="w-full flex justify-start items-baseline">
            <Link href="/" className="no-underline text-white">
              <h3 className="font-normal text-[28px]">HydroFlow Lude</h3>
            </Link>
          </div>
          <div className="w-full flex justify-start text-[#99A1AF]">
            <p>Connect with us and make the world a better place</p>
          </div>
          <div className="w-full flex flex-row justify-evenly transition-all duration-500 ease-in-out max-[1000px]:my-[1rem]">
            <a
              href="https://www.instagram.com/darathi_13_harshanya?igsh=MXA0bWR4dGZlNWQ3Yw=="
              className="no-underline"
            >
              <img
                src="/images/footer/instagram.png"
                alt="Instagram"
                className="w-[1.25rem] h-[1.25rem] max-[1000px]:mt-[0.5rem]"
              />
            </a>
            <a href="#" className="no-underline">
              <img
                src="/images/footer/twitter.png"
                alt="Twitter"
                className="w-[1.25rem] h-[1.25rem] max-[1000px]:mt-[0.5rem]"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/harshanya-darathi-01350a228/"
              className="no-underline"
            >
              <img
                src="/images/footer/linkedin.png"
                alt="Linkedin"
                className="w-[1.25rem] h-[1.25rem] max-[1000px]:mt-[0.5rem]"
              />
            </a>
          </div>
        </div>
        {/* Right Bottom Component */}
        <div className="w-[60%] h-[80%] flex flex-row justify-around transition-all duration-500 ease-in-out max-[1000px]:w-full max-[1000px]:h-[70%] max-[1000px]:py-[2rem] max-[1000px]:px-[1rem] box-border">
          {/* Company Section */}
          <div className="w-[30%] h-full flex flex-col justify-evenly transition-all duration-500 ease-in-out max-[1000px]:w-[50%] max-[1000px]:items-start max-[1000px]:justify-start">
            <h4 className="h-[2rem] font-light text-[24px]">Company</h4>
            <ul className="list-none my-[2rem]">
              <li className="h-[2rem]">
                <Link href="/about" className="no-underline text-[#99A1AF]">
                  About
                </Link>
              </li>
              <li className="h-[2rem]">
                <Link href="#" className="no-underline text-[#99A1AF]">
                  Account
                </Link>
              </li>
              <li className="h-[2rem]">
                <Link href="/contacts" className="no-underline text-[#99A1AF]">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          {/* Legal Section */}
          <div className="w-[40%] h-full flex flex-col justify-evenly transition-all duration-500 ease-in-out max-[1000px]:w-[60%] max-[1000px]:items-start max-[1000px]:justify-start">
            <h4 className="h-[2rem] font-light text-[24px]">
              Legal & Support
            </h4>
            <ul className="list-none my-[2rem]">
              <li className="h-[2rem]">
                <Link href="/submit_ticket" className="no-underline text-[#99A1AF]">
                  Submit Ticket
                </Link>
              </li>
              <li className="h-[2rem]">
                <Link href="/terms_of_service" className="no-underline text-[#99A1AF]">
                  Terms of Services
                </Link>
              </li>
              <li className="h-[2rem]">
                <Link href="/privacy_policy" className="no-underline text-[#99A1AF]">
                  Privacy Policy
                </Link>
              </li>
              <li className="h-[2rem]">
                <Link href="/license" className="no-underline text-[#99A1AF]">
                  License
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* Bottom Component */}
      <div className="border-t border-t-[rgba(153,161,175,0.5)] w-[90%] h-[30%] flex justify-center items-center text-[#99A1AF] transition-all duration-500 ease-in-out max-[1000px]:h-[20%]">
        <h5 className="font-light">
          &copy; 2025 HydroFlow Lude, Inc. All rights reserved.
        </h5>
      </div>
    </div>
  );
};

export default Footer;
