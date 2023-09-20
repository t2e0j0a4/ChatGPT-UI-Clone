"use client";

import Link from 'next/link';
import Image from 'next/image';
import styles from "./Sidebar.module.css";
import React, { useContext, useState } from 'react'

// React Icons
import { CiUser } from "react-icons/ci";
import { FiSidebar } from "react-icons/fi";
import { SlOptionsVertical } from "react-icons/sl";
import { BsPlus, BsChatLeft } from "react-icons/bs";

// Components
import Optionbox from '../Optionbox/Optionbox';

// Context API
import appContext from '@/app/context/appContext';

// Types
import MyContextTypes from '@/app/types';

const Sidebar = () => {

  const [ showOptions, setShowOptions ] = useState<boolean>(false);

  const toggleOptionsMenu = (): void => {
    setShowOptions(!showOptions);
  }

  const myContext: (MyContextTypes | undefined) = useContext(appContext);
 
  return (
    <nav className={`${styles.app__sidebar} ${myContext?.toggleSidebar && styles.not__active} ${myContext?.smToggleSidebar && styles.smscreen__active}`}>
      <aside className={styles.sidebar__main}>

        {/* New chat + Toggle Sidebar button */}
        <div className={styles.sidebar__sec1}>
          <button className={styles.sec1__cta} type="button">
            <BsPlus />
            <span>New chat</span>
          </button>
          <button className={styles.sec1__cta} type="button" onClick={() => myContext?.handleToggleSidebar(true)}>
            <FiSidebar />
          </button>
        </div>

        {/* All chats info */}
        <div className={styles.sidebar__sec2}>
          <h3>Chats</h3>
          <div className={styles.sec2__chats}>
            <Link href="/"><BsChatLeft /><span>{'Universe Birth and Sun Size.'.slice(0, 24)}...</span></Link>
            <Link href="/"><BsChatLeft /><span>{'Our Friendly chat.'}</span></Link>
            <Link href="/"><BsChatLeft /><span>{'Universe Birth and Sun Size.'.slice(0, 24)}...</span></Link>
            <Link href="/"><BsChatLeft /><span>{'Our Friendly chat.'}</span></Link>
            <Link href="/"><BsChatLeft /><span>{'Universe Birth and Sun Size.'.slice(0, 24)}...</span></Link>
            <Link href="/"><BsChatLeft /><span>{'Our Friendly chat.'}</span></Link>
            <Link href="/"><BsChatLeft /><span>{'Universe Birth and Sun Size.'.slice(0, 24)}...</span></Link>
            <Link href="/"><BsChatLeft /><span>{'Our Friendly chat.'}</span></Link>
          </div>
        </div>

        {/* Options */}
        <div className={styles.sidebar__sec3}>
          
          <button type='button' className={styles.sec3__opt}>
            <button type='button' onClick={myContext?.handleTogglePopup}><CiUser/><p>Upgrade to plus</p></button>
            <span>NEW</span>
          </button>

          <div className={`${styles.sec3__opt} ${showOptions && styles.active}`}>
            <button type='button' onClick={toggleOptionsMenu}><Image src={'/User.jpeg'} alt='User' width={48} height={48}/><p>John Doe</p></button>
            <SlOptionsVertical color={'#fff'} style={{ cursor: 'pointer' }} onClick={toggleOptionsMenu}/>
            {
              showOptions ? <Optionbox/> : <></>
            }
          </div>

        </div>

      </aside>
    </nav>
  );
}

export default Sidebar