// This will Pop Up the Instructions Pages

// document.addEventListener("DOMContentLoaded", function() {
//   Swal.fire({
//     imageUrl: 'resources/directions/pagecombined.png',
//     imageAlt: 'Welcome Image',
//     width: "100%",
//     backdrop: "rgba(1, 1, 1, .99)"
//   });
// });

function showDirections() {
  Swal.fire({
    imageUrl: 'resources/directions/pagecombined.png',
    imageAlt: 'Welcome Image',
    width: "100%",
    backdrop: "rgba(1, 1, 1, .99)"
  });
}


// This will toggle the visibility of the Markers

AFRAME.registerComponent('marker1', {
    schema: {
      default: ''
    },
    init: function () {
      this.el.addEventListener('click', function () {
        var x = document.getElementById("marker1text");

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
        var x = document.getElementById("coral2");

        if (x.getAttribute("visible") == true) {
            x.setAttribute("visible", false);
        } else {
            x.setAttribute("visible", true);
        }

      });
    }
  });