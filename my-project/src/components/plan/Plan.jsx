import './plan.css';
import { BackgroundDouble } from './import';

const Plan = () => {
  return (
    <div className='grid grid-cols-1 gap-12 lg:grid-cols-3 bg-green px-4 md:px-20 xl:px-60 py-10 md:py-20 bg-no-repeat bg-center bg-cover'  style={{ backgroundImage: `url(${BackgroundDouble})` }} >

      <div className="card dropbox">

        <div className="flex justify-between bg-purple py-2 px-4 border-b-[3px] border-black">
          <div className="header font-space">FREE</div>
          <div className="image font-space">X</div>
        </div>

        <div className="paragraph p-4 bg-white">
          <div className="header font-space py-2 text-2xl">INSIDE HEADER</div>
          <div className="text leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</div>
          <div className='flex justify-center'>
            <button className='bg-orange hover:bg-purple duration-300 font-space dropbox my-2 px-4 py-2 text-2xl'>JOIN NOW</button>
          </div>
        </div>

      </div>

      <div className="card dropbox">

        <div className="flex justify-between bg-purple py-2 px-4 border-b-[3px] border-black">
          <div className="header font-space">STANDARD</div>
          <div className="image font-space">X</div>
        </div>

        <div className="paragraph p-4 bg-white">
          <div className="header font-space py-2 text-2xl">INSIDE HEADER</div>
          <div className="text leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</div>
          <div className='flex justify-center'>
            <button className='bg-orange hover:bg-purple duration-300 font-space dropbox my-2 px-4 py-2 text-2xl'>JOIN NOW</button>
          </div>
        </div>

      </div>

      <div className="card dropbox">

        <div className="flex justify-between bg-purple py-2 px-4 border-b-[3px] border-black">
          <div className="header font-space">PRO</div>
          <div className="image font-space">X</div>
        </div>

        <div className="paragraph p-4 bg-white">
          <div className="header font-space py-2 text-2xl">INSIDE HEADER</div>
          <div className="text leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</div>
          <div className='flex justify-center'>
            <button className='bg-orange hover:bg-purple duration-300 font-space dropbox my-2 px-4 py-2 text-2xl'>JOIN NOW</button>
          </div>
        </div>

      </div>

      
    </div>
  )
}
export default Plan