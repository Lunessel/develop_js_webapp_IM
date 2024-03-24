import React from 'react';

import './channel_page.scss'
import ChannelDescription from "../../entities/ChannelDescription/ChannelDescription";
import ChannelFormats from "../../entities/ChannelFormats/ChannelFormats";
import ChannelSlickCalendar from "../../features/ChannelSlickCalendar/ChannelSlickCalendar";

const ChannelPage = () => {
    return (
        <div className={'channel-page'}>
            <ChannelDescription />
            <ChannelFormats />
            <div>статистика</div>
            <div>ER</div>
            <ChannelSlickCalendar />


        </div>
    );
};

export default ChannelPage;