import React from 'react';
import ChannelItem from "../../features/ChannelItem/ChannelItem";
import Navigation from "../../features/Navigation/Navigation";

import './admin_profile_page.scss'

const AdminProfilePage = () => {
    return (
        <div className={"admin-page"}>
            <ChannelItem channel_id={1}/>
            <ChannelItem channel_id={2}/>
        </div>
    );
};

export default AdminProfilePage;