import { useState } from 'react';
import './WorldsCuisine.css';
import 'react-dropdown/style.css';
import { Mexico } from './../Countries/mexico/Mexico';



export function WorldsCuisine() {




    return (

        <div className='WorldsCuisine'>
            <div className='divAroundTitle'>
                <h1>How many different cuisines have you tried?</h1>
                <p>  We have selected the top international cuisines that are worth travelling long and far for. </p>
            </div>

            <main>
                <a href="http://localhost:3000/India" className="card card1">
                    <div className="inner">
                        <h2 className="title">INDIA</h2>
                    </div>
                </a>

                <a href="http://localhost:3000/Japan" className="card card12">
                    <div className="inner">
                        <h2 className="title">JAPAN</h2>
                    </div>
                </a>
                <a href="http://localhost:3000/Turkey" className="card card3">
                    <div className="inner">
                        <h2 className="title">TURKEY</h2>
                    </div>
                </a>

                <a href="http://localhost:3000/Brazil" className="card card2">
                    <div className="inner">
                        <h2 className="title">BRAZIL</h2>
                    </div>
                </a>
                <a href="http://localhost:3000/Mexico" className="card card4">
                    <div className="inner">
                        <h2 className="title">Mexico</h2>
                    </div>
                </a>
                <a href="http://localhost:3000/Costarica" className="card card5">
                    <div className="inner">
                        <h2 className="title">COSTARICA</h2>
                    </div>
                </a>
                <a href="http://localhost:3000/France" className="card card6">
                    <div className="inner">
                        <h2 className="title">FRANCE</h2>
                    </div>
                </a>
                <a href="http://localhost:3000/Italy" className="card card7">
                    <div className="inner">
                        <h2 className="title">ITALY</h2>
                    </div>
                </a>
                <a href="http://localhost:3000/Greece" className="card card8">
                    <div className="inner">
                        <h2 className="title">GREECE</h2>
                    </div>
                </a>
                <a href="http://localhost:3000/Morocco" className="card card9">
                    <div className="inner">
                        <h2 className="title">MOROCCO</h2>
                    </div>
                </a>
                <a href="http://localhost:3000/Egypt" className="card card10">
                    <div className="inner">
                        <h2 className="title">EGYPT</h2>
                    </div>
                </a>
                <a href="http://localhost:3000/SouthAfrica" className="card card11">
                    <div className="inner">
                        <h2 className="title">SOUTH AFRICA</h2>
                    </div>
                </a>

            </main>

        </div>
    )
}


