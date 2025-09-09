import { useState } from "react";

function FlipCard({ mainText, backText }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="w-full h-60 perspective"
      onClick={() => setFlipped(!flipped)}
    >
      <div
        className={`relative w-full h-full transition-transform duration-700 transform ${
          flipped ? "rotate-y-180" : ""
        }`}
      >
        {/* Front Side */}
        <div className="absolute w-full h-full backface p-6 bg-white rounded-xl shadow-md flex items-center justify-center">
          <p className="text-lg font-medium text-gray-800 text-center">
            {mainText}
          </p>
        </div>

        {/* Back Side */}
        <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-[#602bf8] rounded-xl shadow-md flex items-center justify-center">
          {backText}
        </div>
      </div>
    </div>
  );
}

export default FlipCard;
