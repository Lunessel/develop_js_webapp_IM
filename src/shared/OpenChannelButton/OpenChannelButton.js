import React from 'react';
// import {} from "react-router-dom";
import "./open_channel_button.scss"


const OpenChannelButton = ({text, is_filled}) => {
    return (
        <a href={"#"} className={`open-channel-button ${is_filled&&"open-channel-button-filled"}`}>
            {text}
        </a>

    );
};

export default OpenChannelButton;