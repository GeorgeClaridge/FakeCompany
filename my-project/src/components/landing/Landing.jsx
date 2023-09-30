import './landing.css';
import { Background, HeartArrow, PopLines } from './import';

const Landing = () => {
  return (
    <div className="Background bg-green bg-no-repeat bg-bottom"  style={{ backgroundImage: `url(${Background})` }}>

      <div className="text-center py-10 md:py-20">

        <div className="flex justify-center">
          <div className="-ml-2 -mt-8 w-14 h-14"></div>
          <div className="Header text-4xl md:text-6xl font-space bg-no-repeat">How Lovable</div>
          <img className="-ml-2 -mt-6 md:-mt-8 w-10 h-10 md:w-14 md:h-14" src={HeartArrow} alt="" />
        </div>
        
        <div className="Header text-4xl md:text-6xl font-space">Software is Built</div>
        <div className="Subheader text-base md:text-xl py-3 font-open">Design, build, share what makes you smile</div>

        <div className='flex justify-center'>
          <img className="w-10 h-10 mt-10" src={PopLines} alt="" />
          <a href="https://www.figma.com/file/yUf60Lk7wxET028cQ6ukCS/Untitled?type=design&node-id=0%3A1&mode=design&t=9cSjTM2GTZo9Gxq0-1" target="_blank" rel="noopener noreferrer">
            <button className="Button py-2 px-8 bg-orange text-lg md:text-2xl font-bold dropbox font-space self-start">Join The Community</button>
          </a>
          <div className="w-10 h-10 mt-10"></div>
        </div>
      </div>
        
    </div>
  )
}
export default Landing