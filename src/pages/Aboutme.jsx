import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import Card from "../components/Card";
import FlipCard from "../components/FlipCard";

function AboutMe() {
  const [showOverlay, setShowOverlay] = useState(false);
  const form = useRef();

  const handleButtonClick = () => setShowOverlay(true);
  const classOverlay = () => setShowOverlay(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_khq9vup",
        "template_1kwpa0d",
        form.current,
        "B0yjmTbV0_o-hh40B"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Thank you for letting me know!");
          classOverlay();
        },
        (error) => {
          console.log(error.text);
          alert("Oops! Something went wrong.");
        }
      );
  };
  return (
    <div>
      <div className="pt-4 flex items-stretch justify-between gap-8 w-full">
        <div className="flex flex-col pt-8">
          <h1 className="text-3xl font-bold">
            Hi guys! I am Yukta,
            <br />
            thanks for checking
            <br />
            my portfolio out!
          </h1>
          <button
            onClick={handleButtonClick}
            className="text-xl pt-2 hover:text-[#602BF8] transition-colors duration-300"
          >
            Tell me how's your day going?
          </button>
        </div>
        <div className="flex flex-row items-center gap-8 pt-4 md:pr-12 w-3/4 justify-start">
          <FlipCard
            mainText={"My current favorite artist"}
            backText={"PARTYNEXTDOOR"}
          />

          <FlipCard
            mainText={"My current favorite artist"}
            backText={"PARTYNEXTDOOR"}
          />

          <FlipCard
            mainText={"My current favorite artist"}
            backText={"PARTYNEXTDOOR"}
          />
        </div>
      </div>
      <div className="flex flex-col  justify-center items-center gap-8  pt-4 md:pr-12">
        <Card
          title="BRAIN TUMOR DETECTION"
          value={70}
          chartType="bar"
          maxValue={100}
          progressLabel="Goal"
          progressColor="#602BF8"
        />
        <Card
          title="AGENTIC AI"
          value={97}
          chartType="bar"
          maxValue={100}
          progressLabel="Goal"
          progressColor="#602BF8"
        />
      </div>
      <div className="flex flex-col justify-center items-center gap-8  pt-4 md:pr-12">
        <Card
          title="BRAIN TUMOR DETECTION"
          value={70}
          chartType="bar"
          maxValue={100}
          progressLabel="Goal"
          progressColor="#602BF8"
        />
        <Card
          title="AGENTIC AI"
          value={97}
          chartType="bar"
          maxValue={100}
          progressLabel="Goal"
          progressColor="#602BF8"
        />
      </div>

      {/* Overlay */}
      {showOverlay && (
        <div className="fixed inset-0 bg-[#602BF8]/80 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 shadow-lg relative">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-[#602BF8]"
              onClick={classOverlay}
            >
              &times;
            </button>
            <h2 className="text-xl font-bold mb-4">How's your day going?</h2>
            <form
              ref={form}
              onSubmit={sendEmail}
              className="flex flex-col gap-4"
            >
              <input
                type="text"
                name="user_name"
                placeholder="Your Name"
                className="border rounded px-3 py-2"
                required
              />{" "}
              <input
                type="email"
                name="user_email"
                placeholder="Your Email"
                className="border rounded px-3 py-2"
                required
              />
              <textarea
                name="message"
                placeholder="Your Message"
                className="border rounded px-3 py-2"
                required
              />
              <button
                type="submit"
                className="bg-[#602BF8] text-white px-4 py-2 rounded hover:bg-[#3B1A9B] transition"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default AboutMe;
