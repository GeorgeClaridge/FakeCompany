import './plan.css';

const Plan = () => {
  return (
    <div className='grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-5 bg-green px-20 py-20'>

      <div className="card dropbox">

        <div className="flex justify-between bg-purple py-2 px-4 border-b-[3px] border-black">
          <div className="header font-space">FREE</div>
          <div className="image font-space">X</div>
        </div>

        <div className="paragraph">
          <div className="header font-space">INSIDE HEADER</div>
          <div className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</div>
          <button className='bg-orange font-space dropbox'>JOIN NOW</button>
        </div>

      </div>

      <div className="image text-center hidden lg:block">change this so there is no grid gaps. saves space and does not effect image</div>

      <div className="card dropbox">

        <div className="flex justify-between bg-purple py-2 px-4 border-b-[3px] border-black">
          <div className="header font-space">FREE</div>
          <div className="image font-space">X</div>
        </div>

        <div className="paragraph">
          <div className="header font-space">INSIDE HEADER</div>
          <div className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</div>
          <button className='bg-orange font-space dropbox'>JOIN NOW</button>
        </div>

      </div>

      <div className="image text-center hidden lg:block">Arrow</div>

      <div className="card dropbox">

        <div className="flex justify-between bg-purple py-2 px-4 border-b-[3px] border-black">
          <div className="header font-space">FREE</div>
          <div className="image font-space">X</div>
        </div>

        <div className="paragraph">
          <div className="header font-space">INSIDE HEADER</div>
          <div className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</div>
          <button className='bg-orange font-space dropbox'>JOIN NOW</button>
        </div>

      </div>

      
    </div>
  )
}
export default Plan