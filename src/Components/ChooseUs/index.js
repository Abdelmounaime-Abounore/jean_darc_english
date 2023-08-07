import React, { useState } from "react";
import './index.scss';
import content1 from '../../assets/images/chooseus.jpeg'

const ChooseUs = () => {
    return (
        <div className="accueil">
            <div className="backgroundPage_Header">
                <div className="titlebgPage_Header">
                    <h1>5 REASONS TO CHOOSE JEANNNE D'ARC BRITISH SCHOOL</h1>
                </div>
            </div>
            <div className="container">
                <div className="row content">
                    <input type="radio" name="slider" id="home" />
                    <input type="radio" name="slider" id="blog" />
                    <input type="radio" name="slider" id="help" />
                    <input type="radio" name="slider" id="code" />
                    <input type="radio" name="slider" id="about" />

                    <div className="col-lg-5 list">
                        <label for="home" className="home">
                            <span>Our teachers are highly experienced and passionate about education.</span>
                        </label>
                        <label for="blog" className="blog">
                            <span>We are a truly inclusive community school</span>
                        </label>
                        <label for="help" className="help">
                            <span>We are accredited as a British School Overseas (BSO)</span>
                        </label>
                        <label for="code" className="code">
                            <span>Great learning is central to everything we do</span>
                        </label>
                        <label for="about" className="about">
                            <span>You will always know how well your child is progressing at our School</span>
                        </label>
                    </div>

                    <div className="col-lg-7 text-content">
                        <div className="home text">
                            <div className="title">
                                <img src={content1} />
                            </div>
                            <p>All of our class teachers are certified native English speaking teachers with many years of international experience.</p>
                        </div>
                        <div className="blog text">
                            <img src={content1} />
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ulla</p>
                        </div>
                        <div className="help text">
                            <img src={content1} />
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ulla</p>
                        </div>
                        <div className="code text">
                            <img src={content1} />
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ulla</p>
                        </div>
                        <div className="about text">
                            <img src={content1} />
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ulla</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ChooseUs;