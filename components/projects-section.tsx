import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { Github } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ProjectsSection() {
  const projects = [
    {
      title: "Java Calculator",
      description:
        "A comprehensive calculator application built in Java featuring basic arithmetic operations, advanced mathematical functions, and a user-friendly graphical interface. Implements proper error handling and input validation.",
      image: "/images/java-calculator.png",
      technologies: ["Java", "Java Swing", "GUI Development", "Event Handling"],
      githubUrl: "https://github.com/icodedx/calculater-java",
      period: "2024",
      achievements: [
        "Implemented basic and advanced mathematical operations",
        "Created intuitive GUI using Java Swing",
        "Added comprehensive error handling and input validation",
      ],
    },
    {
      title: "Kavach 2.0",
      description:
        "An automotive safety solution using LiDAR, radar, and deep learning (CNN) to detect fog and obstacles with 93.5% accuracy, reducing collision risks. Features adaptive alert system with 0.5s response time and automatic braking.",
      image: "/placeholder.svg?height=250&width=400&text=Automotive+Safety+System",
      technologies: ["Deep Learning", "CNN", "LiDAR", "Radar", "Python"],
      period: "Oct 2024 - Jan 2025",
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
      image: "/placeholder.svg?height=250&width=400&text=IoT+Smart+Home",
      technologies: ["Cisco Packet Tracer", "IoT", "3G/5G Networks", "DHCP", "DNS"],
      period: "Jan 2025 - April 2025",
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
      image: "/placeholder.svg?height=250&width=400&text=Distributed+System",
      technologies: ["Java", "Multithreading", "Socket Programming", "Distributed Systems"],
      period: "Feb 2025 - Mar 2025",
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
      image: "/placeholder.svg?height=250&width=400&text=Banking+Application",
      technologies: ["Java", "Java Swing", "MySQL", "Database Design"],
      period: "Feb 2025 - Mar 2025",
      achievements: ["Secure fund transfer system", "Complete account management", "Transaction history tracking"],
    },
  ]

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">My Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-xl transition-shadow duration-300 border-0 shadow-lg hover:shadow-purple-200"
            >
              <div className="relative overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={
                    index === 0
                      ? "Java Calculator Application Interface"
                      : index === 1
                        ? "Kavach 2.0 - Automotive Safety System with LiDAR and CNN"
                        : index === 2
                          ? "Smart Home Automation System with IoT Integration"
                          : index === 3
                            ? "Distributed File System Architecture"
                            : "Online Banking System Interface"
                  }
                  width={400}
                  height={250}
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold text-gray-800">{project.title}</h3>
                  <div className="flex items-center gap-2">
                    {project.githubUrl && (
                      <Button
                        variant="outline"
                        size="sm"
                        asChild
                        className="border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white bg-transparent"
                      >
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4 mr-1" />
                          Code
                        </a>
                      </Button>
                    )}
                    <span className="text-sm text-gray-500">{project.period}</span>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{project.description}</p>

                {project.achievements && (
                  <div className="mb-4">
                    <h4 className="font-medium text-gray-800 mb-2">Key Achievements:</h4>
                    <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                      {project.achievements.map((achievement, index) => (
                        <li key={index}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="px-3 py-1 bg-purple-100 text-purple-800 text-sm rounded-full">
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
