import React, { useState , useContext} from 'react';
import cl from './WrapperAuth.module.css'
import Login from './Login/Login';
import Register from './Register/Register';
import { CSSTransition, SwitchTransition } from 'react-transition-group';

const WrapperAuth = () => {
    const [state, setState] = useState(false)
    return (
        <div className={cl.Wrapper}>
            <SwitchTransition mode = {'out-in'}>
                <CSSTransition
                    key={state}
                    classNames='fade'
                    timeout={600}
                >
                    {state ? <Register setState={setState} state={state}/> : <Login setState={setState} state={state}/>}
                </CSSTransition>
            </SwitchTransition>
        </div>
    );
};

export default WrapperAuth;