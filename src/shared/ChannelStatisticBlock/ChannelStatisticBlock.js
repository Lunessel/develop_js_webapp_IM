import React from 'react';
import audience from "./images/audience.svg";

import "./channel_statistic_block.scss"
const ChannelStatisticBlock = ({subscribers, subscriber_growth}) => {
    return (
        <div className={"channel-statistic-block"}>
            <div>
                <img src={audience} alt={"audience"}/>
            </div>
            <h5>Приріст</h5>
            <h5>{subscribers}</h5>
            <h5>{subscriber_growth}</h5>


        </div>
    );
};

export default ChannelStatisticBlock;