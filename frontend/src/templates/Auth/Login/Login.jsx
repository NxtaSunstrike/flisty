import React, { useContext } from 'react';
import { useState } from 'react';
import cl from './Login.module.css'
import { FaDiscord } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { Context } from '../../../main';
import { observer} from 'mobx-react-lite'
import { HiOutlineMail } from "react-icons/hi";

import { InputsAnimation } from '../../Ux/Animations/Login';
import { ProvidersAnimation } from '../../Ux/Animations/Login';
import { LoginAnimations } from '../../Ux/Animations/Login';
import { motion } from 'framer-motion'

const Login = ({setState, state}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [btnActive, setBtnActive] = useState(false)
    const {store} = useContext(Context)
    const [loading, setLoading] = useState(false)

    const params = () => {
        if (email!='' && password!='') {
            setBtnActive(true)
        } else {
            setBtnActive(false)
        }
    }
    

    return (
        <motion.div 
            className={cl.Wrapper}
            initial = 'hidden'
            whileInView= 'visible'
        >
            <motion.h1  custom={.4} variants={LoginAnimations}>Login</motion.h1>
            <motion.div 
                className={cl.Inputs}
                initial = 'hiddenInp'
                whileInView= 'visibleInp'
            >
                    <motion.input 
                        custom={.3} variants={InputsAnimation}
                        onKeyUp={params}  placeholder='Type your email' 
                        onChange={e => setEmail(e.target.value)} value={email}
                    />
                    <motion.input 
                        custom={.3} variants={InputsAnimation}
                        type = 'password' onKeyUp={params}  
                        placeholder='Type your password' 
                        onChange={e => setPassword(e.target.value)} value={password}
                    />
                <div className={cl.Forgot}>
                    <p>Forgot password?</p>
                </div>
            </motion.div>
            <div className={cl.LoginButton}>
                <button disabled = {btnActive ? '' : 'disabled'}
                    onClick={() => store.Login(email, password, setLoading, setBtnActive)}>
                    <p style={{display: loading ? 'none' : ''}}>Login</p>
                    <h1 style={{display: loading ? '' : 'none'}}>...</h1>
                </button>
            </div>
            <p>Authorize using</p>
            <motion.div 
                initial = 'hiddenProv'
                whileInView= 'visibleProv'
                className={cl.social}
            >
                <motion.div 
                    custom={.3} variants={ProvidersAnimation}
                    className={cl.IconsWrapper}>
                    <FaDiscord fontSize={25}/>
                </motion.div>
                <motion.div 
                    custom={.4} variants={ProvidersAnimation}
                    className={cl.IconsWrapper} 
                >
                    <FaGoogle fontSize={25}/>
                </motion.div>
                <motion.div 
                    custom={.5} variants={ProvidersAnimation}
                    className={cl.IconsWrapper}
                >
                    <FaGithub fontSize={25}/>
                </motion.div>
            </motion.div>
            <p >Don't have an account? <a onClick={() => setState(!state)}>Sign Up</a></p>
        </motion.div>
    );
};

export default observer(Login);