import React, {Component} from "react";
import Nav from "./nav";

class About extends Component {
  render() {
    return(
    <section id="about">
      <div className="about-cover">
        <dl>
          <dt className="cover-title">About</dt>
          <dd className="cover-desc">Motivation</dd>
          <dd className="cover-desc">Skills</dd>
        </dl>
        <Nav />
      </div>
      <div className="about-articles">
        <article className="motivation">
          <h2 className="motivation-title">
            <span>경험을 추구하는 개발자</span>
            <span>정영신 입니다</span>
          </h2>
          <p className="motivation-desc">
            섬세한 프론트엔드 개발자를 목표로 공부하고 있는 정영신입니다. 이왕이면 아름다운 것을 좋아하고, 반복 작업을 싫어합니다. 세상만사에 관심이 많고 특히 활자 읽는 것을 좋아합니다.
          </p>
          <p className="motivation-desc">사람과 사회에 도움이 되는 일을 하고 싶습니다.</p>
          <p className="motivation-desc">명품의 차이는 디테일에서 나온다는 마음가짐으로 업무에 임합니다.</p>
          <p className="motivation-desc">마감에 초인적인 힘을 발휘합니다</p>
        </article>
        <article className="skills">
          <h2 className="skills-title">Skills</h2>
          <div className="skills-container">
            <div className="skill-item">
              <h3 className="skill-item-title language">Language</h3>
              <ul className="language-lists">
                <li className="skill-list">HTML5</li>
                <li className="skill-list">CSS3</li>
                <li className="skill-list">JavaScript ES6</li>
              </ul>
            </div>
            <div className="skill-item">
              <h3 className="skill-item-title framework">Framework</h3>
              <ul className="language-lists">
                <li className="skill-list">Vue.js</li>
                <li className="skill-list">React</li>
                <li className="skill-list">JQuery</li>
              </ul>
            </div>
            <div className="skill-item">
              <h3 className="skill-item-title basic-knowledge">
                Basic knowledge
              </h3>
              <ul className="language-lists">
                <li className="skill-list">Git</li>
                <li className="skill-list">Sass</li>
                <li className="skill-list">MySQL</li>
              </ul>
            </div>
            <div className="skill-item">
              <h3 className="skill-item-title design-tools">Design tools</h3>
              <ul className="language-lists">
                <li className="skill-list">Adobe XD</li>
                <li className="skill-list">Photoshop</li>
                <li className="skill-list">InDesign</li>
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