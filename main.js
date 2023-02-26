import "./style.css";

// const mouse = document.getElementById("mouse");

// window.onmousemove = (e) => {
//   const x = e.clientX - mouse.offsetWidth / 2;
//   y = e.clientY;

//   const keyframes = {
//     transform: `translate(${x}px,${y}px)`,
//   };
//   mouse.animate(keyframes, {
//     duration: 800,
//     fill: "forwards",
//   });
// };

const blob = document.getElementById("mouse");
document.body.onmousemove = (event) => {
  const { clientX, clientY } = event;

  blob.animate(
    {
      left: `${clientX}px`,
      top: `${clientY}px`,
    },
    { duration: 3000, fill: "forwards" }
  );
};
