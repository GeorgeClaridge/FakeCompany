import { Logo } from './import';
import './navbar.css';

const Navbar = () => {
  return (
    <div className="bg-green px-4  md:px-20 lg:px-60 py-4 ">
        <div className="flex justify-between">
          <img src={Logo} alt="" />
          <button className='bg-orange dropbox py-2 px-8 text-xl md:text-2xl font-space'>Try Now</button>
        </div>
    </div>
  )
}
export default Navbar