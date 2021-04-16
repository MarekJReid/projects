export const slideLeft = () => {
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
  export const slideRight = () => {
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