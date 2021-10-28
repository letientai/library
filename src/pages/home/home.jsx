import React from "react";
import { Icon, Segment } from "semantic-ui-react";
import Navbar from "../../components/navbar/navbar";
import "./home.scss";
function Home() {
  const open = () => {
    let menu = document.getElementById("category");
    if (menu.style.display == "flex") {
      menu.style.transition = `ease 0.1s`;
      var id = setInterval(frame, 0.1);
      var pos = 0;
      var op = 1.5;
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
      var id = setInterval(frame, 0.1);
      var pos = 30;
      var op = 0;
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
    var id = setInterval(frame, 0.1);
    var pos = 0;
    var op = 1.5;
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

  return (
    <div className="home-container">
      <div className="home-top">
        <Navbar />
        <div className="content-top">
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
              <Icon name="x" onClick={close} style={{cursor: "pointer"}}/>
            </Segment>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
