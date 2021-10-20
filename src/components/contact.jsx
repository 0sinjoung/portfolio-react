import React, {Component} from "react";
import Nav from "./nav";

class Contact extends Component {
  render() {
    return(
    <section id="contact">
      <div  className="contact-cover">
        <dl>
          <dt  className="cover-title">Contact</dt>
          <dd  className="cover-desc">E-mail</dd>
          <dd  className="cover-desc">github</dd>
          <dd  className="cover-desc">Notion</dd>
        </dl>
        <Nav /> 
      </div>
      <div  className="contact-contents">
        <div  className="nametag">
          <h2  className="name">정 영 신</h2>
          <span  className="department">Frontend Developer</span>
        </div>
        <address  className="address-container">
          <ul>
            <li  className="address-item tel">
              <span  className="address-item-title">Tel.</span>
              <a href="tel:+8201089997884">010-8999-7884</a>
            </li>
            <li  className="address-item email">
              <span  className="address-item-title">E-mail</span>
              <a href="mailto:yeongsinjoung@gmail.com">yeongsinjoung@gmail.com</a>
            </li>
            <li  className="address-item github">
              <span  className="address-item-title">guthub</span>
              <a href="https://github.com/0sinjoung">github.com/0sinjoung</a>
            </li>
            <li  className="address-item notion">
              <span  className="address-item-title">Notion</span>
              <a href="https://rightful-process-095.notion.site/JavaScript-1437d16fbba04bc6a208602374353fd4">notion link</a>
            </li>
          </ul>
        </address>
        <a href="https://drive.google.com/file/d/1NlAYeQnAKWBP-wMIRhk7rzMBNfpJ6FHX/view?usp=sharing" target="_blank" rel="noreferrer"  className="resume">
          <span>
            <strong>이력서</strong> 보러가기
          </span>
        </a>
      </div>
    </section>
    );
  }
}

export default Contact;