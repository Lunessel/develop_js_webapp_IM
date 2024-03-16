import React from 'react';
import ChannelDescription from "../../entities/ChannelDescription/ChannelDescription";
import ChannelStatistics from "../../entities/ChannelStatistics/ChannelStatistics";
import OpenChannelButton from "../../shared/OpenChannelButton/OpenChannelButton";

import "./channel_item.scss"
const ChannelItem = () => {
    return (
        <div className={"channel-item"}>
            <ChannelDescription />
            <div className={"channel-item__low-section"}>
                <ChannelStatistics />
                <div className={"channel-item__low-section__open"}>
                    <OpenChannelButton text={"Редагувати"} is_filled={false}/>
                    <OpenChannelButton text={"700 грн"} is_filled={true}/>
                </div>
            </div>
        </div>
    );
};

export default ChannelItem;