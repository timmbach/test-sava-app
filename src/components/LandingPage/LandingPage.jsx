import React from "react";
import LogoCloud from "../../assets/cloud-logo.png";
import LogoText from "../../assets/SAVA-logo.png";
import CloudLightning1 from "../../assets/landingpage/cloud-lightning.png";
import section1_image1 from "../../assets/landingpage/section1_image1.png";
import section1_image2 from "../../assets/landingpage/section1_image2.png";
import section1_image3 from "../../assets/landingpage/section1_image3.png";
import section2_image from "../../assets/landingpage/section2_image.png";
import section3_image1 from "../../assets/landingpage/section3_image1.png";
import section3_image2 from "../../assets/landingpage/section3_image2.png";
import section4_image from "../../assets/landingpage/section4_image.png";
import section5_image_facebook from "../../assets/landingpage/section5_image_facebook.png";
import section5_image_twitter from "../../assets/landingpage/section5_image_twitter.png";
import section5_image_snapchat from "../../assets/landingpage/section5_image_snapchat.png";
import section5_image_tiktok from "../../assets/landingpage/section5_image_tiktok.png";
import section5_image1 from "../../assets/landingpage/section5_image1.png";
import section5_image2 from "../../assets/landingpage/section5_image2.png";
import css from "./landingpage.module.css";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div className={css.main_div}>
        <header>
          <div className={css.logo}>
            <img src={LogoCloud} alt="logo-cloud" />
            <img src={LogoText} alt="logo-text" />
          </div>
          <nav className={css.nav_links}>
            <Link to="/signin">
              <button class={css.signin_button}>SIGN IN</button>
            </Link>
            <Link to="/signup">
              <button class={css.signup_button}>SIGN UP</button>
            </Link>
          </nav>
        </header>
        <div className={css.sections_div}>
          <section className={css.section1}>
            <article>
              <h1>
                Bring order to years of <span>chaos.</span>
              </h1>
              <p>
                We keep meaningful events and people in our life. Births and
                birthdays, marriages and anniversaries, holidays and new homes
                are all documented because they are significant.
              </p>

              <Link to="/signin">
                <button>Upload On SAVA</button>
              </Link>
            </article>

            <img
              className={css.section1_image1}
              src={section1_image1}
              alt="happy sava users"
            />
            <img
              className={css.section1_image2}
              src={section1_image2}
              alt="happy sava users"
            />
            <img
              className={css.section1_image3}
              src={section1_image3}
              alt="happy sava users"
            />
          </section>
          <section className={css.section2}>
            <div className={css.section2_info}>
              <img src={CloudLightning1} alt="" />
              <article>
                <h1>
                  Superior cloud storage across{" "}
                  <span style={{ color: "#4042d0" }}>any device</span>
                </h1>
                <p>
                  Easily back up and access your photos securely on any device.
                </p>
              </article>
            </div>
            <div className={css.section2_image}>
              <img src={section2_image} alt="sava devices" />
            </div>
          </section>
          <section className={css.section3}>
            <div className={css.section3_info}>
              <img src={CloudLightning1} alt="" />
              <article>
                <h1>
                  Your Photos are{" "}
                  <span style={{ color: "#4042d0" }}>
                    automatically categorized
                  </span>{" "}
                  and searchable
                </h1>
                <p>
                  It can be intimidating to consider organizing your chaotic
                  collection of images, but don't worry—our excellent automatic
                  library system has you covered. find images for you with ease!
                </p>
              </article>
            </div>
            <div className={css.section3_images}>
              <img src={section3_image1} alt="sava searchbar" />
              <img src={section3_image2} alt="sava dashboard" />
            </div>
          </section>
          <section className={css.section4}>
            <div className={css.section4_info}>
              <img src={CloudLightning1} alt="cloud img" />
              <article>
                <h1>
                  <span style={{ color: "#4042d0" }}>Save and share </span>
                  what is important
                </h1>
                <p>
                  The excitement, love, adventure, and getting to know each
                  other better are just a few of the many rewards that have been
                  saved for the future. the people and events in our lives,
                  Holidays, marriage anniversaries, and birthdays are all
                  recorded.
                </p>
              </article>
            </div>
            <div className={css.section4_image}>
              <img src={section4_image} alt="" />
            </div>
          </section>
          <section className={css.section5}>
            <img
              className={css.section5_image1}
              src={section5_image1}
              alt="happy sava users"
            />
            <img
              className={css.section5_image2}
              src={section5_image2}
              alt="happy sava users"
            />
            <img
              className={css.section5_image_facebook}
              src={section5_image_facebook}
              alt="happy sava users"
            />
            <img
              className={css.section5_image_twitter}
              src={section5_image_twitter}
              alt="happy sava users"
            />
            <img
              className={css.section5_image_snapchat}
              src={section5_image_snapchat}
              alt="happy sava users"
            />
            <img
              className={css.section5_image_tiktok}
              src={section5_image_tiktok}
              alt="happy sava users"
            />
            <div className={css.section5_info}>
              <img src={CloudLightning1} alt="" />
              <article>
                <h1>
                  Connect with
                  <span style={{ color: "#4042d0" }}>
                    {" "}
                    social media photos{" "}
                  </span>
                  easily
                </h1>
                <p>
                  Have access to social media, which transcends time and
                  geographic boundaries and allows you to interact and reconnect
                  with people and rekindle old memories.
                </p>
              </article>
            </div>
          </section>
          <section className={css.section6}>
            <article>
              <h3>
                Start using <span>SAVA to create lasting memories</span> for
                each new experience.
              </h3>
              <Link to="/signin">
                <button>Upload On SAVA</button>
              </Link>
            </article>
          </section>
        </div>
        <footer>
          <div className={css.footer_top}>
            <div className={css.footer_logo}>
              <img src={LogoCloud} alt="logo-cloud" />
              <img src={LogoText} alt="logo-text" />
            </div>
            <nav className={css.footer_nav_links}>
              <ul>
                <li>About SAVA</li>
                <li>
                  <Link
                    style={{ textDecoration: "none", color: "black" }}
                    to="/terms-and-conditions"
                  >
                    Terms & Conditions
                  </Link>
                </li>
                <li>Privacy policy</li>
                <li>Help</li>
                <li>Chat</li>
              </ul>
            </nav>
          </div>
          <div
            style={{
              width: "100vw",
              height: "3px",
              backgroundColor: "#bcbcbc",
            }}
          ></div>
          <div className={css.footer_bottom}>
            <span>© 2022 SAVA. All rights reserved</span>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default LandingPage;
