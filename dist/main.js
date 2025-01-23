(()=>{"use strict";var n={365:(n,t,e)=>{e.d(t,{A:()=>s});var o=e(601),i=e.n(o),a=e(314),r=e.n(a)()(i());r.push([n.id,"body {\n  font-family: 'Poppins', sans-serif;\n  margin: 0;\n  padding: 0;\n  background: linear-gradient(135deg, #1e1e2f, #121212); \n  color: #f5f5f5;\n  overflow-x: hidden;\n}\n\nh1, h2 {\n  text-align: center;\n  margin: 20px 0;\n  color: #ffffff;\n}\n\n\nbody::before {\n  content: '';\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: linear-gradient(120deg, #6a11cb, #2575fc);\n  background-size: 300% 300%;\n  z-index: -1;\n  animation: gradientBackground 15s ease infinite;\n}\n\n@keyframes gradientBackground {\n  0% {\n    background-position: 0% 50%;\n  }\n  50% {\n    background-position: 100% 50%;\n  }\n  100% {\n    background-position: 0% 50%;\n  }\n}\n\n\n.section {\n  padding: 70px 20px;\n  opacity: 0;\n  transform: translateY(50px);\n  transition: opacity 0.6s ease-out, transform 0.6s ease-out;\n  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);\n  margin: 20px auto;\n  border-radius: 15px;\n  background: rgba(255, 255, 255, 0.1);\n  backdrop-filter: blur(10px);\n}\n\n.section.visible {\n  opacity: 1;\n  transform: translateY(0);\n}\n\n.intro-text, .about-text, .contact-text {\n  font-size: 1.2rem;\n  text-align: center;\n}\n\n.highlight {\n  color: #ff9800;\n  font-weight: bold;\n}\n\n.project-list, .skills-list, .contact-list {\n  list-style-type: none;\n  padding: 0;\n}\n\n.project-list li, .skills-list li, .contact-list li {\n  margin: 10px 0;\n  padding: 10px;\n  background: rgba(255, 255, 255, 0.1);\n  border-radius: 8px;\n}\n\n.contact-link {\n  color: #ff9800;\n  text-decoration: none;\n}\n\n.contact-link:hover {\n  text-decoration: underline;\n}\n\n\nbutton {\n  display: block;\n  margin: 20px auto;\n  padding: 10px 20px;\n  font-size: 1rem;\n  background-color: #2575fc;\n  color: #ffffff;\n  border: none;\n  border-radius: 5px;\n  cursor: pointer;\n  transition: transform 0.3s ease, background-color 0.3s ease;\n}\n\nbutton:hover {\n  background-color: #6a11cb;\n  transform: scale(1.05);\n}\n\n\na {\n  color: #6a11cb;\n  text-decoration: none;\n}\n\na:hover {\n  text-decoration: underline;\n}\n\n@media (min-width: 768px) {\n  .section {\n    padding: 100px 40px;\n    max-width: 800px;\n  }\n\n}\n\n.whatsapp-float {\n  position: fixed;\n  bottom: 20px;\n  right: 20px;\n  z-index: 1000;\n}\n\n.whatsapp-float img {\n  width: 100px;\n  height: 100px;\n}\n\n@keyframes float {\n  0%, 100% {\n    transform: translateY(0);\n  }\n  50% {\n    transform: translateY(-10px);\n  }\n}\n\n.whatsapp-float img {\n  animation: float 2s infinite;\n}\n",""]);const s=r},314:n=>{n.exports=function(n){var t=[];return t.toString=function(){return this.map((function(t){var e="",o=void 0!==t[5];return t[4]&&(e+="@supports (".concat(t[4],") {")),t[2]&&(e+="@media ".concat(t[2]," {")),o&&(e+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),e+=n(t),o&&(e+="}"),t[2]&&(e+="}"),t[4]&&(e+="}"),e})).join("")},t.i=function(n,e,o,i,a){"string"==typeof n&&(n=[[null,n,void 0]]);var r={};if(o)for(var s=0;s<this.length;s++){var l=this[s][0];null!=l&&(r[l]=!0)}for(var c=0;c<n.length;c++){var g=[].concat(n[c]);o&&r[g[0]]||(void 0!==a&&(void 0===g[5]||(g[1]="@layer".concat(g[5].length>0?" ".concat(g[5]):""," {").concat(g[1],"}")),g[5]=a),e&&(g[2]?(g[1]="@media ".concat(g[2]," {").concat(g[1],"}"),g[2]=e):g[2]=e),i&&(g[4]?(g[1]="@supports (".concat(g[4],") {").concat(g[1],"}"),g[4]=i):g[4]="".concat(i)),t.push(g))}},t}},601:n=>{n.exports=function(n){return n[1]}},72:n=>{var t=[];function e(n){for(var e=-1,o=0;o<t.length;o++)if(t[o].identifier===n){e=o;break}return e}function o(n,o){for(var a={},r=[],s=0;s<n.length;s++){var l=n[s],c=o.base?l[0]+o.base:l[0],g=a[c]||0,d="".concat(c," ").concat(g);a[c]=g+1;var p=e(d),u={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==p)t[p].references++,t[p].updater(u);else{var h=i(u,o);o.byIndex=s,t.splice(s,0,{identifier:d,updater:h,references:1})}r.push(d)}return r}function i(n,t){var e=t.domAPI(t);return e.update(n),function(t){if(t){if(t.css===n.css&&t.media===n.media&&t.sourceMap===n.sourceMap&&t.supports===n.supports&&t.layer===n.layer)return;e.update(n=t)}else e.remove()}}n.exports=function(n,i){var a=o(n=n||[],i=i||{});return function(n){n=n||[];for(var r=0;r<a.length;r++){var s=e(a[r]);t[s].references--}for(var l=o(n,i),c=0;c<a.length;c++){var g=e(a[c]);0===t[g].references&&(t[g].updater(),t.splice(g,1))}a=l}}},659:n=>{var t={};n.exports=function(n,e){var o=function(n){if(void 0===t[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}t[n]=e}return t[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(e)}},540:n=>{n.exports=function(n){var t=document.createElement("style");return n.setAttributes(t,n.attributes),n.insert(t,n.options),t}},56:(n,t,e)=>{n.exports=function(n){var t=e.nc;t&&n.setAttribute("nonce",t)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=n.insertStyleElement(n);return{update:function(e){!function(n,t,e){var o="";e.supports&&(o+="@supports (".concat(e.supports,") {")),e.media&&(o+="@media ".concat(e.media," {"));var i=void 0!==e.layer;i&&(o+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),o+=e.css,i&&(o+="}"),e.media&&(o+="}"),e.supports&&(o+="}");var a=e.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(o,n,t.options)}(t,n,e)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)}}}},113:n=>{n.exports=function(n,t){if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}}},t={};function e(o){var i=t[o];if(void 0!==i)return i.exports;var a=t[o]={id:o,exports:{}};return n[o](a,a.exports,e),a.exports}e.n=n=>{var t=n&&n.__esModule?()=>n.default:()=>n;return e.d(t,{a:t}),t},e.d=(n,t)=>{for(var o in t)e.o(t,o)&&!e.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:t[o]})},e.o=(n,t)=>Object.prototype.hasOwnProperty.call(n,t),e.nc=void 0;var o=e(72),i=e.n(o),a=e(825),r=e.n(a),s=e(659),l=e.n(s),c=e(56),g=e.n(c),d=e(540),p=e.n(d),u=e(113),h=e.n(u),f=e(365),m={};m.styleTagTransform=h(),m.setAttributes=g(),m.insert=l().bind(null,"head"),m.domAPI=r(),m.insertStyleElement=p(),i()(f.A,m),f.A&&f.A.locals&&f.A.locals;const v=document.getElementById("app");function b(){const n=document.querySelectorAll(".section"),t=window.innerHeight;n.forEach((n=>{n.getBoundingClientRect().top<t-100&&n.classList.add("visible")}))}[{id:1,title:"Welcome to My Portfolia",content:'<p class="intro-text">\n        Hello, I\'m <strong class="highlight">Nicolas Aguilera</strong>, a passionate \n        <span class="highlight">Software Developer</span>. I specialize in creating intuitive and engaging user interfaces using HTML, CSS, and JavaScript. I\'m eager to bring my skills in React and other technologies to real-world projects and grow in a professional environment.\n      </p>'},{id:2,title:"About Me",content:'<p class="about-text">\n        I\'m a <span class="highlight">Software Development Technician</span> graduate from TECLAB Technical Institute in Argentina, currently based in Porto, Portugal. With a strong foundation in web and mobile development, I\'m proficient in <strong class="highlight">Java</strong>, <strong class="highlight">C++</strong>, <strong class="highlight">JavaScript</strong>, <strong class="highlight">HTML</strong>, <strong class="highlight">CSS</strong>, and frameworks like <strong class="highlight">React</strong> and <strong class="highlight">jQuery</strong>. My goal is to contribute to innovative projects while continually learning and adapting to new challenges.\n      </p>'},{id:3,title:"My Projects",content:'<ul class="project-list">\n        <li>\n          <strong class="highlight">RUF Website Update (Internship):</strong><br />\n          <em>August 2024 - Present</em><br />\n          Updating and redesigning the company\'s website to improve user experience and accessibility.<br />\n          <strong>Technologies:</strong> HTML, CSS, JavaScript.\n        </li>\n        <li>\n          <strong class="highlight">Web Development Practices:</strong><br />\n          Designed and developed prototypes and web pages using <span class="highlight">React</span>, <span class="highlight">jQuery</span>, and backend technologies like PHP and MySQL.\n        </li>\n        <li>\n          <strong class="highlight">Mobile Development Course:</strong><br />\n          Successfully completed training in mobile development, including <span class="highlight">Android Studio</span>, <span class="highlight">REST APIs</span>, <span class="highlight">Firebase</span>, and local storage solutions.\n        </li>\n      </ul>'},{id:4,title:"My Skills",content:'<ul class="skills-list">\n        <li><strong class="highlight">Programming Languages:</strong> Java, C++, JavaScript, HTML, CSS.</li>\n        <li><strong class="highlight">Frameworks and Libraries:</strong> React, jQuery.</li>\n        <li><strong class="highlight">Databases:</strong> MySQL, NoSQL.</li>\n        <li><strong class="highlight">Development Tools:</strong> NetBeans, Android Studio, Visual Studio Code.</li>\n        <li><strong class="highlight">Soft Skills:</strong> Effective Communication, Teamwork, Problem-Solving, Time Management, Adaptability.</li>\n      </ul>'},{id:5,title:"Contact Me",content:'<p class="contact-text">I\'m currently looking for job opportunities and open to any collaboration or proposals</p>\n      <ul class="contact-list">\n        <li><strong>Email:</strong> <a href="mailto:aguileranicolasjavier@gmail.com" class="contact-link">aguileranicolasjavier@gmail.com</a></li>\n        <li><strong>Phone:</strong> <span class="highlight">+351 935 449 568</span></li>\n        <li><strong>LinkedIn:</strong> <a href="https://linkedin.com/in/aguilera-nicolas" class="contact-link" target="_blank">linkedin.com/in/aguilera-nicolas</a></li>\n        <li><strong>Location:</strong> Porto, Portugal</li>\n      </ul>'}].forEach((n=>{const t=document.createElement("div");t.className="section",t.innerHTML=`\n    <h2>${n.title}</h2>\n    ${n.content}\n  `,v.appendChild(t)})),window.addEventListener("scroll",b),b(),window.addEventListener("load",(()=>{window.scrollTo(0,0)}))})();