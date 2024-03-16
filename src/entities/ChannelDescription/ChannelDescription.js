import React from 'react';

import "./channel_description.scss"
const ChannelDescription = () => {
    return (
        <div className={"channel-description"}>
            <div className={"channel-description__photo"}>
                <div></div>
            </div>
            <div className={"channel-description__info"}>
                <h4>Назва Каналу</h4>
                <h5>Короткий опис</h5>
                <h6>взаємо-піар </h6>
            </div>
            <div className={"channel-description__tags"}>
                <div>Теги</div>
                <div>Теги</div>
                <div>Теги</div>
                <div>Теги</div>
                <div>Теги</div>
                <div>Теги</div>
            </div>
        </div>
    );
};

export default ChannelDescription;