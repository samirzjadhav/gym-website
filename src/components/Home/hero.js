import React from "react";
import { FaPlay } from "react-icons/fa6";
import brandImg1 from "../../assets/heroImg/hero-b-1.png";
import brandImg2 from "../../assets/heroImg/hero-b-2.png";
import brandImg3 from "../../assets/heroImg/hero-b-3.png";
import HeroImg from "../../assets/heroImg/hero-women.png";

const hero = () => {
  return (
    <section id="hero" className="hero-main w-screen h-dvh lg:pt-[150px]">
      <div className="w-full container flex mx-auto ">
        <div className="hero-banner w-[50%]">
          <div className="hero-banner-content">
            <div className="top-content">
              <h1 className="title">
                we stay fit with our
                <span className="text-primary text-[#ff8139]"> Best Coach</span>
              </h1>
              <p className="text-[18px] mb-[30px] leading-[24px] text-[#444] font-medium">
                Whether your aim is to loose weight, tone up, gain weight we can
                put together a gym programme or recommend the right classes for
                you to attend in our studios.
              </p>
              <div className="flex items-center">
                <a href="" className="btn btn-skew bg-[#ff8139] mr-[30px]">
                  <span>Get Started</span>
                </a>
                <div className="video-box">
                  <a
                    href=""
                    className="flex gap-2 items-center hover:bg-white hover:text-black hover:px-2 hover:py-1 hover:rounded-full hover:transition-all hover:delay-150"
                  >
                    <span className="flex items-center justify-center px-3 py-3 rounded-full bg-white">
                      <FaPlay className="text-black" />
                    </span>
                    <span>Play Video</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="bottom-content">
              <h4>Our Partner</h4>
              <div className="banner-testi">
                <div className="grid grid-cols-3">
                  <img src={brandImg1} alt="" />
                  <img src={brandImg2} alt="" />
                  <img src={brandImg3} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="banner-media w-[50%]">
          <div className="media1">
            <img src={HeroImg} alt="" className="h-auto w-auto " />
          </div>
        </div>
      </div>
    </section>
  );
};

export default hero;
