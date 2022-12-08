import React, { useState } from "react";
import { Link } from "react-router-dom";
import css from "./termsandconditions.module.css";
import LogoCloud from "../../assets/cloud-logo.png";
import LogoText from "../../assets/SAVA-logo.png";

const TermsAndConditions = () => {
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
                  <li>
                    <Link style={{ textDecoration: "none", color: "black" }} to="/privacy-policy">
                      Privacy policy
                    </Link>
                  </li>
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
            <h1>TERMS AND CONDITIONS</h1>
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
              no obligation to provide any content to our services and you're free to choose the content that you want
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
            <p>
              You should be aware that there are certain things that SAVA will not take responsibility for. The website
              will require the use of the internet at all time and you can only enjoy the benefits of the platform when
              you have registered successfully. A good network providers is therefore imperatiive to have full access to
              the website. The connection can be Wi-Fi, or provided by your mobile network provider, but SAVA cannot
              take responsibility for the website not working at full functionality if you do not have access to Wi-Fi,
              and you don’t have any of your data allowance left.
            </p>
            <p>
              If you are using the website outside of an area with Wi-Fi, you should remember that your terms of the
              agreement with your mobile network provider will still apply. As a result, you may be charged by your
              mobile provider for the cost of data for the duration of the connection while accessing the platform, or
              other third party charges. In using SAVA platform, you are accepting responsibility for any such charges,
              including roaming data charges if you use the app outside of your home territory (i.e. region or country)
              without turning off data roaming. If you are not the bill payer for the device on which you are using the
              platform, please be aware that we assume that you have received permission from the bill payer for using
              the platform.
            </p>
            <p>
              We want to maintain a respectful environment for everyone, which means you must follow these basic rules
              of conduct:
              <ul>
                <li>comply with applicable laws, including export control, sanctions, and human trafficking laws</li>
                <li>respect the rights of others, including privacy and intellectual property rights</li>
                <li>
                  don't abuse or harm others or yourself (or threaten or encourage such abuse or harm) — for example, by
                  misleading, defrauding, illegally impersonating, defaming, bullying, harassing, or stalking others
                </li>
                <li>
                  don't abuse, harm, interfere with, or disrupt the services — for example, by accessing or using them
                  in fraudulent or deceptive ways, introducing malware, or spamming, hacking, or bypassing our systems
                  or protective measures. When we index the web to bring you search results, we respect standard usage
                  restrictions that website owners specify in their websites' code, so we require the same when others
                  use our services
                </li>
              </ul>
            </p>
            <p>
              With respect to SAVA responsibility for your use of the platform, when you are using the website, it is
              important to bear in mind that although we endeavour to ensure that it is updated and correct at all
              times, we do rely on third parties to provide information to us so that we can make it available to you.
              SAVA accepts no liability for any loss, direct or indirect, you experience as a result of relying wholly
              on this functionality of the website.
            </p>
            <div className={css.note}>
              <h4>Changes to This Terms and Conditions</h4>
              <p>
                We may update our Terms and Conditions from time to time. Thus, you are advised to review this page
                periodically for any changes. We will notify you of any changes by posting the new Terms and Conditions
                on this page. These changes are effective immediately after they are posted on this page.
              </p>
            </div>
            <div className={css.contact}>
              <h4>Contact Us</h4>
              <p>
                If you have any questions or suggestions about our Terms of Use, do not hesitate to contact us at{" "}
                <a style={{ textDecoration: "none" }} href="mailto:info@sava.com.">
                  info@sava.com.
                </a>
              </p>
            </div>
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

export default TermsAndConditions;
