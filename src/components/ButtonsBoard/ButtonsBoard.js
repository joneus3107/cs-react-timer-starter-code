import {useContext} from 'react';
import styles from './ButtonsBoard.module.css';
import Button from '../Button/Button';
import { formatTime } from '../../formatTime';
import { timerContext } from '../../Context/timerContext';


function ButtonsBoard() {
	const { time, startTimer, stopTimer, resetTimer, isStart } = useContext(timerContext);

	return (
		<div className={styles.timer__wrapper}>
			<div className={styles.timer__display}>
				<p>{formatTime(time)}</p>
			</div>
			<div className={styles.button__wrapper}>
				<Button onClick={stopTimer}>
					Stop
				</Button>
				<Button
					onClick={startTimer}
					disabled={isStart}
				>
					Start
				</Button>
				<Button onClick={resetTimer}>
					Reset
				</Button>
			</div>
		</div>
	)
}

export default ButtonsBoard
