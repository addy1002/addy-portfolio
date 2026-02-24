"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Home() {
  return (
    <div className="bg-black text-white min-h-screen font-sans overflow-x-hidden">

      {/* HERO SECTION */}
      <section
        className="relative min-h-screen flex items-center justify-center px-6"
        style={{
          backgroundImage: "url('/addy.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black"></div>

        <div className="relative z-10 text-center max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold tracking-tight"
          >
            Aditya "Addy" Shrivastav
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mt-6 text-xl md:text-2xl text-zinc-300"
          >
            DevOps Engineer | Linux Enthusiast | AWS Practitioner
          </motion.p>

          <p className="mt-4 text-lg text-zinc-400">
            Turning infrastructure into a competitive advantage.
          </p>

          <div className="mt-10 flex justify-center gap-6">
            <a
              href="#projects"
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-2xl font-medium transition shadow-xl"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-8 py-3 border border-white/40 hover:bg-white hover:text-black rounded-2xl font-medium transition"
            >
              Contact Me
            </a>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-28 px-6 bg-gradient-to-b from-black to-zinc-950">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-semibold mb-8">About Me</h2>
          <p className="text-zinc-400 text-lg leading-relaxed">
            I am a DevOps Engineer focused on building reliable, scalable and automated infrastructure.
            With hands-on experience in Linux system administration, AWS cloud services and DevOps practices,
            I design systems that are secure, efficient and production-ready.
            I believe in automation over repetition, monitoring over guessing, and clean architecture over shortcuts.
          </p>
        </div>
      </section>

      {/* CORE EXPERTISE */}
      <section className="py-28 px-6 bg-black">
        <h2 className="text-4xl font-semibold text-center mb-16">Core Expertise</h2>
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">

          {[
            {
              title: "Linux",
              skills: [
                "Shell Scripting",
                "Process & Memory Management",
                "File Systems & Permissions",
                "Networking Basics",
                "Service Management (systemd)"
              ]
            },
            {
              title: "AWS",
              skills: [
                "EC2, S3, IAM",
                "VPC & Networking",
                "EBS & Auto Scaling",
                "CloudFront",
                "Route 53",
                "Security Groups & NACL"
              ]
            },
            {
              title: "DevOps",
              skills: [
                "CI/CD Pipelines",
                "Git & GitHub",
                "Docker",
                "Infrastructure as Code",
                "Monitoring & Logging",
                "Automation"
              ]
            }
          ].map((section, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-b from-zinc-900 to-zinc-950 border border-blue-500/20 p-8 rounded-2xl shadow-2xl"
            >
              <h3 className="text-2xl font-semibold mb-6 text-blue-400">
                {section.title}
              </h3>
              <ul className="space-y-3 text-zinc-400">
                {section.skills.map((skill, i) => (
                  <li key={i}>• {skill}</li>
                ))}
              </ul>
            </motion.div>
          ))}

        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="py-28 px-6 bg-zinc-950 text-center">
        <h2 className="text-4xl font-semibold mb-6">Projects</h2>
        <p className="text-zinc-500">Coming Soon</p>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 px-6 text-center bg-black">
        <h2 className="text-4xl font-semibold mb-10">Contact</h2>
        <div className="flex justify-center gap-10">
          <a href="#" className="hover:text-blue-400 transition">
            <Github size={30} />
          </a>
          <a href="#" className="hover:text-blue-400 transition">
            <Linkedin size={30} />
          </a>
          <a href="mailto:your@email.com" className="hover:text-blue-400 transition">
            <Mail size={30} />
          </a>
        </div>
        <p className="mt-10 text-zinc-600 text-sm">
          © {new Date().getFullYear()} Aditya Shrivastav. All rights reserved.
        </p>
      </section>

    </div>
  );
}