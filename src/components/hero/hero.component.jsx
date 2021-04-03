import React from "react";

const HeroContent = () => (
  <div
    className="text-white pt-12 md:h-screen"
    style={{ backgroundColor: "#2F1893", height: "50vh" }}
  >
    <h1 className="pt-10 font-extrabold text-5xl">
      {" "}
      Let's make design <br /> fast and easy{" "}
    </h1>
    <p className="pt-10 text-center md:justify-left">
      The most important part of the Startup is the samples.
      <br /> The samples form a set of 25 usable pages you can use as <br />
      is or you can add new blocks from UI Kit.{" "}
    </p>
    <div className="pt-16">
      <form>
        <label>
          <input
            type="text"
            placeholder="Your email"
            className="rounded-full p-2"
            style={{
              backgroundColor: "#2F1893",
              border: "1px solid silver",
              width: "250px",
            }}
          />
          <button
            className="text-gray-100 p-2 hover:bg-blue-700 ml-2 rounded-full"
            style={{ backgroundColor: "#25DAC5", width: "80px" }}
          >
            Send
          </button>
        </label>
      </form>
      <p className="p-6 text-xs" style={{ color: "silver" }}>
        By signing up, you agree to the Terms of Service
      </p>
    </div>
  </div>
);

export default HeroContent;
