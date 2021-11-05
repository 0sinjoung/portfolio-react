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
            <span>즐거운 세상에 보탬이 되고 싶은</span>
            <span>개발자 정영신 입니다</span>
          </h2>
          <p className="motivation-desc">➕를 만들기 보다는 ➖를 없애는 것을 목표로 공부하고 있습니다.</p>
          <p className="motivation-desc">
          이전 직장에서는 편집 디자인 업무를 담당하였습니다. <br/>개발 역시 디자인과 마찬가지로 일상에서 불편한 문제를 해결한다는 점에서 관심을 갖게 되었습니다.
          </p>
          <p className="motivation-desc">현재는 어떻게 하면 사용자에게 아름다우면서도 실용적인 경험을 제공할 수 있는지에 대해 고민하고 있습니다.
          </p>
          <p className="motivation-desc">새로운 것을 배우는 것, 몰입하는 경험, 지속 가능한 것을 좋아합니다.</p>
          <p className="motivation-desc">남는 시간에는 활자 읽기, 그림 그리기, 산책을 하며 보냅니다.</p>
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
              <h3 className="skill-item-title tools">Tools</h3>
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