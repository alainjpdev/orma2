import React from 'react'
import AwesomeSlider from 'react-awesome-slider'
import withAutoplay from 'react-awesome-slider/dist/autoplay'
import AwsSliderStyles from '../../styles/Carousel.module.scss'

const AutoPlaySlider = withAutoplay(AwesomeSlider)

const Carousel = () => (
  <AutoPlaySlider
    cssModule={AwsSliderStyles}
    className="awssld mb-8"
    play={false}
    cancelOnInteraction={true}
    interval={6000}
    // position={"sticky"}
    // top={0}
  >
    <div data-src="/images/1.jpeg" />
    <div data-src="/images/2.jpeg" />
    <div data-src="/images/3.jpeg" />
    <div data-src="/images/4.jpeg" />
    <div data-src="/images/5.jpeg" />
    <div data-src="/images/6.jpeg" />
    <div data-src="/images/7.jpeg" />
    <div data-src="/images/8.jpeg" />
    <div data-src="/images/9.jpeg" />
    <div data-src="/images/10.jpeg" />
    <div data-src="/images/11.jpeg" />
    <div data-src="/images/12.jpeg" />
    <div data-src="/images/13.jpeg" />
    <div data-src="/images/14.jpeg" />
    <div data-src="/images/15.jpeg" />
    <div data-src="/images/16.jpeg" />
    <div data-src="/images/17.jpeg" />
    <div data-src="/images/18.jpeg" />
    <div data-src="/images/5.jpeg" />
    <div data-src="/images/19.jpeg" />
    <div data-src="/images/20.jpeg" />
    <div data-src="/images/21.jpeg" />
    <div data-src="/images/22.jpeg" />
    <div data-src="/images/23.jpeg" />
    <div data-src="/images/24.jpeg" />
    <div data-src="/images/25.jpeg" />
    <div data-src="/images/26.jpeg" />

    {/* <div data-src="/images/tulump.png" /> */}
    {/* <div data-src="/images/beach2.jpg" /> */}
  </AutoPlaySlider>
)

export default Carousel
