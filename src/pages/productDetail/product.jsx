import "./product.scss";
import Navbar from "../../components/navbar/navbar";
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import InfoData from "../../assets/data/Infodata";
import Rating from "@mui/material/Rating";
import { Button, Input } from "semantic-ui-react";
import Buttonn from "@mui/material/Button";
import CardItem from "../../components/cardItem/cardItem";

function Product() {
  const location = useLocation();
  const ID = location.pathname?.split("product/")[1];
  const [data, setData] = useState([]);
  const [dataItem, setDataItem] = useState([]);
  const checkProduct = useState("product");
  const [quantity, setQuantity] = useState(1);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    for (var i = 0; i < 28; i++) {
      if (parseInt(InfoData[i].id) === parseInt(ID)) {
        setData(InfoData[i]);
        setDataItem(
          InfoData.filter((item) =>
            item?.theloai
              ?.toLocaleLowerCase()
              ?.includes(InfoData[i].theloai?.toLocaleLowerCase())
          )
        );
      }
    }
    window.scrollTo({
      top: 100,
      behavior: "smooth",
    });
  };

  const doSomethingWithDataFromChild = async (data) => {
    // setData(
    //   InfoData.filter((item) =>
    //     item?.name?.toLocaleLowerCase()?.includes(data?.toLocaleLowerCase())
    //   )
    // );
    console.log("data", data);
  };

  const onChangeInput = (e) => {
    setQuantity(e.target.value);
  };

  const onchangeQuantity = (name) => {
    if (name === "plus") {
      setQuantity(parseInt(quantity) + 1);
    } else if (quantity === 1) {
      setQuantity(1);
    } else {
      setQuantity(parseInt(quantity) - 1);
    }
  };

  return (
    <div className="product-container">
      <div className="product-top">
        <Navbar
          checkpage={checkProduct}
          passDataToParent={doSomethingWithDataFromChild}
        />
        <div className="content-Top">
          {/* <div className="content">

          </div> */}
        </div>
      </div>
      <div className="main">
        <div className="main-content">
          <div className="image">
            <img src={data.image} alt="" />
          </div>
          <div className="info">
            <div className="header">
              <p>{data.name}</p>
              <div className="row1">
                <Rating
                  name="half-rating-read"
                  defaultValue={3.5}
                  precision={0.5}
                  className="start"
                />
                <i>Đã bán: {data.sold}</i>
              </div>
              <div className="row2">
                <div className="col1">
                  <div className="inf">
                    <div className="price">
                      <p>
                        {data.price} <span>đ</span>
                      </p>
                      <div className="deal">
                        <p>-20%</p>
                      </div>
                    </div>
                    <img
                      src="https://salt.tikicdn.com/ts/upload/2e/da/c9/4b9c0150392c753ccb65b2595500e9d6.png"
                      alt=""
                    />
                    <div className="ship">
                      <img
                        src="https://salt.tikicdn.com/ts/upload/21/b3/00/bab4964906fcb6c56d57d9d69a6b2995.png"
                        alt=""
                      />
                      <i>Miến phí vận chuyển</i>
                    </div>
                  </div>
                  <div className="buy">
                    <div className="quantity">
                      <Button
                        icon="minus"
                        className="minus"
                        onClick={() => onchangeQuantity("minus")}
                      />
                      <Input
                        className="input-quantity"
                        type="number"
                        value={quantity}
                        onChange={onChangeInput}
                      />
                      <Button
                        icon="plus"
                        className="plus"
                        onClick={() => onchangeQuantity("plus")}
                      />
                    </div>
                    <Buttonn variant="contained" className="btn-buy">
                      Mua ngay
                    </Buttonn>
                  </div>
                </div>
                <div className="col2"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="similar-product">
          <p>Sản phẩm tương tự</p>
          <hr />
          <div className="product">
            
          </div>
        </div>
      </div>
    </div>
  );
}
export default Product;
