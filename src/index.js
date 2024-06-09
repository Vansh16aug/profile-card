import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        
        <SkillList/>
      </div>
    </div>
  );
}

function Avatar(){
    return <img className="avatar" src="image.png" alt="Vansh Kumar" />
}

function Intro(){
    return (
      <div>
        <h1>Vansh Kumar</h1>
        <p>
          Full-stack web developer and teacher at Udemy. When not coding or
          preparing a course, I like to play board games, to cook (and eat), or
          to just enjoy the Portuguese sun at the beach.
        </p>
      </div>
    );
}

function SkillList() {
    return (
      <div className="skill-list">
        <Skill name="Javascript" color="blue" emoji="💪" />
        <Skill name="NodeJs" color="red" emoji="💪" />
        <Skill name="MongoDB" color="yellow" emoji="💪" />
        <Skill name="UI/UX" color="orangered" emoji="👶" />
        <Skill name="Html+Css" color="orangered" emoji="👶" />
      </div>
    );
}

function Skill(props){
    return (
      <div className="skill" style={{ backgroundColor: props.color }}>
        <span>{props.name}</span>
        <span>{props.emoji}</span>
      </div>
    );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
