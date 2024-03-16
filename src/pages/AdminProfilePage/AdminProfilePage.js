import React from 'react';
import ChannelItem from "../../features/ChannelItem/ChannelItem";
import Navigation from "../../features/Navigation/Navigation";

const AdminProfilePage = () => {
    return (
        <div className={"admin-page"}>
            <Navigation />
            <ChannelItem />
        </div>
    );
};

export default AdminProfilePage;