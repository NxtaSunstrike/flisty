import React, {useRef, useState} from 'react';
import cl from './CircularProgBar.module.css'


const CircularProgBar = () => {

    const valueRef = useRef(null);
    const ProgressRef = useRef(null)

    const [progressStartValue, setProgressStartValue] = useState(0)
    const [progressEndValue, setProgressEndValue] = useState(70)

    const progress = setInterval(() => {
        setProgressStartValue(prev => {
            if (prev < progressEndValue) {
                return prev + 1
            } else {
                clearInterval(progress)
                return prev
            }
        })
        valueRef.current.textContent = `${progressStartValue}%`
        ProgressRef.current.style.background = `conic-gradient(rgb(44, 44, 213) ${progressStartValue * 3.6}deg, rgb(24, 31, 56) ${progressStartValue * 3.6}deg)`
    }, 40)

    return (
        <div className={cl.Container}>
            <div ref = {ProgressRef} className={cl.Progress}>
                <span ref = {valueRef} refclassName= {cl.Value}>
                    
                </span>
            </div>
        </div>
    );
};

export default CircularProgBar;