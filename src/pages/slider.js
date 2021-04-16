import React, { useState, useEffect, useRef } from "react"
import { graphql } from "gatsby"

import { TweenLite, Power3, gsap } from "gsap"

import Slide from "../components/slider/slide"

import { PageContainer, Section } from "../components/global-components/page"
import {
  SliderContainer,
  SlideContainer,
  SliderControls,
  Back,
  Forward,
  FullScreen,
} from "../components/slider/slider-components"
import FullscreenLightbox from "../components/slider/FullscreenLightbox"

gsap.registerPlugin()
const ComponentName = ({ data }) => {
  const [imageArr, setimageArr] = useState([])
  const [imageNo, setImageNo] = useState(0)
  const [backButton, setBackButton] = useState(false)
  const [openLightbox, setOpenLightbox] = useState(false)
  const [numOfImagesMet, setNumOfImagesMet] = useState()
  const images = data.allContentfulSlider.edges[0].node.mediaMany
  let numOfImages = 1
  let imageWidth = 0

  let container = useRef(null)
  let imageList = useRef(null)
  let sliderContainer = useRef(null)
  

  useEffect(() => {
    images.map((image, i) => {
      setImageNo(imageNo + 1)
      i > 0
        ? setimageArr(oldArray => [
            ...oldArray,
            {
              imageId: i + 1,
              image: image,
              visable: false,
            },
          ])
        : setimageArr(oldArray => [
            ...oldArray,
            {
              imageId: i + 1,
              image: image,
              visable: true,
            },
          ])
    })
  }, [data])

  useEffect(() => {
    imageWidth = sliderContainer.current.offsetWidth
  }, [sliderContainer.current])

  const slideLeft = () => {
    imageWidth = sliderContainer.current.offsetWidth

    if (imageNo <= imageArr.length - 1) {
      TweenLite.to(imageList, {
        x: imageNo * `-${imageWidth}`,
        ease: Power3.ease,
      })
      setBackButton(true)
      setImageNo(imageNo + 1)

      console.log(`imageNo`, imageNo)
    } else {
      TweenLite.to(imageList, {
        x: 0,
      })
      setImageNo(1)
      setBackButton(false)
    }
  }
  const slideRight = () => {
    if (imageNo <= imageArr.length - 2) {
      TweenLite.to(imageList, {
        x: imageNo - `-${imageWidth}`,
        ease: Power3.ease,
      })
      setImageNo(imageNo + 1)
    } else {
      TweenLite.to(imageList, {
        x: 0,
      })
      setImageNo(1)
      setBackButton(false)
    }
  }
  return (
    <PageContainer>
      <Section>
        <SliderContainer ref={sliderContainer}>
        <div style={{ flexGrow: 1, display: `flex` }}
            ref={el => (imageList = el)}> 
         
            {imageArr.map(image => (
              <Slide fluid={image.image.fluid} keys={image.imageId} />
            ))}div
         </div>

          <SliderControls>
            {backButton ? <Back onClick={slideRight}>&#60;</Back> : ""}

            <Forward onClick={slideLeft}>></Forward>
            <FullScreen onClick={() => setOpenLightbox(true)}> Big</FullScreen>
          </SliderControls>
        </SliderContainer>
        <FullscreenLightbox
          openLightbox={openLightbox}
          setOpenLightbox={setOpenLightbox}
          data={data}
        />
      </Section>
    </PageContainer>
  )
}

export default ComponentName

export const one = graphql`
  query MyQuery {
    allContentfulSlider {
      edges {
        node {
          id
          mediaMany {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`
