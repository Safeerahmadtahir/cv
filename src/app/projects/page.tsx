import Image from 'next/image';

const Projects = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            My Projects
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            explore my projects
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Project 1 */}
          <div className="bg-white p-6 rounded-lg shadow-md animate-fade-in">
            <Image src="/p1.jpg" alt="Project One" width={400} height={192} className="w-full h-48 rounded-lg mb-4 object-cover" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Project One</h3>
            <p className="text-gray-600 mb-4">https://p100-ochre.vercel.app/.</p>
            <div className="flex space-x-2">
              <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">React</span>
              <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">Node.js</span>
            </div>
          </div>

          {/* Project 2 */}
          <div className="bg-white p-6 rounded-lg shadow-md animate-fade-in-delayed">
            <Image src="/p2.jpg" alt="Project Two" width={400} height={192} className="w-full h-48 rounded-lg mb-4 object-cover" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Project Two</h3>
            <p className="text-gray-600 mb-4">https://farming-pi.vercel.app/</p>
            <div className="flex space-x-2">
              <span className="bg-purple-100 text-purple-800 text-xs font-medium px-2.5 py-0.5 rounded">type script</span>
              <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5 py-0.5 rounded"></span>
            </div>
          </div>

          {/* Project 3 */}
          <div className="bg-white p-6 rounded-lg shadow-md animate-fade-in">
            <Image src="/p3.jpg" alt="Project Three" width={400} height={192} className="w-full h-48 rounded-lg mb-4 object-cover" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Project Three</h3>
            <p className="text-gray-600 mb-4">http://p103-xi.vercel.app</p>
            <div className="flex space-x-2">
              <span className="bg-red-100 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded">type script</span>
              <span className="bg-indigo-100 text-indigo-800 text-xs font-medium px-2.5 py-0.5 rounded"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;