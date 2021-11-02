import React, { useState } from "react";
import "./navbar.scss";
import logo from "../../assets/logo/logo.png";
import { Icon, Input, Header } from "semantic-ui-react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

const Navbar = (props) => {
  const [search, setSearch] = useState("");
  const [checkMic, setChechMic] = useState(false);

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

  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  const sendData = async () => {
    await props.passDataToParent(search);
    await setSearch("");
  };
  const {
    transcript,
    // listening,
    // resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }
  const CheckMic = async (check) => {
    await setChechMic(check);
    if (check === true) {
        await SpeechRecognition.startListening();
    } else {
        await SpeechRecognition.stopListening();
        await setSearch(transcript);
        await props.transcript(transcript);
    }
  };

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
          icon={
            <Icon name="search" inverted circular link onClick={sendData} />
          }
          placeholder="Search..."
          onChange={(e) => onChangeSearch(e)}
        />
        <div className="void-search">
          <Icon
            name={checkMic === false ? "microphone" : "microphone slash"}
            onClick={() => CheckMic(!checkMic)}
            className="microphone"
          />
        </div>
      </div>
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
