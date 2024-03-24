import React, {useState} from 'react';

import './channel_formats.scss'
import ChannelFormatItem from "../../shared/ChannelFormatItem/ChannelFormatItem";
import ChannelStatisticItem from "../../shared/ChannelStatisticItem/ChannelStatisticItem";
import OpenChannelButton from "../../shared/OpenChannelButton/OpenChannelButton";


const ChannelFormats = () => {

    const [active, setActive] = useState("");
    const handleClick = (event) => {
        setActive(event.target.id);

    }

    return (
        <div className={'channel-formats'} >
            <div className={'channel-formats__variants'}>

                <ChannelFormatItem text={'1/24'} id={'1/24'} is_active={active === '1/24'} on_click={handleClick}/>
                <ChannelFormatItem text={'2/48'} id={'2/48'} is_active={active === '2/48'} on_click={handleClick}/>
                <ChannelFormatItem text={'3/72'} id={'3/72'} is_active={active === '3/72'} on_click={handleClick}/>
                <ChannelFormatItem text={'без видалення'} id={'no-deleting'} is_active={active === 'no-deleting'} on_click={handleClick}/>

            </div>
            <div className={'channel-formats__price'}>
                <ChannelStatisticItem title={'CPM'} value={'800 грн'}/>
                <OpenChannelButton text={"800грн"} is_filled={true}></OpenChannelButton>
            </div>
        </div>
    );
};

export default ChannelFormats;