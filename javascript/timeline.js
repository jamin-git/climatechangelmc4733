var slider = document.getElementById("myRange");


const timelineAssets = ["#person"];
var numAssets = 1;

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
    updateTimeline();
}

// document.addEventListener('DOMContentLoaded', () => {

//     slider.addEventListener('change', updateTimeline);
  
//     updateTimeline()
//   })


function updateTimeline() {

    let data = {timeScale: 0.1,
        startAt: slider.value}
    // Changing the StartAt Value
    for (let i = 0; i < numAssets; i++) {
        var el = document.querySelector("#person");
        el.setAttribute("animation-mixer", data);
    }
    console.log(data);


    
    // Setting the Animation to Static
    // for (let i = 0; i < numAssets; i++) {
    //     var el = document.querySelector("#person");
    //     el.setAttribute("animation-mixer", {
    //       timeScale: 0.1,
    //     });
    // }
}



// User Input Testing...
// AFRAME.registerComponent('testboxindicator', {
//     schema: {
//       default: ''
//     },
//     init: function () {
//       this.el.addEventListener('click', function () {
//         Fancybox.show([{ src: "#content", type: "clone" }]);
//       });
//     }
//   });

//   AFRAME.registerComponent('testboxindicator2', {
//     schema: {
//       default: ''
//     },
//     init: function () {
//       this.el.addEventListener('click', function () {
//         var el = document.querySelector("#sampletext");
//         el.setAttribute("visible", true);
//       });
//     }
//   });

//   AFRAME.registerComponent('animationstate1', {
//     schema: {
//       default: ''
//     },
//     init: function () {
//       this.el.addEventListener('click', function () {
//         var el = document.querySelector("#player");
//         el.setAttribute("animation-mixer", {
//           clip: 'Walk',
//           // loop: 'once',
//           timeScale: 0.1,
//           startAt: 100,
//         });
        
//       });
//     }
//   });
//   AFRAME.registerComponent('animationstate1-1', {
//     schema: {
//       default: ''
//     },
//     init: function () {
//       this.el.addEventListener('click', function () {
//         var el = document.querySelector("#player");
//         el.setAttribute("animation-mixer", {
//           clip: 'Walk',
//           // loop: 'once',
//           timeScale: 0.0,
//           startAt: 100,
//         });
        
//       });
//     }
//   });

//   AFRAME.registerComponent('animationstate2', {
//     schema: {
//       default: ''
//     },
//     init: function () {
//       this.el.addEventListener('click', function () {
//         console.log("Here!");
//         var el = document.querySelector("#player");
//         el.setAttribute("animation-mixer", {
//           clip: 'High_Kick',
//           // loop: 'once',
//           timeScale: 0.1,
//           startAt: 100,
//         });


//       });
//     }
//   });

//   AFRAME.registerComponent('animationstate2-2', {
//     schema: {
//       default: ''
//     },
//     init: function () {
//       this.el.addEventListener('click', function () {
//         var el = document.querySelector("#player");
//         let mixer = el.mixer;
//         el.setAttribute("animation-mixer", {
//           clip: 'High_Kick',
//           // loop: 'once',
//           timeScale: 0.0,
//           startAt: 300,
//         });
//       });
//     }
//   });