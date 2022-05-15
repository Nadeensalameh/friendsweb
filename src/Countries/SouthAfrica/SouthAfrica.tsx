import axios from "axios";
import React from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import './SouthAfrica.css';

export function SouthAfrica() {
    const [BiltongData, setBiltongData] = React.useState<[]>([]);
    const [BiltongInstruction, setBiltongInstruction] = React.useState<[]>([]);

    const [BobotieData, setBobotieData] = React.useState<[]>([]);
    const [BobotieInstruction, setBobotieInstruction] = React.useState<[]>([]);

    const [ChakalakaData, setChakalakaData] = React.useState<[]>([]);
    const [ChakalakaInstruction, setChakalakaInstruction] = React.useState<[]>([]);

    const url = "http://localhost:5112/recipes/"

    React.useEffect(() => {

        // Biltong recipe

        axios.post(url + "getIngredients")
            .then(response => {
                console.log(response);
                // setFormInfo(response.data);
                const BiltongData = response.data.data.filter((row: any) => row.RecipeId === "34")
                setBiltongData(BiltongData);
            })
        axios.post(url + "getInstructions")
            .then(response => {
                console.log(response);
                // setFormInfo(response.data);
                const BiltongData = response.data.data.filter((row: any) => row.RecipeId === "34")
                setBiltongInstruction(BiltongData);
            })
        console.log("useEffect was called");

        // _____________________________________________________________________________

        // Bobotie recipe
        axios.post(url + "getIngredients")
            .then(response => {
                console.log(response);
                // setFormInfo(response.data);
                const BobotieData = response.data.data.filter((row: any) => row.RecipeId === "35")
                setBobotieData(BobotieData);
            })
        axios.post(url + "getInstructions")
            .then(response => {
                console.log(response);
                // setFormInfo(response.data);
                const BobotieData = response.data.data.filter((row: any) => row.RecipeId === "35")
                setBobotieInstruction(BobotieData);
            })
        console.log("useEffect was called");

        //_________________________________________________________________________________

        // Chakalaka recipe
        axios.post(url + "getIngredients")
            .then(response => {
                console.log(response);
                // setFormInfo(response.data);
                const ChakalakaData = response.data.data.filter((row: any) => row.RecipeId === "36")
                setChakalakaData(ChakalakaData);
            })
        axios.post(url + "getInstructions")
            .then(response => {
                console.log(response);
                // setFormInfo(response.data);
                const ChakalakaData = response.data.data.filter((row: any) => row.RecipeId === "36")
                setChakalakaInstruction(ChakalakaData);
            })
        console.log("useEffect was called");

    })
    return (
        <div className="AroundAllSouthAfrica">
            <div className='divAroundTitleSouthAfrica'>
                <img className='flag' src="./images/flags/southafrica.jpeg" alt="SouthAfrica" />
                <img className='food' src="https://traveltosouthafrica.org/wp-content/uploads/2021/03/africanfood.jpg" alt="" />
                <p>Much like the “Rainbow Nation” that South Africa is known as,  South African  cuisines can be described as a melting pot of influences from English, Indian, Dutch, Malaysian and Native African cookery. The multicultural cuisine of South Africa can be described as cookery that boasts a fusion of different spices from around the world, as adopted by the indigenous people of Southern Africa.</p>
            </div>

            <div className="AroundRecipie">
                <Tabs className="AroundTabs">
                    <TabList className="AroundTabList">
                        <Tab>Biltong</Tab>
                        <Tab>Bobotie</Tab>
                        <Tab>Chakalaka</Tab>
                    </TabList>

                    <TabPanel className="AroundTabPanel">
                        <img src="./images/flags/Biltong.jpg" alt="Biltong" />
                        {BiltongData?.map((row: any) => (
                            <>
                                <input type="checkbox" />
                                <span>{row.Amount}</span>
                                <span>{row.MeasuringTool}</span>
                                <span>{row.IngredientsName}</span>
                            </>
                        ))}

                        <h1>Instructions</h1>
                        {BiltongInstruction?.map((row: any) => (
                            <p>{row.InstructionsSteps}</p>
                        ))}
                    </TabPanel>


                    <TabPanel className="AroundTabPanel">
                        <img src="./images/flags/Bobotie.webp" alt="Bobotie" />
                        {BobotieData?.map((row: any) => (
                            <>
                                <input type="checkbox" />
                                <span>{row.Amount}</span>
                                <span>{row.MeasuringTool}</span>
                                <span>{row.IngredientsName}</span>
                            </>
                        ))}

                        <h1>Instructions</h1>
                        {BobotieInstruction?.map((row: any) => (
                            <p>{row.InstructionsSteps}</p>
                        ))}
                    </TabPanel>


                    <TabPanel className="AroundTabPanel">
                        <img src="./images/flags/Chakalaka.jpg" alt="Chakalaka" />
                        {ChakalakaData?.map((row: any) => (
                            <>
                                <input type="checkbox" />
                                <span>{row.Amount}</span>
                                <span>{row.MeasuringTool}</span>
                                <span>{row.IngredientsName}</span>
                            </>
                        ))}

                        <h1>Instructions</h1>
                        {ChakalakaInstruction?.map((row: any) => (
                            <p>{row.InstructionsSteps}</p>
                        ))}
                    </TabPanel>
                </Tabs>
            </div>

        </div>


    )
}

