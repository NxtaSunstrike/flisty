import { motion } from 'framer-motion'

export const LoginAnimations = {
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

export const InputsAnimation = {
    hiddenInp: {
        x: -100,
        opacity: 0,
    },
    visibleInp: customDelay =>({
        x: 0,
        opacity: 1,
        transition: {delay: customDelay},
    })
}

export const ProvidersAnimation = {
    hiddenProv: {
        y: 100,
        opacity: 0,
    },
    visibleProv: customDelay =>({
        y: 0,
        opacity: 1,
        transition: {delay: customDelay},
    })
}