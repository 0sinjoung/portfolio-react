import React, {Component} from "react";
import Nav from "./nav";
import typoimg from "./assets/images/typo-all.png"
import drinkimg from "./assets/images/whatdoi.png"

class Project extends Component {
  render() {
    return(
    <section id="projects">
      <div className="project-cover">
        <dl>
          <dt className="cover-title">Project</dt>
          <dd className="cover-desc">Typography Scale</dd>
          <dd className="cover-desc">What do I drink today</dd>
        </dl>
        <Nav />
      </div>
      <div className="project-articles">
        <article className="project" id="typography-scale">
          <div className="project-point">
            <div className="project-name">
              <span>01 Project</span>
              <h2>Typographic scale</h2>
            </div>
            <div className="project-summary">
              <div className="summary">
                <span className="summary-title">Term</span>
                <span className="summary-desc">about 2 weeks</span>
              </div>
              <div className="summary">
                <span className="summary-title">Tools</span>
                <span className="summary-desc">HTML, CSS, Vanila JavaScript</span>
              </div>
              <div className="summary">
                <span className="summary-title">Links</span>
                <span className="summary-desc">
                  <ul className="project-link-lists">
                    <li className="project-link-list">
                      <a href="https://0sinjoung.github.io/typoscale/" target="_blank" rel="noopener noreferrer" className="project-link">테스트 하기</a>
                    </li>
                    <li>
                      <a href="https://github.com/0sinjoung/typoscale" target="_blank" rel="noopener noreferrer" className="project-link">깃허브 코드 보기</a>
                    </li>
                  </ul>
                </span>
              </div>
            </div>
          </div>
          <div className="project-img-wrap">
            <img className="project-img" src={typoimg} alt="타이포그래피 스케일 사이트 이미지"/>
          </div>
          <div className="project-desc-wrap">
            <div className="project-intro">
              <h3>프로젝트 소개</h3>
              <div className="project-desc">
                <h4>아이디어</h4>
                <p>개인 포트폴리오 사이트를 제작하려는 단계에서 디자인 툴 없이 바로 브라우저에서 폰트 사이즈를 보여줄수 있는 사이트의 필요성을 느껴 제작하게 되었습니다.</p>
              </div>
              <div className="project-desc">
                <h4>사용대상</h4>
                <ul>
                  <li>• 디자이너 없이 사이트를 만들어야 하는 개발자</li>
                  <li>• 브라우저에서 폰트별 사이즈를 실제로 확인하고 싶은 디자이너와 개발자</li>
                  <li>• 대중적으로 쓰이는 웹폰트 6종을 다양한 기기에서 미리 테스트 해보고 싶은 디자이너</li>
                </ul>
              </div>
              <div className="project-desc">
                <h4>소개</h4>
                <p>편집 디자인과 달리 웹 디자인에서는 타이포그래픽 스케일에 맞춰 폰트 사이즈를 정하는 일련의 규칙성이 있다는 것을 알게 되었습니다. 이를 적용한다면 디자인을 모르는 사람이어도 폰트 사이즈를 선별하는 일이 한결 수월해집니다.</p>
                <p>디자인에 대해 잘 모르는 사람이라도 타이포그래픽 스케일에 맞춰 약간의 규칙을 준수하면 기존보다 더 아름답고 정돈된 사이트를 제작할 수 있을 것입니다. </p>
                <p>영문폰트와 한글폰트는 같은 폰트 사이즈여도 시각적으로 보았을때 영문폰트는 더 작게, 한글 폰트는 더 크게 느껴집니다. </p>
                <p>폰트 사이즈를 스케일에 맞춰 선별해 놓음으로써 브라우저 위에서 폰트 사이즈를 간단하게 비교하고 테스트해 볼 수 있습니다.</p>
              </div>
            </div>
            <div className="project-function">
              <h3>주요 기능</h3>
              <div className="project-desc">
                <h4>상태관리</h4>
                <p>바닐라 자바스크립트로 객체 기본 생성, 수정, 삭제를 구현하였습니다.</p>
              </div>
              <div className="project-desc">
                <h4>최적화</h4>
                <p>스타일 변경 후 새로운 요소가 생성될때 상태관리에 추가되도록 퍼포먼스를 고려하였습니다.</p>
              </div>
              <div className="project-desc">
                <h4>다크모드</h4>
                <p>어두운 배경의 밝은 폰트는 일반 배경의 어두운 폰트보다 축소되어 보입니다. Dark mode 토글 버튼으로 비교하여 확인해볼 수 있습니다.</p>
              </div>
              <a href="https://rightful-process-095.notion.site/Typographic-Scale-Project-a27f886add06458cb35d32a44e4d9c26" className="project-link" target="_blank" rel="noopener noreferrer">👉 자세한 문서 확인하기</a>
            </div>
          </div>
        </article>
        <article className="project" id="what-do-i-drink-today">
          <div className="project-point">
            <div className="project-name">
              <span>02 Project</span>
              <h2>What do I drink today</h2>
            </div>
            <div className="project-summary">
              <div className="summary">
                <span className="summary-title">Term</span>
                <span className="summary-desc">about 1 week</span>
              </div>
              <div className="summary">
                <span className="summary-title">Tools</span>
                <span className="summary-desc">HTML5, CSS3, JavaScript ES6, Vue.js, Git</span>
              </div>
              <div className="summary">
                <span className="summary-title">Links</span>
                <span className="summary-desc">
                  <ul className="project-link-lists">
                    <li className="project-link-list">
                      <a href="https://0sinjoung.github.io/whatdoidrinktoday" target="_blank" rel="noopener noreferrer" className="project-link">테스트 하기</a>
                    </li>
                    <li>
                      <a href="https://github.com/0sinjoung/whatdoidrinktoday" target="_blank" rel="noopener noreferrer" className="project-link">깃허브 코드 보기</a>
                    </li>
                  </ul>
                </span>
              </div>
            </div>
          </div>
          <div className="project-img-wrap">
            <img className="project-img" src={drinkimg} alt="오늘 뭐 마시지? 사이트 이미지"/>
          </div>
          <div className="project-desc-wrap">
            <div className="project-intro">
              <h3>프로젝트 소개</h3>
              <div className="project-desc">
                <h4>아이디어</h4>
                <p>카페에서 주문을 하며 매일 마시는 음료 외에 다른 음료가 마시고 싶을 때 현재 나의 기호를 반영해서 메뉴를 추천해주는 심리 테스트가 있으면 좋겠다는 생각이 들었습니다.</p>
                <p>카페 고객 입장에서는 음료를 추천받고, 기업 입장에서는 주력 메뉴나 신제품을 홍보할 수 있습니다.</p>
              </div>
              <div className="project-desc">
                <h4>사용대상</h4>
                <ul>
                  <li>• 음료를 추천받고 싶은 카페 고객</li>
                  <li>• 신제품 런칭을 홍보하고 싶은 브랜드 담당자</li>
                </ul>
              </div>
              <div className="project-desc">
                <h4>소개</h4>
                <p>MBTI 테스트 유행으로 인해 기업에서 광고로 많이 사용하는 심리테스트 형식으로 제작하였습니다. 상업적으로 사용할 것을 고려하여 제작하였습니다.</p>
                <p>기업 입장에서는 본인들의 주력 상품 혹은 신제품을 홍보할 수 있는 광고 수단이 될 수 있고, 사용자 입장에서는 간단한 테스트를 통해 음료를 추천받을 수 있습니다.  </p>
                <p>디자인은 매장의 키오스크 UI 느낌을 반영하여 음료를 주문하는 느낌을 살렸고 레트로한 분위기를 낼 수 있는 배경과 색상을 사용했습니다. </p>
              </div>
            </div>
            <div className="project-function">
              <h3>주요 기능</h3>
              <div className="project-desc">
                <h4>Vue.js 사용</h4>
                <p>동일한 디자인으로 반복되는 질문 리스트를 컴포넌트로 관리합니다. 버튼 클릭 이벤트에 따른 user data를 손쉽게 등록, 수정합니다.</p>
              </div>
              <div className="project-desc">
                <h4>User data 관리</h4>
                <p>뷰 인스턴스의 user 데이터는 name, brand, flavor, drinkCode를 속성으로 갖습니다.</p>
              </div>
              <div className="project-desc">
                <h4>음료의 결정</h4>
                <p>사용자가 대답한 질문에 대한 값을 토대로 음료가 결정됩니다. 결정된 음료 데이터를 읽어 결과 페이지를 반환합니다.</p>
              </div>
              <div className="project-desc">
                <h4>확장성</h4>
                <p>각 브랜드의 데이터는 json 파일로 관리됩니다. 언제든 다른 브랜드를 추가하여 확장할 수 있습니다.</p>
              </div>
              <a href="https://rightful-process-095.notion.site/What-do-I-drink-today-project-5d571d2c4b8640c0b7d75bde6058e6b4" className="project-link" target="_blank" rel="noopener noreferrer">👉 자세한 문서 확인하기</a>
            </div>
          </div>
        </article>
      </div>
    </section>
    );
  }
}

export default Project;