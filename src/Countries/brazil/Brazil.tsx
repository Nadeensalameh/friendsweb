import axios from "axios";
import React from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import './Brazil.css';


export function Brazil() {
    const [FeijoadaData, setFeijoadaData] = React.useState<[]>([]);
    const [FeijoadaInstruction, setFeijoadaInstruction] = React.useState<[]>([]);
    const [FeijoadaRecipeName, setFeijoadaRecipeName] = React.useState<any>()
    const [FeijoadaInputChange, setFeijoadaInputChange] = React.useState<number>(0);
    const handleFeijoadaInputChange = (event: any) => {
        const value = event.target.value;
        setFeijoadaInputChange(value);
    }
    const handleFeijoadaOnButtonClick = () => {
        const updatedFeijoadaData = FeijoadaData?.map((row: any) => {
            row.Amount = parseFloat(row.Amount) * FeijoadaInputChange;
            return row;
        })
        setFeijoadaData(updatedFeijoadaData as []);

    }


    const [MOQUECAData, setMOQUECAData] = React.useState<[]>([]);
    const [MOQUECAInstruction, setMOQUECAInstruction] = React.useState<[]>([]);
    const [MOQUECARecipeName, setMOQUECARecipeName] = React.useState<any>()
    const [MOQUECAInputChange, setMOQUECAInputChange] = React.useState<number>(0);
    const handleMOQUECAInputChange = (event: any) => {
        const value = event.target.value;
        setMOQUECAInputChange(value);
    }
    const handleMOQUECAOnButtonClick = () => {
        const updatedMOQUECAData = MOQUECAData?.map((row: any) => {
            row.Amount = parseFloat(row.Amount) * MOQUECAInputChange;
            return row;
        })
        setMOQUECAData(updatedMOQUECAData as []);

    }


    const [FarofaData, setFarofaData] = React.useState<[]>([]);
    const [FarofaInstruction, setFarofaInstruction] = React.useState<[]>([]);
    const [FarofaRecipeName, setFarofaRecipeName] = React.useState<any>()
    const [FarofaInputChange, setFarofaInputChange] = React.useState<number>(0);
    const handleFarofaInputChange = (event: any) => {
        const value = event.target.value;
        setFarofaInputChange(value);
    }
    const handleFarofaOnButtonClick = () => {
        const updatedFarofaData = FarofaData?.map((row: any) => {
            row.Amount = parseFloat(row.Amount) * FarofaInputChange;
            return row;
        })
        setFarofaData(updatedFarofaData as []);

    }


    const url = "http://localhost:5112/recipes/"

    React.useEffect(() => {

        // Feijoada recipe

        axios.post(url + "getIngredients")
            .then(response => {
                console.log(response);
                // setFormInfo(response.data);
                const FeijoadaData = response.data.data.filter((row: any) => row.RecipeId === "13")
                setFeijoadaData(FeijoadaData);
            })
        axios.post(url + "getInstructions")
            .then(response => {
                console.log(response);
                // setFormInfo(response.data);
                const FeijoadaData = response.data.data.filter((row: any) => row.RecipeId === "13")
                setFeijoadaInstruction(FeijoadaData);
            })
        console.log("useEffect was called");


        axios.post(url + "getDescription")
            .then(response => {
                console.log(response);
                // setFormInfo(response.data);
                const recipeData = response.data.data.find((row: any) => row.id === 13)
                setFeijoadaRecipeName(recipeData);
            })

        // _____________________________________________________________________________

        // MOQUECA recipe
        axios.post(url + "getIngredients")
            .then(response => {
                console.log(response);
                // setFormInfo(response.data);
                const MOQUECAData = response.data.data.filter((row: any) => row.RecipeId === "14")
                setMOQUECAData(MOQUECAData);
            })
        axios.post(url + "getInstructions")
            .then(response => {
                console.log(response);
                // setFormInfo(response.data);
                const MOQUECAData = response.data.data.filter((row: any) => row.RecipeId === "14")
                setMOQUECAInstruction(MOQUECAData);
            })
        console.log("useEffect was called");


        axios.post(url + "getDescription")
            .then(response => {
                console.log(response);
                // setFormInfo(response.data);
                const recipeData = response.data.data.find((row: any) => row.id === 14)
                setMOQUECARecipeName(recipeData);
            })

        //_________________________________________________________________________________

        // Farofa recipe
        axios.post(url + "getIngredients")
            .then(response => {
                console.log(response);
                // setFormInfo(response.data);
                const FarofaData = response.data.data.filter((row: any) => row.RecipeId === "15")
                setFarofaData(FarofaData);
            })
        axios.post(url + "getInstructions")
            .then(response => {
                console.log(response);
                // setFormInfo(response.data);
                const FarofaData = response.data.data.filter((row: any) => row.RecipeId === "15")
                setFarofaInstruction(FarofaData);
            })
        console.log("useEffect was called");


        axios.post(url + "getDescription")
            .then(response => {
                console.log(response);
                // setFormInfo(response.data);
                const recipeData = response.data.data.find((row: any) => row.id === 15)
                setFarofaRecipeName(recipeData);
            })




    }, [])
    return (
        <div className="AroundAllBrazil">
            <div className='divAroundTitleBrazil'>
                <img className='flag' src="./images/flags/brazil.jpeg" alt="Brazil" />
                <img className='food' src="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/barbecued-meats-24426a4.jpg?quality=90&fit=700,350" alt="" />
                <p>Brazilian cuisine is vibrant, colorful, diverse, and exciting.The typical food of Brazil has many influences. The Portuguese had a huge impact in shaping Brazil’s culture and traditions.</p>
            </div>

            <div className="AroundRecipie">
                <Tabs className="AroundTabs">
                    <TabList className="AroundTabList">
                        <Tab>Feijoada </Tab>
                        <Tab>MOQUECA </Tab>
                        <Tab>Farofa</Tab>
                    </TabList>

                    <TabPanel className="AroundTabPanel">
                        <img src="./images/flags/Feijoada.jpg" alt="Feijoada" />
                        <h1>Ingredients</h1>
                        <h2>Serving : 12</h2>
                        <input onChange={handleFeijoadaInputChange} type="number" value={FeijoadaInputChange} />
                        <button className='GoButton' onClick={handleFeijoadaOnButtonClick}>Go</button>
                        <p className='descriptionFeijoadapara'>{FeijoadaRecipeName?.description}</p>

                        {FeijoadaData?.map((row: any) => (
                            <>
                                <div className='DivAroundFeijoadaIngredients'>
                                    <input type="checkbox" />
                                    <div>{row.Amount}</div>
                                    <div>{row.MeasuringTool}</div>
                                    <div>{row.IngredientsName}</div>
                                </div>
                            </>
                        ))}

                        {FeijoadaInstruction?.map((row: any) => (
                            <div className='FeijoadaInstruction'>
                                <h1>Instructions</h1>

                                <p>{row.InstructionsSteps}</p>
                            </div>
                        ))}
                    </TabPanel>
                    <TabPanel className="AroundTabPanel">
                        <img src="./images/flags/MOQUECA.webp" alt="MOQUECA" />
                        <h1>Ingredients</h1>
                        <h2>Serving : 4</h2>
                        <input onChange={handleMOQUECAInputChange} type="number" value={MOQUECAInputChange} />
                        <button className='GoButton' onClick={handleMOQUECAOnButtonClick}>Go</button>
                        <p className='descriptionMOQUECApara'>{MOQUECARecipeName?.description}</p>

                        {MOQUECAData?.map((row: any) => (
                            <>
                                <div className='DivAroundMOQUECAIngredients'>
                                    <input type="checkbox" />
                                    <div>{row.Amount}</div>
                                    <div>{row.MeasuringTool}</div>
                                    <div>{row.IngredientsName}</div>
                                </div>
                            </>
                        ))}

                        {MOQUECAInstruction?.map((row: any) => (
                            <div className='MOQUECAInstruction'>
                                <h1>Instructions</h1>

                                <p>{row.InstructionsSteps}</p>
                            </div>
                        ))}
                    </TabPanel>
                    <TabPanel className="AroundTabPanel">
                        <img src="./images/flags/Farofa.webp" alt="Farofa" />
                        <h1>Ingredients</h1>
                        <h2>Serving : 10</h2>
                        <input onChange={handleFarofaInputChange} type="number" value={FarofaInputChange} />
                        <button className='GoButton' onClick={handleFarofaOnButtonClick}>Go</button>
                        <p className='descriptionFarofapara'>{FarofaRecipeName?.description}</p>

                        {FarofaData?.map((row: any) => (
                            <>
                                <div className='DivAroundFarofaIngredients'>

                                    <input type="checkbox" />
                                    <div>{row.Amount}</div>
                                    <div>{row.MeasuringTool}</div>
                                    <div>{row.IngredientsName}</div>
                                </div>
                            </>
                        ))}

                        {FarofaInstruction?.map((row: any) => (
                            <div className='FarofaInstruction'>
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

