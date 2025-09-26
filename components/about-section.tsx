import { Card, CardContent } from "@/components/ui/card"
import { Code, Cloud, Database, Smartphone } from "lucide-react"

export function AboutSection() {
  const services = [
    {
      icon: <Code className="h-8 w-8 text-purple-600" />,
      title: "Full Stack Development",
      description: "Building end-to-end web applications using modern frameworks and technologies.",
    },
    {
      icon: <Cloud className="h-8 w-8 text-purple-600" />,
      title: "Cloud Development",
      description: "Developing and deploying scalable applications on cloud platforms like AWS and Azure.",
    },
    {
      icon: <Database className="h-8 w-8 text-purple-600" />,
      title: "Software Development",
      description: "Creating robust software solutions with clean, maintainable, and efficient code.",
    },
    {
      icon: <Smartphone className="h-8 w-8 text-purple-600" />,
      title: "Problem Solving",
      description: "Analyzing complex problems and implementing innovative solutions using best practices.",
    },
  ]

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            I'm a passionate Computer Science Engineering student at VIT Bhopal with a specialization in Cloud Computing
            and Automation. With a CGPA of 8.24, I've gained hands-on experience through internships at BSNL and Code
            Clause, working on cutting-edge projects in IoT, distributed systems, and automotive safety solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="text-center p-6 hover:shadow-lg transition-shadow border-0 shadow-md hover:shadow-purple-200"
            >
              <CardContent className="pt-6">
                <div className="flex justify-center mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
