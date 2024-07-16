import { FaDiscord } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { Context } from '../../../main';
import { observer} from 'mobx-react-lite'
import React, { useContext } from 'react';
import { useState } from 'react';
import cl from './Register.module.css'
import { CSSTransition, SwitchTransition } from 'react-transition-group';



const Register = ({setState, state}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [code, setCode] = useState('')
    const [loading, setLoading] = useState(false)
    const [confirm, setConfirm] = useState(false)
    const [messagesAgree, setMessagesAgree] = useState(false)
    const [personalAgree, setPersonalAgree] = useState(false)
    const [btnActiveR, setBtnActiveR] = useState(false)
    const [btnActiveC, setBtnActiveC] = useState(false)

    const {store} = useContext(Context)


    const Params = () => {
        console.log(email, password, name, messagesAgree, personalAgree)
        if (email!='' && password!='' && name!='' 
        && messagesAgree && personalAgree) {
            setBtnActiveR(true)
        } else {
            setBtnActiveR(false)
        }
    }

    const ConfrimParams = () => {
        if (code!='') {
            setBtnActiveC(true)
        } else {
            setBtnActiveC(false)
        }
    }
    


    return (
        
        <div className={cl.Wrapper}>
            <SwitchTransition mode={'out-in'}>
                <CSSTransition
                    key={confirm}
                    classNames='fadeConfirm'
                    timeout={600}
                    unmountOnExit
                >
                    {confirm ? 
                        <div className={cl.Wrapper}>
                            <h1 className={cl.ConfirmText}>Confirm email</h1>
                            <div className={cl.Inputs}>
                                <div className={cl.ConfirmInput}>
                                    <input 
                                        type="text" placeholder='Type your code' 
                                        onChange={e => setCode(e.target.value)} value={code}
                                        onKeyUp={ConfrimParams}
                                    />
                                </div>
                            </div>
                            <p>Authorize using</p>
                            <div className={cl.social}>
                                <div className={cl.IconsWrapper}>
                                    <FaDiscord fontSize={25}/>
                                </div>
                                <div className={cl.IconsWrapper} >
                                    <FaGoogle fontSize={25}/>
                                </div>
                                <div className={cl.IconsWrapper}>
                                    <FaGithub fontSize={25}/>
                                </div>
                            </div>
                            <div className={cl.LoginButton}>
                                <button disabled = {btnActiveC ? '' : 'disabled'}
                                    onClick={()=>store.Confirmation(email, code, setLoading, setConfirm, setBtnActiveC, setMessagesAgree,  setPersonalAgree)}>
                                    <p style={{display: loading ? 'none' : ''}}>Register</p>
                                    <h1 style={{display: loading ? '' : 'none'}}>...</h1>
                                </button>
                            </div>
                            
                        </div>
                        :
                        <div className={cl.Wrapper}>
                            <h1>Register</h1>
                            <div className={cl.Inputs}>
                                    <input 
                                        type="text" placeholder='Type your name' 
                                        onChange={e => setName(e.target.value)} value={name}
                                        onKeyUp={Params}
                                    />
                                    <input 
                                        type="text" placeholder='Type your email' 
                                        onChange={e => setEmail(e.target.value)} value={email}
                                        onKeyUp={Params}
                                    />
                                    <input 
                                        type='password' 
                                        placeholder='Type your password' 
                                        onChange={e => setPassword(e.target.value)} value={password}
                                        onKeyUp={Params}
                                    />
                            </div>
                            <div className={cl.CheckBoxes}>
                                <div className={cl.CheckBox}>
                                    <label>
                                        <input onChange = {Params} type="checkbox"/>
                                        <span onClick={()=>setMessagesAgree(true)}></span>
                                    </label>
                                    <div className={cl.Imprtance}>
                                        <p >Я даю 
                                            <a target="_blank" href="#" > согласие </a>
                                            на получение информационных рассылок
                                        </p>
                                    </div>
                                </div>
                                <div className={cl.CheckBox}>
                                    <label>
                                        <input onChange = {Params} type="checkbox"/>
                                        <span onClick={()=>setPersonalAgree(true)}></span>
                                    </label>
                                    <div className={cl.Imprtance}>
                                        <p >Я ознакомлен(а) с
                                            <a target="_blank"  href="#">политикой</a>,
                                                <a target="_blank"  href="#">офертой</a>,
                                            и даю
                                            <a target="_blank" href="#" > согласие </a>
                                            на обработку персональных данных
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className={cl.LoginButton}>
                                <button disabled={btnActiveR ? '' : 'disabled'}
                                    onClick={() => store.Registration(name, email, password, setConfirm, setLoading,setBtnActiveR )}>
                                    <p style={{display: loading ? 'none' : ''}}>Confirm</p>
                                    <h1 style={{display: loading ? '' : 'none'}}>...</h1>
                                </button>
                            </div>
                            <p>Authorize using</p>
                            <div className={cl.social}>
                                <div className={cl.IconsWrapper}>
                                    <FaDiscord fontSize={25}/>
                                </div>
                                <div className={cl.IconsWrapper} >
                                    <FaGoogle fontSize={25}/>
                                </div>
                                <div className={cl.IconsWrapper}>
                                    <FaGithub fontSize={25}/>
                                </div>
                            </div>
                            <p>Have an account? <a onClick={() => setState(!state)}>Sign In</a></p>
                        </div>
                    }   
                </CSSTransition>
            </SwitchTransition>
        </div>
    )
};

export default observer(Register);