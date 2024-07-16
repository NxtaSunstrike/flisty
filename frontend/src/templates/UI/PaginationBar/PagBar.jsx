import React, {useRef} from 'react';
import cl from './PagBar.module.css'
import { FaHome } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { IoChatbox, IoChatboxOutline } from "react-icons/io5";
import { AiOutlineTeam } from "react-icons/ai";
import { FaListUl } from "react-icons/fa";
import { motion } from 'framer-motion'
import { PagBarAnimation } from '../../Ux/Animations/Navs'
import { Link } from 'react-router-dom'

const PagBar = () => {

    const List = useRef(null)
    const Listed = document.getElementsByClassName(cl.List)

    const func = (e) => {
        Array.from(Listed).forEach(el => {
            el.classList.remove(cl.Active)
            if (el == e.target || el == e.target.parentNode || el == e.target.parentNode.parentNode) {
                el.classList.add(cl.Active)
            }
        })
    }
         
       
    return (
        <motion.div 
            initial = 'hidden'
            whileInView= 'visible'
            className={cl.Wrapper}
        >
            <motion.div 
                className={cl.navigation}
                custom={.3}
                variants={PagBarAnimation}
            >   
                <Link to='/home' onClick = {func} ref = {List} className={[cl.List, cl.Active].join(' ')}>
                    <FaHome color='white' fontSize={22} />
                </Link>
                <Link to='/me' onClick = {func} ref = {List} className={cl.List}>
                    <FaRegUser color='white' fontSize={22} />
                </Link>
                <Link to='/chat' onClick = {func} ref = {List} className={cl.List}>
                    <IoChatbox color='white' fontSize={22} />
                </Link>
                <Link to='/teams' onClick = {func} ref = {List} className={cl.List}>
                    <AiOutlineTeam color='white' fontSize={22} />
                </Link>
                <Link to='/posts' onClick = {func} ref = {List} className={cl.List}>
                    <FaListUl color='white' fontSize={22} />
                </Link>
            </motion.div>
        </motion.div>
        
    );
};

export default PagBar;