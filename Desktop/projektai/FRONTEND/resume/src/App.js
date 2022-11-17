import './App.css';
import './components/Separator/index.css';
import Separator from './components/Separator';
import Badge from './components/Badge';
import Link from './components/Link';
import InstagramLogo from './images/ig.webp';
import FacebookLogo from './images/fb.webp';
import TwitterLogo from './images/tw.webp';

const Facebook = { FacebookLogo };
const FB_LINK_SRC = 'https://facebook.com';
const TW_LINK_SRC = 'https://twitter.com';
const IG_LINK_SRC = 'https://instagram.com';

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
              <Separator type="fancy" />
              <div className="imgDiv">
                <Link LinkSrc={FB_LINK_SRC} imgSrc={FacebookLogo}>
                  Facebook
                </Link>
                <Link LinkSrc={TW_LINK_SRC} imgSrc={TwitterLogo}>
                  Twitter
                </Link>
                <Link LinkSrc={IG_LINK_SRC} imgSrc={InstagramLogo}>
                  Instagram
                </Link>
              </div>
            </section>

            <section className="apiemane">
              <h1>APIE MANE</h1>
              <Separator type="fancy" />
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

              <Separator type="fancy" />
              <p className="mokyklos-pavadinimas">
                <b>MOKYMOSI ISTAIGA</b>
                <li>Nemežio Vidurine</li>
                <li>2000 - 2012</li>
                <li>Vidurinis</li>
              </p>

              <hr className="hr3" />

              <p className="mokyklos-pavadinimas">
                <b>MOKYMOSI ISTAIGA</b>
                <li>VTDKO</li>
                <li>2012 - 2016</li>
                <li>Aukstasis</li>
              </p>
            </section>

            <section>
              <h1>PERSONAL SKILLS</h1>

              <Separator type="fancy" />
              <Badge color="green">KOMANDINIS</Badge>
              <Badge color="yellow">KOMUNIKABILUS</Badge>
              <Badge color="brown">ORGANIZUOTAS</Badge>
              <Badge color="grey">IMLUS</Badge>
            </section>

            <section>
              <h1>TECHNICAL SKILLS</h1>

              <Separator type="fancy" />
              <Badge color="green">HTML</Badge>
              <Badge color="green">CSS/SCSS</Badge>
              <Badge color="yellow">JAVASCRIPT</Badge>
              <Badge color="yellow">REACT.JS</Badge>
            </section>
          </div>

          <div className="flexboxas2">
            <section className="skiltis">
              <h1>WORK EXPERIENCE</h1>

              <Separator type="fancy" />
              <div className="work-experience">
                <div className="job-position job-position--position1">
                  <p>
                    <b>JOB POSITION</b>
                  </p>
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
                  <p>
                    <b>JOB POSITION</b>
                  </p>
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
                  <p>
                    <b>JOB POSITION</b>
                  </p>
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
                  <Link LinkSrc={IG_LINK_SRC} imgSrc={InstagramLogo}>
                    Instagram
                  </Link>
                </p>

                <Link LinkSrc={FB_LINK_SRC} imgSrc={FacebookLogo}>
                  Facebook
                </Link>
              </div>
            </div>
          </footer>
        </main>
      </body>
    </div>
  );
}

export default App;
