export default function Page() {
    return (
      <div className="w-full p-[7.5rem] flex justify-center items-center text-[#15B392] bg-[url('/images/contactBackground.jpg')] bg-cover bg-top">
        <div className="w-3/4 bg-white/75 py-[7rem] px-[5rem] rounded-[2.5rem] flex flex-col items-center">
          <div className="w-full flex justify-center mb-10">
            <h2 className="font-medium text-[42px]">Contact Us</h2>
          </div>
          <form action="submit" className="w-full flex flex-col items-center mb-8">
            <div className="w-full flex flex-col mb-4">
              <label htmlFor="name" className="block mb-2 text-[22px] font-normal">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="customerName"
                required
                className="w-full p-4 text-[#15B392] font-light text-[16px] bg-black/20 border border-[#15B392] rounded-[1rem]"
              />
            </div>
            <div className="w-full flex flex-col mb-4">
              <label htmlFor="email" className="block mb-2 text-[22px] font-normal">
                Your Email
              </label>
              <input
                type="text"
                id="email"
                name="email"
                required
                className="w-full p-4 text-[#15B392] font-light text-[16px] bg-black/20 border border-[#15B392] rounded-[1rem]"
              />
            </div>
            <div className="w-full flex flex-col mb-4">
              <label htmlFor="textArea" className="block mb-2 text-[22px] font-normal">
                How Can We Help You?
              </label>
              <textarea
                name="textarea"
                id="textArea"
                rows="10"
                cols="50"
                required
                className="w-full p-4 text-[#15B392] font-light text-[16px] bg-black/20 border border-[#15B392] rounded-[1rem]"
              ></textarea>
            </div>
          </form>
          <div className="submit">
            <button
              type="submit"
              className="w-[10.5rem] h-[3.5rem] bg-[#15B392] text-white text-[18px] font-light rounded-[1rem] hover:bg-white hover:text-[#15B392] hover:font-normal hover:border hover:border-[#15B392] transition-colors"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    );
  }
  