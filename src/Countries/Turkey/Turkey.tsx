import './Turkey.css';
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import React from 'react';
import axios from 'axios';

export function Turkey() {
    const [ShishKebabRecipeName, setShishKebabRecipeName] = React.useState<any>()
    const [ShishKebabData, setShishKebabData] = React.useState<[]>([]);
    const [ShishKebabInstruction, setShishKebabInstruction] = React.useState<[]>([]);
    const [ShishKebabInputChange, setShishKebabInputChange] = React.useState<number>(0);
    const handleShishKebabInputChange = (event: any) => {
        const value = event.target.value;
        setShishKebabInputChange(value);
    }
    const handleShishKebabOnButtonClick = () => {
        const updatedShishKebabData = ShishKebabData?.map((row: any) => {
            row.Amount = parseFloat(row.Amount) * ShishKebabInputChange;
            return row;
        })
        setShishKebabData(updatedShishKebabData as []);

    }
    // ____________________________________________________________
    const [MantiRecipeName, setMantiRecipeName] = React.useState<any>()

    const [MantiData, setMantiData] = React.useState<[]>([]);
    const [MantiInstruction, setMantiInstruction] = React.useState<[]>([]);
    const [MantiInputChange, setMantiInputChange] = React.useState<number>(0);
    const handleMantiInputChange = (event: any) => {
        const value = event.target.value;
        setMantiInputChange(value);
    }
    const handleMantiOnButtonClick = () => {
        const updatedMantiData = MantiData?.map((row: any) => {
            row.Amount = parseFloat(row.Amount) * MantiInputChange;
            return row;
        })
        setMantiData(updatedMantiData as []);

    }
    // _________________________________________________________________
    const [BorekRecipeName, setBorekRecipeName] = React.useState<any>()

    const [BorekData, setBorekData] = React.useState<[]>([]);
    const [BorekInstruction, setBorekInstruction] = React.useState<[]>([]);
    const [BorekInputChange, setBorekInputChange] = React.useState<number>(0);
    const handleBorekInputChange = (event: any) => {
        const value = event.target.value;
        setBorekInputChange(value);
    }
    const handleBorekOnButtonClick = () => {
        const updatedBorekData = BorekData?.map((row: any) => {
            row.Amount = parseFloat(row.Amount) * BorekInputChange;
            return row;
        })
        setBorekData(updatedBorekData as []);

    }

    const url = "http://localhost:5112/recipes/"

    React.useEffect(() => {

        // ShishKebab recipe

        axios.post(url + "getIngredients")
            .then(response => {
                console.log(response);
                // setFormInfo(response.data);
                const ShishKebabData = response.data.data.filter((row: any) => row.RecipeId === "7")
                setShishKebabData(ShishKebabData);
            })
        axios.post(url + "getInstructions")
            .then(response => {
                console.log(response);
                // setFormInfo(response.data);
                const ShishKebabData = response.data.data.filter((row: any) => row.RecipeId === "7")
                setShishKebabInstruction(ShishKebabData);
            })
        console.log("useEffect was called");

        axios.post(url + "getDescription")
            .then(response => {
                console.log(response);
                // setFormInfo(response.data);
                const recipeData = response.data.data.find((row: any) => row.id === 7)
                setShishKebabRecipeName(recipeData);
            })

        // _____________________________________________________________________________

        // Manti recipe
        axios.post(url + "getIngredients")
            .then(response => {
                console.log(response);
                // setFormInfo(response.data);
                const MantiData = response.data.data.filter((row: any) => row.RecipeId === "8")
                setMantiData(MantiData);
            })
        axios.post(url + "getInstructions")
            .then(response => {
                console.log(response);
                // setFormInfo(response.data);
                const MantiData = response.data.data.filter((row: any) => row.RecipeId === "8")
                setMantiInstruction(MantiData);
            })
        console.log("useEffect was called");

        axios.post(url + "getDescription")
            .then(response => {
                console.log(response);
                // setFormInfo(response.data);
                const recipeData = response.data.data.find((row: any) => row.id === 8)
                setMantiRecipeName(recipeData);
            })

        //_________________________________________________________________________________

        // Borek recipe.
        axios.post(url + "getIngredients")
            .then(response => {
                console.log(response);
                // setFormInfo(response.data);
                const BorekData = response.data.data.filter((row: any) => row.RecipeId === "9")
                setBorekData(BorekData);
            })
        axios.post(url + "getInstructions")
            .then(response => {
                console.log(response);
                // setFormInfo(response.data);
                const BorekData = response.data.data.filter((row: any) => row.RecipeId === "9")
                setBorekInstruction(BorekData);
            })
        console.log("useEffect was called");

        axios.post(url + "getDescription")
            .then(response => {
                console.log(response);
                // setFormInfo(response.data);
                const recipeData = response.data.data.find((row: any) => row.id === 9)
                setBorekRecipeName(recipeData);
            })

    }, [])
    return (
        <div className="AroundAllTurkey">
            <div className='divAroundTitleTurkey'>
                <img className='flag' src="./images/flags/Turkey.jpeg" alt="Turkey" />
                <img className='food' src="https://antalyatouristinformation.com/wp-content/uploads/2021/04/Traditional-Turkish-cuisine.jpg" alt="" />
                <p>Turkey may be famous for its kebabs, but the popular dish is just the tip of the iceberg when it comes to Turkish cuisine.Here we can only attempt a summary of the most delicious, most popular Turkish foods. </p>
            </div>

            <div className="AroundRecipie">
                <Tabs className="AroundTabs">
                    <TabList className="AroundTabList">
                        <Tab>Shish Kebab </Tab>
                        <Tab>Manti Mini Ravioli</Tab>
                        <Tab>Water Borek Su Boregi</Tab>
                    </TabList>

                    <TabPanel className="AroundTabPanel">
                        <img src="./images/flags/siskebap.jpg" alt="Shish Kebab" />
                        {/* <button className='addDiv'>ADD TO THE LIST</button>
                        <button className='addDiv'>I MADE IT</button> */}
                        <h1>Ingredients</h1>
                        <h2>Serving : 6</h2>
                        <input onChange={handleShishKebabInputChange} type="number" value={ShishKebabInputChange} />
                        <button className='GoButton' onClick={handleShishKebabOnButtonClick}>Go</button>
                        <p className='descriptionShishKebabpara'>{ShishKebabRecipeName?.description}</p>

                        {ShishKebabData?.map((row: any) => (
                            <>
                                <div className='DivAroundShishKebabIngredients'>
                                    <input type="checkbox" />
                                    <div>{row.Amount}</div>
                                    <div>{row.MeasuringTool}</div>
                                    <div>{row.IngredientsName}</div>
                                </div>
                            </>
                        ))}

                        {ShishKebabInstruction?.map((row: any) => (
                            <div className='ShishKebabInstruction'>
                                <h1>Instructions</h1>
                                <p>{row.InstructionsSteps}</p>
                            </div>
                        ))}
                    </TabPanel>



                    <TabPanel className="AroundTabPanel">
                        <img src="./images/flags/MantıMiniRavioli.jpg" alt="Manti Mini Ravioli" />
                        <h1>Ingredients</h1>
                        <h2>Serving : 4</h2>
                        <input onChange={handleMantiInputChange} type="number" value={MantiInputChange} />
                        <button className='GoButton' onClick={handleMantiOnButtonClick}>Go</button>
                        <p className='descriptionMantipara'>{MantiRecipeName?.description}</p>
                        {MantiData?.map((row: any) => (
                            <>
                                <div className='DivAroundMantiIngredients'>
                                    <input type="checkbox" />
                                    <div>{row.Amount}</div>
                                    <div>{row.MeasuringTool}</div>
                                    <div>{row.IngredientsName}</div>
                                </div>
                            </>
                        ))}

                        {MantiInstruction?.map((row: any) => (
                            <div className='MantiInstruction'>
                                <h1>Instructions</h1>
                                <p>{row.InstructionsSteps}</p>
                            </div>
                        ))}
                    </TabPanel>


                    <TabPanel className="AroundTabPanel">
                        <img src="./images/flags/SuBoregi.jpg" alt="Water Borek Su Boregi" />
                        <h1>Ingredients</h1>
                        <h2>Serving : 12</h2>
                        <input onChange={handleBorekInputChange} type="number" value={BorekInputChange} />
                        <button className='GoButton' onClick={handleBorekOnButtonClick}>Go</button>
                        <p className='descriptionBorekpara'>{BorekRecipeName?.description}</p>
                        {BorekData?.map((row: any) => (
                            <>
                                <div className='DivAroundBorekIngredients'>
                                    <input type="checkbox" />
                                    <div>{row.Amount}</div>
                                    <div>{row.MeasuringTool}</div>
                                    <div>{row.IngredientsName}</div>
                                </div>
                            </>

                        ))}

                        {BorekInstruction?.map((row: any) => (
                            <div className='BorekInstruction'>
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

