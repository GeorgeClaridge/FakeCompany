import {
  UserHeaderOne,
  UserHeaderTwo,
  UserHeaderThree,
  Profile,
} from "./import";
import "./user.css";

const User = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 px-4 md:px-20 xl:px-60 2xl:px-96 py-10 md:py-20">
      <div className="card">
        <div className="paragraph pt-4 font-space text-4xl">
          We would love to help you with UX/UI & Brand-Identity Design and help
          you kickstart your business.
        </div>
      </div>

      <div className="bg-green dropbox p-5 rounded-2xl group">
        <div className="flex justify-between group">
          <div className="flex">
            <img
              src={Profile}
              alt="Profile"
              className="rounded-full border-[3px] w-16 h-16 mr-4"
            />
            <div className="User">
              <div className="Name font-bold font-space text-xl">
                John Smith
              </div>
              <div className="Title font-bold font-space text-lg">New York</div>
            </div>
          </div>

          <img className="-mt-16 h-24 md:h-32 group-hover:animate-wiggle" src={UserHeaderOne} alt="" />
        </div>

        <div className="paragraph pt-4 leading-relaxed">
          “I recently had the pleasure of experiencing the innovative solutions
          provided by Wubble, and I must say, I am thoroughly impressed!
          Wubble's commitment to excellence shines through in every aspect of
          their software offerings.”
        </div>
      </div>

      <div className="bg-green dropbox p-5 rounded-2xl group">
        <div className="flex justify-between group">
          <div className="flex">
            <img
              src={Profile}
              alt="Profile"
              className="rounded-full border-[3px] w-16 h-16 mr-4"
            />
            <div className="User">
              <div className="Name font-bold font-space text-xl">
                John Smith
              </div>
              <div className="Title font-bold font-space text-lg">New York</div>
            </div>
          </div>

          <img className="-mt-16 h-24 md:h-32 group-hover:animate-wiggle" src={UserHeaderTwo} alt="" />
        </div>

        <div className="paragraph pt-4 leading-relaxed">
          "Wubble shines in the software industry with its user-friendly
          interfaces and innovative solutions. Their commitment to customer
          satisfaction is evident through responsive support and regular
          updates. With Wubble, clients not only receive cutting-edge technology
          but also personalized attention, making them a trusted partner in the
          digital world."
        </div>
      </div>

      <div className="bg-green dropbox p-5 rounded-2xl group">
        <div className="flex justify-between group">
          <div className="flex">
            <img
              src={Profile}
              alt="Profile"
              className="rounded-full border-[3px] w-16 h-16 mr-4"
            />
            <div className="User">
              <div className="Name font-bold font-space text-xl">
                John Smith
              </div>
              <div className="Title font-bold font-space text-lg">New York</div>
            </div>
          </div>

          <img className='-mt-16 h-24 md:h-32 group-hover:animate-wiggle' src={ UserHeaderThree } alt="" />

        </div>

        <div className="paragraph pt-4 leading-relaxed">
          “Wubble sets a high standard in the software industry, offering
          intuitive interfaces and innovative solutions. Their customer-centric
          approach shines through in their responsive support and commitment to
          continual improvement. Wubble doesn't just provide software; they
          cultivate lasting relationships built on trust and reliability, making
          them a standout choice for businesses navigating the dynamic digital
          world.”
        </div>
      </div>
    </div>
  );
};
export default User;
