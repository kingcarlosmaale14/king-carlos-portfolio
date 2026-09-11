"use client";

import { useEffect, useState } from "react";
import {
  ArrowUpRight, Github, Linkedin, Mail, Cpu, Code2, Database,
  CircuitBoard, ExternalLink, Menu, X, Terminal
} from "lucide-react";

const projects = [
  {
    no: "01",
    title: "MediHaven",
    type: "Hardware + Software",
    description: "A smart automatic pill dispenser that combines an ESP32-based device with scheduled medication alerts, servo control, buzzer notification, and user confirmation.",
    stack: ["ESP32", "Arduino", "C++", "RTC", "Servo"],
  },
  {
    no: "02",
    title: "CLMAS",
    type: "Web / Database System",
    description: "Computer Laboratory Monitoring & Attendance System designed to automate attendance, equipment monitoring, borrowing, assistance requests, feedback, and administrative reporting.",
    stack: ["Python", "Tkinter", "SQLite", "SQL"],
  },
  {
    no: "03",
    title: "LabKiosk",
    type: "Hospital Information System",
    description: "A proposed self-service hospital laboratory kiosk for digital referral, payment, scheduling, and QR-based laboratory result access.",
    stack: ["UI/UX", "Database", "QR", "Kiosk"],
  }
];

const skills = [
  ["Hardware", "Arduino • ESP32 • Sensors • Circuits"],
  ["Programming", "C++ • Python • JavaScript • TypeScript"],
  ["Database", "SQLite • SQL • Database Design"],
  ["Development", "React • Next.js • Git • VS Code"],
  ["Systems", "Embedded Systems • IoT • Monitoring Systems"],
  ["Design", "UI/UX • System Modeling • DFD"]
];

export default function Portfolio() {
  const [menu, setMenu] = useState(false);
  const [typed, setTyped] = useState("");
  const text = "Computer Engineering Student";

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      setTyped(text.slice(0, i + 1));
      i++;
      if (i === text.length) clearInterval(timer);
    }, 65);
    return () => clearInterval(timer);
  }, []);

  return (
    <main className="min-h-screen grid-bg">
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-[#222] bg-[#070707]/85 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <a href="#home" className="font-bold tracking-tight">KC<span className="text-[#d7ff55]">.</span></a>

          <nav className="hidden gap-7 text-sm text-neutral-400 md:flex">
            {["about","projects","stack","education","contact"].map(x => (
              <a key={x} href={`#${x}`} className="hover:text-white transition">{x}</a>
            ))}
          </nav>

          <button className="md:hidden" onClick={() => setMenu(!menu)} aria-label="Toggle menu">
            {menu ? <X size={20}/> : <Menu size={20}/>}
          </button>
        </div>
        {menu && (
          <div className="border-t border-[#222] px-5 py-4 md:hidden">
            {["about","projects","stack","education","contact"].map(x => (
              <a onClick={() => setMenu(false)} key={x} href={`#${x}`} className="block py-2 text-neutral-300">{x}</a>
            ))}
          </div>
        )}
      </header>

      <section id="home" className="mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-5 pt-24">
        <div className="reveal max-w-4xl">
          <p className="mb-5 font-mono text-xs uppercase tracking-[.28em] text-[#d7ff55]">
            Available for opportunities
          </p>
          <h1 className="text-5xl font-black tracking-[-.05em] sm:text-7xl md:text-8xl">
            King Carlos<br />Maale<span className="text-[#d7ff55]">.</span>
          </h1>
          <p className="mt-7 max-w-2xl text-lg text-neutral-400">
            {typed}<span className="animate-pulse text-[#d7ff55]">_</span> building practical
            hardware and software solutions.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a href="#projects" className="flex items-center gap-2 bg-[#d7ff55] px-5 py-3 text-sm font-bold text-black hover:opacity-90">
              View projects <ArrowUpRight size={16}/>
            </a>
            <a href="#contact" className="flex items-center gap-2 border border-[#333] px-5 py-3 text-sm hover:border-[#666]">
              Contact me <Mail size={16}/>
            </a>
          </div>
        </div>

        <div className="mt-24 overflow-hidden border-y border-[#222] py-4 text-xs uppercase tracking-[.25em] text-neutral-600">
          <div className="marquee flex w-max gap-12">
            <span>Hardware</span><span>Embedded Systems</span><span>Software</span><span>IoT</span><span>Database</span><span>Computer Engineering</span>
            <span>Hardware</span><span>Embedded Systems</span><span>Software</span><span>IoT</span><span>Database</span><span>Computer Engineering</span>
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-6xl px-5 py-28">
        <div className="grid gap-10 md:grid-cols-[180px_1fr]">
          <div className="section-number">01 / ABOUT</div>
          <div>
            <h2 className="text-3xl font-bold md:text-5xl">I build things that connect the physical and digital world.</h2>
            <p className="mt-7 max-w-3xl text-base leading-8 text-neutral-400">
              I&apos;m a Computer Engineering student interested in embedded systems, electronics,
              programming, databases, and practical information systems. My academic projects
              combine hardware experimentation with software development to solve real-world problems.
            </p>
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              <div className="card p-5"><CircuitBoard className="mb-5 text-[#d7ff55]"/><b>Hardware</b><p className="mt-2 text-sm text-neutral-500">Arduino, ESP32 and electronics.</p></div>
              <div className="card p-5"><Code2 className="mb-5 text-[#d7ff55]"/><b>Software</b><p className="mt-2 text-sm text-neutral-500">Applications, dashboards and systems.</p></div>
              <div className="card p-5"><Database className="mb-5 text-[#d7ff55]"/><b>Data</b><p className="mt-2 text-sm text-neutral-500">SQL, SQLite and system databases.</p></div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-6xl px-5 py-28">
        <div className="grid gap-10 md:grid-cols-[180px_1fr]">
          <div className="section-number">02 / PROJECTS</div>
          <div>
            <h2 className="text-3xl font-bold md:text-5xl">Selected work</h2>
            <div className="mt-10 space-y-4">
              {projects.map(p => (
                <article key={p.no} className="card p-6 md:p-8">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <span className="font-mono text-xs text-neutral-600">{p.no}</span>
                      <h3 className="mt-2 text-2xl font-bold">{p.title}</h3>
                      <p className="mt-1 text-xs uppercase tracking-wider text-[#d7ff55]">{p.type}</p>
                    </div>
                    <ArrowUpRight className="text-neutral-600"/>
                  </div>
                  <p className="mt-6 max-w-3xl leading-7 text-neutral-400">{p.description}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {p.stack.map(s => <span key={s} className="border border-[#292929] px-3 py-1 text-xs text-neutral-500">{s}</span>)}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="stack" className="mx-auto max-w-6xl px-5 py-28">
        <div className="grid gap-10 md:grid-cols-[180px_1fr]">
          <div className="section-number">03 / STACK</div>
          <div>
            <h2 className="text-3xl font-bold md:text-5xl">Tools I work with</h2>
            <div className="mt-10 grid gap-px overflow-hidden border border-[#222] bg-[#222] sm:grid-cols-2">
              {skills.map(([name, list]) => (
                <div key={name} className="bg-[#0b0b0b] p-6">
                  <div className="mb-3 flex items-center gap-2 font-bold"><Cpu size={17} className="text-[#d7ff55]"/>{name}</div>
                  <p className="text-sm text-neutral-500">{list}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="education" className="mx-auto max-w-6xl px-5 py-28">
        <div className="grid gap-10 md:grid-cols-[180px_1fr]">
          <div className="section-number">04 / EDUCATION</div>
          <div className="card p-7 md:p-9">
            <p className="font-mono text-xs text-neutral-600">CURRENT</p>
            <h2 className="mt-3 text-2xl font-bold">Bachelor of Science in Computer Engineering</h2>
            <p className="mt-2 text-neutral-400">Dr. Yanga&apos;s Colleges, Inc. (DYCI)</p>
            <p className="mt-5 text-sm leading-7 text-neutral-500">
              Focus areas include embedded systems, programming, electronics, computer systems,
              databases, networking, and software development.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-28">
        <div className="grid gap-10 md:grid-cols-[180px_1fr]">
          <div className="section-number">05 / EXPERIENCE</div>
          <div className="space-y-5">
            <div className="card p-7">
              <p className="font-mono text-xs text-neutral-600">ACADEMIC PROJECTS</p>
              <h3 className="mt-2 text-xl font-bold">Hardware & Software Development</h3>
              <p className="mt-3 text-sm leading-7 text-neutral-500">
                Developed and documented systems involving ESP32, Arduino, databases, GUI dashboards,
                monitoring systems, and embedded-device control.
              </p>
            </div>
            <div className="card p-7">
              <p className="font-mono text-xs text-neutral-600">SYSTEM DESIGN</p>
              <h3 className="mt-2 text-xl font-bold">Analysis, DFD & Database Design</h3>
              <p className="mt-3 text-sm leading-7 text-neutral-500">
                Designed system workflows, data flow diagrams, database structures, and user-facing dashboards.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-6xl px-5 pb-20 pt-28">
        <div className="border border-[#222] bg-[#0b0b0b] p-8 md:p-14 glow">
          <div className="section-number">06 / CONTACT</div>
          <h2 className="mt-5 max-w-3xl text-4xl font-black tracking-tight md:text-6xl">
            Let&apos;s build something useful.
          </h2>
          <p className="mt-5 max-w-xl text-neutral-500">
            Interested in collaborating, discussing a project, or connecting? Reach out through the links below.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a className="flex items-center gap-2 border border-[#333] px-4 py-3 text-sm hover:border-[#666]" href="mailto:your-email@example.com">
              <Mail size={16}/> Email
            </a>
            <a className="flex items-center gap-2 border border-[#333] px-4 py-3 text-sm hover:border-[#666]" href="https://github.com/" target="_blank">
              <Github size={16}/> GitHub <ExternalLink size={13}/>
            </a>
            <a className="flex items-center gap-2 border border-[#333] px-4 py-3 text-sm hover:border-[#666]" href="https://www.linkedin.com/" target="_blank">
              <Linkedin size={16}/> LinkedIn <ExternalLink size={13}/>
            </a>
          </div>
        </div>
      </section>

      <footer className="mx-auto flex max-w-6xl flex-col gap-3 border-t border-[#222] px-5 py-8 text-xs text-neutral-600 sm:flex-row sm:items-center sm:justify-between">
        <span>© {new Date().getFullYear()} King Carlos Maale</span>
        <span className="flex items-center gap-2"><Terminal size={13}/> Built with Next.js + TypeScript</span>
      </footer>
    </main>
  );
}