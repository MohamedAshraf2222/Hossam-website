import { Container, Nav, Navbar, Row } from "react-bootstrap";
import logo from "../assets/logo.png";
const NavbarCo = () => {


  return (
    <>
      <Row>
        <Navbar className="nav-style" bg="light" expand="lg" variant="dark">
          <Container className="justify-content-center">
            {/* <Link to="/"> */}
              <Navbar.Brand className="nav-font" href="#">
                <img className="logo" src={logo} alt="" />
              </Navbar.Brand>
            {/* </Link> */}
            {/* {!window.location.pathname.includes("/movie/") ? (
              <>
                <Navbar.Toggle
                  aria-controls="navbarScroll"
                  className="navbar-toggle"
                />
                <Navbar.Collapse id="navbarScroll">
                  <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: "100px" }}
                    navbarScroll
                  ></Nav>
                  <div className="d-flex search-input-wrapper">
                    <input
                      type="text"
                      placeholder="ابحث..."
                      className="mx-2 search-input"
                      onChange={(e) => search(e.target.value)}
                    />
                  </div>
                </Navbar.Collapse>
              </>
            ) : (
              ""
            )} */}
          </Container>
        </Navbar>
      </Row>
    </>
  );
};

export default NavbarCo;
