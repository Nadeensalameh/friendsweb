import axios from "axios";
import React from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import './Egypt.css';

export function Egypt() {

    const [KoshariData, setKoshariData] = React.useState<[]>([]);
    const [KoshariInstruction, setKoshariInstruction] = React.useState<[]>([]);

    const [TaameyaData, setTaameyaData] = React.useState<[]>([]);
    const [TaameyaInstruction, setTaameyaInstruction] = React.useState<[]>([]);

    const [BabaGanoushData, setBabaGanoushData] = React.useState<[]>([]);
    const [BabaGanoushInstruction, setBabaGanoushInstruction] = React.useState<[]>([]);

    const url = "http://localhost:5112/recipes/"

    React.useEffect(() => {

        // Koshari recipe
        axios.post(url + "getIngredients")
            .then(response => {
                console.log(response);
                // setFormInfo(response.data);
                const KoshariData = response.data.data.filter((row: any) => row.RecipeId === "31")
                setKoshariData(KoshariData);
            })
        axios.post(url + "getInstructions")
            .then(response => {
                console.log(response);
                // setFormInfo(response.data);
                const KoshariData = response.data.data.filter((row: any) => row.RecipeId === "31")
                setKoshariInstruction(KoshariData);
            })
        console.log("useEffect was called");

        // _____________________________________________________________________________

        // Taameya recipe
        axios.post(url + "getIngredients")
            .then(response => {
                console.log(response);
                // setFormInfo(response.data);
                const TaameyaData = response.data.data.filter((row: any) => row.RecipeId === "32")
                setTaameyaData(TaameyaData);
            })
        axios.post(url + "getInstructions")
            .then(response => {
                console.log(response);
                // setFormInfo(response.data);
                const TaameyaData = response.data.data.filter((row: any) => row.RecipeId === "32")
                setTaameyaInstruction(TaameyaData);
            })
        console.log("useEffect was called");

        // _____________________________________________________________________________

        // BabaGanoush recipe
        axios.post(url + "getIngredients")
            .then(response => {
                console.log(response);
                // setFormInfo(response.data);
                const BabaGanoushData = response.data.data.filter((row: any) => row.RecipeId === "33")
                setBabaGanoushData(BabaGanoushData);
            })
        axios.post(url + "getInstructions")
            .then(response => {
                console.log(response);
                // setFormInfo(response.data);
                const BabaGanoushData = response.data.data.filter((row: any) => row.RecipeId === "33")
                setBabaGanoushInstruction(BabaGanoushData);
            })
        console.log("useEffect was called");

    })


    return (
        <div className="AroundAllEgypt">
            <div className='divAroundTitleEgypt'>
                <img className='flag' src="./images/flags/egypt.jpeg" alt="Egypt" />
                <img className='food' src="https://www.lacademie.com/wp-content/uploads/2022/01/delicious-egyptian-foods.jpg" alt="" />
                <p>Since the Egypt cuisine not that popular, many people may think that the Egyptian recipes are plain and not really good. But it is an incorrect assumption! Their cuisine is super delicious with various dishes, from morning till dawn.</p>
            </div>

            <div className="AroundRecipie">
                <Tabs className="AroundTabs">
                    <TabList className="AroundTabList">
                        <Tab>Koshari</Tab>
                        <Tab>Taameya</Tab>
                        <Tab>Baba Ganoush</Tab>

                    </TabList>

                    <TabPanel className="AroundTabPanel">
                        <img src="./images/flags/Koshari.jpg" alt="Koshari" />
                        {KoshariData?.map((row: any) => (
                            <>
                                <input type="checkbox" />
                                <span>{row.Amount}</span>
                                <span>{row.MeasuringTool}</span>
                                <span>{row.IngredientsName}</span>
                            </>
                        ))}
                        <h1>Instructions</h1>
                        {KoshariInstruction?.map((row: any) => (
                            <p>{row.InstructionsSteps}</p>
                        ))}

                    </TabPanel>



                    <TabPanel className="AroundTabPanel">
                        <img src="./images/flags/taameya.jpg" alt="taameya" />
                        {TaameyaData?.map((row: any) => (
                            <>
                                <input type="checkbox" />
                                <span>{row.Amount}</span>
                                <span>{row.MeasuringTool}</span>
                                <span>{row.IngredientsName}</span>
                            </>
                        ))}
                        <h1>Instructions</h1>
                        {TaameyaInstruction?.map((row: any) => (
                            <p>{row.InstructionsSteps}</p>
                        ))}


                    </TabPanel>



                    <TabPanel className="AroundTabPanel">
                        <img src="./images/flags/Baba-Ganoush.jpg" alt="Baba Ganoush" />
                        {BabaGanoushData?.map((row: any) => (
                            <>
                                <input type="checkbox" />
                                <span>{row.Amount}</span>
                                <span>{row.MeasuringTool}</span>
                                <span>{row.IngredientsName}</span>
                            </>
                        ))}
                        <h1>Instructions</h1>
                        {BabaGanoushInstruction?.map((row: any) => (
                            <p>{row.InstructionsSteps}</p>
                        ))}

                    </TabPanel>


                </Tabs>
            </div>

        </div>


    )
}

