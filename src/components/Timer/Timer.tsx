import { useEffect } from "react"
import "./Timer.css"

interface TimerProps {
    timer: number
}

const Timer = ({ timer }: TimerProps) => {

    useEffect(() => {
        let clock = document.querySelector<HTMLElement>(".timer-frame")
        let degree = 360 + 360 / 11 - 360 / 11 * (timer + 1)
        if (clock) {
            let modifier = "conic-gradient(rgb(222, 237, 47) " + degree + "deg, grey 0deg)"
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