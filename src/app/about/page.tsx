const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            About Us
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Learn more about our mission, values, and the team behind our success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6 animate-fade-in">
            <h2 className="text-3xl font-semibold text-gray-900">My Story</h2>
            <p className="text-gray-600 leading-relaxed">
              My name is Safeer Rajput Sb, and I am a passionate AI & Web Developer with a strong focus on creating modern, responsive, and user-friendly digital experiences. I specialize in Next.js, TypeScript, and Tailwind CSS, building websites and applications that combine clean design with powerful functionality. My journey in development is driven by curiosity, problem-solving, and the excitement of bringing creative ideas to life through code.

Over time, Ive worked on numerous projects ranging from personal websites and portfolios to interactive web applications and experimental designs, many of which are deployed on platforms like Vercel. I strongly believe in writing clean, reusable code and maintaining a well-structured project architecture to ensure scalability and long-term success.

Beyond just technical skills, I bring creativity and adaptability to every project. I enjoy exploring new technologies, improving user experiences through subtle animations and smooth interactions, and designing layouts that are visually appealing yet efficient. My goal is not only to code but also to craft experiences that leave a lasting impact.

When Im not coding, I love learning new skills, exploring digital design trends, and experimenting with ideas that push the boundaries of modern web development. I see every project as a chance to grow, innovate, and contribute something valuable to the digital world.

✨ In short: im a developer who blends creativity
            </p>
            <p className="text-gray-600 leading-relaxed">
              
             
            </p>
          </div>
          <div className="relative h-96 rounded-lg overflow-hidden shadow-lg animate-fade-in-delayed">
            <img
              src="/my.jpg"
              alt="Team collaboration"
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-md text-center animate-fade-in">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Innovation</h3>
            <p className="text-gray-600">We embrace cutting-edge technologies to deliver exceptional results.</p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md text-center animate-fade-in-delayed">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Community</h3>
            <p className="text-gray-600">Building strong relationships and fostering collaboration.</p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md text-center animate-fade-in">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Quality</h3>
            <p className="text-gray-600">Committed to excellence in everything we do.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;