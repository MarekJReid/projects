import React from "react"
import Img from "gatsby-image"
import { SlideContainer, StyledImg } from "./slider-components"

const Slide = ({ fluid, keys }) => {
  return (
    <>
      <SlideContainer>
        <StyledImg key={keys} fluid={fluid} imageId={keys} />
      </SlideContainer>
    </>
  )
}

export default Slide
