var slider = document.getElementById("timelineTime");


const timelineAssets = ["#player"];
var numAssets = 1;
  
  // Update the current slider value (each time you drag the slider handle)
  slider.oninput = function() {
      // updateTimeline();

      updateCoral();
      updateText();

      updateTemp();
  }

  // Stops the animation from playing after you release slider
  slider.onchange = function() {
    releaseTimeline();
  }
  

  function updateTimeline() {
    // Changing the StartAt Value
    for (let i = 0; i < numAssets; i++) {
        var el = document.querySelector("#player");

        el.setAttribute("animation-mixer", {
            clip: "High_Kick",
            startAt: slider.value,
        });

        el.setAttribute("animation-mixer", {
            clip: "Idle",
        });


        el.setAttribute("animation-mixer", {
            clip: "High_Kick",
            timeScale: 0.0001,
        });
        
      }
  }

  function releaseTimeline() {
        for (let i = 0; i < numAssets; i++) {
          var el = document.querySelector("#player");
          el.setAttribute("animation-mixer", {
            timeScale: 0,
          });
      }
  }

  function updateCoral() {
    var el1 = document.querySelector("#coral-red");

    var el2 = document.querySelector("#coral-red-2");

    var el3 = document.querySelector("#coral-red-3");

    var envC = document.querySelector("#colorEnvironment");

    var num = (slider.value / 4100000);

    el1.setAttribute("model-opacity", 1 - num);

    el2.setAttribute("model-opacity", 1 - num);

    el3.setAttribute("model-opacity", 1 - num);

    envC.setAttribute("model-opacity", 1 - num);



  }

  function updateText() {

    var c1title = document.querySelector("#c1title");
    var c1desc = document.querySelector("#c1desc");

    var c2title = document.querySelector("#c2title");
    var c2desc = document.querySelector("#c2desc");

    var c3title = document.querySelector("#c3title");
    var c3desc = document.querySelector("#c3desc");

    var f1title = document.querySelector("#f1title");
    var f1desc = document.querySelector("#f1desc");

    var f2title = document.querySelector("#f2title");
    var f2desc = document.querySelector("#f2desc");

    if (slider.value < 1366666) {
      c1title.setAttribute("value", "Past Coral #1");
      c1desc.setAttribute("value", "Hi! I’m a Coral Reef. I am a vibrant habitat that provides homes, food, and protection to other animals! When the water gets too warm, the algae that live inside me can die. When that happens, I turn white and get sick. This is called Coral bleaching.");

      c2title.setAttribute("value", "Past Coral #2");
      c2desc.setAttribute("value", "As a coral reef,  life in the ocean is incredibly diverse and complex. Coral reefs are some of the most biodiverse ecosystems on the planet, teeming with thousands of different species of marine life.");

      c3title.setAttribute("value", "Past Coral #3");
      c3desc.setAttribute("value", "I'm not just pretty, though! I also have an important job. I help protect the shore from big waves and storms, and I even provide food and medicine for people!");
      

    } else if (slider.value > 1366666 && slider.value < (2 * 1366666)) {
      c1title.setAttribute("value", "Present Coral #1");
      c1desc.setAttribute("value", "Oh no! I'm turning white because the algae that live in me are dying. They give me my bright colors, but when the ocean gets too warm or dirty, they can't survive. This is not good for me or my animal friends who live with me.");

      c2title.setAttribute("value", "Present Coral #2");
      c2desc.setAttribute("value", "I hope that humans will take action to protect and preserve these amazing ecosystems before it's too late.");

      c3title.setAttribute("value", "Present Coral #3");
      c3desc.setAttribute("value", "The heating of water temperature causes the water acidity to increase, making it more difficult for me to build my hard structure. This is causing my coral polyps to struggle, which in turn is impacting the entire ecosystem that relies on me for shelter and food.");

    } else {
      c1title.setAttribute("value", "Future Coral #1");
      c1desc.setAttribute("value", "If climate change & pollution persist, it can make the ocean warm & dirty for my friends & I to live in. If many of us coral reefs are sick, it can hurt the whole ocean ecosystem. The ocean ​​is a big puzzle. If we take away one piece, the whole puzzle can mess up.")

      c2title.setAttribute("value", "Future Coral #2");
      c2desc.setAttribute("value", "Over the past 100 years, the ocean has become so hot that many of us have gotten sick and lost our color, and some of us have even died.");

      c3title.setAttribute("value", "Future Coral #3");
      c3desc.setAttribute("value", "The rising ocean temperatures & acidity levels have caused massive bleaching events leaving  me pale & lifeless. The coral polyps that once thrived on me have mostly died off, leaving me without the diversity and complexity that once sustained countless marine species.");

    }

  }



// Opacity Changes
AFRAME.registerComponent('model-opacity', {
  schema: {default: 1.0},
  init: function () {
    this.el.addEventListener('model-loaded', this.update.bind(this));
  },
  update: function () {
    var mesh = this.el.getObject3D('mesh');
    var data = this.data;
    if (!mesh) { return; }
    mesh.traverse(function (node) {
      if (node.isMesh) {
        node.material.opacity = data;
        node.material.transparent = data < 1.0;
        node.material.needsUpdate = true;
      }
    });
  }
});


// Function Handles changing the Temperature
function updateTemp() {
  var temp = document.querySelector("#tempText");
  var desc = document.querySelector("#tempDesc");
  var month = document.querySelector("#tempMonth");


  // Changing Text Description
  if (slider.value < 1366666) {
    desc.innerHTML = "Safe Temp";
  } else if (slider.value > 1366666 && slider.value < (2 * 1366666)) {
    desc.innerHTML = "Ok Temp";
  } else {
    desc.innerHTML = "Dangerous Temp";
  }

  // Changing Temp Color
  var r = 157 + 78 * slider.value / 4100000;
  var g = 187 - 88 * slider.value / 4100000;
  var b = 237 - 138 * slider.value / 4100000;
  temp.style.color = "rgb(" + r + ", " + g + ", " + b + ")";
  desc.style.color = "rgb(" + r + ", " + g + ", " + b + ")";
  month.style.color = "rgb(" + r + ", " + g + ", " + b + ")";



  // setting new temperature value
  var string = temp.innerHTML;
  var num = 27.3;
  var symbol = string.substring(4,6);
  
  var numRounded = (num + (slider.value * 1.8 / 4100000)).toFixed(1);
  var ret = numRounded + symbol;

  temp.innerHTML = ret;
}