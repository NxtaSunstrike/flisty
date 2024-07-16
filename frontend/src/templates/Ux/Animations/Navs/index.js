export const PagBarAnimation = {
    hidden: {
        y: 100,
        opacity: 0,
    },
    visible: customDelay =>({
        y: 0,
        opacity: 1,
        transition: {delay: customDelay},
    })
}

export const NavBarAnimation = {
    hidden: {
        y: -100,
        opacity: 0,
    },
    visible: customDelay =>({
        y: 0,
        opacity: 1,
        transition: {delay: customDelay},
    })
}