export function SkillsSection() {
  const skills = [
    { name: "Java (DSA)", level: 90 },
    { name: "Python", level: 85 },
    { name: "C++", level: 80 },
    { name: "JavaScript", level: 85 },
    { name: "HTML/CSS", level: 90 },
    { name: "React", level: 80 },
    { name: "Node.js", level: 75 },
    { name: "SpringBoot", level: 80 },
    { name: "AWS Cloud", level: 75 },
    { name: "MySQL", level: 85 },
    { name: "PostgreSQL", level: 80 },
    { name: "MongoDB", level: 75 },
  ]

  return (
    <section id="skills" className="py-20 bg-purple-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">My Skills</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Here are some of the technologies and tools I work with to bring ideas to life.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-800 font-medium">{skill.name}</span>
                  <span className="text-purple-600 font-semibold">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div
                    className="bg-gradient-to-r from-purple-600 to-pink-600 h-3 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-gray-800 text-center mb-8">Professional Certifications</h3>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500 hover:shadow-lg transition-shadow">
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-800 mb-1">AWS Cloud Practitioner Essentials</h4>
                  <p className="text-blue-600 font-medium">Amazon Web Services</p>
                </div>
                <div className="text-right">
                  <span className="text-sm text-gray-500">Jan 2025</span>
                </div>
              </div>
              <p className="text-sm text-gray-600 mb-3">
                Comprehensive understanding of AWS Cloud concepts, services, security, architecture, pricing, and
                support.
              </p>
              <a
                href="https://drive.google.com/file/d/1nqwW4enNExcLrl3_oMijb13mNkxy_Cku/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 text-sm font-medium hover:underline transition-colors"
              >
                📄 View Certificate
              </a>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-purple-500 hover:shadow-lg transition-shadow">
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-800 mb-1">DevOps Fundamentals</h4>
                  <p className="text-purple-600 font-medium">IBM Career Education Program</p>
                </div>
                <div className="text-right">
                  <span className="text-sm text-gray-500">Apr 2025</span>
                </div>
              </div>
              <p className="text-sm text-gray-600 mb-2">
                Mastery of DevOps principles, CI/CD pipelines, automation, and collaborative development practices.
              </p>
              <div className="flex items-center justify-between">
                <div className="text-xs text-gray-500">
                  <span>Certificate ID: CEDEV1IN</span>
                </div>
                <a
                  href="https://drive.google.com/file/d/1v2sJqQ5tmW4R48ZYqjcKfE-ybzimKsdH/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-800 text-sm font-medium hover:underline transition-colors"
                >
                  📄 View Certificate
                </a>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <p className="text-sm text-gray-600">
              Click on "View Certificate" to download and view the official certification documents.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
