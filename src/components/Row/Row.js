import Cell from "../Cell/Cell";

import styles from './Row.module.css'

const Row = (props) => {
    const cells = props.cells.map((rowData, index) => {
        return (
            <Cell rowData={rowData} key={index} />
        )
    })

    return (
        <div className={styles.row}>
            {cells}
        </div>
    )
}

export default Row;