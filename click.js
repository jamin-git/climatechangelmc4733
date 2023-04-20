// This will Pop Up the Instructions Pages

document.addEventListener("DOMContentLoaded", function() {
  Swal.fire({
    imageUrl: 'resources/directions/instructions2.png',
    imageAlt: 'Welcome Image',
    width: "100%",
    backdrop: "rgba(1, 1, 1, .9)"
  });
});

function showDirections() {
  Swal.fire({
    imageUrl: 'resources/directions/instructions2.png',
    imageAlt: 'Welcome Image',
    width: "100%",
    backdrop: "rgba(1, 1, 1, .9)"
  });
}


// This will toggle the visibility of the Markers

AFRAME.registerComponent('marker1', {
    schema: {
      default: ''
    },
    init: function () {
      this.el.addEventListener('click', function () {
        var x = document.getElementById("coral1text");

        if (x.getAttribute("visible") == true) {
            x.setAttribute("visible", false);
        } else {
            x.setAttribute("visible", true);
        }

      });
    }
  });

  AFRAME.registerComponent('marker2', {
    schema: {
      default: ''
    },
    init: function () {
      this.el.addEventListener('click', function () {
        var x = document.getElementById("coral2text");

        if (x.getAttribute("visible") == true) {
            x.setAttribute("visible", false);
        } else {
            x.setAttribute("visible", true);
        }

      });
    }
  });

  AFRAME.registerComponent('marker3', {
    schema: {
      default: ''
    },
    init: function () {
      this.el.addEventListener('click', function () {
        var x = document.getElementById("coral3text");

        if (x.getAttribute("visible") == true) {
            x.setAttribute("visible", false);
        } else {
            x.setAttribute("visible", true);
        }

      });
    }
  });

  AFRAME.registerComponent('marker4', {
    schema: {
      default: ''
    },
    init: function () {
      this.el.addEventListener('click', function () {
        var x = document.getElementById("fish1text");

        if (x.getAttribute("visible") == true) {
            x.setAttribute("visible", false);
        } else {
            x.setAttribute("visible", true);
        }

      });
    }
  });

  AFRAME.registerComponent('marker5', {
    schema: {
      default: ''
    },
    init: function () {
      this.el.addEventListener('click', function () {
        var x = document.getElementById("fish2text");

        if (x.getAttribute("visible") == true) {
            x.setAttribute("visible", false);
        } else {
            x.setAttribute("visible", true);
        }

      });
    }
  });