import React from 'react';
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './channel_slick_calendar.scss'
import CalendarDay from "../CalendarDay/CalendarDay";

const ChannelSlickCalendar = () => {
    var settings = {
        className: "channel-slick-calendar",
        centerMode: true,
        infinite: true,
        // centerPadding: "94px",
        connectEnd:true,
        slidesToShow: 1,
        speed: 500,
        dots: true,
        focusOnSelect: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 380,
                settings: {
                    centerPadding: "85px",
                }
            },
            {
                breakpoint: 410,
                settings: {
                    centerPadding: "92px",
                }
            },
            {
                breakpoint: 425,
                settings: {
                    centerPadding: "103px",
                }
            },
            {
                breakpoint: 450,
                settings: {
                    centerPadding: "110px",
                }
            }
        ]


    };
    return (
        <Slider {...settings}>
            {/*<div>*/}
            {/*    <div>1</div>*/}
            {/*</div>*/}
            {/*<div>*/}
            {/*    <h3>2</h3>*/}
            {/*</div>*/}
            <CalendarDay bg_color={'lightblue'}/>
            <CalendarDay bg_color={'red'}/>
            <CalendarDay bg_color={'black'}/>
            <CalendarDay bg_color={'yellow'}/>
            <CalendarDay bg_color={'purple'}/>

        </Slider>
    );
};

export default ChannelSlickCalendar;