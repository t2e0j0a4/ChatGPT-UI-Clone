import React from 'react'
import styles from "./Planbox.module.css";

const Planbox = ({children}: {children: React.ReactNode}) => {

    const  { plan__box } = styles;

    return (
        <div className={plan__box}>
            {children}
        </div>
    )
}

export default Planbox