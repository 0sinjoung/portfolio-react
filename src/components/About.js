import React, {Component} from "react";

class About extends Component {
  render() {
    return(
    <section id="about">
      <div class="about-cover">
        <dl>
          <dt class="cover-title">About</dt>
          <dd class="cover-desc">Motivation</dd>
          <dd class="cover-desc">Skills</dd>
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
      <div class="about-articles">
        <article class="motivation">
          <h2 class="motivation-title">
            <span>경험을 추구하는 개발자</span>
            <span>정영신 입니다</span>
          </h2>
          <p class="motivation-desc">
            섬세한 프론트엔드 개발자를 목표로 공부하고 있는 정영신입니다. 이왕이면 아름다운 것을 좋아하고, 반복 작업을 싫어합니다. 세상만사에 관심이 많고 특히 활자 읽는 것을 좋아합니다.
          </p>
          <p class="motivation-desc">사람과 사회에 도움이 되는 일을 하고 싶습니다.</p>
          <p class="motivation-desc">명품의 차이는 디테일에서 나온다는 마음가짐으로 업무에 임합니다.</p>
          <p class="motivation-desc">마감에 초인적인 힘을 발휘합니다</p>
        </article>
        <article class="skills">
          <h2 class="skills-title">Skills</h2>
          <div class="skills-container">
            <div class="skill-item">
              <h3 class="skill-item-title language">Language</h3>
              <ul class="language-lists">
                <li class="skill-list">HTML5</li>
                <li class="skill-list">CSS3</li>
                <li class="skill-list">JavaScript ES6</li>
              </ul>
            </div>
            <div class="skill-item">
              <h3 class="skill-item-title framework">Framework</h3>
              <ul class="language-lists">
                <li class="skill-list">Vue.js</li>
                <li class="skill-list">React</li>
                <li class="skill-list">JQuery</li>
              </ul>
            </div>
            <div class="skill-item">
              <h3 class="skill-item-title basic-knowledge">
                Basic knowledge
              </h3>
              <ul class="language-lists">
                <li class="skill-list">Git</li>
                <li class="skill-list">Sass</li>
                <li class="skill-list">MySQL</li>
              </ul>
            </div>
            <div class="skill-item">
              <h3 class="skill-item-title design-tools">Design tools</h3>
              <ul class="language-lists">
                <li class="skill-list">Adobe XD</li>
                <li class="skill-list">Photoshop</li>
                <li class="skill-list">InDesign</li>
              </ul>
            </div>
          </div>
        </article>
      </div>
    </section>
    );
  }
}

export default About;