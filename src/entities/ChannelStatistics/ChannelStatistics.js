import React from 'react';
import ChannelStatisticItem from "../../shared/ChannelStatisticItem/ChannelStatisticItem";

import "./channel_statistics.scss"
import ChannelStatisticBlock from "../../shared/ChannelStatisticBlock/ChannelStatisticBlock";
const ChannelStatistics = () => {
    return (
        <div className={"channel-statistics"}>
            <div className={"channel-statistics__section"}>
                <ChannelStatisticItem title={"CPM"} value={"1000 грн"}/>
                <ChannelStatisticItem title={"ER(24h)"} value={"+30%"}/>
            </div>
            <div className={"channel-statistics__section"}>
                <ChannelStatisticBlock subscribers={"512 тис."} subscriber_growth={"+100/24h"}/>
            </div>
        </div>
    );
};

export default ChannelStatistics;