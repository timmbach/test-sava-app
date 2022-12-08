import React, { useState } from "react";
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
import { motion } from "framer-motion";
import Accordion from "./Accordion";

const accordions = [
  {
    title: "What is SAVA?",
    description:
      "SAVA is your personal cloud area where you may keep all of your files and folders, powered by an AI system that organizes and categorizes your data automatically (photo). It includes an easy-to-use interface that clearly shows where everything is and what it does. The program is accessible via your browser for practically all devices and platforms, including iOS and Android devices, MacOSX, Windows OS, and all Linux distributions. SAVA provides a secure virtual drive that extends your local storage capacity.",
  },
  {
    title: "How do I upload on SAVA?",
    description:
      "If you are using the website outside of an area with Wi-Fi, you should remember that your terms of the agreement with your mobile network provider will still apply. As a result, you may be charged by your mobile provider for the cost of data for the duration of the connection while accessing the platform, or other third party charges. In using SAVA platform, you are accepting responsibility for any such charges, including roaming data charges if you use the app outside of your home territory (i.e. region or country) without turning off data roaming. If you are not the bill payer for the device on which you are using the platform, please be aware that we assume that you have received permission from the bill payer for using the platform.",
  },
  {
    title: "Are my files and data secure in SAVA?",
    description:
      "SAVA is your personal cloud area where you may keep all of your files and folders, powered by an AI system that organizes and categorizes your data automatically (photo). It includes an easy-to-use interface that clearly shows where everything is and what it does. The program is accessible via your browser for practically all devices and platforms, including iOS and Android devices, MacOSX, Windows OS, and all Linux distributions. SAVA provides a secure virtual drive that extends your local storage capacity.",
  },
  {
    title: "Can I register from my mobile device?",
    description:
      "SAVA is your personal cloud area where you may keep all of your files and folders, powered by an AI system that organizes and categorizes your data automatically (photo). It includes an easy-to-use interface that clearly shows where everything is and what it does. The program is accessible via your browser for practically all devices and platforms, including iOS and Android devices, MacOSX, Windows OS, and all Linux distributions. SAVA provides a secure virtual drive that extends your local storage capacity.",
  },
  {
    title: "Can I share a file or folders?",
    description:
      "SAVA is your personal cloud area where you may keep all of your files and folders, powered by an AI system that organizes and categorizes your data automatically (photo). It includes an easy-to-use interface that clearly shows where everything is and what it does. The program is accessible via your browser for practically all devices and platforms, including iOS and Android devices, MacOSX, Windows OS, and all Linux distributions. SAVA provides a secure virtual drive that extends your local storage capacity.",
  },
  {
    title: "is SAVA free or paid?",
    description:
      "SAVA is your personal cloud area where you may keep all of your files and folders, powered by an AI system that organizes and categorizes your data automatically (photo). It includes an easy-to-use interface that clearly shows where everything is and what it does. The program is accessible via your browser for practically all devices and platforms, including iOS and Android devices, MacOSX, Windows OS, and all Linux distributions. SAVA provides a secure virtual drive that extends your local storage capacity.",
  },
];

const LandingPage = () => {
  const transition = { duration: 3, type: "spring" };

  // Use this to manually set if the product is ready.
  const isProductReady = true;

  const [navOpen, setNavOpen] = useState(false);

  return (
    <div className={css.outer_div} style={{ display: "flex", justifyContent: "center", marginTop: "1rem" }}>
      <div className={css.main_div}>
        <header className={css.header}>
          <Link style={{cursor: "pointer", width: "100%",
                 marginLeft: "0px",
                marginTop: "15px" }} to="/dashboard">
                 <div className={css.logo}>
                  <img src={LogoCloud} alt="logo-cloud" />
                  <img src={LogoText} alt="logo-text" />
                </div>
         </Link>
          <div onClick={() => setNavOpen(true)} className={css.nav_icons}>
            <i class="fa-solid fa-bars"></i>
          </div>
          {navOpen && (
            <nav className={css.nav_menu}>
              <div className={css.nav_menu_top}>
               <Link style={{cursor: "pointer", width: "100%",
                 marginLeft: "0px",
                marginTop: "15px" }} to="/dashboard">
                 <div className={css.logo}>
                  <img src={LogoCloud} alt="logo-cloud" />
                  <img src={LogoText} alt="logo-text" />
                </div>
               </Link>
                <div onClick={() => setNavOpen(false)} className={css.nav_icons}>
                  <i class="fa-solid fa-xmark"></i>
                </div>
              </div>
              <div className={css.nav_menu_bottom}>
                <Link to="/signin">
                  <button class={css.signin_button_mb}>SIGN IN</button>
                </Link>
                <Link to="/signup">
                  <button class={css.signup_button_mb}>SIGN UP</button>
                </Link>
                <ul>
                  <li>About SAVA</li>
                  <li>
                    <Link style={{ textDecoration: "none", color: "black" }} to="/terms-and-conditions">
                      Terms & Conditions
                    </Link>
                  </li>
                  <li>Privacy policy</li>
                  <li>Help</li>
                  <li>Chat</li>
                </ul>
              </div>
            </nav>
          )}
          {
            isProductReady ? <nav className={css.nav_links}>
            <Link to="/signin">
              <button class={css.signin_button}>SIGN IN</button>
            </Link>
            <Link to="/signup">
              <button class={css.signup_button}>SIGN UP</button>
            </Link>
          </nav> : null
          }
        </header>
        <div className={css.sections_div}>
          <section className={css.section1}>
            <article>
              <h1>
                Bring order to years of <span> chaos.</span>
              </h1>

              <p>
                We keep meaningful events and people in our life. Births and birthdays, marriages and anniversaries,
                holidays and new homes are all documented because they are significant.
              </p>

              {
                isProductReady ? <Link to="/signin">
                <button>Upload On SAVA</button>
              </Link> : <a href='https://forms.gle/BdHZACaw5ePryKR7A' target='_blank' rel="noreferrer"><button>Join the Waitlist</button></a>
              }
            </article>

            <motion.img
              transition={transition}
              initial={{ bottom: "10rem" }}
              whileInView={{ bottom: "7rem" }}
              className={css.section1_image1}
              src={section1_image1}
              alt="happy sava users"
            />
            <motion.img
              transition={transition}
              initial={{ right: "40%" }}
              whileInView={{ right: "25%" }}
              className={css.section1_image2}
              src={section1_image2}
              alt="happy sava users"
            />
            <motion.img
              transition={transition}
              initial={{ top: "90%" }}
              whileInView={{ top: "78%" }}
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
                  Superior cloud storage across <span style={{ color: "#4042d0" }}>any device</span>
                </h1>
                <p>Easily back up and access your photos securely on any device.</p>
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
                  Your Photos are <span style={{ color: "#4042d0" }}>automatically categorized</span> and searchable
                </h1>
                <p>
                  It can be intimidating to consider organizing your chaotic collection of images, but don't worry—our
                  excellent automatic library system has you covered. find images for you with ease!
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
                  The excitement, love, adventure, and getting to know each other better are just a few of the many
                  rewards that have been saved for the future. the people and events in our lives, Holidays, marriage
                  anniversaries, and birthdays are all recorded.
                </p>
              </article>
            </div>
            <div className={css.section4_image}>
              <img src={section4_image} alt="" />
            </div>
          </section>
          <section className={css.section5}>
            <motion.img
              transition={transition}
              initial={{ left: "-8%" }}
              whileInView={{ left: "0%" }}
              className={css.section5_image1}
              src={section5_image1}
              alt="happy sava users"
            />
            <motion.img
              transition={transition}
              initial={{ left: "25%" }}
              whileInView={{ left: "15%" }}
              className={css.section5_image2}
              src={section5_image2}
              alt="happy sava users"
            />
            <img className={css.section5_image_facebook} src={section5_image_facebook} alt="happy sava users" />
            <img className={css.section5_image_twitter} src={section5_image_twitter} alt="happy sava users" />
            <img className={css.section5_image_snapchat} src={section5_image_snapchat} alt="happy sava users" />
            <img className={css.section5_image_tiktok} src={section5_image_tiktok} alt="happy sava users" />
            <div className={css.section5_info}>
              <img src={CloudLightning1} alt="cloud img" />
              <article>
                <h1>
                  Connect with
                  <span style={{ color: "#4042d0" }}> social media photos </span>
                  easily
                </h1>
                <p>
                  Have access to social media, which transcends time and geographic boundaries and allows you to
                  interact and reconnect with people and rekindle old memories.
                </p>
              </article>
            </div>
          </section>
          <section className={css.section5b}>
            <div className={css.section5b_header}>
              <img src={CloudLightning1} alt="cloud img" />
              <h1>Frequently asked questions</h1>
            </div>
            {/* <div className={css.accordion}>
              <div className={css.accordion_content}>
                <header onClick={handleAccordionDetails} className={css.accordion_header}>
                  <i style={{ display: `${showAccordionDetails ? "none" : "flex"}` }} class="fa-solid fa-plus"></i>
                  <i style={{ display: `${!showAccordionDetails ? "none" : "flex"}` }} class="fa-solid fa-minus"></i>
                  <span className={css.title}>What is SAVA?</span>
                </header>
                <p style={{ display: `${showAccordionDetails ? "none" : "flex"}` }} className={css.description}>
                  SAVA is your personal cloud area where you may keep all of your files and folders, powered by an AI
                  system that organizes and categorizes your data automatically (photo). It includes an easy-to-use
                  interface that clearly shows where everything is and what it does. The program is accessible via your
                  browser for practically all devices and platforms, including iOS and Android devices, MacOSX, Windows
                  OS, and all Linux distributions. SAVA provides a secure virtual drive that extends your local storage
                  capacity.
                </p>
              </div>
            </div> */}
            <div className={css.accordion}>
              {accordions.map((accordion, index) => (
                <Accordion key={index} accordion={accordion} />
              ))}
            </div>
          </section>
          <section className={css.section6}>
            <article>
              <h3>
                Start using <span>SAVA to create lasting memories</span> for each new experience.
              </h3>
              <Link to="/signin">
                <button>Upload On SAVA</button>
              </Link>
            </article>
          </section>
        </div>
        <footer>
          <div className={css.footer_top}>
             <Link style={{cursor: "pointer", width: "40px",
                 marginRight: "13vw",
                marginTop: "0px" }} to="/dashboard">
                 <div className={css.footer_logo}>
                  <img src={LogoCloud} alt="logo-cloud" />
                  <img src={LogoText} alt="logo-text" />
                </div>
            </Link>
            <nav className={css.footer_nav_links}>
              <ul>
                <li>About SAVA</li>
                <li>
                  <Link style={{ textDecoration: "none", color: "black" }} to="/terms-and-conditions">
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link style={{ textDecoration: "none", color: "black" }} to="/privacy-policy">
                    Privacy policy
                  </Link>
                </li>
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
