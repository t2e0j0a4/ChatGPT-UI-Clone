"use client";
import React, { useContext } from 'react'
import styles from "./PlusPopup.module.css";

// Context
import appContext from '@/app/context/appContext';
import MyContextTypes from '@/app/types';

// React Icons
import { IoClose } from "react-icons/io5";

const PlusPopup = () => {

    const myContext: (MyContextTypes | undefined) = useContext(appContext);

    return (
        myContext?.togglePopup ? (
            <main className={styles.popup__page}>
                <div className={styles.popup__box}>
                    
                    {/* Head */}
                    <div className={styles.box__head}>
                        <h3>Your plan</h3>
                        <button type="button" onClick={myContext?.handleTogglePopup}><IoClose/></button>
                    </div>

                    {/* Plan Space */}
                    <section className={styles.plan__space}>

                        <div className={styles.basic__plan}>
                            <h2>Free Plan</h2>
                            <button type="button" disabled>Your current plan</button>
                            <ul>
                                <li>Access to our GPT - 3.5 Model.</li>
                                <li>Standard response speed.</li>
                                <li>Regular model updates.</li>
                            </ul>
                        </div>

                        <div className={styles.pro__plan}>
                            <h2>GPT Plus <span>$20/month</span></h2>
                            <button type="button">Upgrade to Plus</button>
                            <ul>
                                <li>Access GPT - 4, most capable one.</li>
                                <li>Faster Response Speed.</li>
                                <li>Exclusive assess to features.</li>
                            </ul>
                        </div>

                    </section>

                </div>
            </main>
        ) : (<></>)
    )
}

export default PlusPopup