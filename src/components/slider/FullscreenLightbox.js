import React, { useRef, useState, useEffect } from "react"
import { TweenLite, Power3 } from "gsap"

import Slide from "./slide"

import {
  CloseButton,
  FullScreenLightBoxContainer,
  ModalSliderContainer,
  SliderControls,
  ModalBack,
  ModalForward,
} from "../slider/slider-components"

const FullscreenLightbox = ({ openLightbox, setOpenLightbox, data }) => {
  const [imageArr, setimageArr] = useState([])
  const [imageNo, setImageNo] = useState(0)
  const [backButton, setBackButton] = useState(false)
  const images = data.allContentfulSlider.edges[0].node.mediaMany
  let modalImageWidth = 0
  let imageList = useRef(null)
  let imageWidth = 0
  let modalSliderContainer = useRef(null)
  let modalContainer = useRef(null)
  //set images into array
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
  //get container width to calculate slide distance
  useEffect(() => {
    imageWidth = modalSliderContainer.current.offsetWidth
  }, [modalSliderContainer.current])
  //fade in imagebox
  useEffect(() => {
    TweenLite.fromTo(
      modalContainer,
      0.75,
      {
        opacity: 0,
      },
      {
        opacity: 1,
      }
    )
  }, [openLightbox])

  const slideLeft = () => {
    modalImageWidth = modalSliderContainer.current.offsetWidth

    if (imageNo <= imageArr.length - 1) {
      TweenLite.to(imageList, {
        x: imageNo * `-${modalImageWidth}`,
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
        x: imageNo - `-${modalImageWidth}`,
        ease: Power3.ease,
      })
      setImageNo(imageNo + 1)
    } else {
      setBackButton(false)
      TweenLite.to(imageList, {
        x: 0,
      })
      setImageNo(1)
      setBackButton(false)
    }
  }

  const close = () => {
    TweenLite.fromTo(
      modalContainer,
      0.5,
      {
        opacity: 1,
      },
      {
        opacity: 0,
      }
    )

    setTimeout(() => {
      setOpenLightbox(false)
    }, 500)
  }

  return (
    <FullScreenLightBoxContainer
      openLightbox={openLightbox}
      ref={el => (modalContainer = el)}
    >
      <div
        class=""
        style={{ height: `100%`, width: `100%` }}
        ref={modalSliderContainer}
      >
        <CloseButton onClick={close}>x</CloseButton>

        <ModalSliderContainer>
          <div
            style={{ flexGrow: 1, display: `flex` }}
            ref={el => (imageList = el)}
          >
            {imageArr.map(image => (
              <Slide fluid={image.image.fluid} keys={image.imageId} />
            ))}
          </div>
          hi
        </ModalSliderContainer>
        <SliderControls>
          {backButton ? <ModalBack onClick={slideRight}>&#60;</ModalBack> : ""}

          <ModalForward onClick={slideLeft}>></ModalForward>
        </SliderControls>
      </div>
    </FullScreenLightBoxContainer>
  )
}

export default FullscreenLightbox
