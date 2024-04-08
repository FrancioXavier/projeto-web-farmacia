import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { primaryDark } from '../../config/colors';
import { IoMenu } from 'react-icons/io5';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../store/modules/auth/actions';

function NavButton() {
  const isLogged = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();
  function logout() {
    if (isLogged) {
      dispatch(actions.loginFailure({}));
    }
  }
  return (
    <>
      <Navbar key={false} expand={false} className="mb-3">
        <Navbar.Toggle
          aria-controls={`offcanvasNavbar-expand-${false}`}
          style={{ backgroundColor: primaryDark, color: '#fff' }}
        >
          <IoMenu size={30} style={{ color: '#fff' }} />
        </Navbar.Toggle>
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-${false}`}
          aria-labelledby={`offcanvasNavbarLabel-expand-${false}`}
          placement="end"
        >
          <Offcanvas.Header
            closeButton
            style={{ backgroundColor: primaryDark, color: '#fff' }}
          >
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${false}`}>
              University Pharmacy
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body
            style={{ backgroundColor: primaryDark, color: '#fff' }}
          >
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link href="/shopping-cart">Seu carrinho</Nav.Link>
              {isLogged ? (
                <NavDropdown
                  title="Sua conta"
                  id={`offcanvasNavbarDropdown-expand-${false}`}
                >
                  <NavDropdown.Item href="/contact-register">
                    Alterar conta
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/address-register">
                    Alterar endereço
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/your-orders">
                    Seus pedidos
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item
                    onClick={() => {
                      logout();
                    }}
                  >
                    Sair
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <>
                  <Nav.Link href="/contact-register">Criar conta</Nav.Link>
                  <Nav.Link href="/login">Login</Nav.Link>
                </>
              )}
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Navbar>
    </>
  );
}

export default NavButton;
