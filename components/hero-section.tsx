"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Download, Github, Linkedin, Mail } from "lucide-react"
import Image from "next/image"
import { AdditionalLinks } from "@/components/additional-links"

export function HeroSection() {
  const [currentTitle, setCurrentTitle] = useState(0)
  const titles = ["Full Stack Developer", "Software Developer", "Cloud Developer", "Java Developer", "Problem Solver"]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitle((prev) => (prev + 1) % titles.length)
    }, 2000) // Change every 2 seconds

    return () => clearInterval(interval)
  }, [titles.length])

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 to-pink-50 pt-16"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-800 mb-6">
              Hi, I'm{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                Ishita Mishra
              </span>
            </h1>
            <h2 className="text-xl sm:text-2xl text-gray-600 mb-6 h-8">
              <span className="inline-block transition-all duration-500 ease-in-out">{titles[currentTitle]}</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl">
              Passionate Computer Science Engineering student specializing in Cloud Computing and Automation. Currently
              pursuing B.Tech at VIT Bhopal. Experienced in developing automotive safety solutions, IoT systems, and
              distributed applications using modern technologies like Java, Python, and AWS.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700" asChild>
                <a
                  href="https://drive.google.com/file/d/1tLbR4zB8s0HSjkLl5nMOZO05ZqTTaCfA/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download CV
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white bg-transparent"
                asChild
              >
                <a href="#projects">View My Work</a>
              </Button>
            </div>

            <div className="flex gap-4 justify-center lg:justify-start">
              <Button variant="ghost" size="icon" className="hover:bg-purple-100" asChild>
                <a href="https://github.com/icodedx" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-purple-100" asChild>
                <a
                  href="https://www.linkedin.com/in/ishita-mishra-73a91b251/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-purple-100" asChild>
                <a href="mailto:ishitamishra6103@gmail.com">
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
              <p className="text-sm text-gray-500 mt-1 ml-2">+91-6387743319</p>
            </div>
            <AdditionalLinks />
          </div>

          <div className="flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden border-8 border-white shadow-2xl">
                <Image
                  src="/images/profile-photo.jpg"
                  alt="Ishita Mishra - Professional headshot against decorative brick wall background"
                  width={320}
                  height={320}
                  className="object-cover w-full h-full"
                  priority
                />
              </div>
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-20 blur-2xl -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
