import React from 'react';
import cl from './HomePage.module.css'
import { motion } from 'framer-motion'
import { HelloTextAnim, HelloBtnAnim, HelloScreen} from '../../Ux/Animations/HomePage';
import Card from '../../UI/Card/Card';
import { SlSocialVkontakte } from "react-icons/sl";
import { FaTelegramPlane } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { CiMail } from "react-icons/ci";


const HomePage = () => {
    return (
        <>
            <motion.div 
                initial='hidden'
                whileInView='visible'
                className={cl.HelloText}
            >
                <motion.h2 custom={.4} variants={HelloTextAnim}
                    >Общайтесь, делитесь контентом
                </motion.h2>
                <motion.h1 custom={.5} variants={HelloTextAnim}>c Flisty</motion.h1>
               
                <motion.a 
                    initial='hidden'
                    whileInView='visible'
                    href='/chat'
                >
                    <motion.button custom={.3} variants={HelloBtnAnim}>
                        <h3>Start Messaging</h3>
                    </motion.button>
                </motion.a>
               <motion.div 
                    initial='hidden'
                    whileInView='visible'
                    className={cl.Screen}
                >
                    <motion.div 
                        custom={.4} variants={HelloScreen}
                        className={cl.Content}
                    ></motion.div>
               </motion.div>
               <motion.div
                    initial='hidden'
                    whileInView='visible'
                    className={cl.About}
                >
                    <motion.div 
                        custom={.5} variants={HelloTextAnim}
                        className={cl.Feature}>
                        <h2>Security</h2>
                        <p>Keep your messages and chats safe with end-to-end encryption. We dont't save your messages</p>
                    </motion.div>
                    <motion.div 
                        custom={.4} variants={HelloTextAnim}
                        className={cl.Feature}
                    >
                        <h2>Support</h2>
                        <p>Get assistance from our team of experts. You can chat with our team where and when you want</p>
                    </motion.div>
                    <motion.div 
                        custom={.4} variants={HelloTextAnim}
                        className={cl.Feature}
                    >
                        <h2> Easy to Use</h2>
                        <p>Intuitive interface makes it easy to navigate and use. Plan your project and found help in our experts</p>
                    </motion.div>
               </motion.div>
               <h2>Why So Fast?</h2>
               <motion.div 
                    initial='hidden'
                    whileInView='visible'
                    className={cl.WhyFast}
                >
                    <motion.div 
                        custom={.4} variants={HelloScreen}
                        className={cl.beacuse}
                    >
                        <Card>
                            <div className={cl.CardContent}>
                                <div className={cl.CardHeader}>
                                    <svg width="100" height="52" viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect width="256" height="256" rx="60" fill="#049789"/>
                                        <path d="M127.5 41C79.743 41 41 79.743 41 127.5C41 175.257 79.743 214 127.5 214C175.257 214 214 175.257 214 127.5C214 79.743 175.257 41 127.5 41ZM122.993 196.839V142.581H92.8306L136.167 58.1615V112.419H165.203L122.993 196.839Z" fill="white"/>
                                    </svg>
                                    <h3>FastApi</h3>
                                </div>
                                <div className={cl.InfoText}>
                                    <p> FastApi is a modern fast asynchronous web framework for building APIs in Python. It is designed to be efficient, flexible, and easy to use. </p>
                                </div>
                            </div>
                        </Card>
                    </motion.div>
                    <motion.div 
                        custom={.5} variants={HelloScreen}
                        className={cl.beacuse}
                    >
                        <Card>
                            <div className={cl.CardContent}>
                                <div className={cl.CardHeader}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="100" height="52" fill="none" viewBox="0 0 256 256"><rect width="0" height="0" fill="#242938" rx="60"/><g clip-path="url(#clip0_7_218)"><path fill="#A41E11" d="M220.161 174.468C209.488 180.035 154.204 202.765 142.434 208.899C130.663 215.034 124.126 214.976 114.826 210.532C105.526 206.089 46.6945 182.326 36.0904 177.257C30.7884 174.722 28.0101 172.591 28.0101 170.576V150.36C28.0101 150.36 104.609 133.685 116.978 129.247C129.348 124.809 133.627 124.65 144.157 128.505C154.687 132.359 217.606 143.711 228.003 147.523V167.459C228.003 169.458 225.607 171.7 220.172 174.479L220.161 174.468Z"/><path fill="#D82C20" d="M220.162 154.246C209.488 159.813 154.204 182.543 142.434 188.677C130.663 194.812 124.126 194.753 114.826 190.31C105.526 185.867 46.6946 162.103 36.0905 157.035C25.4864 151.966 25.2743 148.483 35.6822 144.405L116.973 112.932C129.338 108.5 133.622 108.335 144.151 112.19C154.681 116.045 209.632 137.916 220.024 141.786C230.416 145.657 230.824 148.732 220.151 154.299L220.162 154.246Z"/><path fill="#A41E11" d="M220.161 141.5C209.488 147.067 154.204 169.797 142.434 175.931C130.663 182.066 124.126 182.007 114.826 177.564C105.526 173.121 46.6945 149.357 36.0904 144.289C30.7884 141.754 28.0101 139.623 28.0101 137.608V117.391C28.0101 117.391 104.609 100.716 116.978 96.2787C129.348 91.8409 133.627 91.6818 144.157 95.5364C154.687 99.391 217.606 110.743 228.003 114.555V134.491C228.003 136.489 225.607 138.732 220.172 141.51L220.161 141.5Z"/><path fill="#D82C20" d="M220.162 121.283C209.488 126.85 154.204 149.58 142.434 155.715C130.663 161.849 124.126 161.791 114.826 157.348C105.526 152.904 46.6946 129.141 36.0905 124.072C25.4864 119.003 25.2743 115.52 35.6822 111.442L116.973 79.9748C129.338 75.537 133.622 75.378 144.151 79.2326C154.681 83.0871 209.632 104.963 220.034 108.765C230.437 112.567 230.835 115.711 220.162 121.278V121.283Z"/><path fill="#A41E11" d="M220.161 107.312C209.488 112.879 154.204 135.609 142.434 141.749C130.663 147.889 124.126 147.825 114.826 143.382C105.526 138.939 46.6945 115.175 36.0904 110.106C30.7884 107.572 28.0101 105.441 28.0101 103.426V83.1985C28.0101 83.1985 104.609 66.5236 116.978 62.0858C129.348 57.648 133.627 57.4889 144.157 61.3435C154.687 65.1981 217.606 76.5498 228.003 80.3619V100.298C228.003 102.297 225.607 104.539 220.172 107.318L220.161 107.312Z"/><path fill="#D82C20" d="M220.162 87.0902C209.488 92.6573 154.204 115.387 142.434 121.522C130.663 127.656 124.126 127.598 114.826 123.155C105.526 118.712 46.6946 94.9478 36.0905 89.8791C25.4864 84.8103 25.2743 81.3269 35.6822 77.2496L116.973 45.782C129.338 41.3442 133.622 41.1851 144.151 45.0397C154.681 48.8943 209.632 70.7705 220.034 74.5721C230.437 78.3736 230.835 81.5177 220.162 87.0849V87.0902Z"/><path fill="#fff" d="M132.996 78.7554L126.729 68.3369L106.719 66.5342L121.65 61.1473L117.169 52.8761L131.146 58.3372L144.326 54.0213L140.763 62.5682L154.199 67.6052L136.872 69.4079L132.996 78.7554ZM99.6143 99.497L145.954 92.3816L131.957 112.911L99.6143 99.497Z"/><path fill="#fff" d="M87.1226 92.0158C100.803 92.0158 111.894 87.7168 111.894 82.4138C111.894 77.1107 100.803 72.8118 87.1226 72.8118C73.4419 72.8118 62.3515 77.1107 62.3515 82.4138C62.3515 87.7168 73.4419 92.0158 87.1226 92.0158Z"/><path fill="#7A0C00" d="M202.113 81.0141L174.702 91.8408L174.681 70.1714L202.113 81.0141Z"/><path fill="#AD2115" d="M174.707 91.8408L171.738 93.0072L144.348 82.1805L174.691 70.1766L174.707 91.8408Z"/></g><defs><clipPath id="clip0_7_218"><rect width="200" height="200" fill="#fff" transform="translate(28 28)"/></clipPath></defs></svg>
                                    <h3>Redis</h3>
                                </div>
                                <div className={cl.InfoText}>
                                    <p> Redis is a powerful in-memory data structure store, used as a database, cache, message broker, and more. </p>
                                </div>
                            </div>
                        </Card>
                    </motion.div>
                    <motion.div 
                        custom={.5} variants={HelloScreen}
                        className={cl.beacuse}
                        >
                        <Card>
                            <div className={cl.CardContent}>
                                <div className={cl.CardHeader}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="100" height="52" fill="none" viewBox="0 0 256 256"><rect width="0" height="0" fill="#242938" rx="60"/><path fill="#336791" d="M203.48 148.688C183.16 152.878 181.684 145.995 181.684 145.995C203.15 114.143 212.129 73.7134 204.38 63.8204C183.259 36.8204 146.689 49.5962 146.077 49.9266L145.88 49.9618C141.414 49.0656 136.873 48.5924 132.317 48.5485C123.12 48.4079 116.145 50.9602 110.844 54.9751C110.844 54.9751 45.6078 28.1016 48.6453 88.7743C49.2922 101.684 67.1375 186.509 88.4422 160.845C96.2891 151.409 103.812 143.484 103.812 143.484C107.539 145.966 112.018 147.232 116.708 146.775L117.073 146.466C116.966 147.681 117.016 148.905 117.221 150.108C111.737 156.239 113.354 157.315 102.385 159.572C91.2898 161.857 97.8148 165.928 102.062 166.997C107.223 168.291 119.162 170.119 127.234 158.827L126.91 160.113C129.062 161.836 130.566 171.314 130.313 179.906C130.06 188.499 129.891 194.391 131.579 199.003C133.266 203.616 134.954 213.98 149.368 210.956C161.413 208.376 167.649 201.675 168.528 190.524C169.147 182.592 170.539 183.759 170.638 176.672L171.763 173.311C173.049 162.553 171.973 159.087 179.391 160.704L181.198 160.866C186.662 161.112 193.813 159.987 198.003 158.039C207.038 153.849 212.396 146.845 203.487 148.688H203.48Z"/><path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="5.034" d="M146.07 48.5961C143.82 49.2993 182.38 34.4985 204.303 62.504C212.038 72.3969 203.073 112.827 181.606 144.678M128.098 153.784C127.536 173.795 128.239 193.946 130.194 198.784C132.148 203.621 136.346 213.198 150.767 210.118C162.812 207.538 167.199 202.538 169.098 191.506L173.548 156.231L128.098 153.784ZM110.816 53.4688C110.816 53.4688 45.5375 26.7782 48.575 87.4508C49.2219 100.36 67.0672 185.185 88.3719 159.521C96.1484 150.148 103.18 142.815 103.18 142.815L110.816 53.4688Z"/><path stroke="#fff" stroke-linecap="round" stroke-linejoin="bevel" stroke-width="5.034" d="M181.613 144.664C181.613 144.664 183.02 151.555 203.41 147.35C212.319 145.508 206.954 152.511 197.926 156.702C190.515 160.147 173.893 161.026 173.619 156.28C172.916 144.01 182.366 147.737 181.684 144.664C181.065 141.894 176.832 139.18 174.048 132.402C171.608 126.495 140.579 81.1438 182.654 87.8727C184.201 87.5563 171.685 47.7946 132.31 47.2181C92.9352 46.6415 94.1797 95.6282 94.1797 95.6282"/><path stroke="#fff" stroke-linejoin="round" stroke-width="5.034" d="M117.08 148.869C111.596 155 113.213 156.076 102.245 158.333C91.1492 160.618 97.6742 164.689 101.921 165.758C107.082 167.052 119.021 168.88 127.093 157.58C129.554 154.135 127.079 148.651 123.704 147.259C122.073 146.584 119.893 145.74 117.095 148.876L117.08 148.869Z"/><path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="5.034" d="M116.722 148.763C116.159 145.156 117.903 140.874 119.766 135.854C122.565 128.331 129.02 120.807 123.859 96.9219C120.013 79.1329 94.1867 93.2165 94.1867 95.6282C94.1867 98.0399 95.3539 107.863 93.7648 119.288C91.6766 134.209 103.257 146.823 116.588 145.536"/><path fill="#fff" stroke="#fff" stroke-width="1.68" d="M110.577 95.2695C110.457 96.0922 112.088 98.293 114.205 98.5883C116.321 98.8836 118.128 97.168 118.248 96.3383C118.367 95.5086 116.736 94.6086 114.62 94.3133C112.503 94.018 110.682 94.4539 110.577 95.2695V95.2695Z"/><path fill="#fff" stroke="#fff" stroke-width=".837" d="M175.011 93.5891C175.123 94.4118 173.499 96.6125 171.383 96.9079C169.266 97.2032 167.445 95.4875 167.34 94.6579C167.234 93.8282 168.852 92.9282 170.968 92.6329C173.084 92.3375 174.905 92.7735 175.011 93.5891Z"/><path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="5.034" d="M182.577 87.8867C182.928 94.3555 181.184 98.75 180.959 105.634C180.636 115.632 185.727 127.079 178.055 138.54"/></svg>
                                    <h3>PostgreSQL</h3>
                                </div>
                                <div className={cl.InfoText}>
                                    <p> PostgreSQL is a powerful, open source SQL database that can handle a variety of applications. </p>
                                </div>
                            </div>
                        </Card>
                    </motion.div>
                    <motion.div 
                        custom={.3} variants={HelloScreen}
                        className={cl.beacuse}
                    >
                        <Card>
                            <div className={cl.CardContent}>
                                <div className={cl.CardHeader}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="100" height="52" fill="none" viewBox="0 0 256 256"><rect width="0" height="0" fill="#242938" rx="60"/><path fill="#00D8FF" d="M128.001 146.951C138.305 146.951 146.657 138.598 146.657 128.295C146.657 117.992 138.305 109.639 128.001 109.639C117.698 109.639 109.345 117.992 109.345 128.295C109.345 138.598 117.698 146.951 128.001 146.951Z"/><path fill-rule="evenodd" stroke="#00D8FF" stroke-width="8.911" d="M128.002 90.3633C153.05 90.3633 176.319 93.9575 193.864 99.9976C215.003 107.275 228 118.306 228 128.295C228 138.704 214.226 150.423 191.525 157.944C174.363 163.63 151.779 166.598 128.002 166.598C103.624 166.598 80.5389 163.812 63.1834 157.881C41.2255 150.376 28 138.506 28 128.295C28 118.387 40.4096 107.441 61.2515 100.175C78.8617 94.0353 102.705 90.3633 127.998 90.3633H128.002Z" clip-rule="evenodd"/><path fill-rule="evenodd" stroke="#00D8FF" stroke-width="8.911" d="M94.9811 109.438C107.495 87.7402 122.232 69.3783 136.23 57.1971C153.094 42.5206 169.144 36.7728 177.796 41.7623C186.813 46.9623 190.084 64.7496 185.259 88.1712C181.614 105.879 172.9 126.925 161.021 147.523C148.842 168.641 134.897 187.247 121.09 199.315C103.619 214.587 86.7284 220.114 77.8833 215.013C69.3003 210.067 66.0181 193.846 70.1356 172.161C73.6145 153.838 82.3451 131.349 94.977 109.438L94.9811 109.438Z" clip-rule="evenodd"/><path fill-rule="evenodd" stroke="#00D8FF" stroke-width="8.911" d="M95.0123 147.578C82.4633 125.904 73.9194 103.962 70.3531 85.7517C66.0602 63.8109 69.0954 47.0355 77.7401 42.0315C86.7485 36.8163 103.792 42.866 121.674 58.7437C135.194 70.7479 149.077 88.8052 160.99 109.383C173.204 130.481 182.358 151.856 185.919 169.844C190.425 192.608 186.778 210.001 177.941 215.116C169.367 220.08 153.676 214.825 136.945 200.427C122.809 188.263 107.685 169.468 95.0123 147.578Z" clip-rule="evenodd"/></svg>
                                    <h3>React</h3>
                                </div>
                                <div className={cl.InfoText}>
                                    <p> React is a JavaScript library for building user interfaces. </p>
                                </div>
                            </div>
                        </Card>
                    </motion.div>
                    <motion.div 
                        custom={.3} variants={HelloScreen}
                        className={cl.beacuse}
                    >
                        <Card>
                            <div className={cl.CardContent}>
                                <div className={cl.CardHeader}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="100" height="52" fill="none" viewBox="0 0 256 256"><rect width="256" height="256" fill="#009639" rx="60"/><path fill="#fff" d="M195.338 213C190.746 213 186.224 211.213 182.847 207.829L78.3239 103.307V195.34C78.3239 205.095 70.4184 213 60.662 213C50.9126 213 43 205.095 43 195.34V60.6678C43 53.5189 47.3095 47.0834 53.908 44.3496C60.4995 41.6087 68.1012 43.1204 73.1525 48.1784L177.676 152.7V60.6678C177.676 50.9122 185.582 43.0074 195.338 43.0074C205.095 43.0074 213 50.9122 213 60.6678V195.34C213 202.481 208.69 208.924 202.092 211.658C199.909 212.562 197.62 213 195.338 213Z"/></svg>
                                    <h3>Nginx</h3>
                                </div>
                                <div className={cl.InfoText}>
                                    <p> Nginx is a free, open-source, cross-platform web server and reverse proxy, written by Igor Nikolsky. </p>
                                </div>
                            </div>
                        </Card>
                    </motion.div>
               </motion.div>
               <motion.div 
                    initial='hidden'
                    whileInView='visible'
                    className={cl.GetStarted}
                >
                    <motion.div custom={.4} varinats = {HelloScreen} className={cl.FindFriends}>
                        <motion.h2 custom = {.3} variants={HelloTextAnim} >Create your team</motion.h2>
                        <motion.p custom = {.5} variants={HelloBtnAnim}> and start making your project with features of our site </motion.p>
                        <motion.button custom = {.4} variants={HelloTextAnim}><h3>Find Friends</h3></motion.button>
                    </motion.div>
               </motion.div>
               <div className={cl.Social}>
                    
                    <div className={cl.socialWrapper}>
                        <FaDiscord color='white' style={{fontSize: '25px', fontWeight: 700}}/>
                    </div>
                    <div className={cl.socialWrapper}>
                        <FaGithub color='white' style={{fontSize: '25px', fontWeight: 700}}/>
                    </div>
                    <div className={cl.socialWrapper}>
                        <FaTelegramPlane color='white' style={{fontSize: '25px', fontWeight: 700}}/>
                    </div>
                    <div className={cl.socialWrapper}>
                        <FaTiktok color='white' style={{fontSize: '25px', fontWeight: 700}}/>
                    </div>  
                    <div className={cl.socialWrapper}>
                        <SlSocialVkontakte color='white' style={{fontSize: '25px', fontWeight: 700}}/>
                    </div>
                    <button>
                        <CiMail color='white' style={{fontSize: '25px', fontWeight: 700, marginRight: '7px'}} />  <h3> | Get mails</h3>
                    </button>
               </div>
            </motion.div>
        </>
        
    );
};

export default HomePage;