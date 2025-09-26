import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Heart } from "lucide-react"

export function LeadershipSection() {
  const positions = [
    {
      title: "Secretary Executive",
      organization: "English Literary Club VIT Bhopal",
      period: "May 2024 - Present",
      icon: <Users className="h-6 w-6 text-purple-600" />,
      description: "Leading literary activities and events, managing club operations and member engagement.",
    },
    {
      title: "Core Member",
      organization: "NSS VIT Bhopal",
      period: "Feb 2023 – Feb 2025",
      icon: <Heart className="h-6 w-6 text-pink-600" />,
      description: "Actively participating in social service activities and community development programs.",
    },
  ]

  return (
    <section id="leadership" className="py-20 bg-purple-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">Leadership & Responsibilities</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Positions of responsibility that have helped me develop leadership and teamwork skills.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {positions.map((position, index) => (
            <Card key={index} className="shadow-lg border-0">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    {position.icon}
                  </div>
                  <div>
                    <CardTitle className="text-lg">{position.title}</CardTitle>
                    <p className="text-purple-600 font-medium">{position.organization}</p>
                    <p className="text-sm text-gray-600">{position.period}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{position.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
