import {  UserHeader } from './import';
import './user.css';

const User = () => {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 px-4 md:px-20 xl:px-60 py-10 md:py-20'>
      <div className='card'> 
        <div className="paragraph pt-4 font-space text-4xl">We would love to help you with UX/UI & Brand-Identity Design and help you kickstart your business.</div>
      </div>

      <div className='bg-green dropbox p-5 rounded-2xl'> 

        <div className="flex justify-between">
          <div className='flex'>
            <div className="circle rounded-full w-16 h-16 bg-orange border-[3px] mr-4"></div>
            <div className='box'>
              <div className="header font-bold font-space text-xl">John Smith</div>
              <div className="subheader font-bold font-space text-lg">New York</div>
            </div>
          </div>

          <img className='-mt-16 h-24 md:h-32' src={ UserHeader} alt="" />

        </div>

        <div className="paragraph pt-4">“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.”</div>
      </div>

      <div className='bg-green dropbox p-5 rounded-2xl'> 

        <div className="flex justify-between">
          <div className='flex'>
            <div className="circle rounded-full w-16 h-16 bg-orange border-[3px] mr-4"></div>
            <div className='box'>
              <div className="header font-space text-xl">John Smith</div>
              <div className="font-bold font-space text-lg">New York</div>
            </div>
          </div>

          <img className='-mt-16 h-24 md:h-32' src={ UserHeader} alt="" />

        </div>

        <div className="paragraph pt-4">“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.”</div>
      </div>

      <div className='bg-green dropbox p-5 rounded-2xl'> 

        <div className="flex justify-between">
          <div className='flex'>
            <div className="circle rounded-full w-16 h-16 bg-orange border-[3px] mr-4"></div>
            <div className='box'>
              <div className="header font-space text-xl">John Smith</div>
              <div className="font-bold font-space text-lg">New York</div>
            </div>
          </div>

          <img className='-mt-16 h-24 md:h-32' src={ UserHeader} alt="" />

        </div>

        <div className="paragraph pt-4">“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.”</div>
      </div>

    </div>
  )
}
export default User