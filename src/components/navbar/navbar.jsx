import React from "react";
import "./navbar.scss";
import logo from "../../assets/logo/logo.png";
import { Icon, Input, Popup } from "semantic-ui-react";

const Navbar = () => {
  const open = () => {
    let animation = document.getElementById("menu-close");
    animation.style.transition = `ease 0.7s`;
    var id = setInterval(frame, 0.01);
    var pos = 300;
    function frame() {
      if (pos === 0) {
        clearInterval(id);
      } else {
        pos -= 30;
        animation.style.transform = `translateX(${pos}px)`;
      }
    }
  };

  const close = () => {
    let animation = document.getElementById("menu-close");
    animation.style.transition = `ease 0.7s`;
    var id = setInterval(frame, 0.01);
    var pos = 0;
    function frame() {
      if (pos === 300) {
        clearInterval(id);
      } else {
        pos += 30;
        animation.style.transform = `translateX(${pos}px)`;
      }
    }
  };

  return (
    <div className="navbar-container">
      <div className="logo">
        <h1>LIBRARY</h1>
        <img src={logo} alt="" />
      </div>
      <div className="navbar-search">
        <Input
          className="input-search"
          icon={<Icon name="search" inverted circular link />}
          placeholder="Search..."
        />
      </div>
      <div className="navbar-infomation">
        <div className="Icon">
          <Popup
            trigger={<Icon name="shopping cart" className="icon-cart" />}
            content="Giỏ hàng của bạn"
            position="bottom center"
          />
          <Popup
            trigger={<Icon name="user" className="icon-cart" />}
            content="Đăng nhập"
            position="bottom center"
          />
        </div>
        <div className="menu">
          <div className="menu-close" id="menu-close" onClick={close}></div>
          <div className="menu-open" onClick={open}>
            <Icon name="align justify" className="icon-menu" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
