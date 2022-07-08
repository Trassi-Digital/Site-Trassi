import "./Navbar.css";
import * as ReactBootStrap from "react-bootstrap";

function Navbar() {
  return (
    <div>
    <ReactBootStrap.Navbar bg="light" expand="lg">
  <ReactBootStrap.Container>
  {/*   <ReactBootStrap.Navbar.Brand href="#home">React-Bootstrap</ReactBootStrap.Navbar.Brand> */}
    <ReactBootStrap.Navbar.Toggle aria-controls="basic-navbar-nav" />
    <ReactBootStrap.Navbar.Collapse id="basic-navbar-nav">
      <ReactBootStrap.Nav className="me-auto">
      <ReactBootStrap.Nav.Link href="#features">
              O que facemos
            </ReactBootStrap.Nav.Link>
            <ReactBootStrap.Nav.Link href="#pricing">
              Como fazemos
            </ReactBootStrap.Nav.Link>
            <ReactBootStrap.Nav.Link href="#home">
              Junte-se a nos
            </ReactBootStrap.Nav.Link>
            <ReactBootStrap.Nav.Link href="#features">
              Cases
            </ReactBootStrap.Nav.Link>
            <ReactBootStrap.Nav.Link href="#pricing">
              Blog
            </ReactBootStrap.Nav.Link>
            <ReactBootStrap.Nav.Link href="#pricing">
              Fale conosco
            </ReactBootStrap.Nav.Link>
        {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown> */}
      </ReactBootStrap.Nav>
    </ReactBootStrap.Navbar.Collapse>
  </ReactBootStrap.Container>
</ReactBootStrap.Navbar>
    </div>
  );
}

export default Navbar;
