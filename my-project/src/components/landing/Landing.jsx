import './landing.css';
import { Background } from './import';

const Landing = () => {
  return (
    <div className="Background bg-green bg-no-repeat bg-bottom"  style={{ backgroundImage: `url(${Background})` }}>

      <div className="text-center py-10 md:py-20">
        <div className="Header text-4xl md:text-6xl font-space">How Lovable</div>
        <div className="Header text-4xl md:text-6xl font-space">Software is Built</div>
        <div className="Subheader text-base md:text-xl py-3 font-open">Design, build, share what makes you smile</div>
        <button className="Button py-2 px-8 bg-orange text-lg md:text-2xl font-bold dropbox font-space">Join The Community</button>
      </div>
        
    </div>
  )
}
export default Landing