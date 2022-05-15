import axios from "axios";
import React from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import './Costarica.css';

export function Costarica() {
    const [GalloPintoData, setGalloPintoData] = React.useState<[]>([]);
    const [GalloPintoInstruction, setGalloPintoInstruction] = React.useState<[]>([]);
    const [GalloPintoRecipeName, setGalloPintoRecipeName] = React.useState<any>()
    const [GalloPintoInputChange, setGalloPintoInputChange] = React.useState<number>(0);
    const handleGalloPintoInputChange = (event: any) => {
        const value = event.target.value;
        setGalloPintoInputChange(value);
    }
    const handleGalloPintoOnButtonClick = () => {
        const updatedGalloPintoData = GalloPintoData?.map((row: any) => {
            row.Amount = parseFloat(row.Amount) * GalloPintoInputChange;
            return row;
        })
        setGalloPintoData(updatedGalloPintoData as []);

    }


    const [CasadoData, setCasadoData] = React.useState<[]>([]);
    const [CasadoInstruction, setCasadoInstruction] = React.useState<[]>([]);
    const [CasadoRecipeName, setCasadoRecipeName] = React.useState<any>()
    const [CasadoInputChange, setCasadoInputChange] = React.useState<number>(0);
    const handleCasadoInputChange = (event: any) => {
        const value = event.target.value;
        setCasadoInputChange(value);
    }
    const handleCasadoOnButtonClick = () => {
        const updatedCasadoData = CasadoData?.map((row: any) => {
            row.Amount = parseFloat(row.Amount) * CasadoInputChange;
            return row;
        })
        setCasadoData(updatedCasadoData as []);

    }


    const [OlladeCarneData, setOlladeCarneData] = React.useState<[]>([]);
    const [OlladeCarneInstruction, setOlladeCarneInstruction] = React.useState<[]>([]);
    const [OlladeCarneRecipeName, setOlladeCarneRecipeName] = React.useState<any>()
    const [OlladeCarneInputChange, setOlladeCarneInputChange] = React.useState<number>(0);
    const handleOlladeCarneInputChange = (event: any) => {
        const value = event.target.value;
        setOlladeCarneInputChange(value);
    }
    const handleOlladeCarneOnButtonClick = () => {
        const updatedOlladeCarneData = OlladeCarneData?.map((row: any) => {
            row.Amount = parseFloat(row.Amount) * OlladeCarneInputChange;
            return row;
        })
        setOlladeCarneData(updatedOlladeCarneData as []);

    }


    const url = "http://localhost:5112/recipes/"

    React.useEffect(() => {

        // GalloPinto recipe

        axios.post(url + "getIngredients")
            .then(response => {
                console.log(response);
                // setFormInfo(response.data);
                const GalloPintoData = response.data.data.filter((row: any) => row.RecipeId === "16")
                setGalloPintoData(GalloPintoData);
            })
        axios.post(url + "getInstructions")
            .then(response => {
                console.log(response);
                // setFormInfo(response.data);
                const GalloPintoData = response.data.data.filter((row: any) => row.RecipeId === "16")
                setGalloPintoInstruction(GalloPintoData);
            })
        console.log("useEffect was called");


        axios.post(url + "getDescription")
            .then(response => {
                console.log(response);
                // setFormInfo(response.data);
                const recipeData = response.data.data.find((row: any) => row.id === 13)
                setGalloPintoRecipeName(recipeData);
            })

        // _____________________________________________________________________________

        // Casado recipe
        axios.post(url + "getIngredients")
            .then(response => {
                console.log(response);
                // setFormInfo(response.data);
                const CasadoData = response.data.data.filter((row: any) => row.RecipeId === "17")
                setCasadoData(CasadoData);
            })
        axios.post(url + "getInstructions")
            .then(response => {
                console.log(response);
                // setFormInfo(response.data);
                const CasadoData = response.data.data.filter((row: any) => row.RecipeId === "17")
                setCasadoInstruction(CasadoData);
            })
        console.log("useEffect was called");


        axios.post(url + "getDescription")
            .then(response => {
                console.log(response);
                // setFormInfo(response.data);
                const recipeData = response.data.data.find((row: any) => row.id === 13)
                setCasadoRecipeName(recipeData);
            })

        //_________________________________________________________________________________

        // OlladeCarne recipe
        axios.post(url + "getIngredients")
            .then(response => {
                console.log(response);
                // setFormInfo(response.data);
                const OlladeCarneData = response.data.data.filter((row: any) => row.RecipeId === "18")
                setOlladeCarneData(OlladeCarneData);
            })
        axios.post(url + "getInstructions")
            .then(response => {
                console.log(response);
                // setFormInfo(response.data);
                const OlladeCarneData = response.data.data.filter((row: any) => row.RecipeId === "18")
                setOlladeCarneInstruction(OlladeCarneData);
            })
        console.log("useEffect was called");


        axios.post(url + "getDescription")
            .then(response => {
                console.log(response);
                // setFormInfo(response.data);
                const recipeData = response.data.data.find((row: any) => row.id === 13)
                setOlladeCarneRecipeName(recipeData);
            })

    }, [])



    return (
        <div className="AroundAllCostarica">
            <div className='divAroundTitleCostarica'>
                <img className='flag' src="./images/flags/costarica.jpeg" alt="Costarica" />
                <img className='food' src="https://carpechepe.com/wp-content/uploads/2019/12/tamales.jpg" alt="" />
                <p>Costa Rica is known worldwide for its biodiversity, both in species and ecosystems, however, its typical cuisine has also captivated the curiosity and palate of visitors for centuries.</p>
            </div>

            <div className="AroundRecipie">
                <Tabs className="AroundTabs">
                    <TabList className="AroundTabList">
                        <Tab>Gallo Pinto </Tab>
                        <Tab>Casado</Tab>
                        <Tab>OlladeCarne</Tab>
                    </TabList>

                    <TabPanel className="AroundTabPanel">
                        <img src="./images/flags/GalloPinto.jpg" alt="Gallo Pinto " />
                        <h1>Ingredients</h1>
                        <h2>Serving : 10</h2>
                        <input onChange={handleGalloPintoInputChange} type="number" value={GalloPintoInputChange} />
                        <button className='GoButton' onClick={handleGalloPintoOnButtonClick}>Go</button>
                        <p className='descriptionGalloPintopara'>{GalloPintoRecipeName?.description}</p>

                        {GalloPintoData?.map((row: any) => (
                            <>
                                <div className='DivArounGalloPintoIngredients'>

                                    <input type="checkbox" />
                                    <div>{row.Amount}</div>
                                    <div>{row.MeasuringTool}</div>
                                    <div>{row.IngredientsName}</div>
                                </div>

                            </>
                        ))}

                        {GalloPintoInstruction?.map((row: any) => (
                            <div className='GalloPintoInstruction'>
                                <h1>Instructions</h1>
                                <p>{row.InstructionsSteps}</p>
                            </div>

                        ))}
                    </TabPanel>


                    <TabPanel className="AroundTabPanel">
                        <img src="./images/flags/Casado.jpg" alt="Casado" />
                        <h1>Ingredients</h1>
                        <h2>Serving : 4</h2>
                        <input onChange={handleCasadoInputChange} type="number" value={CasadoInputChange} />
                        <button className='GoButton' onClick={handleCasadoOnButtonClick}>Go</button>
                        <p className='descriptionCasadopara'>{CasadoRecipeName?.description}</p>

                        {CasadoData?.map((row: any) => (
                            <>
                                <div className='DivArounCasadoIngredients'>

                                    <input type="checkbox" />
                                    <div>{row.Amount}</div>
                                    <div>{row.MeasuringTool}</div>
                                    <div>{row.IngredientsName}</div>
                                </div>

                            </>
                        ))}

                        {CasadoInstruction?.map((row: any) => (
                            <div className='CasadoInstruction'>
                                <h1>Instructions</h1>
                                <p>{row.InstructionsSteps}</p>
                            </div>

                        ))}
                    </TabPanel>


                    <TabPanel className="AroundTabPanel">
                        <img src="./images/flags/OlladeCarne.jpg" alt="OlladeCarne" />
                        <h1>Ingredients</h1>
                        <h2>Serving : 8</h2>
                        <input onChange={handleOlladeCarneInputChange} type="number" value={OlladeCarneInputChange} />
                        <button className='GoButton' onClick={handleOlladeCarneOnButtonClick}>Go</button>
                        <p className='descriptionOlladeCarnepara'>{OlladeCarneRecipeName?.description}</p>

                        {OlladeCarneData?.map((row: any) => (
                            <>
                                <div className='DivArounOlladeCarneIngredients'>

                                    <input type="checkbox" />
                                    <div>{row.Amount}</div>
                                    <div>{row.MeasuringTool}</div>
                                    <div>{row.IngredientsName}</div>
                                </div>
                            </>
                        ))}

                        {OlladeCarneInstruction?.map((row: any) => (
                            <div className='OlladeCarneInstruction'>
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

