import "./WrongCross.css"
import { useEffect } from "react";

interface ActivateProps {
    id: number;
    activated: number
}

const WrongCross = ({ id, activated }: ActivateProps): JSX.Element => {

    useEffect(() => {
        if (activated === id) {

            let color = "red"
            let idName = "option-" + id + "-wrong-cross-1"
            let wrongCross_1 = document.getElementById(idName)
            if (wrongCross_1) {
                wrongCross_1.style.border = "2.5px " + color + " solid"
                wrongCross_1.style.background = color
            }

            let idName2 = "option-" + id + "-wrong-cross-2"
            let wrongCross_2 = document.getElementById(idName2)
            if (wrongCross_2) {
                wrongCross_2.style.border = "2.5px " + color + " solid"
                wrongCross_2.style.background = color
            }
        }
    }, [activated])

    return (
        <div className="wrongcross-container">
            <div id={"option-" + id + "-wrong-cross-1"} className="wrong-cross-1">
            </div>
            <div id={"option-" + id + "-wrong-cross-2"} className="wrong-cross-2">
            </div>
        </div>
    )
}

export default WrongCross