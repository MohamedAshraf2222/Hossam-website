import { useEffect, useState, useContext } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import NavbarCo from "../components/Navbar.jsx";
import { BagItemsContext } from "../context/Store.js";
import { data } from "../data/data.js";
const Home = () => {
  const [allData, setAllData] = useState([]);

  const { SaveItems, TotalPrice, totalPrice, SetItem, bagItems } =
    useContext(BagItemsContext);
  useEffect(() => {
    if (localStorage.getItem("BagItems")) {
      SaveItems();
      TotalPrice();
    }
    setAllData(data);
  }, []);

  // useEffect(() => {
  //   TotalPrice();
  // }, [SetItem]);

  return (
    <>
      <NavbarCo />
      <Container fluid="" className="">
        <div className="d-flex my-4 flex-wrap gap-4 justify-content-center my-3">
          {allData.map((item, i) => (
            <Col
              className={"card-wrapper"}
              key={i}
              xs="10"
              sm="8"
              lg="3"
              md="4"
            >
              {/* <div> */}
              <Card style={{ position: "relative" }}>
                <Card.Img
                  className="img-card"
                  variant="top"
                  src={item.imgUrl}
                />
                {/* <div className="border-top"></div> */}
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  {/* <Card.Text>{item.description}</Card.Text> */}
                  <Card.Text>ريال {item.price} </Card.Text>
                  <Button
                    variant="dark"
                    onClick={() => {
                      SetItem(item.id);
                      TotalPrice();
                    }}
                    className="d-flex mt-4 m-auto gap-2 justify-content-center align-items-center "
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-cart"
                      viewBox="0 0 16 16"
                    >
                      {" "}
                      <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />{" "}
                    </svg>
                    اضافة الي السلة
                  </Button>
                </Card.Body>
              </Card>
              {/* </div> */}
            </Col>
          ))}
        </div>
      </Container>
      {/* Bag */}
      <div className="bag-background">
        <Container>
          <h2 className="cart-header">
            السلة{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              fill="black"
              class="bi bi-cart"
              viewBox="0 0 16 16"
            >
              {" "}
              <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />{" "}
            </svg>
          </h2>
          {bagItems && (
            <>
              <Row className="border-bottom">
                <Col className="calculator-heading">المنتج</Col>
                <Col className="calculator-heading">الكمية</Col>
                <Col className="calculator-heading">السعر</Col>
              </Row>
              {bagItems.map((item, i) => (
                <Row className="calculator-details" key={i}>
                  <Col className="calculator-text">{item.title}</Col>
                  <Col className="calculator-text">{item.quantity}</Col>
                  <Col className="calculator-text">{item.price} ريال</Col>
                  {/* <p className="cart-text">
                  {item.title} = {item.price}
                </p>
                <p className="cart-text">{item.quantity} = العدد</p> */}
                </Row>
              ))}
            </>
          )}

          <Row className="total-price-text border-top">
            مجموع الفاتورة : {totalPrice} &nbsp; ريال
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Home;
