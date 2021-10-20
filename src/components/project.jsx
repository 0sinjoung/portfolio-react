import React, {Component} from "react";
import Nav from "./nav";

class Project extends Component {
  render() {
    return(
    <section id="projects">
      <div className="project-cover">
        <dl>
          <dt className="cover-title">Project</dt>
          <dd className="cover-desc">Typography Scale</dd>
          <dd className="cover-desc">Sense Mini-projects</dd>
        </dl>
        <Nav />
      </div>
      <div className="project-articles">
        <article className="project typography-scale">
          <div className="project-desc-wrap">
            <dl>
              <dt className="project-title">Typography scale</dt>
              <dd className="project-desc">웹 타이포그래피 스케일을 알아보고 테스트할 수 있습니다</dd>
            </dl>
            <a href="./" className="project-more-link">more</a>
          </div>
        </article>
        <article className="project sense-projects">
          <div className="project-desc-wrap">
            <dl>
              <dt className="project-title">Sense mini-projects</dt>
              <dd className="project-desc">감각(시각, 청각, 미각)에 관련된 미니 프로젝트를 볼 수 있습니다</dd>
            </dl>
            <a href="./" className="project-more-link">more</a>
          </div>
        </article>
      </div>
    </section>
    );
  }
}

export default Project;