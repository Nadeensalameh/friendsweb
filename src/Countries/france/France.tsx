import axios from "axios";
import React from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import './France.css';

export function France() {
    const [SoupeàloignonData, setSoupeàloignonData] = React.useState<[]>([]);
    const [SoupeàloignonInstruction, setSoupeàloignonInstruction] = React.useState<[]>([]);

    const [CoqauvinData, setCoqauvinData] = React.useState<[]>([]);
    const [CoqauvinInstruction, setCoqauvinInstruction] = React.useState<[]>([]);

    const [cassouletData, setcassouletData] = React.useState<[]>([]);
    const [cassouletInstruction, setcassouletInstruction] = React.useState<[]>([]);

    const url = "http://localhost:5112/recipes/"

    React.useEffect(() => {

        // Soupeàloignon recipe

        axios.post(url + "getIngredients")
            .then(response => {
                console.log(response);
                // setFormInfo(response.data);
                const SoupeàloignonData = response.data.data.filter((row: any) => row.RecipeId === "19")
                setSoupeàloignonData(SoupeàloignonData);
            })
        axios.post(url + "getInstructions")
            .then(response => {
                console.log(response);
                // setFormInfo(response.data);
                const SoupeàloignonData = response.data.data.filter((row: any) => row.RecipeId === "19")
                setSoupeàloignonInstruction(SoupeàloignonData);
            })
        console.log("useEffect was called");

        // _____________________________________________________________________________

        // Coqauvin recipe
        axios.post(url + "getIngredients")
            .then(response => {
                console.log(response);
                // setFormInfo(response.data);
                const CoqauvinData = response.data.data.filter((row: any) => row.RecipeId === "20")
                setCoqauvinData(CoqauvinData);
            })
        axios.post(url + "getInstructions")
            .then(response => {
                console.log(response);
                // setFormInfo(response.data);
                const CoqauvinData = response.data.data.filter((row: any) => row.RecipeId === "20")
                setCoqauvinInstruction(CoqauvinData);
            })
        console.log("useEffect was called");

        //_________________________________________________________________________________

        // cassoulet recipe
        axios.post(url + "getIngredients")
            .then(response => {
                console.log(response);
                // setFormInfo(response.data);
                const cassouletData = response.data.data.filter((row: any) => row.RecipeId === "21")
                setcassouletData(cassouletData);
            })
        axios.post(url + "getInstructions")
            .then(response => {
                console.log(response);
                // setFormInfo(response.data);
                const cassouletData = response.data.data.filter((row: any) => row.RecipeId === "21")
                setcassouletInstruction(cassouletData);
            })
        console.log("useEffect was called");

    })
    return (
        <div className="AroundAllFrance">
            <div className='divAroundTitleFrance'>
                <img className='flag' src="./images/flags/france.jpeg" alt="France" />
                <img className='food' src="https://all.accor.com/magazine/imagerie/bloc-1-5183.jpg" alt="" />
                <p>Without doubt, one of the most iconic things about France is its food. The vast array of its famous dishes you see repeated around the world on restaurant menus is testament to this. But these iconic French dishes often taste so much better on their ‘home soil’, by using locally grown ingredients and staying true to the original recipe and method.</p>
            </div>

            <div className="AroundRecipie">
                <Tabs className="AroundTabs">
                    <TabList className="AroundTabList">
                        <Tab>Soupe à l’oignon</Tab>
                        <Tab>Coq au vin</Tab>
                        <Tab>cassoulet</Tab>
                    </TabList>

                    <TabPanel className="AroundTabPanel">
                        <img src="./images/flags/Soupeàl’oignon.jpg" alt="Soupeàl’oignon " />
                        {SoupeàloignonData?.map((row: any) => (
                            <>
                                <input type="checkbox" />
                                <span>{row.Amount}</span>
                                <span>{row.MeasuringTool}</span>
                                <span>{row.IngredientsName}</span>
                            </>
                        ))}

                        <h1>Instructions</h1>
                        {SoupeàloignonInstruction?.map((row: any) => (
                            <p>{row.InstructionsSteps}</p>
                        ))}
                    </TabPanel>



                    <TabPanel className="AroundTabPanel">
                        <img src="./images/flags/coq-au-vin.jpg" alt="coq-au-vin" />
                        {CoqauvinData?.map((row: any) => (
                            <>
                                <input type="checkbox" />
                                <span>{row.Amount}</span>
                                <span>{row.MeasuringTool}</span>
                                <span>{row.IngredientsName}</span>
                            </>
                        ))}

                        <h1>Instructions</h1>
                        {CoqauvinInstruction?.map((row: any) => (
                            <p>{row.InstructionsSteps}</p>
                        ))}
                    </TabPanel>


                    <TabPanel className="AroundTabPanel">
                        <img src="./images/flags/cassoulet.jpg" alt="cassoulet" />
                        {cassouletData?.map((row: any) => (
                            <>
                                <input type="checkbox" />
                                <span>{row.Amount}</span>
                                <span>{row.MeasuringTool}</span>
                                <span>{row.IngredientsName}</span>
                            </>
                        ))}

                        <h1>Instructions</h1>
                        {cassouletInstruction?.map((row: any) => (
                            <p>{row.InstructionsSteps}</p>
                        ))}
                    </TabPanel>
                </Tabs>
            </div>

        </div>


    )
}

