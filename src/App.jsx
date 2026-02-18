import { useState } from 'react'

import CardNav from './CardNav'
import LiquidEther from './LiquidEther';
import Header from './Header';
const App = () => {
  const items = [
    {
      label: "About Me",
      bgColor: "#0D0716",
      textColor: "#fff",
      links: [
        { label: "Current Work at NASA", ariaLabel: "Current Work at NASA" },
        { label: "Mini Bio", ariaLabel: "Mini Bio" },
        { label: "Resumé", ariaLabel: "Resumé" },
        { label: "Contact Information", ariaLabel: "Contact Information" }
      ]
    },
    {
      label: "Projects", 
      bgColor: "#170D27",
      textColor: "#fff",
      links: [
        { label: "Top Featured Project", ariaLabel: "Top Featured Project" },
        { label: "Coding", ariaLabel: "Featured Projects" },
        { label: "Research", ariaLabel: "Project Case Studies" },
        { label: "Composition", ariaLabel: "Project Case Studies" },
        { label: "3D Modeling Files", ariaLabel: "Project Case Studies" }
      ]
    },
    {
      label: "Hobbies & Interests",
      bgColor: "#271E37", 
      textColor: "#fff",
      links: [
        { label: "Recipes", ariaLabel: "Recipes" },
      ]
    }
  ];

  return (
    <div style={{ width: '100%', height: 800, position: 'relative' }}>
    <Header style={{zIndex:0}}/>
    <LiquidEther
      colors={[ '#5227FF', '#FF9FFC', '#B19EEF' ]}
      mouseForce={10}
      cursorSize={100}
      isViscous
      viscous={30}
      iterationsViscous={32}
      iterationsPoisson={32}
      resolution={0.5}
      isBounce={false}
      autoDemo
      autoSpeed={0.5}
      autoIntensity={2.2}
      takeoverDuration={0.25}
      autoResumeDelay={3000}
      autoRampDuration={0.6}
      color0="#5227FF"
      color1="#0000ff"
      color2="#0080c0"
  />
   <CardNav
       items={items}
       baseColor="#fff"
       menuColor="#000"
       buttonBgColor="#111"
       buttonTextColor="#fff"
       ease="circ.out"
       theme="dark"
   />
  </div>
  );
};

export default App
