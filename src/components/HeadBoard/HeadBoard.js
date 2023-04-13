

import styles from './HeadBoard.module.css'

const HeadBoard = (props) => {
    let minute = Math.floor(props.time / 60)
    let second = props.time - (minute * 60)
    let adjustedSecond = second < 10 ? `0${second}` : second
    

    let timer = `${minute}:${adjustedSecond}`

    

    return (
        <div className={styles.headBoard}>           
            <div className={styles.flags}>{props.flags}</div>           
            <button className={styles.reset} onClick={props.onShowStartModal}>Reset</button>
            <div className={styles.timer}>{timer}</div>
        </div>
    )
}

export default HeadBoard;