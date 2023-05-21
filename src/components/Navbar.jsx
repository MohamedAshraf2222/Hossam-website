import { Container, Navbar, Row } from "react-bootstrap";
import { useEffect, useRef } from "react";
import logo from "../assets/logo.png";
const NavbarCo = () => {
  const navref = useRef(null);
  const navbarfun = () => {
    if (
      document.body.scrollTop > 80 ||
      document.documentElement.scrollTop > 80
    ) {
      navref.current.classList.add("sticky-navbar");
    } else {
      navref.current.classList.remove("sticky-navbar");
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", navbarfun);
    return () => window.removeEventListener("scroll", navbarfun);
  }, []);

  return (
    <>
      <div ref={navref}>
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
      </div>
    </>
  );
};

export default NavbarCo;
