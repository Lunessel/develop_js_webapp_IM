import React from 'react';
import ChannelCard from "../../features/ChannelCard/ChannelCard";
import Navigation from "../../features/Navigation/Navigation";

import './admin_profile_page.scss'

const AdminProfilePage = () => {
    return (
        <div className={"admin-page"}>
            <ChannelCard channel_id={1}/>
            <ChannelCard channel_id={2}/>
        </div>
    );
};

export default AdminProfilePage;