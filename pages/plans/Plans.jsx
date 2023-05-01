import './plan.css'
import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg_4.jpg'
import Card from '../../UI/Card'
import {plans} from '../../data'

const Plans = () => {
  return (
    <>
    <Header title='Architectural Design Packages' image={HeaderImage}>
    Build Happiness Using Experts To Sketch Your Inventive Designs

    </Header>

    <section className="plans">
      <div className="container plans__container">
        {
          plans.map(({id,name,desc,price,features})=>{
            return <Card key={id} className='plan'>
              <h3>{name}</h3>
              <small>{desc}</small>
            
              <h4>Features</h4>
              {
                features.map(({feature,available},index) => {
                  return <p key={index} className={!available ? 'disabled' : ''}>{feature}</p>
                })
              }
              <a href="https://wa.me/+917639153309" target='_blank' rel='noreferrer noopener'>
              <button className='btn lg' >Get a Quote</button>
              </a>

            </Card>
          })
        }
      </div>
    </section>
    </>
  )
}

export default Plans