import Image from 'next/image';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Hero Section */}
      <section className="relative flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-8 animate-fade-in">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Welcome to <span className="text-blue-600">MyWebsite</span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0">
              My name is Safeer ahmad tahir and I am a passionate AI & Web Developer with a strong focus on creating modern, responsive, and user-friendly digital experiences. I specialize in Next.js, TypeScript, and Tailwind CSS, building websites and applications that combine clean design with powerful functionality. My journey in development is driven by curiosity, problem-solving, and the excitement of bringing creative ideas to life through code.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                  Get Started
                </button>
                <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                  Learn More
                </button>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative animate-fade-in-delayed">
              <div className="relative w-full h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/meri.jpg"
                  alt="Hero Image"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-110"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
