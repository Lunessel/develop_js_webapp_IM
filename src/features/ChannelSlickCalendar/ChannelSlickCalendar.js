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
        centerPadding: "60px",
        connectEnd:true,
        slidesToShow: 1,
        speed: 500,
        dots: true,
        focusOnSelect: true,
        arrows: false


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