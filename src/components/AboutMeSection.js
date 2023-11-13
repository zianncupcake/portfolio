import React, { useState } from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import WheelComponent from "react-wheel-of-prizes";


const greeting = "hi.";
const bio1 = "welcome.";
const bio2 = "welcome!!!";


const segments = [
  "HTML",
  "Javascript",
  "CSS",
  "Java",
  "Python",
  "SQL",
  "Postgresql",
  "ReactJS",
  "VueJS",
  "NodeJS",
  "ExpressJS",
  
];
const segColors = [
 '#FF94A1', 
 '#FF6B6B', 
 '#FF8E6E', 
 '#FFA94D', 
 '#8CD790', 
 '#6DB5A1', 
 '#82CCB4', 
 '#8796B0', 
 '#6653FF', 
 '#B18787', 
 '#D7BEAA', 
  
];



const AboutMeSection = () => {
  const [chosen, setChosen] = useState("Full Stack");

  const onFinished = (winner) => {
    setChosen(winner);
  };

  return (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#d4bab0"
    
  >
    <VStack spacing={4} alignItems="center" id="aboutme-section" >
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
      <Heading size="lg" color="white">
        Nice to meet you, I am a Y5 NUS Business Analytics student with a passion for software/web development
      </Heading>
      <Heading size="lg" color="white">
       You deserve options...click to choose my tech stack ! 
      </Heading>
      <Heading size="s" color="white">
       Caution: you only have 1 chance, spin wisely...
      </Heading>
      

      <div style= {{display:"flex"}}>
      <WheelComponent
          segments={segments}
          segColors={segColors}
          onFinished={(winner) => onFinished(winner)}
          primaryColor="white"
          contrastColor="white"
          buttonText="Spin"
          winningSegment = {segments[Math.floor(Math.random() * 11)]}
          
          isOnlyOnce={true}
        
          upDuration={500}
          downDuration={600}
          fontFamily="Arial"
        />
        <div style ={{
          marginReft: "20%",
          marginTop:"10%",
          width:"300px",
          alignItems:"center",
          textAlign:"center",
          width:"500px"
          
        }}>
        <Heading size="lg" color="white">
         Hi I am Ziann, I am a 
        </Heading>
        <br></br>
        <Heading size="3xl" color="white">
         {chosen}
        </Heading>
        <br></br>
        <Heading size="lg" color="white">
         developer (for today)
        </Heading>
        
        </div>
      </div>
    </VStack>
  </FullScreenSection>
  )
};

export default AboutMeSection;
