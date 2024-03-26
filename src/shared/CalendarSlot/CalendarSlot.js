import React from 'react';

import './calendar_slot.scss'

const CalendarSlot = ({time, additional_text, bg_color}) => {
    return (
        <div className={'calendar-slot'} style={{backgroundColor: bg_color}}>
            <h4>{time}</h4>
            {additional_text&&<h4>{additional_text}</h4>}
        </div>
    );
};

export default CalendarSlot;