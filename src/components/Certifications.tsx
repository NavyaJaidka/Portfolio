
import { Award } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      title: "Intro to TensorFlow",
      organization: "Kaggle",
      description: "Designed and trained neural networks using TensorFlow",
      skills: ["TensorFlow", "Neural Networks", "Deep Learning"]
    },
    {
      title: "HTML and CSS 3rd",
      organization: "Kaggle", 
      description: "Applied responsive web design for real-world projects",
      skills: ["HTML", "CSS", "Responsive Design"]
    },
    {
      title: "Data Structures and Algorithms",
      organization: "Academic",
      description: "Foundational knowledge in DSA for efficient problem-solving",
      skills: ["Data Structures", "Algorithms", "Problem Solving"]
    },
    {
      title: "Machine Learning",
      organization: "Academic",
      description: "Leveraged data insights for decision-making",
      skills: ["Machine Learning", "Data Analysis", "Statistical Modeling"]
    },
    {
      title: "Object Oriented Programming (OOP) in Java",
      organization: "Academic", 
      description: "Advanced OOP concepts and Java programming",
      skills: ["Java", "OOP", "Software Development"]
    },
    {
      title: "Python, MS Excel",
      organization: "Academic",
      description: "Data analysis and programming fundamentals",
      skills: ["Python", "Excel", "Data Analysis"]
    },
    {
      title: "Linear Algebra",
      organization: "Academic",
      description: "Mathematical foundations for ML and data science",
      skills: ["Mathematics", "Linear Algebra", "ML Foundations"]
    },
    {
      title: "Digital Logic Design, Electrical and Electronics Engineering",
      organization: "Academic",
      description: "Hardware and electronics fundamentals",
      skills: ["Digital Logic", "Electronics", "Hardware Design"]
    },
    {
      title: "Probability and Statistics",
      organization: "Academic", 
      description: "Statistical analysis and probability theory",
      skills: ["Statistics", "Probability", "Data Science"]
    },
    {
      title: "Discrete Mathematics",
      organization: "Academic",
      description: "Mathematical foundations for computer science",
      skills: ["Mathematics", "Logic", "Computational Thinking"]
    }
  ];

  const achievements = [
    {
      title: "Top 10 Finalist",
      event: "Microsoft Hackathon 2025",
      description: "For consistent academic performance and leadership"
    },
    {
      title: "School LOR",
      event: "Academic Excellence (2016-2022)",
      description: "Gold Medal for outstanding academic performance"
    },
    {
      title: "Employee of the Month",
      event: "UnlockDiscounts – Full-Stack Internship",
      description: "Awarded for exceptional performance, ownership, and team contribution during a live e-commerce project"
    },
    {
      title: "TechSaksham Internship",
      event: "AI: Transformative Learning Program by Microsoft & SAP",
      description: "Built a full-stack AI-powered disease prediction system using Python, Streamlit, and Machine Learning. Recognized for leveraging AI for social good."
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-gray-50 dark:bg-gray-900">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  <div className="text-center mb-16">
    <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Certifications & Achievements</h2>
    <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
      Professional certifications and academic achievements that demonstrate my commitment to continuous learning
    </p>
  </div>

  {/* Achievements Section */}
  <div className="mb-16">
    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">Achievements</h3>
    <div className="grid md:grid-cols-2 gap-6">
      {achievements.map((achievement, index) => (
        <div key={index} className="bg-gradient-to-r from-yellow-50 to-yellow-100 dark:from-yellow-900/20 dark:to-yellow-800/20 p-6 rounded-lg border border-yellow-100 dark:border-yellow-700/30">
          <div className="flex items-start">
            <Award className="text-yellow-600 dark:text-yellow-400 mt-1 mr-4 flex-shrink-0" size={24} />
            <div>
              <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{achievement.title}</h4>
              <p className="text-yellow-600 dark:text-yellow-400 font-medium mb-2">{achievement.event}</p>
              <p className="text-gray-600 dark:text-gray-300">{achievement.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>

  {/* Certifications Section */}
  <div>
    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">Certifications & Courses</h3>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {certifications.map((cert, index) => (
        <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
          <div className="mb-4">
            <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{cert.title}</h4>
            <p className="text-yellow-600 dark:text-yellow-400 font-medium text-sm">{cert.organization}</p>
          </div>
          
          <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">{cert.description}</p>
          
          <div>
            <h5 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm">Skills Gained:</h5>
            <div className="flex flex-wrap gap-1">
              {cert.skills.map((skill, skillIndex) => (
                <span
                  key={skillIndex}
                  className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded text-xs"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>

  {/* Leadership Section */}
  <div className="mt-16 bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
      Leadership & Involvement
    </h3>
    <div className="grid md:grid-cols-2 gap-8">

      {/* AgroX Role */}
      <div>
        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          AI/ML/DL Developer – AgroX
        </h4>
        <p className="text-yellow-600 dark:text-yellow-400 font-medium mb-2">Jan – Apr 2025</p>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          Developed an AI-based agricultural market prediction platform to empower farmers with price forecasts.
        </p>
        <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
          <li>• Built and trained LSTM and Random Forest models for price forecasting</li>
          <li>• Designed a clean, responsive dashboard for data visualization</li>
          <li>• Focused on practical tools for real-world agricultural challenges</li>
        </ul>
      </div>

      {/* CUET Test Generator Role */}
      <div>
        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Full-Stack Developer – CUET Test Generator
        </h4>
        <p className="text-yellow-600 dark:text-yellow-400 font-medium mb-2">May 2025</p>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          Built a full-stack mock test platform for CUET aspirants with distinct student and admin panels.
        </p>
        <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
          <li>• Developed secure test-taking interface with auto-scoring and feedback</li>
          <li>• Enabled admin features for question upload, test assignment, and analytics</li>
          <li>• Promoted accessibility and better preparation for college entrance exams</li>
        </ul>
      </div>

      {/* CLTI Role */}
      <div>
        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Core Member – CLTI, Bennett University
        </h4>
        <p className="text-yellow-600 dark:text-yellow-400 font-medium mb-2">Mar 2025 – Present</p>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          Actively contributing to tech culture and learning initiatives across campus.
        </p>
        <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
          <li>• Organized workshops on Git, DSA, and full-stack development</li>
          <li>• Mentored juniors in academic and project-based learning</li>
          <li>• Encouraged participation in hackathons and open-source contributions</li>
        </ul>
      </div>
    </div>
  </div>
</div>
    </section>
  );
};

export default Certifications;
