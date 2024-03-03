import { FaInstagram, FaYoutube, FaFacebook } from 'react-icons/fa';
import { primaryDark, highPure } from '../../config/colors';
import LogoUni from '../../config/img/logoUni.svg';
import './style.css';

export default function Footer() {
  return (
    <footer className="position-absolute w-100 bottom-0 start-0">
      <section>
        <div
          style={{ background: '#1161BC', color: '#fff' }}
          className="d-flex row justify-content-around align-items-center p-4 footer"
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
          className="d-flex justify-content-around align-items-center p-4 footer"
        >
          <p className="col-2 d-flex justify-content-center consumer-protection content-footer">
            Politica do consumidor
          </p>
          <p className="col-3 content-footer">Atendimento</p>
          <p className="col-6 d-flex copyright content-footer">
            © 2024 UniFarm. Todos os direitos reservados.
          </p>
        </div>
      </section>
    </footer>
  );
}
