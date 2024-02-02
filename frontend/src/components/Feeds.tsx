import Posts from "./Posts";
import Image1 from "../Assets/Image1.png";
import Image2 from "../Assets/image2.jpg";
import Image3 from "../Assets/image3.png";
import Image4 from "../Assets/image4.jpg";
import Image5 from "../Assets/image5.gif";

const Feeds = () => {
  return (
    <section className="flex flex-col border-x-2 w-full h-[100%] overflow-y-scroll scrollbar-hide">
      <div className="h-full overflow-scroll scrollbar-hide flex flex-col gap-4 px-4 py-2">
        <Posts
          image={Image1}
          userName={"shivasharma"}
          Likes={40}
          shares={90}
          comments={10}
        />
        <Posts
          image={Image2}
          userName={"divyanshuDubey"}
          Likes={40}
          shares={90}
          comments={10}
        />
        <Posts
          image={Image3}
          userName={"GarmiaSharma"}
          Likes={40}
          shares={90}
          comments={10}
        />
        <Posts
          image={Image4}
          userName={"KUnalSharma"}
          Likes={40}
          shares={90}
          comments={10}
        />
        <Posts
          image={Image5}
          userName={"KushalTiwari"}
          Likes={40}
          shares={90}
          comments={10}
        />
        <Posts
          image={Image5}
          userName={"KushalTiwari"}
          Likes={40}
          shares={90}
          comments={10}
        />
        <Posts
          image={Image5}
          userName={"KushalTiwari"}
          Likes={40}
          shares={90}
          comments={10}
        />
        <Posts
          image={Image5}
          userName={"KushalTiwari"}
          Likes={40}
          shares={90}
          comments={10}
        />
        <Posts
          image={Image5}
          userName={"KushalTiwari"}
          Likes={40}
          shares={90}
          comments={10}
        />
      </div>
    </section>
  );
};

export default Feeds;
