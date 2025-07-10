import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
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
  const navigate = useNavigate();
  const location = useLocation();

  const paths = [
    "/aboutme",
    "/projects",
    "/currently",
    "/achievements",
    "/skills",
  ];

  const [selected, setSelected] = useState(() => {
    const initialIndex = paths.indexOf(location.pathname);
    return initialIndex === -1 ? 0 : initialIndex;
  });

  return (
    <div className="fixed left-4 top-1/2 -translate-y-1/2 bg-[#602BF8] rounded-full flex flex-col items-center min-w-fit py-4 px-2 shadow-lg">
      <div className="flex flex-col items-center gap-y-2">
        {icons.map((icon, idx) => (
          <button
            key={icon.alt}
            className={`p-2 rounded-full transition ${
              selected === idx ? "bg-[#3B1A9B]" : "hover:bg-[#3B1A9B]"
            }`}
            onClick={() => {
              setSelected(idx);
              navigate(paths[idx]);
            }}
          >
            <img
              src={icon.src}
              alt={icon.alt}
              className="w-8 h-8 filter invert brightness-200"
            />
          </button>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
