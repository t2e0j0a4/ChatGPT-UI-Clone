"use client";
import styles from "./page.module.css";
import React, {useContext, useState, useEffect} from 'react';

// Context API
import MyContextTypes, { MyDemoPromptsType } from './types';
import appContext from './context/appContext';

// Components
import Navbar from './components/Navbar/Navbar';
import Planbox from './components/PlanBox/Planbox';
import SmNavbar from './components/SmNavbar/SmNavbar';

// React Icons
import { IoHelp } from "react-icons/io5";
import { HiSparkles } from "react-icons/hi";
import { BiSolidLockAlt } from "react-icons/bi";
import { RiSendPlane2Fill } from "react-icons/ri";
import { AiFillThunderbolt } from "react-icons/ai";
import { BsLayoutSidebarReverse } from "react-icons/bs";

// Constants
import { demoPrompts } from "./constants";

const Page = () => {

  const myContext: (MyContextTypes | undefined) = useContext(appContext);

  const [ appPlan, setAppPlan ] = useState<'basic' | 'plus' | 'active'>('active');

  const showWorkPlan = (currentPlan: ('basic' | 'plus')) => {
    setAppPlan(currentPlan);
    if (appPlan === currentPlan) {
      setAppPlan('active');
    }
  }

  return (
    <main className={`${styles.app__main} ${myContext?.toggleSidebar && styles.app__main_full}`}>
      
      <section>

        <SmNavbar/>
        <Navbar/>

        <div className={styles.main__page}>

          {/* Section 1 - Basic & Pro Card */}

          <section className={styles.page__cards}>

            <div className={`${styles.basic__card} ${(appPlan === 'basic' && styles.active) || (appPlan === 'active' && styles.active) }`} >
              <button type='button' onClick={() => {showWorkPlan('basic')}}><AiFillThunderbolt color={(appPlan === 'basic' || appPlan === 'active') && 'rgba(25,195,125)'} /><p>GPT - 3.5</p></button>
              {
                appPlan == 'basic' && (
                  <Planbox>
                    <h4>Our fastest model, great for everyday tasks.</h4>
                    <p>Available for free and plus users.</p>
                  </Planbox>
                )
              }
            </div>

            <div className={`${styles.pro__card} ${appPlan === 'plus' && styles.active}`}>
              <button type="button" onClick={() => {showWorkPlan('plus')}}><HiSparkles color={appPlan === 'plus' && 'rgba(171,104,255)'} /><p>GPT - 4</p><BiSolidLockAlt/></button>
              {
                appPlan == 'plus' && (
                  <Planbox>
                    <h4>Our most capable model, great for tasks that require creativity and advance reasoning.</h4>
                    <p>Available exclusively for plus users.</p>
                    <p>GPT-4 currently has a cap of 25 messages for every 3 hours.</p>
                    <button type='button'>Upgrade to GPT plus</button>
                  </Planbox>
                )
              }
            </div>

          </section>

          {/* Section 1 - Basic & Pro Card */}

          {/* Section 2 - Heading (ChatGPT) */}

          <section className={styles.page__head}>
            <h1>ChatGPT</h1>
          </section>

          {/* Section 2 - Heading (ChatGPT) */}

          {/* Section 3 - Example Prompts */}

          <section className={styles.demo__prompts}>
            {
              demoPrompts.map((item) => {
                return (
                  <button type="button" key={item.id}>
                    <h5>{item.title}</h5>
                    <p>{item.description}</p>
                  </button>
                )
              })
            }
          </section>

          {/* Section 3 - Example Prompts */}

        </div>
      
      </section>

      {/* Input Box - Major */}

      <div className={styles.prompt__inputarea}>

          {/* Input Box */}
          <div className={styles.prompt__input}>
            <textarea name="promptInput" placeholder="Send a Prompt"></textarea>
            <button type="button"><RiSendPlane2Fill/></button>
          </div>

          {/* Helper Text | Showcase Message */}
          <p>Free Research Preview. ChatGPT may produce inaccurate information about people, places, or facts.</p>

          {/* Toggling & Help Buttons Ends */}
          <button type="button" className={styles.toggle__sidebarback} onClick={() => myContext?.handleToggleSidebar(false)}><BsLayoutSidebarReverse/></button>
          <button type="button" className={styles.cta__help}><IoHelp/></button>

      </div>

      {/* Input Box - Major */}

    </main>
  )
}

export default Page;