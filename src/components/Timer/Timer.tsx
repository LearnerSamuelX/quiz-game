import { useEffect } from "react"
import "./Timer.css"

interface TimerProps {
    timer: number
}

const Timer = ({ timer }: TimerProps): JSX.Element => {

    useEffect(() => {
        let clock = document.querySelector<HTMLElement>(".timer-frame")
        let degree = 360 - 360 / 11 * timer
        if (clock) {
            let red = 222 + Math.abs(timer - 10) * (255 - 222) / 11
            let green = 237 + Math.abs(timer - 10) * (55 - 237) / 11
            let blue = 47 + Math.abs(timer - 10) * (55 - 47) / 11
            let modifier = `conic-gradient(rgb(${red}, ${green}, ${blue}) ` + degree + "deg, grey 0deg)"
            clock.style.background = modifier
        }
    }, [timer])

    return (
        <div className="timer-frame">
            <div className="timer-glass">
                <p>{timer}</p>
            </div>
        </div>
    )
}

export default Timer