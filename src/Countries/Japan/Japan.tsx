import axios from "axios";
import React from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import './Japan.css';
import 'react-tabs/style/react-tabs.css';



export function Japan() {
    const [SushiRecipeName, setSushiRecipeName] = React.useState<any>()

    const [SushiData, setSushiData] = React.useState<[]>([]);
    const [SushiInstruction, setSushiInstruction] = React.useState<[]>([]);
    const [SushiInputChange, setSushiInputChange] = React.useState<number>(0);
    const handleSushiInputChange = (event: any) => {
        const value = event.target.value;
        setSushiInputChange(value);
    }
    const handleSushiOnButtonClick = () => {
        const updatedSushiData = SushiData?.map((row: any) => {
            row.Amount = parseFloat(row.Amount) * SushiInputChange;
            return row;
        })
        setSushiData(updatedSushiData as []);

    }

    // _______________________________________________________________________________
    const [OkonomiyakiRecipeName, setOkonomiyakiRecipeName] = React.useState<any>()

    const [OkonomiyakiData, setOkonomiyakiData] = React.useState<[]>([]);
    const [OkonomiyakiInstruction, setOkonomiyakiInstruction] = React.useState<[]>([]);
    const [OkonomiyakiInputChange, setOkonomiyakiInputChange] = React.useState<number>(0);
    const handleOkonomiyakiInputChange = (event: any) => {
        const value = event.target.value;
        setOkonomiyakiInputChange(value);
    }
    const handleOkonomiyakiOnButtonClick = () => {
        const updatedOkonomiyakiData = OkonomiyakiData?.map((row: any) => {
            row.Amount = parseFloat(row.Amount) * OkonomiyakiInputChange;
            return row;
        })
        setOkonomiyakiData(updatedOkonomiyakiData as []);

    }
    // ______________________________________________________________________________
    const [MisoSoupRecipeName, setMisoSoupRecipeName] = React.useState<any>()

    const [MisoSoupData, setMisoSoupData] = React.useState<[]>([]);
    const [MisoSoupInstruction, setMisoSoupInstruction] = React.useState<[]>([]);
    const [MisoSoupInputChange, setMisoSoupInputChange] = React.useState<number>(0);
    const handleMisoSoupInputChange = (event: any) => {
        const value = event.target.value;
        setMisoSoupInputChange(value);
    }
    const handleMisoSoupOnButtonClick = () => {
        const updatedMisoSoupData = MisoSoupData?.map((row: any) => {
            row.Amount = parseFloat(row.Amount) * MisoSoupInputChange;
            return row;
        })
        setMisoSoupData(updatedMisoSoupData as []);

    }
    // ________________________________________________________________________________
    const url = "http://localhost:5112/recipes/"

    React.useEffect(() => {

        // Sushi recipe

        axios.post(url + "getIngredients")
            .then(response => {
                console.log(response);
                // setFormInfo(response.data);
                const SushiData = response.data.data.filter((row: any) => row.RecipeId === "4")
                setSushiData(SushiData);
            })
        axios.post(url + "getInstructions")
            .then(response => {
                console.log(response);
                // setFormInfo(response.data);
                const SushiData = response.data.data.filter((row: any) => row.RecipeId === "4")
                setSushiInstruction(SushiData);
            })
        console.log("useEffect was called");

        axios.post(url + "getDescription")
            .then(response => {
                console.log(response);
                // setFormInfo(response.data);
                const recipeData = response.data.data.find((row: any) => row.id === 4)
                setSushiRecipeName(recipeData);
            })

        // _____________________________________________________________________________

        // Okonomiyaki recipe
        axios.post(url + "getIngredients")
            .then(response => {
                console.log(response);
                // setFormInfo(response.data);
                const OkonomiyakiData = response.data.data.filter((row: any) => row.RecipeId === "5")
                setOkonomiyakiData(OkonomiyakiData);
            })
        axios.post(url + "getInstructions")
            .then(response => {
                console.log(response);
                // setFormInfo(response.data);
                const OkonomiyakiData = response.data.data.filter((row: any) => row.RecipeId === "5")
                setOkonomiyakiInstruction(OkonomiyakiData);
            })
        console.log("useEffect was called");

        axios.post(url + "getDescription")
            .then(response => {
                console.log(response);
                // setFormInfo(response.data);
                const recipeData = response.data.data.find((row: any) => row.id === 5)
                setOkonomiyakiRecipeName(recipeData);
            })

        //_________________________________________________________________________________

        // MisoSoup recipe
        axios.post(url + "getIngredients")
            .then(response => {
                console.log(response);
                // setFormInfo(response.data);
                const MisoSoupData = response.data.data.filter((row: any) => row.RecipeId === "6")
                setMisoSoupData(MisoSoupData);
            })
        axios.post(url + "getInstructions")
            .then(response => {
                console.log(response);
                // setFormInfo(response.data);
                const MisoSoupData = response.data.data.filter((row: any) => row.RecipeId === "6")
                setMisoSoupInstruction(MisoSoupData);
            })
        console.log("useEffect was called");

        axios.post(url + "getDescription")
            .then(response => {
                console.log(response);
                // setFormInfo(response.data);
                const recipeData = response.data.data.find((row: any) => row.id === 6)
                setMisoSoupRecipeName(recipeData);
            })

    }, [])

    // ___________________________________________________________________________
    return (
        <div className="AroundAllJapan">
            <div className='divAroundTitleJapan'>
                <img className='flag' src="./images/flags/japan.jpeg" alt="japan" />
                <img className='food' src="https://www.tastingtable.com/img/gallery/20-japanese-dishes-you-need-to-try-at-least-once/l-intro-1644007893.jpg" alt="" />
                <p>Japanese cuisine is characterized by its seasonality, exquisite ingredients and presentation. Having indulged their love for unique flavors and the best culinary encounters.</p>

            </div>

            <div className="AroundRecipie">
                <Tabs className="AroundTabs">
                    <TabList className="AroundTabList">
                        <Tab>Sushi </Tab>
                        <Tab>Okonomiyaki </Tab>
                        <Tab>Miso Soup</Tab>
                    </TabList>

                    <TabPanel className="AroundTabPanel">
                        <img src="./images/flags/sushi-rolls.jpg" alt="sushi-rolls" />
                        {/* <button className='addDiv'>ADD TO THE LIST</button>
                        <button className='addDiv'>I MADE IT</button> */}
                        <h1>Ingredients</h1>
                        <h2>Serving : 4</h2>
                        <input onChange={handleSushiInputChange} type="number" value={SushiInputChange} />
                        <button className='GoButton' onClick={handleSushiOnButtonClick}>Go</button>
                        <p className='descriptionSushipara'>{SushiRecipeName?.description}</p>
                        {SushiData?.map((row: any) => (
                            <>
                                <div className='DivAroundSushiIngredients'>
                                    <input type="checkbox" />
                                    <div>{row.Amount}</div>
                                    <div>{row.MeasuringTool}</div>
                                    <div>{row.IngredientsName}</div>
                                </div>
                            </>
                        ))}

                        {SushiInstruction?.map((row: any) => (
                            <div className='SushiInstruction'>
                                <h1>Instructions</h1>
                                <p>{row.InstructionsSteps}</p>
                            </div>
                        ))}
                    </TabPanel>


                    <TabPanel className="AroundTabPanel">
                        <img src="./images/flags/Okonomiyaki.gif" alt="Okonomiyaki " />
                        {/* <button className='addDiv'>ADD TO THE LIST</button>
                        <button className='addDiv'>I MADE IT</button> */}
                        <h1>Ingredients</h1>
                        <h2>Serving : 2</h2>
                        <input onChange={handleOkonomiyakiInputChange} type="number" value={OkonomiyakiInputChange} />
                        <button className='GoButton' onClick={handleOkonomiyakiOnButtonClick}>Go</button>
                        <p className='descriptionOkonomiyakipara'>{OkonomiyakiRecipeName?.description}</p>
                        {OkonomiyakiData?.map((row: any) => (
                            <>
                                <div className='DivAroundOkonomiyakiIngredients'>

                                    <input type="checkbox" />
                                    <div>{row.Amount}</div>
                                    <div>{row.MeasuringTool}</div>
                                    <div>{row.IngredientsName}</div>
                                </div>
                            </>
                        ))}

                        {OkonomiyakiInstruction?.map((row: any) => (
                            <div className='OkonomiyakiInstruction'>
                                <h1>Instructions</h1>
                                <p>{row.InstructionsSteps}</p>
                            </div>

                        ))}
                    </TabPanel>


                    <TabPanel className="AroundTabPanel">
                        <img src="./images/flags/misosoup.jpg" alt="Miso Soup" />
                        {/* <button className='addDiv'>ADD TO THE LIST</button>
                        <button className='addDiv'>I MADE IT</button> */}
                        <h1>Ingredients</h1>
                        <h2>Serving : 4</h2>
                        <input onChange={handleMisoSoupInputChange} type="number" value={MisoSoupInputChange} />
                        <button className='GoButton' onClick={handleMisoSoupOnButtonClick}>Go</button>
                        <p className='descriptionMisoSouppara'>{MisoSoupRecipeName?.description}</p>

                        {MisoSoupData?.map((row: any) => (
                            <>
                                <div className='DivAroundMisoSoupIngredients'>

                                    <input type="checkbox" />
                                    <div>{row.Amount}</div>
                                    <div>{row.MeasuringTool}</div>
                                    <div>{row.IngredientsName}</div>
                                </div>
                            </>
                        ))}

                        {MisoSoupInstruction?.map((row: any) => (
                            <div className='MisoSoupInstruction'>
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


