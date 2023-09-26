import { useEffect } from "react";
import "./CheckMark.css"

interface ActivateProps {
    id: number;
    activated: number
}

const CheckMark = ({ id, activated }: ActivateProps): JSX.Element => {

    useEffect(() => {

        if (activated === id) {
            let color = "rgb(155, 255, 155)"
            let idName = "option-" + id + "-checkmark-1"
            let checkmark_1 = document.getElementById(idName)
            if (checkmark_1) {
                checkmark_1.style.border = "2.5px " + color + " solid"
                checkmark_1.style.background = color
            }

            let idName2 = "option-" + id + "-checkmark-2"
            let checkmark_2 = document.getElementById(idName2)
            if (checkmark_2) {
                checkmark_2.style.border = "2.5px " + color + " solid"
                checkmark_2.style.background = color
            }
        }
    }, [activated])

    return (
        <div className="checkmark-container">
            <div id={"option-" + id + "-checkmark-1"} className="checkmark_stem"></div>
            <div id={"option-" + id + "-checkmark-2"} className="checkmark_kick"></div>
        </div >
    )
}

export default CheckMark