import React from 'react';
import "./channel_statistic_item.scss"
const ChannelStatisticItem = ({title, value}) => {
    return (
        <div className={"channel-statistic-item"}>
            <h5>{title}</h5>
            <div/>
            <h5>{value}</h5>
        </div>
    );
};

export default ChannelStatisticItem;