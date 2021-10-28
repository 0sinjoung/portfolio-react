import React, {Component} from "react";
import Nav from "./nav";
import typoimg from "./assets/images/typo-all.png"

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
          <div className="project-point">
            <div className="project-name">
              <span>01 Project</span>
              <h2>Typography scale</h2>
            </div>
            <div className="project-summary">
              <p className="summary-p">
                <span className="summary-title">Term</span>
                <span className="summary-desc">about 2 weeks</span>
              </p>
              <p className="summary-p">
                <span className="summary-title">Tools</span>
                <span className="summary-desc">HTML, CSS, Vanila JavaScript</span>
              </p>
              <p className="summary-p">
                <span className="summary-title">Links</span>
                <span className="summary-desc">
                  <a href="./" target="_blank" className="summary-link">사이트 보기</a>
                  <a href="./" target="_blank" className="summary-link">깃허브 코드 보기</a>
                </span>
              </p>
            </div>
            <img className="project-img" src={typoimg} alt="타이포그래피 스케일 사이트 이미지"/>
            <div className="project-desc-wrap">
              <div className="project-intro">
                <h3>프로젝트 소개</h3>
                <h4>아이디어</h4>
                <p>편집디자인 업무를 하며 디자인에 있어 타이포그래피의 중요성을 인식하고 있어 제작</p>
                <h4>사용대상</h4>
                <p>• 브라우저에서 폰트별 사이즈를 실제로 확인하고 싶은 디자이너</p>
                <p>• 폰트를 다양한 기기에서 미리 테스트 해보고 싶은 디자이너</p>
                <p>• 디자이너 없이 사이트를 만들어야 하는 개발자</p>
                <h4>소개</h4>
                <p>포트폴리오 사이트를 만들고자 디자인을 구상하던 중 웹 디자인에서는 타이포그래피 스케일에 맞춰 폰트 사이즈를 정하고, 디자인 한다는 것을 알게 되었습니다. </p>
                <p>디자인에 대해 잘 모르는 사람이라도 타이포그래피 스케일에 맞춰 약간의 규칙을 준수하면 기존보다 더 아름답고 정돈된 사이트를 제작할 수 있을 것입니다.</p>
                <p>영문폰트와 한글폰트는 같은 폰트 사이즈여도 시각적으로 보았을때 영문폰트는 더 작게, 한글 폰트는 더 크게 느껴집니다. </p>
                <p>실제 브라우저 위에서 폰트 사이즈를 쉽게 확인해 볼 수 있습니다.</p>
              </div>
              <div className="project-function">
                <h3>주요 기능</h3>
                <h4>클래스 생성</h4>
                <p>바닐라 자바스크립트로 구현하여 객체 기본 생성, 수정, 삭제를 구현하였습니다.</p>
                <h4>최적화</h4>
                <p>스타일 요소 변경시 리렌더링 없이 구현됩니다</p>
                <h4>다크모드</h4>
                <p>폰트를 확인할 수 있습니다</p>
              </div>
            </div>
          </div>
        </article>
        <article className="project sense-projects">
        </article>
      </div>
    </section>
    );
  }
}

export default Project;