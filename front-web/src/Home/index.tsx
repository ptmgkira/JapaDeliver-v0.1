import './styles.css';
import { ReactComponent as MainImage } from './imgHome.svg';
import Footer from '../Footer';

function Home() {
  return (
    <>
      <div className="home-container">
        <div className="home-content">
          <div className="home-action">
            <h1 className="home-title">
              Faça seu pedido <br /> que os Ninjas entregaram <br /> para você!!
         </h1>
            <h3 className="home-subtitle">
              Escolha o seu pedido e em poucos minutos <br /> levaremos na sua porta.
         </h3>
            <a href="orders" className="home-btn-order">
              FAZER PEDIDO
         </a>
          </div>
          <div className="home-image">
            <MainImage />
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Home