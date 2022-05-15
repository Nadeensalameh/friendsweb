import axios from "axios";
import React from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import './Morocco.css';

export function Morocco() {
    const [TagineData, setTagineData] = React.useState<[]>([]);
    const [TagineInstruction, setTagineInstruction] = React.useState<[]>([]);

    const [CouscousData, setCouscousData] = React.useState<[]>([]);
    const [CouscousInstruction, setCouscousInstruction] = React.useState<[]>([]);

    const [BssaraData, setBssaraData] = React.useState<[]>([]);
    const [BssaraInstruction, setBssaraInstruction] = React.useState<[]>([]);

    const url = "http://localhost:5112/recipes/"

    React.useEffect(() => {

        // Tagine recipe

        axios.post(url + "getIngredients")
            .then(response => {
                console.log(response);
                // setFormInfo(response.data);
                const TagineData = response.data.data.filter((row: any) => row.RecipeId === "28")
                setTagineData(TagineData);
            })
        axios.post(url + "getInstructions")
            .then(response => {
                console.log(response);
                // setFormInfo(response.data);
                const TagineData = response.data.data.filter((row: any) => row.RecipeId === "28")
                setTagineInstruction(TagineData);
            })
        console.log("useEffect was called");

        // _____________________________________________________________________________

        // Couscous recipe
        axios.post(url + "getIngredients")
            .then(response => {
                console.log(response);
                // setFormInfo(response.data);
                const CouscousData = response.data.data.filter((row: any) => row.RecipeId === "29")
                setCouscousData(CouscousData);
            })
        axios.post(url + "getInstructions")
            .then(response => {
                console.log(response);
                // setFormInfo(response.data);
                const CouscousData = response.data.data.filter((row: any) => row.RecipeId === "29")
                setCouscousInstruction(CouscousData);
            })
        console.log("useEffect was called");

        //_________________________________________________________________________________

        // Bssara recipe
        axios.post(url + "getIngredients")
            .then(response => {
                console.log(response);
                // setFormInfo(response.data);
                const BssaraData = response.data.data.filter((row: any) => row.RecipeId === "30")
                setBssaraData(BssaraData);
            })
        axios.post(url + "getInstructions")
            .then(response => {
                console.log(response);
                // setFormInfo(response.data);
                const BssaraData = response.data.data.filter((row: any) => row.RecipeId === "30")
                setBssaraInstruction(BssaraData);
            })
        console.log("useEffect was called");

    })
    return (
        <div className="AroundAllMorocco">
            <div className='divAroundTitleMorocco'>
                <img className='flag' src="./images/flags/morocco.jpeg" alt="Morocco" />
                <img className='food' src="https://www.visitmorocco.com/sites/default/files/thumbnails/image/se-nourrir-au-maroc.jpg" alt="" />
                <p>The food of Morocco ranks high on lists of the world's best cuisines and is well worth exploring. You won't be disappointed with the incredible variety, flavorful seasoning, and innovative ingredient combinations that await you.</p>
            </div>

            <div className="AroundRecipie">
                <Tabs className="AroundTabs">
                    <TabList className="AroundTabList">
                        <Tab>Tagine</Tab>
                        <Tab>Couscous</Tab>
                        <Tab>B’ssara</Tab>
                    </TabList>

                    <TabPanel className="AroundTabPanel">
                        <img src="./images/flags/Tagine.jpg" alt="Tagine" />
                        {TagineData?.map((row: any) => (
                            <>
                                <input type="checkbox" />
                                <span>{row.Amount}</span>
                                <span>{row.MeasuringTool}</span>
                                <span>{row.IngredientsName}</span>
                            </>
                        ))}

                        <h1>Instructions</h1>
                        {TagineInstruction?.map((row: any) => (
                            <p>{row.InstructionsSteps}</p>
                        ))}
                    </TabPanel>


                    <TabPanel className="AroundTabPanel">
                        <img src="./images/flags/Couscous.jpg" alt="Couscous" />
                        {CouscousData?.map((row: any) => (
                            <>
                                <input type="checkbox" />
                                <span>{row.Amount}</span>
                                <span>{row.MeasuringTool}</span>
                                <span>{row.IngredientsName}</span>
                            </>
                        ))}

                        <h1>Instructions</h1>
                        {CouscousInstruction?.map((row: any) => (
                            <p>{row.InstructionsSteps}</p>
                        ))}
                    </TabPanel>


                    <TabPanel className="AroundTabPanel">
                        <img src="./images/flags/bessara.jpg" alt="B’ssara" />
                        {BssaraData?.map((row: any) => (
                            <>
                                <input type="checkbox" />
                                <span>{row.Amount}</span>
                                <span>{row.MeasuringTool}</span>
                                <span>{row.IngredientsName}</span>
                            </>
                        ))}

                        <h1>Instructions</h1>
                        {BssaraInstruction?.map((row: any) => (
                            <p>{row.InstructionsSteps}</p>
                        ))}
                    </TabPanel>
                </Tabs>
            </div>

        </div>


    )
}

