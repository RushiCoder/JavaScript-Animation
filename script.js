var rect = document.querySelector("#center");

rect.addEventListener("mousemove", function(details) {
  
//console.log(rect.getBoundingClientRect());
var rectanglelocation = rect.getBoundingClientRect();

var insiderectval = (details.clientX - rectanglelocation.left);

  // It is a gsap functionality used to decide range of our color with if-else
if(insiderectval < rectanglelocation.width/2) {
   var redcolor = gsap.utils.mapRange(
    0, 
    rectanglelocation.width/2,
    255, 
    0, 
    insiderectval
   );
   gsap.to(rect, {
    backgroundColor: `rgb(${redcolor}, 0, 0)`,
    ease: Power4,
   });
} else {
    var bluecolor = gsap.utils.mapRange(
        rectanglelocation.width/2, 
      rectanglelocation.width,
        0, 
        255, 
        insiderectval
       );
       gsap.to(rect, {
        backgroundColor: `rgb(0, 0, ${bluecolor})`,
        ease: Power4,
       });
}
});

// after mouse leaving the box then box will be white
rect.addEventListener("mouseleave", function() {
   gsap.to(rect, {
    backgroundColor: "white"
   })
})



