import React, {Component} from "react";

class Project extends Component {
  render() {
    return(
    <section id="projects">
      <div class="project-cover">
        <dl>
          <dt class="cover-title">Project</dt>
          <dd class="cover-desc">Typography Scale</dd>
          <dd class="cover-desc">Sense Mini-projects</dd>
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
      <div class="project-articles">
        <article class="project typography-scale">
          <div class="project-desc-wrap">
            <dl>
              <dt class="project-title">Typography scale</dt>
              <dd class="project-desc">웹 타이포그래피 스케일을 알아보고 테스트할 수 있습니다</dd>
            </dl>
            <a href="./" class="project-more-link">more</a>
          </div>
        </article>
        <article class="project sense-projects">
          <div class="project-desc-wrap">
            <dl>
              <dt class="project-title">Sense mini-projects</dt>
              <dd class="project-desc">감각(시각, 청각, 미각)에 관련된 미니 프로젝트를 볼 수 있습니다</dd>
            </dl>
            <a href="./" class="project-more-link">more</a>
          </div>
        </article>
      </div>
    </section>
    );
  }
}

export default Project;