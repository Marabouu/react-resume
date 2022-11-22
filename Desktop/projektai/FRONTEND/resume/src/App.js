import { useState } from 'react';
import data from './data.json';
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
  const [lang, setLang] = useState('en');
  const {
    intro,
    about,
    links,
    education,
    pSkills,
    tSkills,
    workExperience,
    address,
    contact,
    social,
  } = data[lang];
  return (
    <div className="App">
      <body>
        <main className="turinys">
          <header className="header">
            <div>
              <select
                onChange={(e) => {
                  setLang(e.target.value);
                }}
              >
                <option value="en">English</option>

                <option value="lt">Lietuviskai</option>
              </select>
            </div>
            <h1 className="cv-sablonas">{intro.cv}</h1>
            <div className="tusciadeze">
              <p className="rolandas-skrebutenas">{intro.name}</p>
            </div>

            <div className="tusciadeze2">
              <p className="p1">{intro.jobTitle}</p>
            </div>
          </header>

          <div className="flexboxas">
            <section>
              <h1>{links.title}</h1>
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
              <h1>{about.title}</h1>
              <Separator type="fancy" />
              <p>{about.content}</p>
            </section>
          </div>

          <div className="flexboxas2">
            <section>
              <h1>{education.title}</h1>

              <Separator type="fancy" />
              <p className="mokyklos-pavadinimas">
                <b>{education.schName}</b>
                <li>Nemežio Vidurine</li>
                <li>2000 - 2012</li>
                <li>Vidurinis</li>
              </p>

              <hr className="hr3" />

              <p className="mokyklos-pavadinimas">
                <b>{education.schName}</b>
                <li>VTDKO</li>
                <li>2012 - 2016</li>
                <li>Aukstasis</li>
              </p>
            </section>

            <section>
              <h1>{pSkills.title}</h1>

              <Separator type="fancy" />
              <Badge color="green">{pSkills.sk1}</Badge>
              <Badge color="yellow">{pSkills.sk2}</Badge>
              <Badge color="brown">{pSkills.sk3}</Badge>
              <Badge color="grey">{pSkills.sk4}</Badge>
            </section>

            <section>
              <h1>{tSkills.title}</h1>

              <Separator type="fancy" />
              <Badge color="green">HTML</Badge>
              <Badge color="green">CSS/SCSS</Badge>
              <Badge color="yellow">JAVASCRIPT</Badge>
              <Badge color="yellow">REACT.JS</Badge>
            </section>
          </div>

          <div className="flexboxas2">
            <section className="skiltis">
              <h1>{workExperience.title}</h1>

              <Separator type="fancy" />
              <div className="work-experience">
                <div className="job-position job-position--position1">
                  <p>
                    <b>{workExperience.position}</b>
                  </p>
                  <p>{workExperience.company}</p>
                  <p>{workExperience.present}</p>
                  <p className="job-position-p">{workExperience.content}</p>
                </div>

                <div className="job-position job-position--position2">
                  <p>
                    <b>{workExperience.position}</b>
                  </p>
                  <p>{workExperience.company}</p>
                  <p>{workExperience.present}</p>
                  <p className="job-position-p">{workExperience.content}</p>
                </div>

                <div className="job-position">
                  <p>
                    <b>{workExperience.position}</b>
                  </p>
                  <p>{workExperience.company}</p>
                  <p>{workExperience.present}</p>
                  <p className="job-position-p">{workExperience.content}</p>
                </div>
              </div>
            </section>
          </div>

          <hr className="hr" />

          <footer className="footer">
            <div className="flexboxas2">
              <div className="testukas-su-media-queries1">
                <p className="footer-box">{address.title}</p>
                <p className="footer-box-padding">{address.content}</p>
                <p>Vilnius</p>
              </div>

              <div className="testukas-su-media-queries2">
                <p className="footer-box">{contact.title}</p>
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
                <p className="footer-box">{social.title}</p>
                <p className="footer-box-padding">
                  <Link
                    LinkSrc={IG_LINK_SRC}
                    imgSrc={InstagramLogo}
                    iconAlt="icon"
                  >
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
