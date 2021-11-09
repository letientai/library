import "./buy.scss";
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../../components/navbar/navbar";
import InfoData from "../../assets/data/Infodata";

function Buy() {
  const location = useLocation();
  const path = location.pathname?.split("buy/")[1];
  const id = path.slice(0, path.indexOf("and"));
//   const quantity = path.split("and")[1];
  const [data, setData] = useState([]);
  const checkBuy = useState("buy");
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = () => {
    for (var i = 0; i < 28; i++) {
      if (parseInt(InfoData[i].id) === parseInt(id)) {
        setData(InfoData[i]);
      }
    }
    console.log(data);
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
    <div>
      <div className="buy-top">
      <Navbar
            checkpage={checkBuy}
            passDataToParent={doSomethingWithDataFromChild}
          />
      </div>
    </div>
  );
}
export default Buy;
