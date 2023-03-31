
const splash=document.querySelector(".splash");
document.addEventListener("DOMContentLoaded",(e)=>{
    setTimeout(()=>{
        splash.classList.add('display-none');
        
    },14000);
    setTimeout(() => {
        splash.classList.remove('display-none');
      }, 3000);
})

var typed = new Typed('.multiText', {
    strings: ["Code is my superpower, and I'm not afraid to use it..."],
    typeSpeed: 150,
    startDelay: 1000,
  });

  const mailIcon = document.querySelector('#mail-icon');
  mailIcon.addEventListener('click', () => {
    window.location.href = 'mailto:keshavarzisharareh@gmail.com';
  });
 
  // const cursor=document.querySelector(".custom-cursor.site-wide")
  // document.addEventListener('mouseenter',()=>{
  //   cursor.style.display='block';

  // });
  // document.addEventListener('mouseleave',()=>{
  //   cursor.style.display='none';

  // });
  // document.addEventListener('mousemove',TrackCursor)
  // function TrackCursor(evt){
  //   cursor.style.transform='translate(${evt.clientX}px , ${evt.clientY}px)'

  // }
  // Get the timeline container element
const timeline = document.getElementById("timeline");

// Get all the event elements within the timeline container
const events = timeline.querySelectorAll(".event");

// Loop through each event element and add a click event listener
events.forEach((event) => {
  event.addEventListener("click", () => {
    // When an event is clicked, toggle its active state
    event.classList.toggle("active");

    // Scroll the timeline container to the clicked event element
    timeline.scrollTo({
      top: event.offsetTop - timeline.offsetTop,
      behavior: "smooth",
    });
  });
});
