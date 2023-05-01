import { Link } from "react-router-dom"
import Image from '../images/main_header.jpg'


const MainHeader = () => {
  return (
    <header className="main__header">
      <div className="container main__header-container">
        <div className="main__header-left">
          <h4>
            ARCHITECTURE | INTERIORS | CONSTRUCTION
          </h4>
          <h1>
          Get Your Dream Home
          </h1>
          <p>
          Our team experts help you to have a complete furnished house right from planning, constructing & interior designing and let you unfold your sweetest dream into reality.
          </p>
          <Link to="/plans" className='btn lg'>GET A QUOTE
          
          </Link>
          </div>
          <div className="main__header-right">
            <div className="main__header-circle"></div>
            <div className="main__header-image">
              <img className="main__header-imageTwo" src={Image} alt="Main Header Image" />
            </div>
          </div>
          </div> 

    </header>
  )
}

export default MainHeader