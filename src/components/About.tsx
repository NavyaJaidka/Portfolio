import { GraduationCap, Target, Code2, Brain } from 'lucide-react';

const About = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-yellow-50 to-white dark:from-gray-900 dark:via-yellow-950 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-gray-800 via-yellow-600 to-yellow-500 dark:from-gray-200 dark:via-yellow-400 dark:to-yellow-300 bg-clip-text text-transparent mb-6">
            About Me
          </h2>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            A Computer Science undergraduate passionate about crafting AI-driven and full-stack digital experiences that make a difference.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <div className="space-y-6">
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-2 bg-gradient-to-r from-yellow-500 to-yellow-400 rounded-lg">
                <Brain className="text-white" size={32} />
              </div>
              <h3 className="text-3xl font-bold text-gray-800 dark:text-gray-200">My Journey</h3>
            </div>

            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
              I'm currently pursuing a B.Tech in Computer Science Engineering at Bennett University, Greater Noida. My passion for technology began with curiosity and has grown into a commitment to build real-world, user-focused solutions.
            </p>

            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
              My core areas of interest include Artificial Intelligence, Machine Learning, Full-Stack Development, and UI/UX. I've worked on diverse projects ranging from AI-powered health tools and agricultural prediction systems to mock test platforms and mini game collections.
            </p>

            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
              I value collaboration, clarity in design, and the challenge of solving complex problems. I'm constantly exploring new technologies and striving to create tools that are as functional as they are impactful.
            </p>
          </div>

          <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm p-8 rounded-2xl shadow-2xl border border-gray-200/50 dark:border-gray-700/50 hover:shadow-3xl transition-all duration-300 hover:scale-105">
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-2 bg-gradient-to-r from-yellow-500 to-yellow-400 rounded-lg">
                <GraduationCap className="text-white" size={32} />
              </div>
              <h3 className="text-3xl font-bold text-gray-800 dark:text-gray-200">Education</h3>
            </div>

            <div className="space-y-6">
              <div className="p-6 bg-gradient-to-r from-yellow-50/80 to-white/80 dark:from-yellow-900/20 dark:to-gray-800/20 rounded-xl backdrop-blur-sm border border-yellow-200/30 dark:border-yellow-700/30">
                <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">B.Tech Computer Science Engineering</h4>
                <p className="text-yellow-600 dark:text-yellow-400 font-medium mb-1">Bennett University, Greater Noida</p>
                <p className="text-gray-600 dark:text-gray-400">2023 - Present | CGPA: 8.02</p>
              </div>

              <div className="border-t border-gray-200/50 dark:border-gray-700/50 pt-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-1 bg-gradient-to-r from-yellow-500 to-yellow-400 rounded-lg">
                    <Target className="text-white" size={24} />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Current Focus</h4>
                </div>
                <ul className="space-y-3 text-gray-700 dark:text-gray-300 mb-6">
                  <li className="flex items-center space-x-2">
                    <Code2 className="text-yellow-400" size={16} />
                    <span>Building intelligent, accessible tools that solve real-world problems</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Code2 className="text-yellow-600" size={16} />
                    <span>Contributing to meaningful projects in healthtech, edtech, and agri-tech</span>
                  </li>
                </ul>

                {/* View My Resume Button */}
                <div className="text-center">
                  <a
                    href="https://your-resume-link.com" // 🔁 Replace with your actual resume link
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold rounded-lg shadow-md transition duration-300"
                  >
                    View My Resume
                  </a>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
