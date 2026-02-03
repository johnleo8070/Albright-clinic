import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";

function InformationCard(props) {
  return (
    <div className="info-cards">
      <div className="info-card-icon-wrapper">
        <FontAwesomeIcon className="info-fa-icon" icon={props.icon} />
      </div>
      <p className="info-card-title">{props.title}</p>
      <p className="info-card-description">{props.description}</p>
    </div>
  );
}

export default InformationCard;
