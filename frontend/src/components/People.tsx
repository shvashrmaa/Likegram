const People = ({ Avatar, userName, Bio }) => {
  return (
    <div className="flex flex-row items-center justify-between py-2 px-3  w-full hover:bg-slate-100 cursor-pointer">
      <div className="flex flex-row items-center justify-center gap-4 ">
        <img
          src={Avatar}
          className="object-cover rounded-full h-[3rem] w-[3rem]"
        />
        <div className="flex flex-col">
          <h1 className="text-xl font-bold text-slate-950">{userName}</h1>
          <p className="text-sm font-bold text-slate-900">{Bio}</p>
        </div>
      </div>
      <div className="flex flex-row items-center justify-center gap-2 ">
        <h1 className="text-xl text-purple-900 font-bold cursor-pointer ">
          Follow
        </h1>
      </div>
    </div>
  );
};

export default People;
