import React, { useRef, useEffect } from "react";
import "../Styles/social.css";

const SocialLock = (props) => {
  const canvasRef = useRef(null);

  const draw = (ctx) => {
    ctx.beginPath();
    ctx.fillStyle = "#efefef";
    ctx.fillRect(0, 60, 300, 30);

    ctx.beginPath();
    ctx.moveTo(0, 75);
    ctx.lineTo(300, 75);
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(150, 75, 30, 0, 2 * Math.PI);
    ctx.fillStyle = "#c9c9c9";
    ctx.fill();

    ctx.beginPath();
    ctx.fillStyle = "#000000";
    ctx.fillRect(142.5, 61.5, 15, 30);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    draw(ctx);
  });

  return (
    <div className='social'>
      <h3 id='social-title'>Social Media Rabbit Hole</h3>
      <canvas id='lock' ref={canvasRef} width='300px'></canvas>
      <input
        type='password'
        id='pass'
        name='password'
        placeholder='Enter Password'
      />
    </div>
  );
};

export default SocialLock;
