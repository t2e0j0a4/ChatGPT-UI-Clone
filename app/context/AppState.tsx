"use client";

import React, { useState } from 'react'
import AppContext from "./appContext";

const AppState = ({children}: {children: React.ReactNode}) => {

  const [ toggleSidebar, setToggleSidebar ] = useState<boolean>(false);

  const handleToggleSidebar = () => { setToggleSidebar(!toggleSidebar) }

  return (
    <AppContext.Provider value={{ toggleSidebar, handleToggleSidebar }}>
      {children}
    </AppContext.Provider>
  )
}

export default AppState;