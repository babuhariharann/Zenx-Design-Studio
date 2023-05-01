import './contact.css'
import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg_2.jpg'
import {MdEmail} from 'react-icons/md'
import {BsMessenger} from 'react-icons/bs'
import {IoLogoWhatsapp} from 'react-icons/io'
import Testimonials from '../../components/Testimonials'
import GetInTouch from '../../GetinTouch/GetInTouch'

const Contact = () => {
  return (
    <>
    <Header title='Get In Touch' image={HeaderImage}>
    We’d love to hear your ideas & requirements. Fill out the form below, we will get in touch within 24 hours
    </Header>
    <section className="contact">
      <div className="container contact__container">
        <div className="contact__wrapper">
          <a href="mailto:babuhariharann@gmail.com" target='_blank' rel='noreferrer noopener'><MdEmail/></a>
          <a href="#" target='_blank' rel='noreferrer noopener'><BsMessenger/></a>
          <a href="https://wa.me/+917639153309" target='_blank' rel='noreferrer noopener'><IoLogoWhatsapp/></a>
        </div>
      </div>
    </section>

    

    <Testimonials/>
    </>
  )
}

export default Contact