import React from "react";
import Slider from "react-slick";
import {SliderCards} from '../Data/SliderCards';

 const ProjectsSlider =()=> {
    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        className:"row my-5",
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: false
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    return (
        <Slider {...settings}>
            {SliderCards.map((item,index)=>{ 
                return <div className=""  key={index}>
                    <div className="projects-section-hover">
                        <img src={item.img} alt="" />
                    </div>
                </div>
            })}
        </Slider>
    );
  }

  export default ProjectsSlider