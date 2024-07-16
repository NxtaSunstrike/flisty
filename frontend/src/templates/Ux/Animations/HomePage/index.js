export const HelloTextAnim = {
    hidden: {
        x: 100,
        opacity: 0,
    },
    visible: customDelay =>({
        x: 0,
        opacity: 1,
        transition: {delay: customDelay},
    })
}

export const HelloBtnAnim = {
    hidden: {
        x: -150,
        opacity: 0,
    },
    visible: customDelay =>({
        x: 0,
        opacity: 1,
        transition: {delay: customDelay},
    })
}

export const HelloScreen = {
    hidden: {
        y: -150,
        opacity: 0,
    },
    visible: customDelay =>({
        y: 0,
        opacity: 1,
        transition: {delay: customDelay},
    })
}

