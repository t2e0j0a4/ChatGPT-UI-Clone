import React, { useContext } from 'react'
import styles from "./SmNavbar.module.css";
import Link from 'next/link';

// React Icons
import { BsPlus } from 'react-icons/bs';
import { RiMenuUnfoldLine } from "react-icons/ri";

// Context API
import appContext from '@/app/context/appContext';
import MyContextTypes from '@/app/types';

const SmNavbar = () => {

    const myContext: (MyContextTypes | undefined) = useContext(appContext);

    return (
        <nav className={styles.small__navbar}>
            <button type='button' onClick={myContext?.handleSmToggleSidebar}><RiMenuUnfoldLine/></button>
            <p>New Chat</p>
            <Link href='/' title='New'><BsPlus/></Link>
        </nav>
    )
}

export default SmNavbar