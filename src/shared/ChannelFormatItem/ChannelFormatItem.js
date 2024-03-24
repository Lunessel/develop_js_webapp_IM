import React from 'react';

import './channel_format_item.scss'

const ChannelFormatItem = ({id, text, is_active, on_click}) => {
    return (
        <div id={id} className={`channel-format-item ${is_active&&'active-channel-format-item'}` } onClick={on_click}>
            {text}
        </div>
    );
};

export default ChannelFormatItem;