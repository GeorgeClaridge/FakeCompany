import { Logo } from './import';
import './footer.css';

const Footer = () => {
  return (
    <div className="bg-green py-2">
        <div className="flex justify-center items-center">
          <img src={Logo} alt="" />
        </div>
    </div>
  )
}
export default Footer