import "./buy.scss";
import React, { useState, useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";
import Navbar from "../../components/navbar/navbar";
import InfoData from "../../assets/data/Infodata";
import {
  Segment,
  Label,
  Form,
  TextArea,
  Dimmer,
  Loader,
} from "semantic-ui-react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Modal } from "react-bootstrap";
import Footer from "../../components/footer/footer";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

function Buy() {
  const location = useLocation();
  const path = location.pathname?.split("buy/")[1];
  const id = path.slice(0, path.indexOf("and"));
  const quantity = path.split("and")[1];
  const [data, setData] = useState([]);
  const checkBuy = useState("buy");
  const [customerName, setCustomerName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [modalShow, setModalShow] = useState(false);
  const [loadingPage, setLoadingPage] = useState(true);
  const [open, setOpen] = React.useState(false);
  const history = useHistory();
  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  const handleClick = () => {
    setModalShow(false);
    setOpen(true);
    setTimeout(function () {
      history.push("/library")
    }, 1200);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    for (var i = 0; i < 28; i++) {
      if (parseInt(InfoData[i].id) === parseInt(id)) {
        setData(InfoData[i]);
      }
    }
    window.scrollTo(0, 0);
  };

  const doSomethingWithDataFromChild = async (data) => {
    // setData(
    //   InfoData.filter((item) =>
    //     item?.name?.toLocaleLowerCase()?.includes(data?.toLocaleLowerCase())
    //   )
    // );
    console.log("data", data);
  };

  const onChangeInfo = (e, name) => {
    if (name === "customer") {
      setCustomerName(e.target.value);
    }
    if (name === "phone") {
      if (e.target.value >= 0) {
        setPhoneNumber(e.target.value);
      }
    }
    if (name === "email") {
      setEmail(e.target.value);
    }
    if (name === "address") {
      setAddress(e.target.value);
    }
  };

  const MyVerticallyCenteredModal = (props) => {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className="modal"
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            X??c nh???n th??ng tin
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5 className="txt-title">Th??ng tin s???n ph???m</h5>
          <div className="info-check">
            <p>T??n s???n ph???m: </p>
            <span>{data.name}</span>
          </div>
          <div className="info-check">
            <p>Th??? lo???i:</p>
            <span>{data.theloai}</span>
          </div>
          <div className="info-check">
            <p>S??? l?????ng:</p>
            <span>{quantity}</span>
          </div>
          <div className="info-check">
            <p>T???ng ti???n:</p>
            <span>{quantity * data.price} VND</span>
          </div>
          <h5 className="txt-title">Th??ng tin kh??ch h??ng</h5>
          <div className="info-check">
            <p>T??n kh??ch h??ng:</p>
            <span>{customerName}</span>
          </div>
          <div className="info-check">
            <p>S??? ??i???n tho???i:</p>
            <span>{phoneNumber}</span>
          </div>
          <div className="info-check">
            <p>Email:</p>
            <span>{email}</span>
          </div>
          <div className="info-check">
            <p>?????a ch???:</p>
            <span>{address} VND</span>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide} variant="secondary">
            H???y
          </Button>
          <Button onClick={handleClick}>?????t h??ng</Button>
        </Modal.Footer>
      </Modal>
    );
  };

  let checkInfo = true;
  if (!customerName || !phoneNumber || !email || !address) checkInfo = true;
  if (customerName && phoneNumber && email && address) checkInfo = false;

  setTimeout(function () {
    setLoadingPage(false);
  }, 1000);

  return (
    <div className="buy-container">
      <Dimmer active={loadingPage} inverted className="dimmer">
        <Loader inverted>Loading</Loader>
      </Dimmer>
      <div className="buy-top">
        <Navbar
          checkpage={checkBuy}
          passDataToParent={doSomethingWithDataFromChild}
        />
      </div>
      <div className="buy-main">
        <div className="header">
          <p>
            <span>????? ?????t h??ng</span>, qu?? kh??ch h??ng vui l??ng ki???m tra s???n ph???m,
            s??? l?????ng, gi??, m??u s???c v?? ??i???n c??c th??ng tin d?????i ????y:
          </p>
          <div className="info">
            <div className="image">
              <img src={data.image} alt="" />
            </div>
            <div className="name">
              <h3>{data.name}</h3>
            </div>
            <div className="quantity">
              <p>S??? l?????ng: {quantity}</p>
            </div>
          </div>
          <hr />
          <div className="price">
            <h3>T???ng ti???n: </h3>
            <h3>{data.price * quantity}??</h3>
          </div>
          <div className="user-info">
            <Segment raised>
              <Label as="a" color="blue" ribbon>
                Th??ng tin kh??ch h??ng
              </Label>
              <Form className="info-form">
                <Form.Field>
                  <label>T??n kh??ch h??ng</label>
                  <input
                    placeholder="T??n kh??ch h??ng"
                    value={customerName}
                    onChange={(e) => onChangeInfo(e, "customer")}
                  />
                </Form.Field>
                <Form.Field>
                  <label>S??? ??i???n tho???i</label>
                  <input
                    placeholder="S??? ??i???n tho???i"
                    value={phoneNumber}
                    onChange={(e) => onChangeInfo(e, "phone")}
                  />
                </Form.Field>
                <Form.Field>
                  <label>Email</label>
                  <input
                    placeholder="Email"
                    type="email"
                    value={email}
                    onChange={(e) => onChangeInfo(e, "email")}
                  />
                </Form.Field>
                <Form.Field>
                  <label>?????a ch???</label>
                  <TextArea
                    placeholder="?????a ch???"
                    value={address}
                    onChange={(e) => onChangeInfo(e, "address")}
                  />
                </Form.Field>
                <Button
                  variant="primary"
                  onClick={() => setModalShow(true)}
                  className="btn-buy"
                  disabled={checkInfo}
                >
                  ?????t h??ng
                </Button>
                <MyVerticallyCenteredModal
                  show={modalShow}
                  onHide={() => setModalShow(false)}
                />
              </Form>
            </Segment>
          </div>
        </div>
      </div>
      <Footer />
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          B???n ???? ?????t h??ng th??nh c??ng!!
        </Alert>
      </Snackbar>
    </div>
  );
}
export default Buy;
