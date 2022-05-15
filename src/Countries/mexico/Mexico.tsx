import axios from "axios";
import React from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import './Mexico.css';

export function Mexico() {
    const [TacosalpastorData, setTacosalpastorData] = React.useState<[]>([]);
    const [TacosalpastorInstruction, setTacosalpastorInstruction] = React.useState<[]>([]);

    const [ChilaquilesData, setChilaquilesData] = React.useState<[]>([]);
    const [ChilaquilesInstruction, setChilaquilesInstruction] = React.useState<[]>([]);

    const [ChilesData, setChilesData] = React.useState<[]>([]);
    const [ChilesInstruction, setChilesInstruction] = React.useState<[]>([]);

    const url = "http://localhost:5112/recipes/"

    React.useEffect(() => {

        // Tacosalpastor recipe

        axios.post(url + "getIngredients")
            .then(response => {
                console.log(response);
                // setFormInfo(response.data);
                const TacosalpastorData = response.data.data.filter((row: any) => row.RecipeId === "10")
                setTacosalpastorData(TacosalpastorData);
            })
        axios.post(url + "getInstructions")
            .then(response => {
                console.log(response);
                // setFormInfo(response.data);
                const TacosalpastorData = response.data.data.filter((row: any) => row.RecipeId === "10")
                setTacosalpastorInstruction(TacosalpastorData);
            })
        console.log("useEffect was called");

        // _____________________________________________________________________________

        // Chilaquiles recipe
        axios.post(url + "getIngredients")
            .then(response => {
                console.log(response);
                // setFormInfo(response.data);
                const ChilaquilesData = response.data.data.filter((row: any) => row.RecipeId === "11")
                setChilaquilesData(ChilaquilesData);
            })
        axios.post(url + "getInstructions")
            .then(response => {
                console.log(response);
                // setFormInfo(response.data);
                const ChilaquilesData = response.data.data.filter((row: any) => row.RecipeId === "11")
                setChilaquilesInstruction(ChilaquilesData);
            })
        console.log("useEffect was called");

        //_________________________________________________________________________________

        // Chiles recipe
        axios.post(url + "getIngredients")
            .then(response => {
                console.log(response);
                // setFormInfo(response.data);
                const ChilesData = response.data.data.filter((row: any) => row.RecipeId === "12")
                setChilesData(ChilesData);
            })
        axios.post(url + "getInstructions")
            .then(response => {
                console.log(response);
                // setFormInfo(response.data);
                const ChilesData = response.data.data.filter((row: any) => row.RecipeId === "12")
                setChilesInstruction(ChilesData);
            })
        console.log("useEffect was called");

    })

    return (
        <div className="AroundAllMexico">
            <div className='divAroundTitleMexico'>
                <img className='flag' src="./images/flags/Mexico.jpeg" alt="Mexico" />
                <img className='food' src="https://media.istockphoto.com/photos/photo-of-mexican-food-including-tacos-guacamole-pico-de-gallo-nachos-picture-id1065726466?k=20&m=1065726466&s=612x612&w=0&h=it08GEGwC_Jf5uSsEoa4V0gXpqGgiAs4NfkA8NmB3y0=" alt="" />
                <p>México has one of the richest gastronomies in the world and Mexican food is one of the most beloved cuisines worldwide! It is the product of a set of ancient techniques, that are followed even today, and a sort of mix between pre-Hispanic local products and European ingredients such as certain spices like cinnamon, wheat, cattle, milk, cheese, etc. </p>
            </div>

            <div className="AroundRecipie">
                <Tabs className="AroundTabs">
                    <TabList className="AroundTabList">
                        <Tab>Tacosalpastor </Tab>
                        <Tab>Chilaquiles </Tab>
                        <Tab>Chiles-en-nogada</Tab>
                    </TabList>

                    <TabPanel className="AroundTabPanel">
                        <img src="./images/flags/Tacosalpastor.jpg" alt="Tacosalpastor" />
                        {TacosalpastorData?.map((row: any) => (
                            <>
                                <input type="checkbox" />
                                <span>{row.Amount}</span>
                                <span>{row.MeasuringTool}</span>
                                <span>{row.IngredientsName}</span>
                            </>
                        ))}

                        <h1>Instructions</h1>
                        {TacosalpastorInstruction?.map((row: any) => (
                            <p>{row.InstructionsSteps}</p>
                        ))}
                    </TabPanel>


                    <TabPanel className="AroundTabPanel">
                        <img src="./images/flags/Chilaquiles.webp" alt="Chilaquiles" />
                        {ChilaquilesData?.map((row: any) => (
                            <>
                                <input type="checkbox" />
                                <span>{row.Amount}</span>
                                <span>{row.MeasuringTool}</span>
                                <span>{row.IngredientsName}</span>
                            </>
                        ))}

                        <h1>Instructions</h1>
                        {ChilaquilesInstruction?.map((row: any) => (
                            <p>{row.InstructionsSteps}</p>
                        ))}
                    </TabPanel>


                    <TabPanel className="AroundTabPanel">
                        <img src="./images/flags/Chiles-en-nogada.jpg" alt="Chiles-en-nogada" />
                        {ChilesData?.map((row: any) => (
                            <>
                                <input type="checkbox" />
                                <span>{row.Amount}</span>
                                <span>{row.MeasuringTool}</span>
                                <span>{row.IngredientsName}</span>
                            </>
                        ))}

                        <h1>Instructions</h1>
                        {ChilesInstruction?.map((row: any) => (
                            <p>{row.InstructionsSteps}</p>
                        ))}
                    </TabPanel>
                </Tabs>
            </div>

        </div>


    )
}

