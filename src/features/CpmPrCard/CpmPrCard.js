import React from 'react';

import './cpm_pr_card.scss'
const CpmPrCard = () => {
    return (
        <div className={'cpm-pr-card'}>
            <div className={'cpm block'}>
                <h4>CPM</h4>
                <div>
                    <input className={'number'} type={'number'} min={0} laceholder={"0.0"}/>
                    <div>
                        <h5>UAH</h5>
                    </div>
                </div>
            </div>
            <div className={'pr block'}>
                <h4>ВЗАЄМОПІАР</h4>
                <div>
                    <input type={'checkbox'}/>
                    <h5>Так</h5>
                </div>
            </div>

        </div>
    );
};

export default CpmPrCard;