import "./product.css";
import { Data, Build } from "./import";

const Product = () => {
  return (
    <div className="grid items-center grid-cols-1 md:grid-cols-2 gap-12 px-4 md:px-20 xl:px-60 2xl:px-96 py-10 md:py-20">
      <div className="box bg-green dropbox rounded-2xl p-5 h-min md:order-1">
        <div className="header font-space text-4xl">
          Design UX/UI with a personality
        </div>
        <div className="paragraph pb-2 pt-4 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          enim ad minim veniam.
        </div>
        <button className="bg-orange hover:bg-purple duration-300 font-space dropbox my-2 px-4 py-2 text-2xl">
          Learn More
        </button>
      </div>

      <div className="card dropbox md:order-2">

        <div className="flex justify-between bg-orange py-2 px-4 border-b-[3px] border-black">
          <div className="header font-space">Get In The Flow With Wubble</div>
        </div>

        <div className="paragraph p-4 bg-white">
          <img src={Build} alt="" />
        </div>

      </div>

      <div className="card dropbox order-last md:order-3">

        <div className="flex justify-between bg-purple py-2 px-4 border-b-[3px] border-black">
          <div className="header font-space">We Understand How Important Data Is</div>
        </div>

        <div className="paragraph p-4 bg-white flex justify-center items-center">
          <img className='' src={Data} alt="" />
        </div>

      </div>

      <div className="box bg-green dropbox rounded-2xl p-5 h-min md:order-4">
        <div className="header font-space text-4xl">
          Accelerating Insights using Wubble
        </div>
        <div className="paragraph pb-2 pt-4 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          enim ad minim veniam.
        </div>
        <button className="bg-orange hover:bg-purple duration-300 font-space dropbox my-2 px-4 py-2 text-2xl">
          Learn More
        </button>
      </div>
    </div>
  );
};
export default Product;
