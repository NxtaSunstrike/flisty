import React, { useState } from 'react';
import cl from './NavBar.module.css'
import {motion} from "framer-motion";
import {NavBarAnimation} from "../../Ux/Animations/Navs";
import { IoSettingsOutline } from "react-icons/io5";
import { IoLogOutOutline } from "react-icons/io5";
import { FiMessageSquare } from "react-icons/fi";

const NavBar = () => {

    const [UserPanel, setUserPanel] = useState(false)

    return (
        <motion.div
            initial = 'hidden'
            whileInView= 'visible'
        >
            <motion.div
                variants={NavBarAnimation} 
                className={cl.Wrapper}
                custom={.3}
            >
                <div className={cl.Logo}>

                </div>
                <div className={cl.SearchBar}>

                </div>
                <div className={cl.User}>
                    <h3>Nikita</h3>
                    <div onClick = {()=> setUserPanel(!UserPanel)} className={cl.TestUphoto}>

                    </div>
                    <div className={[cl.UserOptions, UserPanel ? cl.Active : ''].join(' ')}>
                        
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default NavBar;