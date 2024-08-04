import logo from "../../public/multiple-choice.png";
import DarkLight from "./Darklight";
function Navbar() {
  return (
    <div className="w-full flex justify-around items-center p-6 bg-secondary ">
      <div className="flex justify-center items-center">
        <img src={logo} className="w-10 h-10 sm:w-12 sm:h-12" />
        <h1 className="text-center scroll-m-20 border-b text-2xl sm:text-4xl font-semibold tracking-tight">
          MCQ - App
        </h1>
      </div>
      <DarkLight />
    </div>
  );
}

export default Navbar;
