import React, { useState} from "react";
import "./navbar.scss";
import logo from "../../assets/logo/logo.png";
import { Icon, Input, Header } from "semantic-ui-react";
const Navbar = () => {
  const [search, setSearch] = useState("");
  const open = () => {
    let animation = document.getElementById("menu");
    animation.style.transition = `ease 0.1s`;
    var id = setInterval(frame, 0.01);
    var pos = 100;
    function frame() {
      if (pos === 0) {
        clearInterval(id);
      } else {
        pos--;
        animation.style.transform = `translateX(${pos}%)`;
      }
    }
  };

  const close = () => {
    let animation = document.getElementById("menu");
    animation.style.transition = `ease 0.1s`;
    var id = setInterval(frame, 0.01);
    var pos = 0;
    function frame() {
      if (pos === 100) {
        clearInterval(id);
      } else {
        pos++;
        animation.style.transform = `translateX(${pos}%)`;
      }
    }
  };
  const onChangeSearch = (e) =>{
    setSearch(e.target.value);
  }
  return (
    <div className="navbar">
      <div className="logo">
        <p>Library</p>
        <img src={logo} alt="" />
      </div>
      <div className="search">
        <Input
          value={search}
          className="input-search"
          icon={<Icon name="search" inverted circular link />}
          placeholder="Search..."
          onChange={(e) => onChangeSearch(e)}
        />
      </div>
      {/* <div className="user">
        <IconButton color="primary" aria-label="add to shopping cart">
          <Icon name="shopping cart"/>
        </IconButton>
        <IconButton color="primary">
          <Icon name="shopping cart"/>
        </IconButton>
      </div> */}
      <div className="menuRight">
        <div className="menu" id="menu">
          <div className="close">
            <p>Best</p>
            <div className="btn-close" onClick={close}>
              <Icon name="x" className="close" />
            </div>
          </div>
          <Header as="h1" className="header">
            PACKAGES
          </Header>
        </div>
        <div className="logoMenu" onClick={open}>
          <Icon name="align justify" className="open" />
        </div>
      </div>
    </div>
  );
};
export default Navbar;
