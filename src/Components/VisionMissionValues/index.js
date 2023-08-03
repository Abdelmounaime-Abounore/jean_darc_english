import React from "react";
import './index.scss';
import respect from '../../assets/images/Respect.png';
import kindness from '../../assets/images/kindness.png';
import Excellence from '../../assets/images/anniversary.png';
import Empowerment from '../../assets/images/empowerment.png';
import cooperation from '../../assets/images/co-operation.png';
import honest from '../../assets/images/honest.png';

const VisionMissionValues = () => {
    return (
        <div className="home">
            <div className="backgroundPage_Header">
                <div className="titlebgPage_Header">
                    <h1>ALWAYS GUIDED BY OUR VALUES</h1>
                </div>
            </div>
            <div className="mission_vision">
                <h1>Mission & Vision</h1>
                <p>
                    Our lessons promote inquiry, innovative thinking, decision-making, and problem-solving, fostering independent,
                    creative, and resilient learners. Engaging and rigorous, our lessons ensure every student makes optimal progress 
                    We prioritize courtesy, respectful relationships, and collaboration with families, creating a school where 
                    students love to learn. Safety and well-being are our top priorities, with constant supervision and care for our 
                    students.
                </p>                
                <h1>Values:</h1>
            </div>
            <div className="container-fluid icons">
                <div className="row">
                    <div className="icon col-lg-2 col-sm-6">
                        <img src={respect}/>
                        <p>Respect</p>
                    </div>
                    <div className="icon col-lg-2 col-sm-6">
                        <img src={kindness} />
                        <p>Kindness</p>
                    </div>
                    <div className="icon col-lg-2 col-sm-6">
                        <img src={Excellence} className="excelence"/>
                        <p>Excellence</p>
                    </div>
                    <div className="icon col-lg-2 col-sm-6">
                        <img src={Empowerment} />
                        <p>Empowerment</p>
                    </div>
                    <div className="icon col-lg-2 col-sm-6">
                        <img src={cooperation} />
                        <p>Co-operation</p>
                    </div>
                    <div className="icon col-lg-2 col-sm-6">
                        <img src={honest} />
                        <p>Honesty</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default VisionMissionValues;