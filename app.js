const name = "Sharareh Keshavarzi";
const expertise = ["Java", "Kotlin", "JavaScript"];
const platforms = ["mobile", "web-based", "software systems"];

const resumeMeSection = document.createElement("section");
resumeSection.classList.add("resume");

const heading = document.createElement("h2");
heading.textContent = "A Bit About Me";
resumeSection.appendChild(heading);

const introParagraph = document.createElement("p");
introParagraph.textContent = `I'm ${name}, an experienced software engineer with expertise in ${expertise.join(", ")}. I specialize in creating high-quality software solutions for a range of platforms, including ${platforms.join(", ")}. My portfolio showcases my innovative approach to solving complex problems, and my commitment to delivering work that exceeds expectations. I'm always looking for new challenges and opportunities to collaborate with others. Explore my portfolio to learn more about my work and get in touch to discuss potential projects.`;
resumeSection.appendChild(introParagraph);

// add the resumeSection element to the DOM
document.body.appendChild(resumeSection);
