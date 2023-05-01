import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg_1.jpg'
import './about.css'
import StoryImage from '../../images/about1.jpg'
import VisionImage from '../../images/about2.jpg'
import Testimonials from '../../components/Testimonials'

const About = () => {
  return (
    <>
    <Header title="About Us" image={HeaderImage}>
    Zenx Design Studio is here to create lasting impressions with dwellings that reflects your dreams!
    </Header>

    <section className='about__story'>
      <div className="container about__story-container">
        <div className="about__section-image">
          <img src={StoryImage} alt="Our Story Image" />
        </div>
        <div className="about__section-content">
          <h1>Our Story</h1>
          <p>
          ZDS was born from a passion to create exclusive and innovative spaces that enhance the quality and aesthetics in the lives of people.</p>
          <p>
          We house a team of experts, who are equipped with the skills and techniques that help you achieve your dream. 
          </p>
          <p>
          We understand the uniqueness of every client’s needs, and we work together in creating awe-inspiring solutions. Our clients are our greatest assets and their happiness and satisfaction, our ultimate goal
          </p>
        </div>
      </div>

    </section>

    <section className='about__vision'>
      <div className="container about__vision-container">
        
        <div className="about__section-content">
          <h1>Our Vision</h1>
          <p>
          ZDS was born from a passion to create exclusive and innovative spaces that enhance the quality and aesthetics in the lives of people.</p>
          <p>
          We house a team of experts, who are equipped with the skills and techniques that help you achieve your dream.
          </p>
          <p>
          We understand the uniqueness of every client’s needs, and we work together in creating awe-inspiring solutions. Our clients are our greatest assets and their happiness and satisfaction, our ultimate goal
          </p>
        </div>
        <div className="about__section-image">
          <img src={VisionImage} alt="Our Vision Image" />
        </div>
      </div>

    </section>

    <Testimonials/>


   
    </>
  )
}

export default About