import { useState } from "react";
import UserCircleGear from "../assets/UserCircleGear.png";
import Code from "../assets/Code.png";
import Confetti from "../assets/Confetti.png";
import Folders from "../assets/Folders.png";
import Spiral from "../assets/Spiral.png";

const icons = [
  { src: UserCircleGear, alt: "About me" },
  { src: Folders, alt: "Projects" },
  { src: Spiral, alt: "Currently" },
  { src: Confetti, alt: "Achievements" },
  { src: Code, alt: "Skills" },
];

function Sidebar() {
  const [selected, setSelected] = useState(0);

  return (
    <div
      className="fixed bottom-1/2 left-4 h-2/5 w-18 rounded-full flex flex-col items-center justify-between shadow-lg"
      style={{ backgroundColor: "#602BF8" }}
    >
      <div className="flex flex-col mt-4 items-center space-y-2 w-full">
        {icons.map((icon, idx) => (
          <button
            key={icon.alt}
            className={`p-2 rounded-full transition ${
              selected === idx ? "bg-white" : "hover:bg-violet-200"
            }`}
            onClick={() => setSelected(idx)}
          >
            <img src={icon.src} alt={icon.alt} className="w-8 h-8" />
          </button>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
