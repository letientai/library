import React, { useState, useEffect } from "react";
import { Icon, Segment, Label, Pagination } from "semantic-ui-react";
import Navbar from "../../components/navbar/navbar";
import Card from "../../components/card/card";
import InfoData from "../../assets/data/Infodata";
import "./home.scss";
function Home() {
  const [data, setData] = useState([]);
  const [option, setOption] = useState(1);
  const [page, setPage] = useState(1);
  const [label, setLabel] = useState("Tất cả");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    setData(InfoData.slice(0, 12));
  };

  const open = () => {
    let menu = document.getElementById("category");
    if (menu.style.display === "flex") {
      menu.style.transition = `ease 0.1s`;
      let id = setInterval(frame, 0.1);
      let pos = 0;
      let op = 1.5;
      function frame() {
        if (pos === 30) {
          menu.style.display = "none";
          clearInterval(id);
        } else {
          pos++;
          op -= 0.05;
          menu.style.opacity = op;
          menu.style.transform = `translateY(${pos}px)`;
        }
      }
    } else {
      menu.style.transition = `ease 0.05s`;
      let id = setInterval(frame, 0.1);
      let pos = 30;
      let op = 0;
      function frame() {
        if (pos === 0) {
          clearInterval(id);
        } else {
          pos--;
          op += 0.05;
          menu.style.opacity = op;
          menu.style.transform = `translateY(${pos}px)`;
        }
      }
      menu.style.display = "flex";
    }
  };
  const close = () => {
    let menu = document.getElementById("category");
    menu.style.transition = `ease 0.1s`;
    let id = setInterval(frame, 0.1);
    let pos = 0;
    let op = 1.5;
    function frame() {
      if (pos === 30) {
        menu.style.display = "none";
        clearInterval(id);
      } else {
        pos++;
        op -= 0.05;
        menu.style.opacity = op;
        menu.style.transform = `translateY(${pos}px)`;
      }
    }
  };

  const onChangeOption = (option) => {
    setOption(option);
    if (option === 1) {
      setPage(1);
      setData(InfoData.sort((a, b) => parseFloat(a.id) - parseFloat(b.id)));
      setLabel("Tất cả");
    }
    if (option === 2) {
      setPage(1);
      setData(InfoData.sort((a, b) => parseFloat(b.sold) - parseFloat(a.sold)));
      setLabel("Bán chạy");
    }
    if (option === 3) {
      setPage(1);
      setData(
        InfoData.sort((a, b) => parseFloat(a.price) - parseFloat(b.price))
      );
      setLabel("Giá thấp");
    }
    if (option === 4) {
      setPage(1);
      setData(
        InfoData.sort((a, b) => parseFloat(b.price) - parseFloat(a.price))
      );
      setLabel("Giá cao");
    }
  };

  const changeData = async (e, { activePage }) => {
    setPage(activePage)
    if (activePage === 1) {
      setData(InfoData.slice(0, 12));
      window.scrollTo(0, 0);
    }
    if (activePage === 2) {
      setData(InfoData.slice(13, 24));
      window.scrollTo(0, 0);
    }
    if (activePage === 3) {
      setData(InfoData.slice(25, 36));
      window.scrollTo(0, 0);
    }
    // await setData1(data.slice(0, 10));
    // await console.log("data12: ", data1);
  };

  return (
    
    <div className="home-container">
      <div className="home-top">
        <Navbar />
        <div className="content-Top">
          <div className="content">
            <div className="btn-category" onClick={open}>
              <p>Thể loại</p>
              <Icon name="angle down" className="icon-angle-down" />
            </div>
            <Segment className="category" id="category">
              <ul>
                <h3>Văn học nước ngoài</h3>
                <li>Cổ tích & thần thoại</li>
                <li>Tiểu thuyết</li>
                <li>Tiên hiệp</li>
                <li>Trinh thám</li>
                <li>Lịch sử</li>
                <li>Viễn tưởng</li>
                <li>Ngôn tình</li>
                <li>Đam mỹ</li>
                <li>Văn học</li>
              </ul>
              <ul>
                <h3>Văn học trong nước</h3>
                <li>Lịch sử</li>
                <li>Truyện dài</li>
                <li>Truyện ngắn</li>
                <li>Hồi ký</li>
                <li>Thơ ca</li>
                <li>Phóng sự, ký sự</li>
                <li>Truyện dân gian</li>
                <li>Tự truyện</li>
                <li>Văn học</li>
              </ul>
              <ul>
                <h3>Sách kinh tế</h3>
                <li>Maketing</li>
                <li>Ngoại thương</li>
                <li>Nhân sự & việc làm</li>
                <li>Tài chính</li>
                <li>Quản trị</li>
                <li>Văn bản luật</li>
                <li>Bài học kinh doanh</li>
                <li>Đầu tư chứng khoán</li>
              </ul>
              <Icon name="x" onClick={close} style={{ cursor: "pointer" }} />
            </Segment>
          </div>
        </div>
      </div>
      <div className="main">
        <div className="main-content">
          <div className="menu-right"></div>
          <div className="content">
            <div className="menu-content">
              <p
                className={option === 1 ? "optionChoose" : "option"}
                onClick={() => onChangeOption(1)}
              >
                Tất cả{" "}
              </p>
              <p
                className={option === 2 ? "optionChoose" : "option"}
                onClick={() => onChangeOption(2)}
              >
                Bán chay
              </p>
              <p
                className={option === 3 ? "optionChoose" : "option"}
                onClick={() => onChangeOption(3)}
              >
                Giá thấp
              </p>
              <p
                className={option === 4 ? "optionChoose" : "option"}
                onClick={() => onChangeOption(4)}
              >
                Giá cao
              </p>
            </div>
            <Segment className="products">
              <Label as="a" color="blue" ribbon>
                <h4>{label}</h4>
              </Label>
              {/* <h1>{count}</h1> */}
              <div className="product">
                {data.map((item) => (
                  <Card product={item} key={item.id} />
                ))}
              </div>
              <div className="pagination">
                <Pagination
                  boundaryRange={0}
                  activePage={page}
                  ellipsisItem={null}
                  firstItem={null}
                  lastItem={null}
                  siblingRange={1}
                  totalPages={3}
                  onPageChange={changeData}
                />
              </div>
            </Segment>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
