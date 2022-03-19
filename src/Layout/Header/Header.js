import React from 'react';
import styles from './Header.module.css'
import Logo from '../../Assets/img/headerLogo.png'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import {BsSuitHeart} from 'react-icons/bs'
import {BiUserCircle} from 'react-icons/bi'

const Header = () => {
    const {header, left, right, logoImg, headerTitle, headerSubTitle, titleBox, cartBox, cartIcon,
        cartPrice, heart, user} = styles;


    return (
        <header className={header}>
            <nav className={left}>
                <img src={Logo} alt="headerLogo" className={logoImg}/>
                <div className={titleBox}>
                    <h2 className={headerTitle}>REACT SNEAKERS</h2>
                    <p className={headerSubTitle}>Магазин лучших кроссовок</p>
                </div>
            </nav>

            <nav className={right}>
                <div className={cartBox}>
                    <p className={cartIcon}><AiOutlineShoppingCart/></p>
                    <p className={cartPrice}>1205 руб.</p>
                </div>

                <div className={heart}><BsSuitHeart/></div>

                <div className={user}><BiUserCircle/></div>
            </nav>
        </header>
    );
};

export default Header;