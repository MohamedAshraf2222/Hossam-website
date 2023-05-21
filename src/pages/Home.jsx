import { useEffect, useState, useContext,useRef } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { check } from "../assets/index.js";
import NavbarCo from "../components/Navbar.jsx";
import { BagItemsContext } from "../context/Store.js";
import { data } from "../data/data.js";
const Home = () => {
  const [allData, setAllData] = useState([]);

  const { SaveItems, TotalPrice, totalPrice, SetItem, bagItems, DeleteItem } =
    useContext(BagItemsContext);
  useEffect(() => {
    if (localStorage.getItem("BagItems")) {
      SaveItems();
      TotalPrice();
    }
    setAllData(data);
  }, []);
  const btnRef = useRef(null)
  const removeSuccess= ()=>{
    btnRef.current.classList.remove('success')
  }
  const handlebtn= (e)=>{
    console.log(e.classList);
    document.getElementById('btn').classList.add('success');
    btnRef.current.classList.add('success');
    console.log(btnRef.current.classList);
    setTimeout(() => {
      removeSuccess();
    }, 2000);
  }
  // useEffect(() => {
  //   TotalPrice();
  // }, [SetItem]);

  return (
    <>
      <NavbarCo />
      <Container fluid="" className="">
        <h2 className="intro-heading">التعريف بالشركة</h2>
        <p className="intro-text">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem
          dolor omnis quaerat voluptates sunt dolores eaque, vero veritatis
          assumenda accusantium ea sed explicabo esse quae ad debitis nam sequi
          recusandae maiores provident quos facere nulla doloribus. Atque libero
          consequuntur, eveniet incidunt sunt deserunt, esse quibusdam ipsam
          minus architecto, ab a!
        </p>
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
                <Card.Body className="text-center">
                  <Card.Title>{item.title}</Card.Title>
                  {/* <Card.Text>{item.description}</Card.Text> */}
                  <Card.Text>ريال {item.price} </Card.Text>
                  <Button
                    variant="dark"
                    onClick={() => {
                      SetItem(item.id);
                      TotalPrice();
                    }}
                    className="btn-animation d-flex mt-4 m-auto gap-2 justify-content-center align-items-center "
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-cart"
                      viewBox="0 0 16 16"
                    >
                      {" "}
                      <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />{" "}
                    </svg>
                    شراء الخدمة
                  </Button> 
                  {/* <div className="position-relative button-wrapper"> */}
                    {/* <button ref={btnRef} id='btn' onClick={(e)=>{handlebtn(e)}} class="button-animate-dev" href="#" role="button">
                      <span>شراء الخدمة</span>
                      <div class="icon">
                      <p className="fa">X</p>
                      <p className="fa-check">
                        <img src={check} alt="" />
                      </p>
                      </div>
                    </button> */}
                  {/* </div> */}
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
              className="bi bi-cart"
              viewBox="0 0 16 16"
            >
              {" "}
              <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />{" "}
            </svg>
          </h2>
          {bagItems.length > 0 && (
            <>
              <Row className="border-bottom">
                <Col className="calculator-heading">المنتج</Col>
                <Col className="calculator-heading">الكمية</Col>
                <Col className="calculator-heading">السعر</Col>
                <Col className="calculator-heading">حذف</Col>
              </Row>
              {bagItems.map((item, i) => (
                <Row className="calculator-details" key={i}>
                  <Col className="calculator-text">{item.title}</Col>
                  <Col className="calculator-text">{item.quantity}</Col>
                  <Col className="calculator-text">{item.price} ريال</Col>
                  <Col className="calculator-text">
                    <Button
                      className="delete-btn"
                      onClick={() => DeleteItem(item.id)}
                      variant="danger"
                    >
                      حذف
                    </Button>
                  </Col>
                  {/* <p className="cart-text">
                  {item.title} = {item.price}
                </p>
                <p className="cart-text">{item.quantity} = العدد</p> */}
                </Row>
              ))}
            </>
          )}
          {bagItems.length > 0 ? (
            <Row className="total-price-text border-top">
              مجموع الفاتورة : {totalPrice} &nbsp; ريال
            </Row>
          ) : (
            <h2 className="text-center my-5">لا يوجد خدمات مختارة</h2>
          )}
        </Container>
      </div>
    </>
  );
};

export default Home;
