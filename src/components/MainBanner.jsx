import React, { useState } from 'react'
import './MainBanner.css'
import axios from 'axios';

const MainBanner = () => {

    const handleClick = () => {
        const requestData = {
            "agreeOnTakeTest": true,
            "name": "Dipti Gawde",
            "email": "dkgawde14@gmail.com",
            "yearOfExperience": 0.7,
            "rateOptimization": 4,
            "github": "https://github.com/dips1400",
            "linkedin": "https://www.linkedin.com/in/dipti-gawde-72aa65205/",
            "phone": "9130017903",
            "techstack": [
                "Frontend development",
                "UI/UX Design",
                "Data Structure",
                "React js",
                "C++"
            ],
            "relocatable": true,
            "goal": "To gain experience in product development and designing. To learn how a product gains its market in terms of technology. Gotta need some new knowledge for developing something in future.",
            "achievement": "Need to build hologram with good design. Need to learn new things and gain experience with development. I hope Willeder - is the 'one who' can help me let contribute my experience and get to learn more things from Willeder and it's team. ",
            "why": "Willeder being a software engineering service company and developing software products for companies, can help get me good exposure and tech knowledge, so that I can contribute to Willeder and its aim of being company that maximises business. Willeder's value of taking leadership and solving tech problems aligns with me and excites to work, an other value of Taking initiative and acting with determination, Diversity, Proactiveness motivates to work with Willeder and its people.",
            "reason": "In process of completion of internship period",
            "currentSalary": 0,
            "expectedSalary": 5,
            "noticePeriod": 0,
            "react": 0.8,
            "typescript": 0,
            "next": 0,
            "sass": 0.7,
            "figma": 1,
            "semanticHtml": 1,
            "storybook": 0
        };
    
        axios.post("https://asia-northeast1-willeder-official.cloudfunctions.net/api/apply/frontend", requestData)
            .then((response) => {
                console.log(response);
                alert("Successfully sent json file to Avengers..!!!");
                console.log(requestData);
            })
            .catch((error) => {
                if (error.response) {
                    console.log(error.response);
                    alert("Server responded with an error.");
                } else if (error.request) {
                    alert("Network error. Request could not be sent.");
                } else {
                    console.log(error);
                }
            });
    };
    

  return (
    <div className="mainContainer">
        <div className="container">
            <div className="left-content">
                <div className='intro'>
                    <button className='introBtn'
                    >Welcome to my portfolio</button>
                </div>
                <br></br>
                <div className='intro-para'><h2>Hi Willeder Team...!!!</h2>
                <p>I am Dipti
                frontend developer and designer.</p></div>
                <div className="details">
                    <p>Get to know more about me</p>
                    <p>Send request to json</p>
                    <button className="btn" onClick={handleClick}>Send Request</button>
                </div>
            </div>
            <div className="right-content">

            </div>

        </div>
    </div>
  )
}

export default MainBanner