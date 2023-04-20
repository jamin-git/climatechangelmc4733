var slider = document.getElementById("timelineTime");


const timelineAssets = ["#player"];
var numAssets = 1;
  
  // Update the current slider value (each time you drag the slider handle)
  slider.oninput = function() {
      // updateTimeline();

      updateCoral();
      updateText();
      updateWildLife();

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

  function updateWildLife() {
    var num = (slider.value / 4100000);


    var fe1 = document.querySelector("#fishe1");
    var fe2 = document.querySelector("#fishe2");
    var fe3 = document.querySelector("#fishe3");

    var fani1 = document.querySelector("#fishenvironment1");
    var fani2 = document.querySelector("#fishenvironment2");

    var s1 = document.querySelector("#seaweed1");
    var s2 = document.querySelector("#seaweed2");
    var s3 = document.querySelector("#seaweed3");
    var s4 = document.querySelector("#seaweed4");

    var c1 = document.querySelector("#clown1");
    var c2 = document.querySelector("#clown2");
    var c3 = document.querySelector("#clown3");

    // var starfish = document.querySelector("#starfish");

    if (slider.value < 500000) {
      fe1.setAttribute("visible", true);
      fe2.setAttribute("visible", true);
      fe3.setAttribute("visible", true);

      fani1.setAttribute("visible", true);
      fani2.setAttribute("visible", true);

      s1.setAttribute("visible", true);
      s2.setAttribute("visible", true);
      s3.setAttribute("visible", true);
      s4.setAttribute("visible", true);

      c1.setAttribute("visible", true);
      c2.setAttribute("visible", true);
      c3.setAttribute("visible", true);

      // starfish.setAttribute("gltf-model", "#starfish3");

    } else if (slider.value > 500000 && slider.value < 1000000) {

      fe1.setAttribute("visible", true);
      fe2.setAttribute("visible", true);
      fe3.setAttribute("visible", false);

      fani1.setAttribute("visible", true);
      fani2.setAttribute("visible", true);

      s1.setAttribute("visible", false);
      s2.setAttribute("visible", true);
      s3.setAttribute("visible", true);
      s4.setAttribute("visible", true);

      c1.setAttribute("visible", false);
      c2.setAttribute("visible", true);
      c3.setAttribute("visible", true);

      // starfish.setAttribute("gltf-model", "#starfish2");

    } else if (slider.value > 1000000 && slider.value < (2 * 1600000)) {

      fe1.setAttribute("visible", true);
      fe2.setAttribute("visible", false);
      fe3.setAttribute("visible", false);

      fani1.setAttribute("visible", false);
      fani2.setAttribute("visible", true);

      
      s1.setAttribute("visible", false);
      s2.setAttribute("visible", false);
      s3.setAttribute("visible", true);
      s4.setAttribute("visible", true);

      c1.setAttribute("visible", false);
      c2.setAttribute("visible", false);
      c3.setAttribute("visible", true);

      // starfish.setAttribute("gltf-model", "#starfish1");

    } else {

      fe1.setAttribute("visible", false);
      fe2.setAttribute("visible", false);
      fe3.setAttribute("visible", false);

      fani1.setAttribute("visible", false);
      fani2.setAttribute("visible", false);

      s1.setAttribute("visible", false);
      s2.setAttribute("visible", false);
      s3.setAttribute("visible", false);
      s4.setAttribute("visible", false);

      c1.setAttribute("visible", false);
      c2.setAttribute("visible", false);
      c3.setAttribute("visible", false);

      // starfish.setAttribute("gltf-model", "");
    }


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
      
      f1title.setAttribute("value", "Past Wildlife #1");
      f1desc.setAttribute("value", "The temperature of the water was more consistent and predictable, which made it easier for me and other animals to find the right habitats and food sources.");

      f2title.setAttribute("value", "Past Wildlife #2");
      f2desc.setAttribute("value", "Hi! I’m a fish. I live in the coral reefs, which are vibrant and healthy, teeming with life and color! Everyday, I swim in schools with my friends, darting around the coral and playing hide-and-seek in the seaweed .It is a world of wonder & adventure!");

    } else if (slider.value > 1366666 && slider.value < (2 * 1366666)) {
      c1title.setAttribute("value", "Present Coral #1");
      c1desc.setAttribute("value", "Oh no! I'm turning white because the algae that live in me are dying. They give me my bright colors, but when the ocean gets too warm or dirty, they can't survive. This is not good for me or my animal friends who live with me.");

      c2title.setAttribute("value", "Present Coral #2");
      c2desc.setAttribute("value", "I hope that humans will take action to protect and preserve these amazing ecosystems before it's too late.");

      c3title.setAttribute("value", "Present Coral #3");
      c3desc.setAttribute("value", "The heating of water temperature causes the water acidity to increase, making it more difficult for me to build my hard structure. This is causing my coral polyps to struggle, which in turn is impacting the entire ecosystem that relies on me for shelter and food.");

      f1title.setAttribute("value", "Present Wildlife #1");
      f1desc.setAttribute("value", "Because the ocean has gotten hotter, some of us have had to swim to different parts of the ocean to find cooler water. Some of us can't do that, and that means we have to live in water that's too hot for us.");

      f2title.setAttribute("value", "Present Wildlife #2");
      f2desc.setAttribute("value", "I have seen significant changes in my underwater world as the Earth's climate evolves. The water temperature is getting warmer, and it's affecting my entire ecosystem. As the water temperature rises, some of my fellow fish are struggling to adapt. ");

    } else {
      c1title.setAttribute("value", "Future Coral #1");
      c1desc.setAttribute("value", "If climate change & pollution persist, it can make the ocean warm & dirty for my friends & I to live in. If many of us coral reefs are sick, it can hurt the whole ocean ecosystem. The ocean ​​is a big puzzle. If we take away one piece, the whole puzzle can mess up.")

      c2title.setAttribute("value", "Future Coral #2");
      c2desc.setAttribute("value", "Over the past 100 years, the ocean has become so hot that many of us have gotten sick and lost our color, and some of us have even died.");

      c3title.setAttribute("value", "Future Coral #3");
      c3desc.setAttribute("value", "The rising ocean temperatures & acidity levels have caused massive bleaching events leaving  me pale & lifeless. The coral polyps that once thrived on me have mostly died off, leaving me without the diversity and complexity that once sustained countless marine species.");

      f1title.setAttribute("value", "Future Wildlife #1");
      f1desc.setAttribute("value", "The ocean has become more acidic, making it more difficult for me and other marine animals to build and maintain our shells, scales, and other important body parts. This has made us more vulnerable to disease and predation.");

      f2title.setAttribute("value", "Future Wildlife #2");
      f2desc.setAttribute("value", "The once diverse & vibrant ecosystem has become unrecognizable. Many of my fellow fish species are extinct, & those that remain are struggling to survive. The water temperature has dramatically risen, causing more & more marine animals to die off. ");
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
  var num = 27.1;
  var symbol = string.substring(4,6);
  
  var numRounded = (num + (slider.value * 4 / 4100000)).toFixed(1);
  var ret = numRounded + symbol;

  temp.innerHTML = ret;
}