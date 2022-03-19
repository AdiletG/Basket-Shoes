import React from 'react';
import styles from './Tabs.module.css'
import miniLogo from '../../Assets/img/miniLogo.png'
import stan from '../../Assets/img/Stan.png'

const Tabs = () => {
    const {section, tab, miniLogoImg, titleBox, button, stanImg, tabTitle} = styles;

    return (
        <div className={section}>
            <div className={tab}>
                <img src={miniLogo} alt="" className={miniLogoImg}/>
                <div className={titleBox}>
                    <h2 className={tabTitle}><span style={{color: '#8BB43C'}}>Stan Smith</span>, <br/>
                        Forever!</h2>
                    <button className={button}>Купить</button>
                </div>
                <img src={stan} alt="" className={stanImg}/>
            </div>
        </div>
    );
};

export default Tabs;