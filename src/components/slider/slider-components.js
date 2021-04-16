import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
export const SliderContainer = styled.div`
  width: 100%;
  background: blue;
  display: flex;
  flex-grow: 1;
  position: relative;

  overflow: hidden;
`
export const SlideContainer = styled.div`
  min-width: 100%;
`
export const StyledImg = styled(Img)``

export const SliderControls = styled.div`
  position: absolute;
  
  width: 100%;
  height: 100%;
`
export const Forward = styled.button`
  background: rgba(255, 255, 255, 20%);
  padding: .5rem .90rem;
  position: absolute;
  right: 2.5%;
  top: 50%;
  border: none;
  border: 1px solid black;
  border-radius: 50%;
  font-family: Arial;
  font-weight: bold;
  z-index: 1;
`
export const Back = styled.button`
  background: rgba(255, 255, 255, 20%);
  padding: .5rem .90rem;
  border-radius: 50%;
  position: absolute;
  left: 2.5%;
  top: 50%;
  border: none;
  border: 1px solid black;
  font-family: Arial;
  font-weight: bold;
  z-index: 1;
`
export const FullScreen = styled.button`
  background: rgba(255, 255, 255, 20%);
  padding: .5rem .90rem;
  position: absolute;
  right: 2.5%;
  bottom: 2.5%;
  border: none;
  border: 1px solid black;
  font-family: Arial;
  font-weight: bold;

`
export const FullScreenLightBoxContainer = styled.div`
height: 100vh;
width: 100vw;
overflow: hidden;
box-sizing: border-box;
margin: 0;
position: absolute;
z-index: 200;
background: black;
display: ${props => props.openLightbox ? "flex" : "none"};
`
export const CloseButton = styled.div`
position: absolute;
top: 3.5%;
right: 2%;
color: black;

padding: .25rem .5rem;
margin: 0;
font-family: Arial, Helvetica, sans-serif;
font-weight: bold;
font-size: 2rem;
z-index: 2;
`
export const ModalSliderContainer = styled.div`
  min-width: 100%;
  position: absolute;
`
export const ModalForward = styled.button`
  background: rgba(255, 255, 255, 20%);
  padding: .5rem .90rem;
  position: absolute;
  top: 50%;
  right: 2.5%;
  border: none;
  border: 1px solid black;
  border-radius: 50%;
  font-family: Arial;
  font-weight: bold;
  z-index: 1000;
`
export const ModalBack = styled.button`
  background: rgba(255, 255, 255, 20%);
  padding: .5rem .90rem;
  border-radius: 50%;
  position: absolute;
  left: 2.5%;
  top: 50%;
  border: none;
  border: 1px solid black;
  font-family: Arial;
  font-weight: bold;
  z-index: 1000;
  `

