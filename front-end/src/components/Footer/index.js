import { FaInstagram, FaYoutube, FaFacebook } from 'react-icons/fa';
import { primaryDark, highPure } from '../../config/colors';
import LogoUni from '../../config/img/logoUni.svg';
import './style.css';

export default function Footer() {
  return (
    <footer className="card-footer">
      <section className="container-fluid d-flex flex-column">
        <div
          style={{ background: '#1161BC', color: '#fff' }}
          className="d-flex row justify-content-around align-items-center py-4 footer"
        >
          <div className="col-8 d-flex align-items-center content-footer logo">
            <img src={LogoUni} alt="" />
            <h4 className="m-2 d-flex content-footer">University Pharmacy</h4>
          </div>
          <div className="col-2 d-flex column content-footer social-medias ">
            <a href="">
              <FaInstagram
                style={{ color: highPure, marginRight: '20px' }}
                size={26}
              />
            </a>
            <a href="">
              <FaYoutube
                style={{ color: highPure, marginRight: '20px' }}
                size={26}
              />
            </a>
            <a href="">
              <FaFacebook style={{ color: highPure }} size={26} />
            </a>
          </div>
        </div>
        <div
          style={{ background: primaryDark, color: '#fff' }}
          className="row d-flex justify-content-around align-items-center p-4 footer"
        >
          <a
            href=""
            className="col-2 d-flex justify-content-center consumer-protection content-footer"
          >
            <p
              className="col-2 d-flex justify-content-center consumer-protection w-100 content-footer"
              style={{ color: highPure }}
            >
              Politica do consumidor
            </p>
          </a>
          <a
            href=""
            className="col-3 content-footer"
            style={{ color: highPure }}
          >
            <p>Atendimento</p>
          </a>
          <p className="col-6 d-flex copyright content-footer">
            © 2024 UniFarm. Todos os direitos reservados.
          </p>
        </div>
      </section>
    </footer>
  );
}
