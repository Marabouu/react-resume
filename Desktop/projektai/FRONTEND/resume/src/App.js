import './App.css';
import InstagramLogo from './images/ig.webp';
import FacebookLogo from './images/fb.webp';
import TwitterLogo from './images/tw.webp';

function App() {
  return (
    <div className="App">
      <body>
        <main className="turinys">
          <header className="header">
            <h1 className="cv-sablonas">CV SABLONAS</h1>
            <div className="tusciadeze">
              <p className="rolandas-skrebutenas">ROLANDAS SKREBUTENAS</p>
            </div>

            <div className="tusciadeze2">
              <p className="p1">PROGRAMUOTOJAS</p>
            </div>
          </header>

          <div className="flexboxas">
            <section>
              <h1>LINKS</h1>

              <hr className="hr" />
              <hr className="hr2" />
              <div className="imgDiv">
                <div>
                  <img src={FacebookLogo} />
                  <a href="https://facebook.com" target="_blank">
                    Facebook
                  </a>
                </div>
                <div>
                  <img src={TwitterLogo} />
                  <a href="https://twitter.com" target="_blank">
                    Twitter
                  </a>
                </div>
                <div>
                  <img src={InstagramLogo} />
                  <a href="https://instagram.com" target="_blank">
                    Instagram
                  </a>
                </div>
              </div>
            </section>

            <section className="apiemane">
              <h1>APIE MANE</h1>

              <hr className="hr" />
              <hr className="hr2" />

              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Exercitationem earum dolores asperiores beatae mollitia adipisci
                culpa, possimus expedita doloribus delectus at fuga nulla
                aspernatur corrupti itaque veritatis laborum quis sit.Lorem
                ipsum dolor sit, amet consectetur
              </p>
            </section>
          </div>

          <div className="flexboxas2">
            <section>
              <h1>EDUCATION</h1>

              <hr className="hr" />
              <hr className="hr2" />
              <p className="mokyklos-pavadinimas">
                MOKYKLOS PAVADINIMAS
                <br /> Nemežio VclassNameurine
                <br /> 2000 - 2012
                <br /> vclassNameurinis
              </p>

              <hr className="hr3" />

              <p className="mokyklos-pavadinimas">
                MOKYKLOS PAVADINIMAS
                <br /> VTDKO
                <br /> 2012 - 2016
                <br /> Aukstasis
              </p>
            </section>

            <section>
              <h1>PERSONAL SKILLS</h1>

              <hr className="hr" />
              <hr className="hr2" />
              <div>
                <p className="badge badge--green">KOMANDINIS</p>
              </div>
              <div>
                <p className="badge badge--yellow">KOMUNIKABILUS</p>
              </div>
              <div>
                <p className="badge badge--brown">ORGANIZUOTAS</p>
              </div>
              <p className="badge badge--grey">IMLUS</p>
            </section>

            <section>
              <h1>TECHNICAL SKILLS</h1>

              <hr className="hr" />
              <hr className="hr2" />
              <div className="badge badge--green">HTML</div>
              <div className="badge badge--green">CSS/SCSS</div>
              <div className="badge badge--yellow">JAVASCRIPT</div>
              <div className="badge badge--yellow">REACT.JS</div>
            </section>
          </div>

          <div className="flexboxas2">
            <section className="skiltis">
              <h1>WORK EXPERIENCE</h1>

              <hr className="hr" />
              <hr className="hr2" />
              <div className="work-experience">
                <div className="job-position job-position--position1">
                  <p>JOB POSITION</p>
                  <p>Company</p>
                  <p>2018 - present</p>
                  <p className="job-position-p">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Maecenas ut justo libero. Vestibulum vitae mattis diam.
                    Vivamus eleifend diam vel tempor lacinia. Suspendisse non
                    augue. Lorem ipsum do Consectetur adipiscing elit
                  </p>
                </div>

                <div className="job-position job-position--position2">
                  <p>JOB POSITION</p>
                  <p>Company</p>
                  <p>2018 - present</p>
                  <p className="job-position-p">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Maecenas ut justo libero. Vestibulum vitae mattis diam.
                    Vivamus eleifend diam vel tempor lacinia. Suspendisse non
                    augue. Lorem ipsum do Consectetur adipiscing elit
                  </p>
                </div>

                <div className="job-position">
                  <p>JOB POSITION</p>
                  <p>Company</p>
                  <p>2018 - present</p>
                  <p className="job-position-p">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Maecenas ut justo libero. Vestibulum vitae mattis diam.
                    Vivamus eleifend diam vel tempor lacinia. Suspendisse non
                    augue. Lorem ipsum do Consectetur adipiscing elit
                  </p>
                </div>
              </div>
            </section>
          </div>

          <hr className="hr" />

          <footer className="footer">
            <div className="flexboxas2">
              <div className="testukas-su-media-queries1">
                <p className="footer-box">ADDRESS</p>
                <p className="footer-box-padding">Gedimino prospektas.</p>
                <p>Vilnius</p>
              </div>

              <div className="testukas-su-media-queries2">
                <p className="footer-box">CONTACT</p>
                <p className="footer-box-padding">
                  <a href="mailto: cakademirs@gmail.com">
                    cakademirs@gmail.com
                  </a>
                </p>
                <p>
                  <a href="+370 68455675">+370 68455675</a>
                </p>
              </div>

              <div className="testukas-su-media-queries3">
                <p className="footer-box">SOCIAL</p>
                <p className="footer-box-padding">
                  <a href="https://instagram.com" target="_blank">
                    Instagram
                  </a>
                </p>
                <p>
                  <a href="https://www.facebook.com" target="_blank">
                    FACEBOOK
                  </a>
                </p>
              </div>
            </div>
          </footer>
        </main>
      </body>
    </div>
  );
}

export default App;
