import React, { useState } from 'react';
import './App.css';
import Particles from "react-tsparticles";
import TextField from '@material-ui/core/TextField';

function App() {
  const [thoughts, setThoughts] = useState([]);
  const [thought, setThought] = useState("");

  const onChangeText = (e) => {
    const newThought = e.target.value;
    setThought(newThought);
  };

  const onSave = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      const newThoughts = [...thoughts, thought];
      setThought("");
      setThoughts(newThoughts);
    }
  };

  return (
    <div >
      <Particles
        id="tsparticles"
        options={{
          background: {
            color: {
              value: "#ffffff",
            },
          },
          fpsLimit: 60,
          interactivity: {
            detectsOn: "canvas",
            events: {
              onClick: {
                enable: false,
                mode: "push",
              },
              onHover: {
                enable: false,
                mode: "repulse",
              },
              resize: false,
            },
            modes: {
              bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.8,
                size: 40,
              },
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#000000",
            },
            links: {
              color: "#000000",
              distance: 150,
              enable: false,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: false,
            },
            move: {
              direction: "none",
              enable: true,
              outMode: "bounce",
              random: false,
              speed: 6,
              straight: false,
            },
            number: {
              // density: {
              //   enable: true,
              //   value_area: 800,
              // },
              value: thoughts.length,
            },
            opacity: {
              value: 0.5,
            },
            // shape: {
            //   type: "circle",
            // },
            shape: {
              character: {
                fill: true,
                font: "Verdana",
                style: "",
                value: thoughts,
                weight: "300"
              },
              // image: {
              //   height: 100,
              //   replace_color: true,
              //   src: "images/github.svg",
              //   width: 100
              // },
              // polygon: { nb_sides: 5 },
              stroke: { color: "#000000", width: 1 },
              type: "char"
            },
            size: {
              // random: true,
              value: 12,
            },
          },
          detectRetina: true,
        }}
      />
      <div className="mainPos">
        <form noValidate autoComplete="off" >
          <TextField
            label="Enter your Thoughts"
            variant="outlined"
            color="secondary"
            value={thought} onChange={onChangeText}
            onKeyPress={onSave}
          />
        </form>
      </div>
    </div>
  );
}

export default App;