import React, { useState } from 'react';
import './India.css';
import 'react-tabs/style/react-tabs.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import axios from 'axios';
import { FaPrint } from 'react-icons/fa';


export function India() {
    const [isOpen2, setisOpen2] = useState(false);

    // ______________________________________________________________-
    const [DalMakhaniRecipeName, setDalMakhaniRecipeName] = React.useState<any>()

    const [DalMakhaniData, setDalMakhaniData] = React.useState<[]>([]);
    const [DalMakhaniInstruction, setDalMakhaniInstruction] = React.useState<[]>([]);
    const [DalMakhaniInputChange, setDalMakhaniInputChange] = React.useState<number>(0);
    const DalmakhanihandleInputChange = (event: any) => {
        const value = event.target.value;
        setDalMakhaniInputChange(value);
    }
    const DalmakhanihandleOnButtonClick = () => {
        const updatedDalMakhaniData = DalMakhaniData?.map((row: any) => {
            row.Amount = parseFloat(row.Amount) * DalMakhaniInputChange;
            return row;
        })
        setDalMakhaniData(updatedDalMakhaniData as []);

    }
    // _____________________________________________________________
    const [ChaatRecipeName, setChaatRecipeName] = React.useState<any>()

    const [ChaatData, setChaatData] = React.useState<[]>([]);
    const [ChaatInstruction, setChaatInstruction] = React.useState<[]>([]);
    const [ChaatInputChange, setChaatInputChange] = React.useState<number>(0);
    const handleInputChange = (event: any) => {
        const value = event.target.value;
        setChaatInputChange(value);
    }
    const handleOnButtonClick = () => {
        const updatedChaatData = ChaatData?.map((row: any) => {
            row.Amount = parseFloat(row.Amount) * ChaatInputChange;
            return row;
        })
        setChaatData(updatedChaatData as []);

    }
    // ______________________________________________________________________________
    const [masalaRecipeName, setMasalaRecipeName] = React.useState<any>()


    const [masalaData, setMasalaData] = React.useState<[]>([]);
    const [masalaInstruction, setMasalaInstruction] = React.useState<[]>([]);
    const [masalaInputChange, setMasalaInputChange] = React.useState<number>(0);
    const handlemasalaInputChange = (event: any) => {
        const value = event.target.value;
        setMasalaInputChange(value);
    }
    const handlemasalaOnButtonClick = () => {
        const updatedMasalaData = masalaData?.map((row: any) => {
            row.Amount = parseFloat(row.Amount) * masalaInputChange;
            return row;
        })
        setMasalaData(updatedMasalaData as []);

    }
    // _____________________________________________________________________________________


    const url = "http://localhost:5112/recipes/"
    // _______________________________________________________________________
    React.useEffect(() => {

        // Masala Dosa recipe

        axios.post(url + "getIngredients")
            .then(response => {
                console.log(response);
                // setFormInfo(response.data);
                const masalaData = response.data.data.filter((row: any) => row.RecipeId === "1")
                setMasalaData(masalaData);
            })

        axios.post(url + "getDescription")
            .then(response => {
                console.log(response);
                // setFormInfo(response.data);
                const recipeData = response.data.data.find((row: any) => row.id === 1)
                setMasalaRecipeName(recipeData);
            })

        axios.post(url + "getInstructions")
            .then(response => {
                console.log(response);
                // setFormInfo(response.data);
                const masalaData = response.data.data.filter((row: any) => row.RecipeId === "1")
                setMasalaInstruction(masalaData);
            })
        console.log("useEffect was called");

        // _____________________________________________________________________________

        // Chaat recipe
        axios.post(url + "getIngredients")
            .then(response => {
                console.log(response);
                // setFormInfo(response.data);
                const ChaatData = response.data.data.filter((row: any) => row.RecipeId === "2")
                setChaatData(ChaatData);
            })
        axios.post(url + "getInstructions")
            .then(response => {
                console.log(response);
                // setFormInfo(response.data);
                const ChaatData = response.data.data.filter((row: any) => row.RecipeId === "2")
                setChaatInstruction(ChaatData);
            })
        console.log("useEffect was called");

        axios.post(url + "getDescription")
            .then(response => {
                console.log(response);
                // setFormInfo(response.data);
                const recipeData = response.data.data.find((row: any) => row.id === 2)
                setChaatRecipeName(recipeData);
            })
        //_________________________________________________________________________________

        // DalMakhani recipe
        axios.post(url + "getIngredients")
            .then(response => {
                console.log(response);
                // setFormInfo(response.data);
                const DalMakhaniData = response.data.data.filter((row: any) => row.RecipeId === "3")
                setDalMakhaniData(DalMakhaniData);
            })
        axios.post(url + "getInstructions")
            .then(response => {
                console.log(response);
                // setFormInfo(response.data);
                const DalMakhaniData = response.data.data.filter((row: any) => row.RecipeId === "3")
                setDalMakhaniInstruction(DalMakhaniData);
            })
        console.log("useEffect was called");

        axios.post(url + "getDescription")
            .then(response => {
                console.log(response);
                // setFormInfo(response.data);
                const recipeData = response.data.data.find((row: any) => row.id === 3)
                setDalMakhaniRecipeName(recipeData);
            })


    }, [])

    const handleAddToList = () => {
        window.print();
    }

    // ____________________________________________________________________________________

    return (
        <div className="AroundAllIndia">
            <div className='divAroundTitleIndia'>

                <img className='flag' src="./images/flags/india.jpeg" alt="india" />
                <img className='food' src="https://thegrandindiancuisine.com.au/wp-content/uploads/2018/04/assorted-in-dian-food.jpg" alt="" />
                <p> Indian cuisine is made up of a variety of regional and traditional dishes sourced from the Indian subcontinent,these cuisines vary substantially and use locally available spices, herbs, vegetables, and fruits</p>
            </div>

            <div className="AroundRecipie">
                <Tabs className="AroundTabs">
                    <TabList className="AroundTabList">
                        <Tab>Masala Dosa</Tab>
                        <Tab>Chaat</Tab>
                        <Tab>DalMakhani</Tab>
                    </TabList>

                    <TabPanel className="AroundTabPanel">
                        <img className="masala-dosa" src="./images/flags/masala-dosa.jpg" alt="masala-dosa" />
                        <button className='addDiv' onClick={() => { setisOpen2(isOpen2 ? false : true) }}>Shopping list</button>
                        {isOpen2 &&
                            <div className='DivAroundAllListIngredients'>
                                {masalaData?.map((row: any) => (
                                    <>
                                        <div className='DivAroundListIngredients'>

                                            <div>{row.Amount}</div>
                                            <div>{row.MeasuringTool}</div>
                                            <div>{row.IngredientsName}</div>
                                        </div>
                                    </>

                                ))}
                                <button onClick={handleAddToList}> <FaPrint /></button>
                            </div>
                        }

                        <h1>Ingredients</h1>
                        <h2>Serving : 20</h2>
                        <input onChange={handlemasalaInputChange} type="number" value={masalaInputChange} />
                        <button className='GoButton' onClick={handlemasalaOnButtonClick}>Go</button>
                        <p className='descriptionpara'>{masalaRecipeName?.description}</p>

                        {masalaData?.map((row: any) => (

                            <>
                                <div className='DivAroundIngredients'>
                                    <input type="checkbox" />
                                    <div>{row.Amount}</div>
                                    <div>{row.MeasuringTool}</div>
                                    <div>{row.IngredientsName}</div>
                                </div>
                            </>
                        ))}

                        {masalaInstruction?.map((row: any) => (
                            <div className='masalaInstruction'>
                                <h1>Instructions</h1>
                                <p>{row.InstructionsSteps}</p>
                            </div>
                        ))}


                    </TabPanel>


                    <TabPanel className="AroundTabPanel">
                        <img className="chaat" src="./images/flags/chaat.webp" alt="chaat" />
                        {/* <button className='addDiv'>ADD TO THE LIST</button>
                        <button className='addDiv'>I MADE IT</button> */}
                        <h1>Ingredients</h1>
                        <h2>Serving : 6</h2>
                        <input onChange={handleInputChange} type="number" value={ChaatInputChange} />
                        <button className='GoButton' onClick={handleOnButtonClick}>Go</button>
                        <p className='descriptionChaatpara'>{ChaatRecipeName?.description}</p>

                        {ChaatData?.map((row: any) => (
                            <>
                                <div className='DivAroundIngredients'>
                                    <input type="checkbox" />
                                    <div>{row.Amount}</div>
                                    <div>{row.MeasuringTool}</div>
                                    <div>{row.IngredientsName}</div>
                                </div>
                            </>
                        ))}

                        {ChaatInstruction?.map((row: any) => (
                            <div className='ChaatInstruction'>
                                <h1>Instructions</h1>
                                <p>{row.InstructionsSteps}</p>
                            </div>
                        ))}
                    </TabPanel>


                    <TabPanel className="AroundTabPanel">
                        <img src="./images/flags/Dalmakhani.jpg" alt="Dalmakhani" />
                        {/* <button className='addDiv'>ADD TO THE LIST</button>
                        <button className='addDiv'>I MADE IT</button> */}
                        <h1>Ingredients</h1>
                        <h2>Serving : 4</h2>
                        <input onChange={DalmakhanihandleInputChange} type="number" value={DalMakhaniInputChange} />
                        <button className='GoButton' onClick={DalmakhanihandleOnButtonClick}>Go</button>
                        <p className='descriptionDalmakhanipara'>{DalMakhaniRecipeName?.description}</p>

                        {DalMakhaniData?.map((row: any) => (
                            <>
                                <div className='DivAroundIngredients'>
                                    <input type="checkbox" />
                                    <div>{row.Amount}</div>
                                    <div>{row.MeasuringTool}</div>
                                    <div>{row.IngredientsName}</div>
                                </div>
                            </>
                        ))}

                        {DalMakhaniInstruction?.map((row: any) => (

                            <div className='DalMakhaniInstruction'>
                                <h1>Instructions</h1>
                                <p>{row.InstructionsSteps}</p>
                            </div>
                        ))}


                    </TabPanel>
                </Tabs>
            </div>

        </div>


    )
}

