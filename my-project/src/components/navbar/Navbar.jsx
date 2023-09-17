import './navbar.css';

const Navbar = () => {
  return (
    <div className="bg-green py-4 px-20">
        <div className="flex justify-between">
          <div className="Brand text-3xl font-space">Wubble</div>
          <button className='bg-orange dropbox py-2 px-8 text-2xl font-space'>Try Now</button>
        </div>
    </div>
  )
}
export default Navbar