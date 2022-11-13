import React from "react";
import LogoCloud from "../../assets/cloud-logo.png";
import LogoText from "../../assets/SAVA-logo.png";
import CloudLightning1 from "../../assets/cloud-lightning.png";
import section1_image1 from "../../assets/section1_image1.png";
import section1_image2 from "../../assets/section1_image2.png";
import section1_image3 from "../../assets/section1_image3.png";
import css from "./landingpage.module.css";

const LandingPage = () => {
  return (
    <div className={css.main_div}>
      <header>
        <div className={css.logo}>
          <img src={LogoCloud} alt="logo-cloud" />
          <img src={LogoText} alt="logo-text" />
        </div>
        <nav className={css.nav_links}>
          <button>SIGN IN</button>
          <button>SIGN UP</button>
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
              birthdays, marriages and anniversaries, holidays and new homes are
              all documented because they are significant.
            </p>
            <button>Upload On SAVA</button>
          </article>

          <img className={css.section1_image1} src={section1_image1} alt="" />
          <img className={css.section1_image2} src={section1_image2} alt="" />
          <img className={css.section1_image3} src={section1_image3} alt="" />
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat,
            molestias!
          </div>
        </section>
        <section className={css.section3}>
          <div className={css.section3_info}>
            <img src={CloudLightning1} alt="" />
            <article>
              <h1>
                Your Photos are
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
          <div className={css.section3_image}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat,
            molestias!
          </div>
        </section>
        <section className={css.section4}>
          <div className={css.section4_info}>
            <img src={CloudLightning1} alt="" />
            <article>
              <h1>Your Photos are automatically categorized and searchable</h1>
              <p>
                It can be intimidating to consider organizing your chaotic
                collection of images, but don't worry—our excellent automatic
                library system has you covered. find images for you with ease!
              </p>
            </article>
          </div>
          <div className={css.section4_image}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat,
            molestias!
          </div>
        </section>
        <section className={css.section5}></section>
      </div>
      <footer>Footer</footer>
    </div>
  );
};

export default LandingPage;
