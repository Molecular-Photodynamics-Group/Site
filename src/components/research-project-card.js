import React from "react"
import { FormattedMessage } from "react-intl"
import { Link } from "../intl/link"
import Img from "gatsby-image"

import "./research-project-card.scss"
import { ClickableArea } from "./clickable-area"

export const ResearchProjectCard = ({ title, photo, slug }) => {
  return (
    <ClickableArea
      tag="article"
      className="research-project-card card card--with-hover"
    >
      <div className="research-project-card__image-wrapper">
        <Img className="research-project-card__image" fluid={photo.childImageSharp.fluid} alt={title} />
      </div>
      <div className="research-project-card__info">
        <h3 className="research-project-card__title">
          <span dangerouslySetInnerHTML={{ __html: title }} />
        </h3>
        <Link className="research-project-card__more-link" to={slug} data-click-area>
          <FormattedMessage id="common.more-details" />
        </Link>
      </div>
    </ClickableArea>
  )
}
