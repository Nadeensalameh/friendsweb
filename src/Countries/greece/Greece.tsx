import axios from "axios";
import React from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import './Greece.css';

export function Greece() {
    const [KleftikoData, setKleftikoData] = React.useState<[]>([]);
    const [KleftikoInstruction, setKleftikoInstruction] = React.useState<[]>([]);

    const [MoussakaData, setMoussakaData] = React.useState<[]>([]);
    const [MoussakaInstruction, setMoussakaInstruction] = React.useState<[]>([]);

    const [SpanakopitaData, setSpanakopitaData] = React.useState<[]>([]);
    const [SpanakopitaInstruction, setSpanakopitaInstruction] = React.useState<[]>([]);

    const url = "http://localhost:5112/recipes/"

    React.useEffect(() => {

        // Kleftiko recipe

        axios.post(url + "getIngredients")
            .then(response => {
                console.log(response);
                // setFormInfo(response.data);
                const KleftikoData = response.data.data.filter((row: any) => row.RecipeId === "25")
                setKleftikoData(KleftikoData);
            })
        axios.post(url + "getInstructions")
            .then(response => {
                console.log(response);
                // setFormInfo(response.data);
                const KleftikoData = response.data.data.filter((row: any) => row.RecipeId === "25")
                setKleftikoInstruction(KleftikoData);
            })
        console.log("useEffect was called");

        // _____________________________________________________________________________

        // Moussaka recipe
        axios.post(url + "getIngredients")
            .then(response => {
                console.log(response);
                // setFormInfo(response.data);
                const MoussakaData = response.data.data.filter((row: any) => row.RecipeId === "26")
                setMoussakaData(MoussakaData);
            })
        axios.post(url + "getInstructions")
            .then(response => {
                console.log(response);
                // setFormInfo(response.data);
                const MoussakaData = response.data.data.filter((row: any) => row.RecipeId === "26")
                setMoussakaInstruction(MoussakaData);
            })
        console.log("useEffect was called");

        //_________________________________________________________________________________

        // Spanakopita recipe
        axios.post(url + "getIngredients")
            .then(response => {
                console.log(response);
                // setFormInfo(response.data);
                const SpanakopitaData = response.data.data.filter((row: any) => row.RecipeId === "27")
                setSpanakopitaData(SpanakopitaData);
            })
        axios.post(url + "getInstructions")
            .then(response => {
                console.log(response);
                // setFormInfo(response.data);
                const SpanakopitaData = response.data.data.filter((row: any) => row.RecipeId === "27")
                setSpanakopitaInstruction(SpanakopitaData);
            })
        console.log("useEffect was called");

    })
    return (
        <div className="AroundAllGreece">
            <div className='divAroundTitleGreece'>
                <img className='flag' src="./images/flags/greece.jpeg" alt="greece" />
                <img className='food' src="https://lp-cms-production.imgix.net/2021-07/shutterstock_646209796%20_%20greek%20gastronomy.jpg?auto=compress&fit=crop&fm=auto&sharp=10&vib=20&w=1200&h=800" alt="" />
                <p>Greece has long been a family holiday favourite with its beautiful blue waters, child-friendly beaches and an abundance of delicious food made with fresh ingredients. Make sure you sample all the country has to offer with our pick of traditional dishe.</p>

            </div>

            <div className="AroundRecipie">
                <Tabs className="AroundTabs">
                    <TabList className="AroundTabList">
                        <Tab>Kleftiko</Tab>
                        <Tab>Moussaka</Tab>
                        <Tab>Spanakopita </Tab>
                    </TabList>

                    <TabPanel className="AroundTabPanel">
                        <img src="./images/flags/Kleftiko.jpg" alt="Kleftiko" />
                        {KleftikoData?.map((row: any) => (
                            <>
                                <input type="checkbox" />
                                <span>{row.Amount}</span>
                                <span>{row.MeasuringTool}</span>
                                <span>{row.IngredientsName}</span>
                            </>
                        ))}

                        <h1>Instructions</h1>
                        {KleftikoInstruction?.map((row: any) => (
                            <p>{row.InstructionsSteps}</p>
                        ))}
                    </TabPanel>


                    <TabPanel className="AroundTabPanel">
                        <img src="./images/flags/Moussaka.webp" alt="Moussaka" />
                        {MoussakaData?.map((row: any) => (
                            <>
                                <input type="checkbox" />
                                <span>{row.Amount}</span>
                                <span>{row.MeasuringTool}</span>
                                <span>{row.IngredientsName}</span>
                            </>
                        ))}

                        <h1>Instructions</h1>
                        {MoussakaInstruction?.map((row: any) => (
                            <p>{row.InstructionsSteps}</p>
                        ))}
                    </TabPanel>



                    <TabPanel className="AroundTabPanel">
                        <img src="./images/flags/Spanakopita.webp" alt="Spanakopita" />
                        {SpanakopitaData?.map((row: any) => (
                            <>
                                <input type="checkbox" />
                                <span>{row.Amount}</span>
                                <span>{row.MeasuringTool}</span>
                                <span>{row.IngredientsName}</span>
                            </>
                        ))}

                        <h1>Instructions</h1>
                        {SpanakopitaInstruction?.map((row: any) => (
                            <p>{row.InstructionsSteps}</p>
                        ))}
                    </TabPanel>
                </Tabs>
            </div>

        </div>


    )
}

