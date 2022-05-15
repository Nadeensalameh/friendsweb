import axios from "axios";
import React from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import './Italy.css';

export function Italy() {
    const [PizzaData, setPizzaData] = React.useState<[]>([]);
    const [PizzaInstruction, setPizzaInstruction] = React.useState<[]>([]);

    const [SPAGHETTIData, setSPAGHETTIData] = React.useState<[]>([]);
    const [SPAGHETTIInstruction, setSPAGHETTIInstruction] = React.useState<[]>([]);

    const [RisottoData, setRisottoData] = React.useState<[]>([]);
    const [RisottoInstruction, setRisottoInstruction] = React.useState<[]>([]);

    const url = "http://localhost:5112/recipes/"

    React.useEffect(() => {

        // Pizza recipe

        axios.post(url + "getIngredients")
            .then(response => {
                console.log(response);
                // setFormInfo(response.data);
                const PizzaData = response.data.data.filter((row: any) => row.RecipeId === "22")
                setPizzaData(PizzaData);
            })
        axios.post(url + "getInstructions")
            .then(response => {
                console.log(response);
                // setFormInfo(response.data);
                const PizzaData = response.data.data.filter((row: any) => row.RecipeId === "22")
                setPizzaInstruction(PizzaData);
            })
        console.log("useEffect was called");

        // _____________________________________________________________________________

        // SPAGHETTI recipe
        axios.post(url + "getIngredients")
            .then(response => {
                console.log(response);
                // setFormInfo(response.data);
                const SPAGHETTIData = response.data.data.filter((row: any) => row.RecipeId === "23")
                setSPAGHETTIData(SPAGHETTIData);
            })
        axios.post(url + "getInstructions")
            .then(response => {
                console.log(response);
                // setFormInfo(response.data);
                const SPAGHETTIData = response.data.data.filter((row: any) => row.RecipeId === "23")
                setSPAGHETTIInstruction(SPAGHETTIData);
            })
        console.log("useEffect was called");

        //_________________________________________________________________________________

        // Risotto recipe
        axios.post(url + "getIngredients")
            .then(response => {
                console.log(response);
                // setFormInfo(response.data);
                const RisottoData = response.data.data.filter((row: any) => row.RecipeId === "24")
                setRisottoData(RisottoData);
            })
        axios.post(url + "getInstructions")
            .then(response => {
                console.log(response);
                // setFormInfo(response.data);
                const RisottoData = response.data.data.filter((row: any) => row.RecipeId === "24")
                setRisottoInstruction(RisottoData);
            })
        console.log("useEffect was called");

    })
    return (
        <div className="AroundAllItaly">
            <div className='divAroundTitleItaly'>
                <img className='flag' src="./images/flags/italy.jpeg" alt="Italy" />
                <img className='food' src="https://media.istockphoto.com/photos/full-table-of-italian-meals-on-plates-pizza-pasta-ravioli-carpaccio-picture-id1227415751?k=20&m=1227415751&s=612x612&w=0&h=UArRKyenlWEM3iDzCdqd1TZyZt4uHR03maj7CbgQ7T0=" alt="" />
                <p>The most difficult thing about eating in Italy is that you can’t try everything. Every day you have a finite number of meals, and a finite amount of space in your stomach, whereas there seem to be an infinite number of Italian dishes that you “absolutely need to try”, we’ve come up with a little bucket list of Italian foods for you to try</p>
            </div>

            <div className="AroundRecipie">
                <Tabs className="AroundTabs">
                    <TabList className="AroundTabList">
                        <Tab>Pizza</Tab>
                        <Tab>SPAGHETTI “AGLIO E OLIO”</Tab>
                        <Tab>Risotto</Tab>
                    </TabList>

                    <TabPanel className="AroundTabPanel">
                        <img src="./images/flags/pizza.jpg" alt="pizza" />
                        {PizzaData?.map((row: any) => (
                            <>
                                <input type="checkbox" />
                                <span>{row.Amount}</span>
                                <span>{row.MeasuringTool}</span>
                                <span>{row.IngredientsName}</span>
                            </>
                        ))}

                        <h1>Instructions</h1>
                        {PizzaInstruction?.map((row: any) => (
                            <p>{row.InstructionsSteps}</p>
                        ))}
                    </TabPanel>



                    <TabPanel className="AroundTabPanel">
                        <img src="./images/flags/pasta.jpg" alt="pasta" />
                        {SPAGHETTIData?.map((row: any) => (
                            <>
                                <input type="checkbox" />
                                <span>{row.Amount}</span>
                                <span>{row.MeasuringTool}</span>
                                <span>{row.IngredientsName}</span>
                            </>
                        ))}

                        <h1>Instructions</h1>
                        {SPAGHETTIInstruction?.map((row: any) => (
                            <p>{row.InstructionsSteps}</p>
                        ))}
                    </TabPanel>



                    <TabPanel className="AroundTabPanel">
                        <img src="./images/flags/risotto.webp" alt="risotto" />
                        {RisottoData?.map((row: any) => (
                            <>
                                <input type="checkbox" />
                                <span>{row.Amount}</span>
                                <span>{row.MeasuringTool}</span>
                                <span>{row.IngredientsName}</span>
                            </>
                        ))}

                        <h1>Instructions</h1>
                        {RisottoInstruction?.map((row: any) => (
                            <p>{row.InstructionsSteps}</p>
                        ))}
                    </TabPanel>
                </Tabs>
            </div>

        </div>


    )
}
