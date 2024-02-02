const Update = ({ action, userName, avatar }) => {
  return (
    <div className="flex flex-row items-center justify-between py-2 px-3  w-full hover:bg-slate-100 cursor-pointer">
      <div className="flex flex-row items-center justify-center gap-4 ">
        <img
          src={avatar}
          className="object-cover rounded-full h-[2rem] w-[2rem]"
        />
        {action === "likedPost" && (
          <div className="flex flex-col">
            <p className="text-sm font-bold text-slate-950">
              {userName} liked your post.{" "}
            </p>
          </div>
        )}
        {action === "newPost" && (
          <div className="flex flex-col">
            <p className="text-sm font-bold text-slate-950">
              {userName} posted a new post{" "}
            </p>
          </div>
        )}
        {action === "followRequest" && (
          <div className="flex flex-row justify-between items-center gap-2">
            <p className="text-sm font-bold text-slate-950">
              {userName} requested to follow you
            </p>
            <button className="text-sm text-purple-900 font-extrabold cursor-pointer ">
              Accept
            </button>
          </div>
        )}
        {action === "acceptRequest" && (
          <div className="flex flex-col">
            <p className="text-sm font-bold text-slate-950">
              {userName} accept your follow request.
            </p>
          </div>
        )}
        {action === "commentPost" && (
          <div className="flex flex-col">
            <p className="text-sm font-bold text-slate-950">
              {userName} comment on your post.
            </p>
          </div>
        )}
        {action === "startedFollowing" && (
          <div className="flex flex-col">
            <p className="text-sm font-bold text-slate-950">
              {userName} started following you.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Update;
