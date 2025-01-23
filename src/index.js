import './styles.css';

const sections = [
  {
    id: 1,
    title: 'Welcome to My Portfolio',
    content: 
      `<p class="intro-text">
        Hello, I'm <strong class="highlight">Nicolás Aguilera</strong>, a passionate 
        <span class="highlight">Software Developer</span>. I specialize in creating intuitive and engaging user interfaces using HTML, CSS, and JavaScript. I'm eager to bring my skills in React and other technologies to real-world projects and grow in a professional environment.
      </p>`,
  },
  {
    id: 2,
    title: 'About Me',
    content: 
      `<p class="about-text">
        I'm a <span class="highlight">Software Development Technician</span> graduate from TECLAB Technical Institute in Argentina, currently based in Porto, Portugal. With a strong foundation in web and mobile development, I'm proficient in <strong class="highlight">Java</strong>, <strong class="highlight">C++</strong>, <strong class="highlight">JavaScript</strong>, <strong class="highlight">HTML</strong>, <strong class="highlight">CSS</strong>, and frameworks like <strong class="highlight">React</strong> and <strong class="highlight">jQuery</strong>. My goal is to contribute to innovative projects while continually learning and adapting to new challenges.
      </p>`,
  },
  {
    id: 3,
    title: 'My Projects',
    content: 
      `<ul class="project-list">
        <li>
          <strong class="highlight">RUF Website Update (Internship):</strong><br />
          <em>August 2024 - Present</em><br />
          Updating and redesigning the company's website to improve user experience and accessibility.<br />
          <strong>Technologies:</strong> HTML, CSS, JavaScript.
        </li>
        <li>
          <strong class="highlight">Web Development Practices:</strong><br />
          Designed and developed prototypes and web pages using <span class="highlight">React</span>, <span class="highlight">jQuery</span>, and backend technologies like PHP and MySQL.
        </li>
        <li>
          <strong class="highlight">Mobile Development Course:</strong><br />
          Successfully completed training in mobile development, including <span class="highlight">Android Studio</span>, <span class="highlight">REST APIs</span>, <span class="highlight">Firebase</span>, and local storage solutions.
        </li>
      </ul>`,
  },
  {
    id: 4,
    title: 'My Skills',
    content: 
      `<ul class="skills-list">
        <li><strong class="highlight">Programming Languages:</strong> Java, C++, JavaScript, HTML, CSS.</li>
        <li><strong class="highlight">Frameworks and Libraries:</strong> React, jQuery.</li>
        <li><strong class="highlight">Databases:</strong> MySQL, NoSQL.</li>
        <li><strong class="highlight">Development Tools:</strong> NetBeans, Android Studio, Visual Studio Code.</li>
        <li><strong class="highlight">Soft Skills:</strong> Effective Communication, Teamwork, Problem-Solving, Time Management, Adaptability.</li>
      </ul>`,
  },
  {
    id: 5,
    title: 'Contact Me',
    content: 
      `<p class="contact-text">I'm currently looking for job opportunities and open to any collaboration or proposals</p>
      <ul class="contact-list">
        <li><strong>Email:</strong> <a href="mailto:aguileranicolasjavier@gmail.com" class="contact-link">aguileranicolasjavier@gmail.com</a></li>
        <li><strong>Phone:</strong> <span class="highlight">+351 935 449 568</span></li>
        <li><strong>LinkedIn:</strong> <a href="https://linkedin.com/in/aguilera-nicolas" class="contact-link" target="_blank">linkedin.com/in/aguilera-nicolas</a></li>
        <li><strong>Location:</strong> Porto, Portugal</li>
      </ul>`,
  },
];

const app = document.getElementById('app');
sections.forEach(section => {
  const sectionElement = document.createElement('div');
  sectionElement.className = 'section';
  sectionElement.innerHTML = `
    <h2>${section.title}</h2>
    ${section.content}
  `;
  app.appendChild(sectionElement);
});

function handleScroll() {
  const sections = document.querySelectorAll('.section');
  const windowHeight = window.innerHeight;

  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    if (sectionTop < windowHeight - 100) {
      section.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', handleScroll);
handleScroll();

window.addEventListener('load', () => {
  window.scrollTo(0, 0);
});
