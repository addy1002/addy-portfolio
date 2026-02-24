"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Instagram } from "lucide-react";

export default function Home() {
  return (
    <div className="bg-[#0a0f1f] text-white min-h-screen overflow-x-hidden">

      {/* ================= NAVBAR ================= */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-xl bg-[#0a0f1f]/70 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-10 py-4 flex justify-between items-center">
          <h1 className="text-lg font-semibold">
            Addy's Portfolio
          </h1>
          <div className="flex gap-4">
            <a href="#projects" className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition">
              View Projects
            </a>
            <a href="#contact" className="px-4 py-2 rounded-lg border border-white/20 hover:bg-white hover:text-black transition">
              Contact Me
            </a>
          </div>
        </div>
      </nav>

      {/* ================= HERO ================= */}
      <section className="relative min-h-screen flex items-center px-16 pt-24 overflow-hidden">

        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/addy.jpg')" }}
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0f1f]/95 via-[#0a0f1f]/80 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-b from-transparent to-[#0a0f1f]" />

        <div className="relative z-10 max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold"
          >
            Aditya Shrivastav
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mt-6 text-xl text-gray-300"
          >
            DevOps Engineer | Linux Enthusiast | AWS Practitioner
          </motion.p>

          <p className="mt-4 text-gray-400">
            Turning infrastructure into a competitive advantage.
          </p>

          <div className="mt-8 flex gap-4">
            <a
              href="#projects"
              className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 transition shadow-lg"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-xl border border-white/20 hover:bg-white hover:text-black transition"
            >
              Contact Me
            </a>
          </div>
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section className="py-28 px-16 bg-[#0a0f1f]">
        <h2 className="text-4xl font-semibold mb-8">About Me</h2>
        <p className="text-gray-400 max-w-4xl leading-relaxed">
          I am a DevOps Engineer focused on building reliable, scalable and automated infrastructure.
          With hands-on experience in Linux system administration, AWS cloud services and DevOps practices,
          I design systems that are secure, efficient and production-ready.
          I believe in automation over repetition, monitoring over guessing, and clean architecture over shortcuts.
        </p>
      </section>

      {/* ================= CORE EXPERTISE ================= */}
      <section className="py-28 px-16 bg-[#0a0f1f]">
        <h2 className="text-4xl font-semibold mb-4">Core Expertise</h2>
        <p className="text-gray-500 mb-16">
          I build reliable, scalable and automated infrastructure.
        </p>

        <div className="grid md:grid-cols-3 gap-10">
          {/* DevOps */}
          <div className="bg-gradient-to-b from-[#111827] to-[#0f172a] border border-blue-500/30 p-8 rounded-2xl shadow-[0_0_40px_rgba(59,130,246,0.15)] hover:shadow-[0_0_60px_rgba(59,130,246,0.3)] transition">
            <h3 className="text-2xl font-semibold mb-6 text-blue-400">DevOps</h3>
            <ul className="space-y-3 text-gray-400">
              <li>• CI/CD Pipelines</li>
              <li>• Git & GitHub</li>
              <li>• Docker</li>
              <li>• Infrastructure as Code</li>
              <li>• Monitoring & Logging</li>
              <li>• Automation</li>
            </ul>
          </div>
          {/* AWS */}
          <div className="bg-gradient-to-b from-[#111827] to-[#0f172a] border border-blue-500/30 p-8 rounded-2xl shadow-[0_0_40px_rgba(59,130,246,0.15)] hover:shadow-[0_0_60px_rgba(59,130,246,0.3)] transition">
            <h3 className="text-2xl font-semibold mb-6 text-blue-400">AWS</h3>
            <ul className="space-y-3 text-gray-400">
              <li>• EC2, S3, IAM</li>
              <li>• VPC & Networking</li>
              <li>• EBS & Auto Scaling</li>
              <li>• CloudFront</li>
              <li>• Route 53</li>
              <li>• Security Groups & NACL</li>
            </ul>
          </div>


          {/* Linux */}
          <div className="bg-gradient-to-b from-[#111827] to-[#0f172a] border border-blue-500/30 p-8 rounded-2xl shadow-[0_0_40px_rgba(59,130,246,0.15)] hover:shadow-[0_0_60px_rgba(59,130,246,0.3)] transition">
            <h3 className="text-2xl font-semibold mb-6 text-blue-400">Linux</h3>
            <ul className="space-y-3 text-gray-400">
              <li>• Shell Scripting</li>
              <li>• Process & Memory Management</li>
              <li>• File Systems & Permissions</li>
              <li>• Networking Basics</li>
              <li>• Service Management (systemd)</li>
            </ul>
          </div>

          

          
        </div>
      </section>

      {/* ================= PROJECTS ================= */}
<section id="projects" className="py-28 px-16 bg-[#0a0f1f]">
  <h2 className="text-4xl font-semibold mb-6">Projects</h2>
  <p className="text-gray-500 mb-16">
    Some of the systems and infrastructure I’ve built.
  </p>

  <div className="grid md:grid-cols-3 gap-10">

    {[
      {
        title: "AI ERP Assistant",
        description: "Automated college ERP workflows using AI integrations.",
        tech: "AWS • Docker • CI/CD"
      },
      {
        title: "Cloud Deployment Pipeline",
        description: "Production-ready CI/CD pipeline with auto-scaling setup.",
        tech: "EC2 • GitHub Actions • Nginx"
      },
      {
        title: "Monitoring Dashboard",
        description: "Real-time infrastructure monitoring and alerting system.",
        tech: "Prometheus • Grafana • Linux"
      }
    ].map((project, index) => (
      <div
        key={index}
        className="bg-gradient-to-b from-[#111827] to-[#0f172a] 
        border border-blue-500/30 p-8 rounded-2xl 
        shadow-[0_0_40px_rgba(59,130,246,0.15)] 
        hover:shadow-[0_0_70px_rgba(59,130,246,0.4)] 
        hover:-translate-y-2 
        transition duration-300"
      >
        <h3 className="text-2xl font-semibold mb-4 text-blue-400">
          {project.title}
        </h3>

        <p className="text-gray-400 mb-6">
          {project.description}
        </p>

        <p className="text-sm text-gray-500">
          {project.tech}
        </p>

        <button className="mt-6 text-blue-400 hover:text-blue-300 transition">
          View Project →
        </button>
      </div>
    ))}

  </div>
</section>

      {/* ================= SOCIAL / CONTACT ================= */}
      <section id="contact" className="py-20 px-16 bg-[#0a0f1f] border-t border-white/10">
        <div className="flex flex-col items-center gap-6">

          <h2 className="text-3xl font-semibold">Connect With Me</h2>

          <div className="flex gap-8">

            <a
              href="https://github.com/addy1002"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-full bg-white/5 border border-white/10 hover:bg-blue-600/20 hover:shadow-[0_0_25px_rgba(59,130,246,0.6)] transition"
            >
              <Github size={28} />
            </a>

            <a
              href="https://www.linkedin.com/in/aditya-shrivastav-798589286/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-full bg-white/5 border border-white/10 hover:bg-blue-600/20 hover:shadow-[0_0_25px_rgba(59,130,246,0.6)] transition"
            >
              <Linkedin size={28} />
            </a>

            <a
              href="https://www.instagram.com/addy_shrivastav?igsh=MTZ5dzFxMWFxcGx6Zg%3D%3D&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-full bg-white/5 border border-white/10 hover:bg-pink-600/20 hover:shadow-[0_0_25px_rgba(236,72,153,0.6)] transition"
            >
              <Instagram size={28} />
            </a>

          </div>

          <p className="text-gray-500 text-sm mt-6">
            © {new Date().getFullYear()} Aditya Shrivastav. All rights reserved.
          </p>

        </div>
      </section>

    </div>
  );
}