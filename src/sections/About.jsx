import { useState, useRef } from "react";
import Globe from "react-globe.gl";

const About = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [hasCopied, setHasCopied] = useState(false);
  const globeRef = useRef(null);

  const handleCopy = () => {
    navigator.clipboard.writeText("pesalaeswar7@gmail.com");
    setHasCopied(true);
    setTimeout(() => setHasCopied(false), 2000);
  };

  const handleFocusGlobe = () => {
    if (globeRef.current) {
      globeRef.current.pointOfView({ lat: 21.1645, lng: 72.7851, altitude: 1.5 }, 1000);
    }
  };

  return (
    <section className="c-space my-20" id="about">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        {/* Introduction Section */}
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/grid1.png" alt="grid-1" className="w-full sm:h-[276px] h-fit object-contain" />
            <div>
              <p className="grid-headtext">Hi, I’m Eswar Pesala</p>
              <p className="grid-subtext">
              I'm a B.Tech student majoring in Computer Science Engineering at SVNIT, with a graduation year of 2026. My academic journey has
              honed my analytical skills and problem-solving mindset. Passionate about leveraging data for decision-making, I'm eager to
              collaborate with professionals and organizations. With a strong foundation in software development, I thrive on innovative projects
              and delivering quality code.
              </p>
            </div>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/grid2.png" alt="grid-2" className="w-full sm:h-[276px] h-fit object-contain" />
            <div>
              <p className="grid-headtext">Tech Stack</p>
              <p className="grid-subtext">I specialize in various technologies for robust and scalable applications.</p>
              <div className="grid-subtext mt-2">
                <p>💻 <strong>Web:</strong> HTML, CSS, Tailwind, JavaScript, Django, React.js, Node.js, Express.js</p>
                <p>🗄 <strong>Databases:</strong> MySQL, MongoDB, SQLite, Firestore</p>
                <p>🖥 <strong>Platforms:</strong> GitHub, Android Studio</p>
                <p>🚀 <strong>Languages:</strong> C, C++, Python, Java, JavaScript, ASP.NET</p>
                <p>🛠 <strong>Tools:</strong> Git, Figma, Canva, Blender, Unity</p>
                <p>📱 <strong>Mobile:</strong> Flutter</p>
              </div>
            </div>
          </div>
        </div>

        {/* Globe Section */}
        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container flex flex-col items-center">
            <Globe
              ref={globeRef}
              height={window.innerWidth < 768 ? 280 : 350}
              width={window.innerWidth < 768 ? 280 : 350}
              backgroundColor="rgba(0, 0, 0, 0)"
              globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
              bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
              showAtmosphere
              showGraticules
              labelsData={[{ lat: 21.1645, lng: 72.7851, text: "I'm Here", color: "red", size: 300 }]}
              labelText="text"
              labelSize={1.5}
              labelColor={() => 'white'}
              labelDotRadius={0.5}
            />
            <div className="text-center mt-5">
              <p className="grid-headtext">I’m Eager to Collaborate</p>
              <p className="grid-subtext">Based at SVNIT, Surat, I thrive in a dynamic academic environment that sharpens my problem-solving skills. However, my aspirations extend globally—I’m open to collaborating with professionals and organizations worldwide. 
                Passionate about leveraging technology for real-world impact, I’m eager to contribute to innovative projects, whether remotely or on-site.</p>
              <button
                className={`transition-all duration-300 ease-in-out text-white font-bold py-2 px-4 rounded-lg mt-5 ${isHovered ? 'bg-blue-500 scale-105 shadow-lg' : 'bg-blue-700'}`}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onClick={handleFocusGlobe}
              >
                🌍 My Location
              </button>
            </div>
          </div>
        </div>
       {/* Passion Section */}
       <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/grid3.png" alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain" />
            <div>
              <p className="grid-headtext">My Passion for Coding</p>
              <p className="grid-subtext">
                I have a deep passion for solving problems and building things through code. For me, programming is not just a skill or a profession—it’s an
                exciting journey of discovery and innovation. I love the challenge of breaking down complex problems, finding efficient solutions, and turning ideas into reality through well-crafted code.
              </p>
              <p className="grid-subtext mt-3">Check out my coding profiles:</p>
              <ul className="grid-subtext flex flex-wrap gap-4">
                <li>
                  <a href="https://www.hackerrank.com/profile/pesalaeswar7" target="_blank" rel="noopener noreferrer">
                    <img src="assets/hackerrank.png" alt="HackerRank" className="w-8 h-8 inline mr-2" />HackerRank
                  </a>
                </li>
                <li>
                  <a href="https://www.codechef.com/users/pesalaeswar" target="_blank" rel="noopener noreferrer">
                    <img src="assets/codechef.png" alt="CodeChef" className="w-8 h-8 inline mr-2" />CodeChef
                  </a>
                </li>
                <li>
                  <a href="https://leetcode.com/u/pesalaeswar/" target="_blank" rel="noopener noreferrer">
                    <img src="assets/leetcode.png" alt="LeetCode" className="w-8 h-8 inline mr-2" />LeetCode
                  </a>
                </li>
                <li>
                  <a href="https://www.geeksforgeeks.org/user/pesalaepa4z/" target="_blank" rel="noopener noreferrer">
                    <img src="assets/gfg.png" alt="GeeksforGeeks" className="w-8 h-8 inline mr-2" />GeeksforGeeks
                  </a>
                </li>
                <li>
                  <a href="https://codeforces.com/profile/eswarpesala" target="_blank" rel="noopener noreferrer">
                    <img src="assets/codeforces.png" alt="Codeforces" className="w-8 h-8 inline mr-2" />Codeforces
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container text-center">
            <p className="grid-headtext">📩 Contact Me</p>
            <button className="mt-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-bold py-2 px-6 rounded-lg shadow-md hover:scale-105 transition-transform" onClick={handleCopy}>
              {hasCopied ? '✅ Copied!' : 'Copy Email'}
            </button>
            <p className="mt-2 text-white text-sm">pesalaeswar7@gmail.com</p>
            <a href="https://www.linkedin.com/in/eswarp1/" target="_blank" rel="noopener noreferrer" className="mt-4 inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg shadow-md hover:scale-105 transition-transform">
            🚀 Connect on LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
