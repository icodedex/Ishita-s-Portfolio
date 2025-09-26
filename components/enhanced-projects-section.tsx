import { Card, CardContent } from "@/components/ui/card"
import { Award, Clock } from "lucide-react"

export function EnhancedProjectsSection() {
  const projects = [
    {
      title: "Kavach 2.0",
      description:
        "An automotive safety solution using LiDAR, radar, and deep learning (CNN) to detect fog and obstacles with 93.5% accuracy, reducing collision risks. Features adaptive alert system with 0.5s response time and automatic braking.",
      image: "/placeholder.svg?height=250&width=400&text=🚗+Automotive+Safety+AI",
      technologies: ["Deep Learning", "CNN", "LiDAR", "Radar", "Python"],
      period: "Oct 2024 - Jan 2025",
      category: "AI/ML",
      status: "Completed",
      achievements: [
        "93.5% accuracy in fog and obstacle detection",
        "99.2% reliability in obstacle detection up to 10 meters",
        "0.5s response time for adaptive alert system",
      ],
    },
    {
      title: "Smart Home Automation and Control System",
      description:
        "Built and simulated a smart building model using Cisco Packet Tracer with integrated IoT devices and wireless control features. Enabled real-time automation through smartphone-based monitoring.",
      image: "/placeholder.svg?height=250&width=400&text=🏠+IoT+Smart+Home",
      technologies: ["Cisco Packet Tracer", "IoT", "3G/5G Networks", "DHCP", "DNS"],
      period: "Jan 2025 - April 2025",
      category: "IoT",
      status: "In Progress",
      achievements: [
        "Real-time automation of smart appliances",
        "Remote access via 3G/5G networks",
        "IoT server-based communication implementation",
      ],
    },
    {
      title: "Distributed File System",
      description:
        "Developed using Java with multithreading and socket programming, enabling file storage and retrieval across multiple servers with fault tolerance and load balancing capabilities.",
      image: "/placeholder.svg?height=250&width=400&text=🗄️+Distributed+System",
      technologies: ["Java", "Multithreading", "Socket Programming", "Distributed Systems"],
      period: "Feb 2025 - Mar 2025",
      category: "Backend",
      status: "Completed",
      achievements: [
        "Fault tolerance implementation",
        "Load balancing across servers",
        "Multithreaded file operations",
      ],
    },
    {
      title: "Online Banking System",
      description:
        "Built a secure banking application featuring fund transfers, account management, and transaction history using Java Swing for UI and MySQL for backend data storage.",
      image: "/placeholder.svg?height=250&width=400&text=🏦+Banking+System",
      technologies: ["Java", "Java Swing", "MySQL", "Database Design"],
      period: "Feb 2025 - Mar 2025",
      category: "Full Stack",
      status: "Completed",
      achievements: ["Secure fund transfer system", "Complete account management", "Transaction history tracking"],
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed":
        return "bg-green-100 text-green-800"
      case "In Progress":
        return "bg-blue-100 text-blue-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "AI/ML":
        return "🤖"
      case "IoT":
        return "🌐"
      case "Backend":
        return "⚙️"
      case "Full Stack":
        return "💻"
      default:
        return "📱"
    }
  }

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">My Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and experience in various technologies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:shadow-purple-200 hover:-translate-y-1"
            >
              <div className="relative overflow-hidden group">
                <div className="absolute top-4 left-4 z-10 flex gap-2">
                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(project.status)}`}>
                    {project.status}
                  </span>
                  <span className="px-2 py-1 text-xs font-medium rounded-full bg-purple-100 text-purple-800">
                    {getCategoryIcon(project.category)} {project.category}
                  </span>
                </div>

                <div className="relative bg-gradient-to-br from-purple-100 to-pink-100 h-64 flex items-center justify-center">
                  <div className="text-6xl opacity-20 group-hover:opacity-30 transition-opacity">
                    {getCategoryIcon(project.category)}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="text-white font-medium text-sm bg-black/50 px-3 py-1 rounded-full backdrop-blur-sm">
                      {project.title}
                    </div>
                  </div>
                </div>
              </div>

              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-semibold text-gray-800 flex items-center gap-2">{project.title}</h3>
                  <div className="flex items-center gap-1 text-sm text-gray-500">
                    <Clock className="h-4 w-4" />
                    {project.period.split(" - ")[1] || project.period.split(" - ")[0]}
                  </div>
                </div>

                <p className="text-gray-600 mb-4 text-sm leading-relaxed">{project.description}</p>

                {project.achievements && (
                  <div className="mb-4">
                    <h4 className="font-medium text-gray-800 mb-2 flex items-center gap-1">
                      <Award className="h-4 w-4 text-purple-600" />
                      Key Achievements:
                    </h4>
                    <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                      {project.achievements.map((achievement, index) => (
                        <li key={index}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-800 text-xs rounded-full font-medium border border-purple-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
