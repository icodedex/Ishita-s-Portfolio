import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CalendarDays, MapPin, Building } from "lucide-react"

export function ExperienceSection() {
  const experiences = [
    {
      title: "Integrated Telecom Data Networks And Cyber Security Intern",
      company: "Bharat Sanchar Nigam Limited (BSNL)",
      location: "India",
      period: "Jan 2025 – April 2025",
      description:
        "Worked on IoT infrastructure and smart home ecosystem design using Cisco Packet Tracer with focus on network security and remote access control.",
      achievements: [
        "Collaborated on the design of a smart home ecosystem by integrating multiple IoT devices into a simulated environment using Cisco Packet Tracer",
        "Simulated remote access control by configuring IoT infrastructure with a mobile network, allowing monitoring and operation of devices from outside the home network",
        "Conducted functional testing of the entire system, ensuring accurate device responses and validating network performance under different simulated conditions",
      ],
      technologies: ["Cisco Packet Tracer", "IoT", "Network Security", "Mobile Networks"],
    },
    {
      title: "Java Development Intern",
      company: "Code Clause",
      location: "Remote",
      period: "Feb 2025 – Mar 2025",
      description:
        "Developed distributed systems and banking applications using Java, focusing on multithreading, socket programming, and database integration.",
      achievements: [
        "Developed a Distributed File System using Java with multithreading and socket programming, enabling file storage and retrieval across multiple servers with fault tolerance and load balancing",
        "Built an Online Banking System featuring secure fund transfers, account management, and transaction history by integrating Java Swing for UI and MySQL for backend data storage",
        "Strengthened skills in Java programming, user input handling, UI design, database connectivity, and distributed systems",
      ],
      technologies: ["Java", "MySQL", "Java Swing", "Socket Programming", "Multithreading"],
    },
  ]

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">Work Experience</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            My professional journey and internship experiences that have shaped my technical skills.
          </p>
        </div>

        <div className="space-y-8 max-w-4xl mx-auto">
          {experiences.map((experience, index) => (
            <Card key={index} className="shadow-lg border-0">
              <CardHeader>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Building className="h-6 w-6 text-purple-600" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{experience.title}</CardTitle>
                      <CardDescription className="text-lg font-medium text-purple-600">
                        {experience.company}
                      </CardDescription>
                    </div>
                  </div>
                  <div className="flex flex-col sm:items-end gap-2">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <CalendarDays className="h-4 w-4" />
                      {experience.period}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <MapPin className="h-4 w-4" />
                      {experience.location}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">{experience.description}</p>

                <div>
                  <h4 className="font-medium mb-2">Key Achievements:</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
                    {experience.achievements.map((achievement, achievementIndex) => (
                      <li key={achievementIndex}>{achievement}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium mb-2">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="bg-purple-100 text-purple-800">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
