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

  return (
    <AppContext.Provider value={{ toggleSidebar, handleToggleSidebar, smToggleSidebar, handleSmToggleSidebar }}>
      {children}
    </AppContext.Provider>
  )
}

export default AppState;