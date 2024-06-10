import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#f06529",
  },
  {
    skill: "Javascript",
    level: "advanced",
    color: "#f2db8f",
  },
  {
    skill: "NodeJs",
    level: "intermediate",
    color: "#3c873a",
  },
  {
    skill: "React",
    level: "beginner",
    color: "#61dafb",
  },
  {
    skill: "C++",
    level: "advanced",
    color: "#00599c",
  },
];

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />

        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src="image.png" alt="Vansh Kumar" />;
}

function Intro() {
  return (
    <div>
      <h1>Vansh Kumar</h1>
      <p>
        Full-stack web developer and teacher at Udemy. When not coding or
        preparing a course, I like to play board games, to cook (and eat), or to
        just enjoy the Portuguese sun at the beach.
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      {/* <Skill name="Javascript"  color="blue" emoji="💪" />
        <Skill name="NodeJs" color="red" emoji="💪" />
        <Skill name="MongoDB" color="yellow" emoji="💪" />
        <Skill name="UI/UX" color="orangered" emoji="👶" />
        <Skill name="Html+Css" color="orangered" emoji="👶" /> */}

      {skills.map((skill) => {
        return (
          <Skill
            key={skill.skill}
            name={skill.skill}
            color={skill.color}
            level={skill.level}
            // emoji={
            //   (skill.level === "beginner" && "👶") ||
            //   (skill.level === "intermediate" && "👍")||
            //   (skill.level === "advanced" && "💪")
            // }
          />
        );
      })}
    </div>
  );
}

function Skill({ name, color, level }) {
  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <span>{name}</span>
      <span>{level === "beginner" && "👶"}</span>
      <span>{level === "intermediate" && "👍"}</span>
      <span>{level === "advanced" && "💪"}</span>
      {/* <span>{emoji}</span> */}
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
