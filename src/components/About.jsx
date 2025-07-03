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
            <div className="w-full lg:w-1/2 text-left space-y-6">
              <p className="text-lg leading-relaxed font-medium">
                I’m a creative developer with a passion for designing interactive experiences. Based in South Wales, I love blending design and technology to build beautiful, functional software and web applications.
              </p>
  
              <p className="text-lg leading-relaxed font-medium">
                My areas of proficiency include: <span className="text-picton-blue font-semibold">Software Development, Web Development, Machine Learning</span>, and <span className="text-picton-blue font-semibold">Multi-objective Optimisation</span>.
              </p>
  
              <p className="text-lg leading-relaxed font-medium">
                I’m currently finishing my Master’s degree in Advanced Computer Science at the <span className="text-picton-blue font-semibold">University of Exeter</span>, and will be seeking employment straight after.
                I also hold a <span className="text-picton-blue font-semibold">First Class Honours</span> Bachelor’s degree in Computer Science from <span className="text-picton-blue font-semibold">Swansea University</span>.
              </p>
            </div>
  
            {/* Right (photo) */}
            <div className="w-full lg:w-1/2 flex justify-center">
              <div className="w-100 h-100 rounded-full overflow-hidden shadow-lg transition-transform hover:scale-105 duration-300">
                <img
                  src="/me.jpg"
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
  