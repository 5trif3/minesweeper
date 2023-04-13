import React from 'react';

import styles from './Cell.module.css'

const Cell = (props) => {
    

    let renderCell = () => {
        
        if (props.rowData.isOpen) {
            return (
                <div className={styles.cellOpen}>
                    {/* shows number of mines if present */}
                </div>
            )
        } else if (props.rowData.hasMine) {
            return (
                <div className={styles.cellOpen}>
                    M
                </div>
            )
        } else {
            return (
            <div className={styles.cell}>
                {/*displays cell*/}
            </div>
            )
        }

    }

    return renderCell()
}

export default Cell;