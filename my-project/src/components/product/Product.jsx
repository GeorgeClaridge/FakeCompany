import './product.css';
import {  Data, Mobile } from './import';

const Product = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-12 px-4 md:px-20 lg:px-60 py-10 md:py-20'>
      <div className="box bg-green dropbox rounded-xl p-5">
        <div className="header font-space text-4xl">Design UX/UI with a personality</div>
        <div className="paragraph py-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</div>
        <button className='bg-orange font-space dropbox my-2 px-4 py-2 text-2xl'>Learn More</button>
      </div>

      <div className="box bg-green dropbox rounded-xl p-5">
        <div className="header font-space text-4xl">Design UX/UI with a personality</div>
        <div className="paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</div>
        <button className='bg-orange font-space dropbox my-2 px-4 py-2 text-2xl'>Learn More</button>
      </div>

      <div className="box bg-green dropbox rounded-xl p-5">
        <div className="header font-space text-4xl">Design UX/UI with a personality</div>
        <div className="paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</div>
        <button className='bg-orange font-space dropbox my-2 px-4 py-2 text-2xl'>Learn More</button>
      </div>

      <div className="box bg-green dropbox rounded-xl p-5">
        <div className="header font-space text-4xl">Design UX/UI with a personality</div>
        <div className="paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</div>
        <button className='bg-orange font-space dropbox my-2 px-4 py-2 text-2xl'>Learn More</button>
      </div>
    </div>
  )
}
export default Product