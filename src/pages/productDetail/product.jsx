import "./product.scss";
import Navbar from "../../components/navbar/navbar";
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import InfoData from "../../assets/data/Infodata";
function Product() {
  const location = useLocation();
  const id = location.pathname?.split("product/")[1];
  const [data, setData] = useState([]);
  const checkProduct = useState("product");
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    await setData(InfoData[parseInt(id) - 1]);
    await console.log("data", data);
  };

  const doSomethingWithDataFromChild = async (data) => {
    // setData(
    //   InfoData.filter((item) =>
    //     item?.name?.toLocaleLowerCase()?.includes(data?.toLocaleLowerCase())
    //   )
    // );
    console.log("data", data);
  };

  return (
    <div className="product-container">
      <Navbar checkpage={checkProduct}  passDataToParent={doSomethingWithDataFromChild}/>
      <p>ahihi</p>
    </div>
  );
}
export default Product;
