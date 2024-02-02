import Avatar1 from "../Assets/avatar/Avatar2.avif";


const Profile = () => {
  return (
    <div className="flex flex-col items-center py-4 px-6 w-full border-2 rounded-md gap-8">
      <div className="flex flex-col w-full items-center justify-center gap-2">
        <img
          src={Avatar1}
          className="object-cover h-[10rem] w-[10rem] min-h-[3rem] min-w-[3rem] rounded-full ring-4 ring-purple-800 rin"
        />
        <div className="flex flex-col items-center ">
          <h2 className="text-3xl font-bold">Garima Sharma</h2>
          <p className="text-base font-bold ">Software Enginner</p>
        </div>
        <div className="border-2 text-xl font-bold py-2 px-8 rounded-md text-purple-800 border-purple-800 cursor-pointer">View Profile</div>
      </div>
      <div className="flex flex-row gap-4 items-center justify-center">
        <div className="flex flex-col items-center justify-center border-r-2 px-4">
          <h2 className="font-bold text-xl">900</h2>
          <h5 className="font-bold text-base">followers</h5>
        </div>
        <div className="flex flex-col items-center justify-center px-4">
          <h2 className="font-bold text-xl">100</h2>
          <h5 className="font-bold text-base">Following</h5>
        </div>
      </div>
    </div>
  );
};

export default Profile;
