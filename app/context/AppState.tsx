"use client";

import React, { useState } from 'react'
import AppContext from "./appContext";

const AppState = ({children}: {children: React.ReactNode}) => {

  const [ toggleSidebar, setToggleSidebar ] = useState<boolean>(false);
  const [ smToggleSidebar, setSmToggleSidebar ] = useState<boolean>(false);

  const handleToggleSidebar = (payload: boolean) => {
    setToggleSidebar(payload);
    if (smToggleSidebar) {
      setSmToggleSidebar(false);
    }
  }

  const handleSmToggleSidebar = () => { setSmToggleSidebar(true) }

  const [ togglePopup, setTogglePopup ] = useState<boolean>(false);

  const handleTogglePopup = () => { setTogglePopup(!togglePopup) }

  return (
    <AppContext.Provider value={{ toggleSidebar, handleToggleSidebar, smToggleSidebar, handleSmToggleSidebar, togglePopup, handleTogglePopup }}>
      {children}
    </AppContext.Provider>
  )
}

export default AppState;