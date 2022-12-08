import React, { useState } from "react";
import { Link } from "react-router-dom";
import css from "./privacypolicy.module.css";
import LogoCloud from "../../assets/cloud-logo.png";
import LogoText from "../../assets/SAVA-logo.png";

const PrivacyPolicy = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div className={css.container_div}>
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
                <div style={{ paddingRight: "4rem" }} onClick={() => setNavOpen(false)} className={css.nav_icons}>
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
          <nav className={css.nav_links}>
            <Link to="/signin">
              <button class={css.signin_button}>SIGN IN</button>
            </Link>
            <Link to="/signup">
              <button class={css.signup_button}>SIGN UP</button>
            </Link>
          </nav>
        </header>
        <main>
          <article>
            <h1>PRIVACY POLICY</h1>
            <p>
              By using the SAVA platform, these terms will automatically apply to you. Please endeavour to read them
              carefully before using the platform. Not in any case are you allowed to copy, or modify any part of the
              website, or our trademarks in any way. Ontop of that, you are not allowed to attempt to extract the source
              code and API of the platform. Also, you should not try to translate the platform into other languages, or
              make derivative versions. The website itself, and all the trade marks, copyright, database rights and
              other intellectual property rights related to it, still belong to SAVA.
            </p>
            <p>
              Our services are designed to let you upload, submit, store, send, receive, or share your content. You have
              no obligation to provide any content to our services and you’re free to choose the content that you want
              to provide. If you choose to upload or share content, please make sure you have the necessary rights to do
              so and that the content is lawful.
            </p>
            <p>
              SAVA is committed to ensuring that the website is as useful and efficient as possible. For that reason, we
              reserve the right to make changes to the platform or to charge for its services, at any time. We will
              never charge you for the website or its services without making it very clear to you exactly what you are
              paying for.
            </p>
            <p>
              SAVA Stores and processes personal data that you have provided to us, in order to provide our Service. It
              is therefore your sole responsibility to keep your phone and access to the platform secure. We recommend
              that you do not try to bypass our security and also constantly change your IP Address as this may result
              in making your data less secured and result in potential hack by fraudsters.
            </p>
          </article>
        </main>
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

export default PrivacyPolicy;
