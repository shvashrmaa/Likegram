import {
  HiUserCircle,
  HiEllipsisHorizontal,
  HiOutlineHeart,
  HiOutlinePaperAirplane,
  HiOutlineChatBubbleOvalLeft,
} from "react-icons/hi2";

const Posts = ({ image, userName, Likes, comments, shares }) => {
  return (
    <div className="flex flex-col border-2 w-full py-2 px-4 gap-4">
      <div className="flex flex-row justify-between items-center ">
        <div className="flex flex-row gap-4 items-center justify-start">
          <HiUserCircle className="text-3xl cursor-pointer" />
          <div className="flex flex-col">
            <h6 className="text-md font-bold cursor-pointer text-gray-800">
              {userName}
            </h6>
            <p className="text-xs font-semibold text-gray-700">
              posted 10min ago
            </p>
          </div>
        </div>
        <div>
          <HiEllipsisHorizontal className="text-2xl cursor-pointer text-purple-800" />
        </div>
      </div>
      <div className="w-full ">
        <img src={image} className="object-cover min-h-40 min-w-40" />
      </div>
      <p className="text-base font-semibold text-slate-400">
        You and {Likes} liked the post. {comments} Commented
      </p>
      <div className="flex flex-row justify-start items-center gap-4">
        <span className="flex flex-row gap-1 items-center justify-center">
          <HiOutlineHeart className="text-2xl text-purple-900 cursor-pointer hover:text-purple-950 " />
          <p className="text-base font-semibold text-slate-400">Like</p>
        </span>
        <span className="flex flex-row gap-1 items-center justify-center">
          <HiOutlineChatBubbleOvalLeft className="text-2xl text-purple-900 cursor-pointer hover:text-purple-950 " />
          <p className="text-base font-semibold text-slate-400">Comment</p>
        </span>
        <HiOutlinePaperAirplane className="text-2xl text-purple-900 cursor-pointer hover:text-purple-950 " />
      </div>
    </div>
  );
};

export default Posts;
