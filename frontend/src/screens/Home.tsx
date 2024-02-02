import Navbar from "../components/Navbar";
import Feeds from "../components/Feeds";
import Profile from "../components/Profile";
import Suggestions from "../components/Suggestions";
import Updates from "../components/Updates";

const Home = () => {
  return (
    <section className="flex flex-col w-[70%] h-full items-center justify-center gap-4 overflow-scroll scrollbar-hide">
      <Navbar />
      <div className="flex flex-row w-full justify-between gap-8 overflow-hidden">
        <div className="flex flex-col gap-6 flex-[.3]">
          <Profile />
          <Suggestions />
        </div>
        <div className="flex-[.6]">
          <Feeds />
        </div>
        <div className="flex-[.3]">
          <Updates />
        </div>
      </div>
    </section>
  );
};

export default Home;
