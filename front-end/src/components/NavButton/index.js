import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { primaryDark } from '../../config/colors';
import { IoMenu } from 'react-icons/io5';

function NavButton() {
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
              <Nav.Link href="#action1">Home</Nav.Link>
              <Nav.Link href="#action2">Link</Nav.Link>
              <NavDropdown
                title="Dropdown"
                id={`offcanvasNavbarDropdown-expand-${false}`}
              >
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Navbar>
    </>
  );
}

export default NavButton;
