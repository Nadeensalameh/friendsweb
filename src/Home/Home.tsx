import { useState } from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import { Alert } from 'reactstrap';
import './Home.css';


export function FirstPage() {

    const [isOpen10, setisOpen10] = useState(false);
    const [isOpen11, setisOpen11] = useState(false);
    const [isOpen12, setisOpen12] = useState(false);
    const [isOpen13, setisOpen13] = useState(false);
    const [isOpen14, setisOpen14] = useState(false);
    const [isOpen15, setisOpen15] = useState(false);



    return (
        <div className='divAroundall' >
            <div className='divAroundTitle'>
                <div className="wrapper">
                    <h1 className="title">WORLD'S CUISINE</h1>
                </div>
                <img className='global' src="./images/GLOBAL.png" alt="" />
                <img className='bigimg' src="./images/background20.jpeg.jpg" alt="background20" />
                <button><a href="http://localhost:3000/Signin">SIGN IN </a></button>
            </div>
            <div className="tabbed">
                <Tabs className="AroundTabs" >
                    <TabList className="AroundTabList">
                        <Tab>ABOUT US</Tab>
                        <Tab>ARTICLES</Tab>
                        <Tab>DID YOY KNOW?</Tab>
                    </TabList>
                    <TabPanel className="AroundTabPanel">
                        <img src="https://t4.ftcdn.net/jpg/02/75/60/43/240_F_275604335_LVkelllSFEL33rhU2V2hJsOmqjmEjSbv.jpg" alt="" />
                        <p className='aboutUsPara'>Food has always been a major factor in every culture, but in the last few decades, cuisines of the world have migrated from their original homes to become known all over.  Food knows no boundaries or borders,Worlds cuisines offers a great variety in terms of flavors, tastes and combinations.here we are Presenting recipes from all over the world , An opportunity to taste food from different cuisines without leaving the house.</p>
                    </TabPanel>
                    <TabPanel className="AroundTabPanel">
                        <h1 className='ArticlesDiv'>IT MIGHT INTEREST YOU </h1>
                        <ul className="tilesWrap">
                            <li>
                                <h2>01</h2>
                                <h3>Pineapples</h3>
                                <p>
                                    5 Ways To Tell if a Pineapple Is Ripe
                                    Learn how to pick the perfect summertime fruit
                                </p>
                                <a href="https://www.allrecipes.com/article/how-to-tell-if-a-pineapple-is-ripe/"><button>Read more</button></a>
                            </li>
                            <li>
                                <h2>02</h2>
                                <h3>Cooking Rice</h3>
                                <p>
                                    Rice is super versatile and it's the perfect grain for acting as a main or a side dish.
                                    Learn how to best cook this adaptable grain.

                                </p>
                                <a href="https://www.allrecipes.com/article/rice-co"><button>Read more</button></a>
                            </li>
                            <li>
                                <h2>03</h2>
                                <h3>Coconut Flour</h3>
                                <p>
                                    What Is Coconut Flour and How Do You Use It?
                                    Plus, can you use it like regular flour?
                                    Here's what you need to know about the gluten-free ingredient.
                                </p>
                                <a href="https://www.allrecipes.com/article/all-about-coconut-flour/"><button>Read more</button></a>
                            </li>
                            <li>
                                <h2>04</h2>
                                <h3>Worlds cuisine</h3>
                                <p>
                                    Every country follows different cultures and different cuisines.
                                    Most of the countries have their own culture, food, style and they like to follow it that way only.

                                </p>
                                <a href="https://www.eathappyproject.com/types-of-cuisines-from-around-the-world-with-their-popular-food/"><button>Read more</button></a>
                            </li>
                        </ul>
                    </TabPanel>
                    <TabPanel className="AroundTabPanel">
                        <h1 className='ArticlesDiv'>CLICK ON A COUNTRY</h1>

                        <img src="./images/themap.png" alt='gameimg' useMap="#workmap" />
                        <button className='onAUSTRALIA' onClick={() => { setisOpen10(isOpen10 ? false : true) }}></button>
                        {isOpen10 &&
                            <div className='h1ForAUSTRALIA'>
                                <h1 >You clicked on : AUSTRALIA</h1>
                                <h1>Australian cuisine. Its focus is on the use of natural and native ingredients, ethical sourcing and bridging communication between Indigenous and non-Indigenous foodies</h1>
                            </div>
                        }
                        <button className='onBRAZIL' onClick={() => { setisOpen11(isOpen11 ? false : true) }}></button>
                        {isOpen11 &&
                            <div className='h1ForBRAZIL'>
                                <h1>You clicked on : BRAZIL</h1>
                                <h1>This colorful country from South America produces great fried street food, excellent cuts of meat, and even some delicious drinks. There is so much food to choose from in Brazil that it can be overwhelming</h1>
                            </div>
                        }
                        <button className='onTURKEY' onClick={() => { setisOpen12(isOpen12 ? false : true) }}></button>
                        {isOpen12 &&
                            <div className='h1ForTURKEY'>
                                <h1 >You clicked on : TURKEY</h1>
                                <h1> The best known dessert in Turkish cuisine is baklava that is produced in many types and tastes. Baklava is prepared by splahing walnuts and peanuts on, and it is a dessert with sherbet. Baklava is among traditional Turkish flavours, and it holds its own in literature as Turkish flavours.</h1>
                            </div>
                        }
                        <button className='onINDIA' onClick={() => { setisOpen13(isOpen13 ? false : true) }}></button>
                        {isOpen13 &&
                            <div className='h1ForINDIA'>
                                <h1 >You clicked on : INDIA</h1>
                                <h1> The specialty of Indian cuisine is its variety of spices that make each dish exotic, delicious, and stand out from the rest of the cuisines in the world</h1>
                            </div>
                        }
                        <button className='onCHINA' onClick={() => { setisOpen14(isOpen14 ? false : true) }}></button>
                        {isOpen14 &&
                            <div className='h1ForCHINA'>
                                <h1 >You clicked on : CHINA</h1>
                                <h1>Chinese food, rich and colorful, has diversified color, aromatic flavor, and excellent taste as its main features. With these three characteristics, it is not only tasty but also a work of art for people to appreciate</h1>
                            </div>
                        }
                        <button className='onCANADA' onClick={() => { setisOpen15(isOpen15 ? false : true) }}></button>
                        {isOpen15 &&
                            <div className='h1ForCANADA'>
                                <h1 >You clicked on : CANADA</h1>
                                <h1>Did you know that maple syrup, Is the star ingredient, the flagship of the country.</h1>
                            </div>
                        }
                    </TabPanel>

                </Tabs>
            </div>
        </div >
    )
}



