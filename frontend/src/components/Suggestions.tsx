import { HiEllipsisHorizontal } from "react-icons/hi2";
import People from "./People";
import Avatar1 from "../Assets/avatar/Avatar1.avif";
import Avatar2 from "../Assets/Image1.png";
import Avatar3 from "../Assets/image2.jpg";
import Avatar4 from "../Assets/image3.png";
import Avatar5 from "../Assets/image4.jpg";

const Suggestions = () => {
  return (
    <div className="border-2 flex flex-col py-2 gap-4">
      <div className="flex flex-row justify-between items-center px-3">
        <h1 className="text-2xl font-bold text-slate-600">Suggestions</h1>
        <HiEllipsisHorizontal className="text-2xl text-purple-800 cursor-pointer" />
      </div>
      <div className="flex flex-col gap-4 ">
        <People
          userName={"shivaSharma"}
          Avatar={Avatar1}
          Bio={"Graphic Designer"}
        />
        <People
          userName={"TannuSharma"}
          Avatar={Avatar2}
          Bio={"Software Enginner"}
        />
        <People userName={"KunalSharma"} Avatar={Avatar3} Bio={"HR"} />
        <People
          userName={"DubeySharma"}
          Avatar={Avatar4}
          Bio={"Mechanical Enginner"}
        />
        <People
          userName={"Unknown"}
          Avatar={Avatar5}
          Bio={"Softwaer Engineer"}
        />
      </div>
    </div>
  );
};

export default Suggestions;
