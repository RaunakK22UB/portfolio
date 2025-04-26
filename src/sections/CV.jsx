// src/sections/CV.jsx

const CV = () => {
    return (
      <section id="cv" className="c-space my-20">
        <h2 className="head-text text-center mb-10">My CV</h2>
  
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start justify-center">
          {/* Video CV Card */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <video
              src="/assets/video-cv.mp4"
              controls
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-bold">Video CV</h3>
              <p className="text-sm mt-1">Watch my professional video introduction.</p>
            </div>
          </div>
  
          {/* PDF CV Card */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <a
              href="/assets/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full h-64 bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-all duration-300"
            >
              <img src="/assets/arrow-up.png" alt="Open CV" className="w-12 h-12" />
            </a>
            <div className="p-4">
              <h3 className="text-xl font-bold">Download CV</h3>
              <p className="text-sm mt-1">Click to view or download my resume (PDF).</p>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default CV;
  