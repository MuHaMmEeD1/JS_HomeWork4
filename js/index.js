// task 1

// function getRandomHexColor() {
//   const letters = "0123456789ABCDEF";
//   let color = "#";
//   for (let i = 0; i < 6; i++) {
//     color += letters[Math.floor(Math.random() * 16)];
//   }
//   return color;
// }

// const cBtn = document.querySelector(".changeBtn");
// const body = document.querySelector("body");

// cBtn.addEventListener("click", function (event) {
//   body.style.backgroundColor = getRandomHexColor();
// });

//
///////////////////////////////////////
// task 2

// const clBtns = document.querySelector(".clBtns");
// const cavab = document.querySelector(".cavab");
// let say1 = "";
// let say2 = "";
// let sayiYoxla = false;

// let opr = "";

// clBtns.addEventListener("click", function (event) {
//   console.log(event.target.textContent);
//   console.log(event.target.className);

//   if (event.target.className == "clBtn") {
//     if (
//       event.target.textContent == "+" ||
//       event.target.textContent == "-" ||
//       event.target.textContent == "/" ||
//       event.target.textContent == "*"
//     ) {
//       opr = event.target.textContent;

//       sayiYoxla = true;
//       cavab.textContent = `${say1} ${opr} ${say2}`;
//     } else if (event.target.textContent == "=") {
//       switch (opr) {
//         case "+":
//           cavab.textContent = Number(say1) + Number(say2);
//           say1 = Number(say1) + Number(say2);

//           break;
//         case "-":
//           cavab.textContent = Number(say1) - Number(say2);
//           say1 = Number(say1) - Number(say2);
//           break;
//         case "*":
//           cavab.textContent = Number(say1) * Number(say2);
//           say1 = Number(say1) * Number(say2);
//           break;
//         case "/":
//           cavab.textContent = Number(say1) / Number(say2);
//           say1 = Number(say1) / Number(say2);
//           break;
//       }
//       say2 = "";
//     } else if (event.target.textContent == "C") {
//       say1 = "";
//       say2 = "";
//       sayiYoxla = false;

//       opr = "";
//       cavab.textContent = "0";
//     } else {
//       if (sayiYoxla) {
//         if (say2 != "") {
//           say2 += event.target.textContent;
//         } else {
//           say2 = event.target.textContent;
//         }
//       } else {
//         if (say1 != "") {
//           say1 += event.target.textContent;
//         } else {
//           say1 = event.target.textContent;
//         }
//       }
//       cavab.textContent = `${say1} ${opr} ${say2}`;
//     }
//   }
// });
//

//////////////////////////////////////////////////
// task 3

const futboolSahesi = document.querySelector(".futboolSahesi");
const fbTop = document.querySelector(".top");

futboolSahesi.addEventListener("click", function (event) {
  const x = event.clientX;
  const y = event.clientY;
  console.log("X: " + x + ", Y: " + y);

  fbTop.style.margin = `${y}px 0 0 ${x}px`;
});
