import './user.css';

const User = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-12 px-4 md:px-20 lg:px-60 py-10 md:py-20'>
      <div className='card'> 
        <div className="paragraph pt-4 font-space text-4xl">We would love to help you with UX/UI & Brand-Identity Design and help you kickstart your business.</div>
      </div>

      <div className='bg-green dropbox p-5 rounded-lg'> 

        <div className="flex">
          <div className="circle rounded-full w-16 h-16 bg-orange border-[3px] mr-4"></div>
          <div className='box'>
            <div className="header">John Smith</div>
            <div className="subheader">New York</div>
          </div>
        </div>

        <div className="paragraph pt-4">“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.”</div>
      </div>

      <div className='bg-green dropbox p-5 rounded-lg'> 

        <div className="flex">
          <div className="circle rounded-full w-16 h-16 bg-orange border-[3px] mr-4"></div>
          <div className='box'>
            <div className="header">John Smith</div>
            <div className="subheader">New York</div>
          </div>
        </div>

        <div className="paragraph pt-4">“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.”</div>
      </div>

      <div className='bg-green dropbox p-5 rounded-lg'> 

        <div className="flex">
          <div className="circle rounded-full w-16 h-16 bg-orange border-[3px] mr-4"></div>
          <div className='box'>
            <div className="header">John Smith</div>
            <div className="subheader">New York</div>
          </div>
        </div>

        <div className="paragraph pt-4">“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.”</div>
      </div>

    </div>
  )
}
export default User