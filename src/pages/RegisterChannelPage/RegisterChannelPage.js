import React from 'react';

import './register_channel_page.scss'
import ChannelDescription from "../../entities/ChannelDescription/ChannelDescription";
import CpmPrCard from "../../features/CpmPrCard/CpmPrCard";

const RegisterChannelPage = () => {
    return (
        <div className={'register-channel-page'}>
            <ChannelDescription />
            <CpmPrCard />
        </div>
    );
};

export default RegisterChannelPage;