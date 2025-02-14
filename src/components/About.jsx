// components/About/About.jsx
import { motion } from 'framer-motion';

const skills = [
  'C', 'C++', 'JAVA', 'Kotlin', 'Python', 'HTML', 'CSS',
  'Bootstrap', 'Django', 'Web Scrapping', 'Numpy', 'Pandas',
  'Git/Github', 'Latex', 'Android', 'Micro-cap', 'Jupyter', 'Origin'
];

export default function About() {
  return (
    <section id="about" className="pb-20 pt-30 px-6 bg-gradient-to-r from-gray-50 to-gray-100">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col items-center justify-center text-center"
        >
          {/* About Content */}
          <div className="max-w-3xl">
            <h2 className="text-4xl font-bold mb-6 text-gray-800">About Me</h2>
            <p className="text-gray-700 mb-6 leading-relaxed mx-auto">
              My name is Divakar Gupta and I have recently graduated from IIT Kanpur with a B.Tech in Material Science and Engineering. I have worked on multiple projects throughout my academic journey, including web applications using Django, Android applications, and web scraping projects. I have a solid grasp on DSA and have solved around 500 problems on LeetCode. I am passionate about problem-solving and enjoy exploring different technologies to enhance my skills.
            </p>
            
            {/* Technical Skills */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Technical Skills</h3>
              <div className="flex flex-wrap gap-2 justify-center">
                {skills.map((skill) => (
                  <motion.span
                    key={skill}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-2 bg-indigo-100 text-indigo-600 rounded-full text-sm font-medium transition transform"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}