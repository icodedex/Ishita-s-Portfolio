import { Button } from "@/components/ui/button"
import { Code2, Github } from "lucide-react"

export function AdditionalLinks() {
  return (
    <div className="flex gap-4 justify-center lg:justify-start mt-4">
      <Button
        variant="outline"
        size="sm"
        asChild
        className="border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white bg-transparent"
      >
        <a href="https://leetcode.com/u/codedx/" target="_blank" rel="noopener noreferrer" className="gap-2">
          <Code2 className="h-4 w-4" />
          LeetCode
        </a>
      </Button>
      <Button
        variant="outline"
        size="sm"
        asChild
        className="border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white bg-transparent"
      >
        <a href="https://github.com/icodedx" target="_blank" rel="noopener noreferrer" className="gap-2">
          <Github className="h-4 w-4" />
          GitHub
        </a>
      </Button>
    </div>
  )
}
