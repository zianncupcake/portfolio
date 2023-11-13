import { useEffect, useRef, useState } from "react";
import TimelineObserver from "react-timeline-animation";
import { fireConfetti } from "./Confetti";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import "./Confetti.css";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";



const ExperienceSection = () => {
  const Timeline = ({ setObserver, callback}) => {
    
    const [message0, setMessage0] = useState("");
    const [message1, setMessage1] = useState("");
    const [message2, setMessage2] = useState("");
    const [message3, setMessage3] = useState("");
    const [message4, setMessage4] = useState("");
    const [message5, setMessage5] = useState("");
    const [message6, setMessage6] = useState("");
    const [message7, setMessage7] = useState("");

    const timeline0 = useRef(null);
    const timeline1 = useRef(null);
    const timeline2 = useRef(null);
    const timeline3 = useRef(null);
    const timeline4 = useRef(null);
    const timeline5 = useRef(null);
    const timeline6 = useRef(null);
    const timeline7 = useRef(null);
    const circle0 = useRef(null);
    const circle1 = useRef(null);
    const circle2 = useRef(null);
    const circle3 = useRef(null);
    const circle4 = useRef(null);
    const circle5 = useRef(null);
    const circle6 = useRef(null);
    const circle7 = useRef(null);
  
    const someCallback0 = () => {
      setMessage0("A long time ago: Realised business analytics is not for me");
      callback();
    };

    const someCallback = () => {
      setMessage1("Jan 2022 - May 2022: Created a Gifting Ideas website for a NUS Business Analytics Module BT3103. Users are able to create accounts, search for gift ideas, create posts for gift ideas, like and comment on posts etc. Tech Stack: VueJS, Google Firestore, HTML, CSS, Javascript, Figma ");
      callback();
    };
  
    const someCallback2 = () => {
      setMessage2("Jan 2023 - Apr 2023: Completed NUS Business Analytics Capstone Project. Conducted exploratory data analysis on L'Oreal's e-commerce sales and search data, as well as constructed data visualisations and dashboarding. Tech Stack: Python, PowerBI ");
    };
  
    const someCallback3 = () => {
      setMessage3("Aug 2023: Completed React Basics course by META. Final project: created a simple calculator. Tech Stack: ReactJS, HTML, Javascript, CSS");
    };

    const someCallback4 = () => {
      setMessage4("Sep 2023: Completed Advanced React course by META. Final project: created a portfolio website. Tech Stack: ReactJS, HTML, Javascript, CSS");
      
    };

    const someCallback5 = () => {
      setMessage5("Sep 2023 - Jan 2023: Currently a full stack intern at Azendian Solutions. Developing a Data Management System, and assisting in Front-end and Back-end development of dashboard. Tech Stack: ReactJS, NodeJS, ExpressJS, Postman, JSON, HTML, Javascript, CSS");
      
    };

    const someCallback6 = () => {
      setMessage6("Nov 2023: Completed a SQL Bootcamp course by Pierian Training. Tech Stack: Postgresql, SQL");
     
    };

    const someCallback7 = () => {
      setMessage7("Jan 2024 - June 2024: What's next? I am happy to share that I will be a software engineer intern at StaffAny. Tech Stack: ReactJS, React Native, Javascript, Postgresql");
      fireConfetti();
    };
  
    useEffect(() => {
      setObserver(timeline0.current);
      setObserver(timeline1.current);
      setObserver(timeline2.current);
      setObserver(timeline3.current);
      setObserver(timeline4.current);
      setObserver(timeline5.current);
      setObserver(timeline6.current);
      setObserver(timeline7.current);
      setObserver(circle0.current, someCallback0);
      setObserver(circle1.current, someCallback);
      setObserver(circle2.current, someCallback2);
      setObserver(circle3.current, someCallback3);
      setObserver(circle4.current, someCallback4);
      setObserver(circle5.current, someCallback5);
      setObserver(circle6.current, someCallback6);
      setObserver(circle7.current, someCallback7);
    }, []);

    
  
    return (
      <div className="wrapper">
         <div id="timeline0" ref={timeline0} className="timeline" />
        <div className="circleWrapper">
          <div id="circle0" ref={circle0} className="circle">
            0
          </div>
          <div style = {{marginTop:"30px"}} className="message">{message0}</div>
        </div>
        <div id="timeline1" ref={timeline1} className="timeline" />
        <div className="circleWrapper">
          <div id="circle1" ref={circle1} className="circle">
            1
          </div>
          <div className="message">{message1}</div>
        </div>
        <div id="timeline2" ref={timeline2} className="timeline" />
        <div className="circleWrapper">
          <button id="circle2" ref={circle2} className="circle" >
            2
          </button>
          <div className="message">{message2}</div>
        </div>
        <div id="timeline3" ref={timeline3} className="timeline" />
        <div className="circleWrapper">
          <button id="circle3" ref={circle3} className="circle" >
            3
          </button>
          <div className="message">{message3}</div>
        </div>
        <div id="timeline4" ref={timeline4} className="timeline" />
        <div className="circleWrapper">
          <button id="circle4" ref={circle4} className="circle" >
            4
          </button>
          <div className="message">{message4}</div>
        </div>
        <div id="timeline5" ref={timeline5} className="timeline" />
        <div className="circleWrapper">
          <button id="circle5" ref={circle5} className="circle" >
            5
          </button>
          <div className="message">{message5}</div>
        </div>
        <div id="timeline6" ref={timeline6} className="timeline" />
        <div className="circleWrapper">
          <button id="circle6" ref={circle6} className="circle" >
            6
          </button>
          <div className="message">{message6}</div>
        </div>
        <div id="timeline7" ref={timeline7} className="timeline" />
        <div className="circleWrapper">
          <button id="circle7" ref={circle7} className="circle" >
            7
          </button>
          <div className="message">{message7}</div>
        </div>

        
      
        
      </div>
    );
  };
  const [message, setMessage] = useState("");
  
  
  


  const onCallback = () => {
    console.log("awesome");
  };
  

  return (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#d4c1b7" 
    id="experience-section"
  >
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    <Heading as="h1">
        Scroll to follow my journey!
      </Heading>
    <div className="App">
      <TimelineObserver
        initialColor="#e5e5e5"
        fillColor="#7b7f86"
        hasReverse={true}
        handleObserve={(setObserver) => (
          <Timeline
            callback={onCallback}
            className="timeline"
            setObserver={setObserver}
            
          />
        )}
      />
      
    </div>
    <br></br>
      <br></br>
      <br></br>
      <br></br>
    

  </FullScreenSection>
  )
};

export default ExperienceSection;
