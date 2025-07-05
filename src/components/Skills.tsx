
const Skills = () => {
  const skillCategories = [
  {
    title: "Languages & Technologies",
    skills: ["Python", "JavaScript", "TypeScript", "C/C++", "HTML", "CSS", "SQL"]
  },
  {
    title: "Frameworks & Libraries",
    skills: ["React", "Tailwind CSS", "Node.js", "Express", "Framer Motion", "Streamlit", "Scikit-learn"]
  },
  {
    title: "Tools & Platforms",
    skills: ["Git & GitHub", "VS Code", "Jupyter Notebook", "Google Colab", "Vercel", "Render", "Linux", "MongoDB", "Figma"]
  },
  {
    title: "Technical Domains",
    skills: ["Full-Stack Development", "Machine Learning", "Deep Learning", "UI/UX Design", "Data Visualization", "API Integration"]
  },
  {
    title: "Soft Skills",
    skills: ["Team Collaboration", "Problem Solving", "Critical Thinking", "Public Speaking", "Leadership"]
  }
]


  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Skills & Expertise</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A comprehensive overview of my technical and soft skills developed through projects and experience
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{category.title}</h3>
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="bg-yellow-50 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Professional Experience</h3>
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md max-w-4xl mx-auto">
            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white">Full-Stack Developer Intern</h4>
                  <p className="text-yellow-600 dark:text-yellow-400 font-medium">UnlockDiscounts</p>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Led end-to-end development of dynamic web applications for an e-commerce platform, contributing to scalable architecture and seamless user experiences.
                  </p>
                  <ul className="text-left text-gray-600 dark:text-gray-300 space-y-1">
                    <li>• Took ownership as a full-stack developer, managing both frontend and backend workflows</li>
                    <li>• Engineered responsive, high-performance features using modern web technologies</li>
                    <li>• Collaborated closely with cross-functional teams to deliver production-ready solutions</li>
                    <li>• Recognized as <span className="text-yellow-500 font-semibold">Employee of the Month</span> for exceptional performance and initiative</li>

                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
