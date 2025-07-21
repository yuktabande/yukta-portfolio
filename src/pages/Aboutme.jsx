import Hobbies from "../components/Hobbies";
import Profile from "../components/Profile";

function Aboutme() {
  return (
    <div className="flex justify-start w-3/4 min-h-[500px] gap-8">
      <Profile />
      <Hobbies />
    </div>
  );
}

export default Aboutme;
