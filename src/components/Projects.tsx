
const Projects = () => {
  const projects = [
    {
      title: "AgroX",
      period: "Jan 2025 - Apr 2025",
      description: "AI/ML-based agricultural price prediction system",
      technologies: ["Python", "Machine Learning", "Data Analysis"],
      features: [
        "5-day crop price forecasts using Random Forest and LSTM models",
        "Data preprocessing and time series analysis for market trends",
        "ML dashboard for decision-making and insights"
      ]
    },
    {
      title: "OncoAware",
      period: "Jan 2025 - Feb 2025",
      description: "Website for cancer detection and visualization",
      technologies: ["HTML", "CSS", "JavaScript"],
      features: [
        "User input-based cell density analysis",
        "Real-time visual feedback with interactive interface",
        "Accessible, clean UI design for non-technical users"
      ]
    },
    {
      title: "AI-Powered Medical Disease Prediction System",
      period: "May 2025 – June 2025",
      description: "Built during my internship with TechSaksham, this project uses AI to predict life-threatening diseases through a full-stack solution.",
      technologies: ["Machine Learning (SVM)", "Python", "Streamlit", "Pickle"],
      features: [
        "Real-time disease prediction for Diabetes, Heart Disease, Parkinson’s, Lung Cancer, and Thyroid",
        "Streamlit-based dark-themed responsive UI",
        "Fast and reliable model inference using SVM",
        "End-to-end deployment with pickle-based ML model serving",
        "Designed for accessibility by both patients and healthcare providers"
      ]
    },
    {
      title: "Mini Games Collection",
      period: "April 2025",
      description: "A fun and interactive collection of browser-based mini games, built with a modern UI and light/dark mode support.",
      technologies: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"],
      features: [
        "Includes 6 mini games: Memory Card Flip, Rock Paper Scissors, Tic Tac Toe, Guess the Number, Dice Roller",
        "Built with responsive UI supporting both dark and light modes",
        "Smooth animations and game logic using modern frontend tools",
        "Component-driven architecture using React for scalability",
        "Great for casual users and as a playground for frontend practice"
      ]
    },
    {
      title: "Personal Portfolio Website",
      period: "June 2025",
      description: "A fully responsive, multi-page personal portfolio showcasing my projects, skills, and journey in tech with clean UI/UX design and animations.",
      technologies: ["React", "Vite", "Tailwind CSS", "React Router", "Framer Motion"],
      features: [
        "Dedicated pages for Home, About, Projects, Skills, and Contact",
        "Clean, animated UI with light and dark mode toggle",
        "Smooth page transitions and scroll animations using Framer Motion",
        "Built with modular and scalable React components",
        "Highlights projects, tech stack, and career goals in a structured layout"
      ]
    },
    {
      title: "CUET Test Generator Platform",
      period: "May 2025",
      description: "An online platform that allows students to attempt CUET-style mock tests and enables admins to create, manage, and analyze test performance.",
      technologies: ["React", "Tailwind CSS", "Node.js", "MongoDB", "Express", "React Router"],
      features: [
        "Student panel for attempting mock tests with instant score feedback",
        "Admin panel to create questions, assign tests, and monitor analytics",
        "Test link/code-based access for student authentication",
        "Clean UI/UX with responsive design and separate role-based dashboards",
        "Data persistence with MongoDB and seamless frontend-backend integration"
      ]
    }



  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Featured Projects</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A showcase of my technical projects demonstrating skills in AI/ML, web development, and problem-solving
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 hover:shadow-lg transition-shadow duration-200">
              <div className="mb-4">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                <p className="text-yellow-600 dark:text-yellow-400 font-medium text-sm">{project.period}</p>
              </div>
              
              <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
              
              <div className="mb-4">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Technologies:</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300 px-2 py-1 rounded text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Key Features:</h4>
                <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                  {project.features.map((feature, featureIndex) => (
                    <li key={featureIndex}>• {feature}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://github.com/Navya0618"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-yellow-600 dark:bg-yellow-500 text-white dark:text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-700 dark:hover:bg-yellow-400 transition-colors duration-200"
          >
            View More on GitHub
            <svg className="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
