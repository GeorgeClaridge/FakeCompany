import { Logo } from './import';
import './navbar.css';

const Navbar = () => {
  return (
    <div className="bg-green px-4  md:px-20 lg:px-60 py-4 ">
        <div className="flex justify-between">
          <img src={Logo} alt="" />
          <a href="https://www.figma.com/file/yUf60Lk7wxET028cQ6ukCS/Untitled?type=design&node-id=0%3A1&mode=design&t=9cSjTM2GTZo9Gxq0-1" target="_blank" rel="noopener noreferrer">
            <button className='bg-orange hover:bg-purple duration-300 dropbox py-2 px-8 text-xl md:text-2xl font-space hover:scale-105 hover:-translate-y-1'>Figma File</button>
          </a>
        </div>
    </div>
  )
}
export default Navbar