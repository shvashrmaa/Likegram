import { HiEllipsisHorizontal } from "react-icons/hi2";
import Update from "./Update";

const Updates = () => {
  return (
    <div className="border-2 flex flex-col py-2 gap-4">
      <div className="flex flex-row justify-between items-center px-3">
        <h1 className="text-2xl font-bold text-slate-600">Updates</h1>
        <HiEllipsisHorizontal className="text-2xl text-purple-800 cursor-pointer" />
      </div>
      <div className="flex flex-col gap-4 ">
        <Update
          action={"newPost"}
          userName={"ShivaSahrma"}
          avatar={undefined}
        />
        <Update
          action={"likedPost"}
          userName={"DivyanshuDubey"}
          avatar={undefined}
        />
        <Update
          action={"followRequest"}
          userName={"TiwariKushal"}
          avatar={undefined}
        />
        <Update
          action={"acceptRequest"}
          userName={"DhiruKushal"}
          avatar={undefined}
        />
        <Update
          action={"commentPost"}
          userName={"Shvashrma"}
          avatar={undefined}
        />
        <Update
          action={"startedFollowing"}
          userName={"Shvashrma"}
          avatar={undefined}
        />
      </div>
    </div>
  );
};

export default Updates;
