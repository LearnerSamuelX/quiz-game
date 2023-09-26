export const hoverEffect = (timer: number, selectedAnswer: number, key: number) => {
    if (timer !== 0) {
        let options = document.querySelectorAll("li")
        for (let i = 0; i < options.length; i++) {
            if (i !== selectedAnswer) {
                let option = options[i]
                option.style.border = "white 2.5px solid"
                option.style.background = "white"
            }
        }

        if (key !== selectedAnswer) {
            let hoveredOption = document.querySelector<HTMLElement>(".selection-" + key)
            if (hoveredOption) {
                hoveredOption.style.border = "grey 2.5px solid"
                hoveredOption.style.background = "grey"
                hoveredOption.style.transition = "background-color 0.5s ease, border 0.5s ease"
            }
        }
    }
}

export const leaveEffect = (timer: number, selectedAnswer: number, key: number) => {
    if (timer !== 0) {
        if (key !== selectedAnswer) {
            let hoveredOption = document.querySelector<HTMLElement>(".selection-" + key)
            if (hoveredOption) {
                hoveredOption.style.border = "white 2.5px solid"
                hoveredOption.style.background = "white"
            }
        }
    }
}