import React from 'react'
import styles from "./Optionbox.module.css";

// React Icons
import { BsChatText } from "react-icons/bs";
import { FiSettings, FiLogOut } from "react-icons/fi";

const Optionbox = () => {

    const { sidebar__options, option, divider } = styles;

    return (
        <div className={sidebar__options}>
            <div className={option}>
                <button type='button'>
                    <BsChatText/>
                    <p>Custom Instructions</p>
                </button>
                <button type='button'>
                    <FiSettings/>
                    <p>Settings</p>
                </button>
                <div className={divider}/>
                <button type='button'>
                    <FiLogOut/>
                    <p>Logout</p>
                </button>
            </div>
        </div>
    )
}

export default Optionbox