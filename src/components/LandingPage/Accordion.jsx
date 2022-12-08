import React, { useState } from "react";
import css from "./landingpage.module.css";

const Accordion = ({ accordion }) => {
  const [showAccordionDetails, setShowAccordionDetails] = useState(false);

  const handleAccordionDetails = () => {
    setShowAccordionDetails(!showAccordionDetails);
  };
  return (
    <div className={css.accordion_content}>
      <header onClick={handleAccordionDetails} className={css.accordion_header}>
        <i style={{ display: `${showAccordionDetails ? "none" : "flex"}` }} class="fa-solid fa-plus"></i>
        <i style={{ display: `${!showAccordionDetails ? "none" : "flex"}` }} class="fa-solid fa-minus"></i>
        <span className={css.title}>{accordion.title}</span>
      </header>
      <p style={{ display: `${!showAccordionDetails ? "none" : "flex"}` }} className={css.description}>
        {accordion.description}
      </p>
    </div>
  );
};

export default Accordion;
