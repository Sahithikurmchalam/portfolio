import { useEffect } from "react";
import "./LeftHomeComponent.css";
const LeftHomeComponent = () => {
  useEffect(() => {
    const myText = new SplitType('.heading')
    gsap.to('.char', {
        y: 0,
        stagger: 0.05,
        delay: 0.2,
        duration: .1
    })
  }, []);
  return (
    <div className="left-main">
      <div className="heading cursor-scale big">
        <h1>Sahithi</h1><br></br><h1>Kurmachalam</h1>
      </div>
    </div>
  );
};

export default LeftHomeComponent;
