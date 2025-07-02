export default function About() {
    return (
      <section
        id="about"
        className="w-full py-24 px-6 text-grey-text font-inter"
      >
        <div className="max-w-7xl mx-auto">
          {/* Centered heading */}
          <h2 className="text-4xl font-bold mb-12 text-secondary text-center">
            ABOUT ME
          </h2>
  
          {/* Main content box */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-12 shadow-lg flex flex-col-reverse lg:flex-row items-center gap-12">
            {/* Left (text) */}
            <div className="w-full lg:w-1/2 text-left">
              <p className="text-lg leading-relaxed">
                I’m a creative developer with a passion for designing interactive experiences. Based in South Wales, I love blending design and technology to build beautiful, functional software and web applications. My areas of proficiency include: Software development, web development, machine learning, and multi-objective optimisation.
              </p>
              <p>
                {}
              </p>
              <p className="text-lg leading-relaxed">
                I am currently finishing my masters degree in advanced computer science at the University of Exeter and will be seeking employment straight after. I have a First Class Honours bachelors degree in Computer Science at Swansea University.
              </p>
            </div>
  
            {/* Right (photo) */}
            <div className="w-full lg:w-1/2 flex justify-center">
              <div className="w-64 h-64 bg-white/20 rounded-full overflow-hidden shadow-lg">
                <img
                  src="src/assets/me.jpg"
                  alt="Me"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  