import React, {Component} from "react";

class Contact extends Component {
  render() {
    return(
    <section id="contact">
      <div class="contact-cover">
        <dl>
          <dt class="cover-title">Contact</dt>
          <dd class="cover-desc">E-mail</dd>
          <dd class="cover-desc">github</dd>
          <dd class="cover-desc">Notion</dd>
        </dl>
        <nav class="nav-links">
          <ul>
            <li class="main-list">
              <a href="#about" class="main-link">about</a>
            </li>
            <li class="main-list">
              <a href="#projects" class="main-link">project</a>
            </li>
            <li class="main-list">
              <a href="#contact" class="main-link">contact</a>
            </li>
          </ul>
        </nav>
      </div>
      <div class="contact-contents">
        <div class="nametag">
          <h2 class="name">정 영 신</h2>
          <span class="department">Frontend Developer</span>
        </div>
        <address class="address-container">
          <ul>
            <li class="address-item tel">
              <span class="address-item-title">Tel.</span>
              <a href="tel:+8201089997884">010-8999-7884</a>
            </li>
            <li class="address-item email">
              <span class="address-item-title">E-mail</span>
              <a href="mailto:yeongsinjoung@gmail.com">yeongsinjoung@gmail.com</a>
            </li>
            <li class="address-item github">
              <span class="address-item-title">guthub</span>
              <a href="https://github.com/0sinjoung">github.com/0sinjoung</a>
            </li>
            <li class="address-item notion">
              <span class="address-item-title">Notion</span>
              <a href="https://rightful-process-095.notion.site/JavaScript-1437d16fbba04bc6a208602374353fd4">notion link</a>
            </li>
          </ul>
        </address>
        <a href="https://drive.google.com/file/d/1NlAYeQnAKWBP-wMIRhk7rzMBNfpJ6FHX/view?usp=sharing" target="_blank" rel="noreferrer" class="resume">
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