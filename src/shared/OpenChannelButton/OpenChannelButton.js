import React from 'react';
// import {} from "react-router-dom";
import "./open_channel_button.scss"
import {Link} from "react-router-dom";


const OpenChannelButton = ({text, is_filled, direct_to}) => {
    return (
        <div className={`open-channel-button ${is_filled&&"open-channel-button-filled"}`}>
            <h5>{text}</h5>
        </div>

    );
};

export default OpenChannelButton;