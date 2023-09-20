"use client";
import React, {useState} from 'react'
import styles from "./Navbar.module.css";

// Constants
import { navbarOptions } from '@/app/constants';

const Navbar = () => {

  const { prompt__navbar,  navbar__center, navbar__opt1, navbar__opt2, navbar__moreoptions, option__btns, active } = styles;

  const [ currentSelectedOption, setCurrentSelectedOption ] = useState<number | null>(null);

  const handleCurrentSelectedOption = (id: number) => {
    currentSelectedOption === id ? setCurrentSelectedOption(null) : setCurrentSelectedOption(id)
  }

  return (
    <nav className={prompt__navbar}>
      <div className={navbar__center}>
        <div className={navbar__opt1}>
          {
            navbarOptions.map((item) => {
              return (
                <button type='button' key={item.id} className={`${currentSelectedOption === item.id && active}`} id={`${item.id.toString()}`} onClick={() => handleCurrentSelectedOption(item.id)}>{item.option}</button>
              )
            })
          }
        </div>
        <div className={navbar__opt2}>
          <button type="reset">Reset</button>
          <button type="button">Export</button>
        </div>
      </div>

      {
        currentSelectedOption && (
          <div className={navbar__moreoptions}>
            <div className={option__btns}>
              {
                navbarOptions[currentSelectedOption - 1].moreOptions.map((opt) => {
                  return (
                    <button type="button" key={opt.id}>{opt.option}</button>
                  )
                })
              }
            </div>
          </div>
        )
      }

    </nav>
  )
}

export default Navbar