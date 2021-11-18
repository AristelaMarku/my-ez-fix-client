import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function NavBarr() {
  return (
    <>
      <Navbar bg="dark" variant="dark" id="navbar">
        <Container>
          <Navbar.Brand >
            <NavLink to="/" exact>
              EZ FIKS
            </NavLink>
          </Navbar.Brand>
          <Nav className="justify-content-end">
            <Nav.Link>
              <NavLink to="/mechaniclist" exact>
                Staff
              </NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink to="/bookappointments" exact>
                Book Us
              </NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink to="/appointments" exact>
                Manage
              </NavLink>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBarr;
