import './plan.css';
import { TwoArrow } from './import';

const Plan = () => {
  return (
    <div className='grid grid-cols-1 gap-12 lg:gap-0 md:grid-cols-3 lg:grid-cols-5 bg-green px-4 md:px-20 py-10 md:py-20'>

      <div className="card dropbox">

        <div className="flex justify-between bg-purple py-2 px-4 border-b-[3px] border-black">
          <div className="header font-space">FREE</div>
          <div className="image font-space">X</div>
        </div>

        <div className="paragraph p-4">
          <div className="header font-space py-2 text-2xl">INSIDE HEADER</div>
          <div className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</div>
          <div className='flex justify-center'>
            <button className='bg-orange font-space dropbox my-2 px-4 py-2 text-2xl'>JOIN NOW</button>
          </div>
        </div>

      </div>

      <div className='hidden lg:flex lg:justify-center'>
        <img src={TwoArrow} alt="Skills" className='self-center w-[50%]'/>
      </div>
      

      <div className="card dropbox">

        <div className="flex justify-between bg-purple py-2 px-4 border-b-[3px] border-black">
          <div className="header font-space">FREE</div>
          <div className="image font-space">X</div>
        </div>

        <div className="paragraph p-4">
          <div className="header font-space py-2 text-2xl">INSIDE HEADER</div>
          <div className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</div>
          <div className='flex justify-center'>
            <button className='bg-orange font-space dropbox my-2 px-4 py-2 text-2xl'>JOIN NOW</button>
          </div>
        </div>

      </div>

      <div className="image text-center hidden lg:block">Arrow</div>

      <div className="card dropbox">

        <div className="flex justify-between bg-purple py-2 px-4 border-b-[3px] border-black">
          <div className="header font-space">FREE</div>
          <div className="image font-space">X</div>
        </div>

        <div className="paragraph p-4">
          <div className="header font-space py-2 text-2xl">INSIDE HEADER</div>
          <div className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</div>
          <div className='flex justify-center'>
            <button className='bg-orange font-space dropbox my-2 px-4 py-2 text-2xl'>JOIN NOW</button>
          </div>
        </div>

      </div>

      
    </div>
  )
}
export default Plan