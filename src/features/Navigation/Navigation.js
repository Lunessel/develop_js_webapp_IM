import React, {useEffect, useRef, useState} from 'react';

import './navigation.scss'
import {Link} from "react-router-dom";

const Navigation = () => {

    // to change burger classes
    const [burger_class, setBurgerClass] = useState("burger-bar unclicked")
    const [menu_class, setMenuClass] = useState("menu hidden")
    const [isMenuClicked, setIsMenuClicked] = useState(false)

    // toggle burger menu change
    const updateMenu = () => {
        if(!isMenuClicked) {
            setBurgerClass("burger-bar clicked")
            setMenuClass("menu visible")
        }
        else {
            setBurgerClass("burger-bar unclicked")
            setMenuClass("menu hidden")
        }
        setIsMenuClicked(!isMenuClicked)
    }
    let menuRef = useRef();
    let burgermenuRef = useRef();

    useEffect(() => {
        let handler = (e) => {
            if (!menuRef.current.contains(e.target) && !burgermenuRef.current.contains(e.target)) {
                setBurgerClass("burger-bar unclicked")
                setMenuClass("menu hidden")
                setIsMenuClicked(false)
            }
        }

        document.addEventListener("mousedown", handler)
    }, []);
    return (

        <>
            <nav>
                <div className="burger-menu" onClick={updateMenu} ref={burgermenuRef}>
                    <div className={burger_class} ></div>
                    <div className={burger_class} ></div>
                    <div className={burger_class} ></div>
                </div>
            </nav>

            <div className={menu_class} ref={menuRef}>
                <Link to={'/'} onClick={updateMenu}>My channels</Link>
            </div>
        </>
    );
};

export default Navigation;