import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap, Calendar } from "lucide-react"

export function EducationSection() {
  return (
    <section id="education" className="py-20 bg-purple-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">Education</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mb-8"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="shadow-lg border-0">
            <CardHeader>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <GraduationCap className="h-6 w-6 text-purple-600" />
                </div>
                <div className="flex-1">
                  <CardTitle className="text-xl text-gray-800">Bachelor of Technology</CardTitle>
                  <p className="text-lg font-medium text-purple-600">Vellore Institute of Technology, Bhopal</p>
                  <div className="flex items-center gap-2 text-sm text-gray-600 mt-1">
                    <Calendar className="h-4 w-4" />
                    Oct 2022 - June 2026
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Specialization</h4>
                  <p className="text-gray-600">Computer Science Engineering (Cloud Computing And Automation)</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Relevant Coursework</h4>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Object Oriented Programming",
                      "Operating Systems",
                      "DBMS",
                      "Computer Networks",
                      "Cloud Computing",
                    ].map((course, index) => (
                      <span key={index} className="px-3 py-1 bg-purple-100 text-purple-800 text-sm rounded-full">
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
