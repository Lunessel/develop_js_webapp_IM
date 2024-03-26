import React from 'react';
import ChannelDescription from "../../entities/ChannelDescription/ChannelDescription";
import ChannelStatistics from "../../entities/ChannelStatistics/ChannelStatistics";
import OpenChannelButton from "../../shared/OpenChannelButton/OpenChannelButton";

import "./channel_item.scss"
import {Link} from "react-router-dom";
const ChannelItem = ({channel_id}) => {
    return (
        <div className={"channel-item"}>
            <ChannelDescription />
            <div className={"channel-item__low-section"}>
                <ChannelStatistics />
                <div className={"channel-item__low-section__open"}>
                    <Link to={`channels/${channel_id}`}>
                        <OpenChannelButton text={"Редагувати"} is_filled={false}/>
                    </Link>
                    <Link to={`channels/${channel_id}`}>
                        <OpenChannelButton text={"700 грн"} is_filled={true}/>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ChannelItem;