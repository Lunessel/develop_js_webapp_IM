import React from 'react';

import './calendar_day.scss'
import CalendarSlot from "../../shared/CalendarSlot/CalendarSlot";

const CalendarDay = ({bg_color}) => {
    return (
        <div className={'calendar-day'}>
            <h3>Понеділок</h3>
            <CalendarSlot
                time={'9:00 - 11:00'}
                additional_text={'гаряче місце'}
                bg_color={'rgb(255, 139, 102)'}
            />
            <CalendarSlot
                time={'9:00 - 11:00'}
                bg_color={'grey'}
            />
            <CalendarSlot
                time={'9:00 - 11:00'}
                bg_color={'blue'}
            />
            <CalendarSlot
                time={'9:00 - 11:00'}
                bg_color={'blue'}
            />
        </div>
    );
};

export default CalendarDay;