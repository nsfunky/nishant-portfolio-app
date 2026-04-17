import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FolderGit2, 
  UserCircle, 
  Mail, 
  ChevronRight, 
  Brain, 
  Code, 
  Cloud, 
  Database, 
  Briefcase, 
  User, 
  Lightbulb, 
  Rocket, 
  Layout, 
  Terminal,
  Activity,
  Award,
  Globe,
  Phone,
  MapPin
} from 'lucide-react';

const FadeIn = ({ children, delay = 0, className = "" }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.6, delay }}
    className={className}
  >
    {children}
  </motion.div>
);

const SectionHeading = ({ icon: Icon, title, subtitle }) => (
  <div className="mb-12 cursor-default">
    <div className="flex items-center gap-3 mb-2">
      {Icon && <Icon className="text-brand-primary w-6 h-6" />}
      <h2 className="text-3xl font-bold text-dark-text tracking-tight">{title}</h2>
    </div>
    {subtitle && <p className="text-dark-muted text-lg max-w-2xl">{subtitle}</p>}
  </div>
);

export default function App() {
  const [activeTab, setActiveTab] = useState('andrew');

  const tabs = [
    { id: 'andrew', title: 'Andrew Ng' },
    { id: 'dario', title: 'Dario Amodei' },
    { id: 'sundar', title: 'Sundar Pichai' },
    { id: 'plan', title: 'My Execution Plan' },
  ];

  return (
    <div className="min-h-screen bg-dark-bg selection:bg-brand-primary/30">
      {/* Background ambient glowing spheres */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-brand-primary/10 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-brand-secondary/10 blur-[120px]" />
      </div>

      {/* Navigation (Sticky) */}
      <nav className="sticky top-0 z-50 glass-card rounded-none border-t-0 border-l-0 border-r-0 px-6 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="text-xl font-bold tracking-tight">NK<span className="text-brand-primary">.</span></div>
          <div className="flex items-center gap-6">
            <a href="https://www.linkedin.com/in/nishant-kumar-5661b9123/" className="text-dark-muted hover:text-white transition-colors"><UserCircle className="w-5 h-5" /></a>
            <a href="https://github.com/nsfunky" className="text-dark-muted hover:text-white transition-colors"><FolderGit2 className="w-5 h-5" /></a>
            <a href="mailto:kumar7.nishant@gmail.com" className="text-dark-muted hover:text-white transition-colors"><Mail className="w-5 h-5" /></a>
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-6 py-20 flex flex-col gap-32">
        
        {/* 1. HEADER SECTION */}
        <section className="pt-10 flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1 space-y-8">
            <motion.div 
              initial={{ opacity: 0, x: -30 }} 
              animate={{ opacity: 1, x: 0 }} 
              transition={{ duration: 0.8 }}
            >
              <div className="inline-block px-4 py-1.5 rounded-full glass-card text-brand-secondary text-sm font-medium mb-6">
                Available for Architecture Roles
              </div>
              <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white to-dark-muted">
                Nishant Kumar
              </h1>
              <p className="text-xl md:text-2xl font-medium text-brand-primary mb-6 flex flex-col sm:flex-row sm:flex-wrap gap-1 md:gap-3">
                <span>Salesforce Developer | Product Engineer</span>
                <span className="hidden sm:inline text-dark-muted">|</span>
                <span className="text-dark-text">Building Scalable Systems with AI</span>
              </p>
              
              <div className="flex flex-wrap items-center gap-6 mb-8 bg-dark-surface/40 p-4 rounded-xl border border-dark-border/50 inline-flex">
                <a href="tel:8237976501" className="flex items-center gap-2.5 text-dark-text hover:text-white transition-colors text-sm font-medium">
                  <div className="p-2 rounded-full bg-brand-primary/10 text-brand-primary">
                    <Phone className="w-4 h-4" />
                  </div>
                  +91 8237976501
                </a>
                <a href="mailto:kumar7.nishant@gmail.com" className="flex items-center gap-2.5 text-dark-text hover:text-white transition-colors text-sm font-medium">
                  <div className="p-2 rounded-full bg-brand-secondary/10 text-brand-secondary">
                    <Mail className="w-4 h-4" />
                  </div>
                  kumar7.nishant@gmail.com
                </a>
                <div className="flex items-center gap-2.5 text-dark-text text-sm font-medium">
                  <div className="p-2 rounded-full bg-purple-500/10 text-purple-500">
                    <MapPin className="w-4 h-4" />
                  </div>
                  Pune, India
                </div>
              </div>

              <p className="text-dark-muted text-lg leading-relaxed max-w-2xl border-l-2 border-brand-primary/50 pl-4">
                "A developer growing with the industry, actively learning and integrating AI technologies into enterprise solutions. Experienced across multiple frameworks, platforms, and real-world system design."
              </p>
            </motion.div>
          </div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-shrink-0 flex justify-center w-full md:w-auto"
          >
            <div className="w-[280px] md:w-[340px] aspect-[9/16] rounded-[2.5rem] overflow-hidden glass-card p-2.5 relative group shadow-2xl shadow-brand-primary/20">
              <div className="w-full h-full bg-dark-bg rounded-[2rem] flex items-center justify-center relative overflow-hidden group-hover:scale-[1.01] transition-transform duration-500 shadow-inner">
                <img src="/profile.jpg" alt="Nishant Kumar" className="w-full h-full object-cover object-center relative z-10" onError={(e) => { e.currentTarget.style.opacity = 0; }} />
                <User className="w-24 h-24 text-dark-muted/50 absolute" />
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-dark-bg to-transparent z-20 pointer-events-none opacity-40"></div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* 2. HERO STORY */}
        <section>
          <FadeIn>
            <div className="glass-card p-10 md:p-14 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-5">
                <Brain className="w-64 h-64" />
              </div>
              <SectionHeading icon={Globe} title="The Journey To Systems Thinking" subtitle="Evolving beyond code into an architecture-first mindset." />
              <div className="space-y-6 text-lg text-dark-muted relative z-10 max-w-3xl">
                <p>
                  My career started at the intersection of raw enterprise logic and fast-paced delivery. Beginning as a <strong>Java and Salesforce Developer</strong>, I spent years mastering the intricate depths of Apex, Lightning Web Components (LWC), robust system integrations, and high-volume data automations.
                </p>
                <p>
                  But writing code was only the first chapter. Realizing that the most significant challenges lie in <em>how</em> systems interact, I transitioned into a <strong>Systems Thinker</strong>. I began visualizing the platform holistically—focusing on architecture, trigger frameworks, and robust API design that prevent technical debt before it's written.
                </p>
                <p className="text-white font-medium">
                  Today, I am evolving into an AI-driven product engineer. I don't just build solutions; I architect intelligent, scalable foundations that leverage large language models and modern automation tools to bring enterprise systems into the AI era.
                </p>
              </div>
            </div>
          </FadeIn>
        </section>

        {/* 3. SKILLS & TECHNOLOGY STACK */}
        <section>
          <FadeIn>
            <SectionHeading icon={Terminal} title="Technical Arsenal" subtitle="The platforms and frameworks I use to bring ideas to reality." />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Cloud, name: 'Salesforce', items: ['Apex & Triggers', 'LWC & Aura', 'Experience Cloud', 'Flows & Automation'] },
                { icon: Database, name: 'Backend & Core', items: ['Java', 'REST / SOAP APIs', 'Microservices', 'System Integration'] },
                { icon: Activity, name: 'QA Automation', items: ['Selenium', 'Cucumber', 'TestNG', 'CI/CD Pipelines'] },
                { icon: Brain, name: 'AI & Cloud', items: ['Claude & OpenAI API', 'n8n Workflows', 'AWS Fundamentals', 'Prompt Engineering'] },
              ].map((category, idx) => (
                <div key={idx} className="glass-card p-6 group hover:border-brand-primary/50 transition-colors">
                  <category.icon className="w-8 h-8 text-brand-primary mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-bold text-white mb-4">{category.name}</h3>
                  <ul className="space-y-2">
                    {category.items.map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-dark-muted">
                        <ChevronRight className="w-4 h-4 text-brand-secondary" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </FadeIn>
        </section>

        {/* 4. PROJECTS */}
        <section>
          <SectionHeading icon={Code} title="Flagship Projects" subtitle="A showcase of solving complex enterprise problems through structured engineering." />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Enterprise LWC Migration',
                problem: 'Legacy Aura and Visualforce components causing severe performance bottlenecks and poor user adoption.',
                solution: 'Architected a complete phase-by-phase migration to Lightning Web Components, establishing reusable base components.',
                tech: ['LWC', 'Apex', 'Lightning Data Service'],
                arch: 'Event-driven communication to minimize DOM rendering overhead.'
              },
              {
                title: 'Unified Trigger Framework',
                problem: 'Spaghetti trigger logic causing recursive saves, DML limits, and impossible debugging loops.',
                solution: 'Implemented a scalable, centralized Trigger Handler framework applying the Strategy Pattern to decouple logic.',
                tech: ['Apex', 'Design Patterns', 'Limits Class'],
                arch: 'Singular entry point per object with context-aware routing and bypass capabilities.'
              },
              {
                title: 'AI + Salesforce Support Agent',
                problem: 'High volume of level-1 support tickets overwhelming agents, leading to slow response times.',
                solution: 'Integrated Claude via REST API into a Salesforce Flow to read incoming cases, categorize them, and suggest draft responses to agents.',
                tech: ['Salesforce flows', 'Anthropic API', 'REST Callouts'],
                arch: 'Asynchronous external callouts linked to a review-and-approve UI for safe human-in-the-loop AI.'
              },
              {
                title: 'E2E Validation Framework',
                problem: 'Manual testing of complex multi-system workflows taking weeks per release cycle.',
                solution: 'Built a robust BDD testing suite using Selenium and Cucumber, automating critical path regressions.',
                tech: ['Selenium', 'Java', 'Cucumber', 'Page Object Model'],
                arch: 'Data-driven testing architecture decoupling locators from test logic for low maintenance.'
              }
            ].map((project, idx) => (
              <FadeIn key={idx} delay={idx * 0.1}>
                <div className="glass-card p-8 h-full flex flex-col relative group overflow-hidden">
                  <div className="absolute top-0 left-0 w-1 h-full bg-brand-primary transform origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-300"></div>
                  <h3 className="text-2xl font-bold text-white mb-4">{project.title}</h3>
                  <div className="space-y-4 flex-1">
                    <div>
                      <span className="text-brand-secondary text-sm font-semibold uppercase tracking-wider block mb-1">Problem</span>
                      <p className="text-dark-muted text-sm">{project.problem}</p>
                    </div>
                    <div>
                      <span className="text-brand-primary text-sm font-semibold uppercase tracking-wider block mb-1">Architecture Note</span>
                      <p className="text-dark-text text-sm border-l-2 border-dark-border pl-3 mt-1 italic">{project.arch}</p>
                    </div>
                    <div>
                      <span className="text-brand-secondary text-sm font-semibold uppercase tracking-wider block mb-1">Solution</span>
                      <p className="text-dark-muted text-sm">{project.solution}</p>
                    </div>
                  </div>
                  <div className="mt-6 pt-4 border-t border-dark-border flex flex-wrap gap-2">
                    {project.tech.map((t, i) => (
                      <span key={i} className="px-3 py-1 bg-dark-bg border border-dark-border rounded-md text-xs font-medium text-dark-text">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </section>

        {/* 5. PERSONAL MENTOR BOARD (TAB BASED UI) */}
        <section>
          <FadeIn>
            <SectionHeading icon={Lightbulb} title="My Mentor Board" subtitle="The leadership philosophies and models that shape my engineering principles." />
            <div className="glass-card overflow-hidden">
              <div className="flex overflow-x-auto border-b border-dark-border no-scrollbar">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-8 py-4 text-sm font-medium whitespace-nowrap transition-colors relative ${
                      activeTab === tab.id ? 'text-white' : 'text-dark-muted hover:text-white'
                    }`}
                  >
                    {tab.title}
                    {activeTab === tab.id && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-primary"
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </button>
                ))}
              </div>
              <div className="p-8 min-h-[300px]">
                <AnimatePresence mode="wait">
                  {activeTab === 'andrew' && (
                    <motion.div key="andrew" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="space-y-6">
                      <h3 className="text-2xl font-bold text-white flex items-center gap-3"><Award className="text-brand-secondary" /> Andrew Ng's Philosophy</h3>
                      <div className="grid md:grid-cols-2 gap-8">
                        <div>
                          <h4 className="text-brand-primary mb-2 font-semibold">What I Learn</h4>
                          <p className="text-dark-muted">The democratization of AI. The concept of agentic workflows—breaking complex tasks down iteratively, allowing systems to reflect, use tools, and loop toward success rather than relying on one perfect zero-shot prompt.</p>
                        </div>
                        <div>
                          <h4 className="text-brand-primary mb-2 font-semibold">Practical Application</h4>
                          <p className="text-dark-muted">Applying reflection and iterative chains in my backend API integrations. Moving away from rigid step-by-step code and towards building modular components that can adapt to varying data states inside Salesforce.</p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                  {activeTab === 'dario' && (
                    <motion.div key="dario" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="space-y-6">
                      <h3 className="text-2xl font-bold text-white flex items-center gap-3"><Activity className="text-brand-secondary" /> Dario Amodei's Principles</h3>
                      <div className="grid md:grid-cols-2 gap-8">
                        <div>
                          <h4 className="text-brand-primary mb-2 font-semibold">What I Learn</h4>
                          <p className="text-dark-muted">The importance of scaling laws, alignment, and "harmlessness." Building powerful systems that are inherently transparent, controlled, and safe for enterprise use without sacrificing utility.</p>
                        </div>
                        <div>
                          <h4 className="text-brand-primary mb-2 font-semibold">Practical Application</h4>
                          <p className="text-dark-muted">When designing AI integrations for clientCRMs, I prioritize "Human in the Loop" (HITL) workflows. My architectures ensure AI drafts and suggests, while the ultimate state change always requires human validation to guarantee safety and compliance.</p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                  {activeTab === 'sundar' && (
                    <motion.div key="sundar" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="space-y-6">
                      <h3 className="text-2xl font-bold text-white flex items-center gap-3"><Globe className="text-brand-secondary" /> Sundar Pichai's Vision</h3>
                      <div className="grid md:grid-cols-2 gap-8">
                        <div>
                          <h4 className="text-brand-primary mb-2 font-semibold">What I Learn</h4>
                          <p className="text-dark-muted">An "AI-First" organizational approach. Seamlessly embedding intelligence into everyday tools such that the complexity vanishes, leaving only maximum user utility and massive scale platforms.</p>
                        </div>
                        <div>
                          <h4 className="text-brand-primary mb-2 font-semibold">Practical Application</h4>
                          <p className="text-dark-muted">Designing Salesforce LWC interfaces that feel intuitive and anticipate the user's next action. Prioritizing performance (load times, DOM optimization) so that the underlying complex integrations feel like magic to the end user.</p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                  {activeTab === 'plan' && (
                    <motion.div key="plan" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="space-y-6">
                      <h3 className="text-2xl font-bold text-white flex items-center gap-3"><Rocket className="text-brand-secondary" /> My Execution Plan</h3>
                      <div className="space-y-4">
                        <div className="glass-card p-4 bg-dark-surface/30 border-l-4 border-l-brand-primary">
                          <h4 className="text-white font-bold mb-1">Short-term</h4>
                          <p className="text-dark-muted text-sm">Deepen AI & Salesforce integrations. Master n8n for agentic workflows and build reusable REST frameworks inside Apex to connect with Anthropic/OpenAI seamlessly.</p>
                        </div>
                        <div className="glass-card p-4 bg-dark-surface/30 border-l-4 border-l-brand-secondary">
                          <h4 className="text-white font-bold mb-1">Mid-term</h4>
                          <p className="text-dark-muted text-sm">Formalize my role into Architecture Design. Lead large scale transformations, focusing on decoupled services, event-driven architectures, and building intelligence into the data layer.</p>
                        </div>
                        <div className="glass-card p-4 bg-dark-surface/30 border-l-4 border-l-purple-500">
                          <h4 className="text-white font-bold mb-1">Long-term</h4>
                          <p className="text-dark-muted text-sm">Grow into AI & Platform Leadership. Oversee the development of proprietary intelligent automation platforms for enterprise, combining software engineering with AI capabilities.</p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </FadeIn>
        </section>

        {/* 6. EXPERIENCE TIMELINE */}
        <section>
          <FadeIn>
            <SectionHeading icon={Briefcase} title="Career Timeline" subtitle="A structured growth from raw execution to strategic engineering." />
            <div className="relative border-l border-dark-border ml-4 md:ml-6 space-y-12 pb-8">
              {[
                {
                  role: 'Senior Salesforce Developer & AI Engineer',
                  company: 'Compucom Systems',
                  time: '2022 - Present',
                  contributions: [
                    'Architected core system integrations between Salesforce and internal microservices via REST.',
                    'Mentored junior developers and instituted code review standards and trigger frameworks.',
                    'Led the migration of legacy visualforce apps to LWC, improving performance by 40%.'
                  ]
                },
                {
                  role: 'Salesforce Developer',
                  company: 'NortonLifeLock (Now Gen Digital)',
                  time: '2019 - 2022',
                  contributions: [
                    'Delivered End-to-End custom applications using Apex and LWC for diverse client domains.',
                    'Implemented complex data-migration and bulk API strategies for transferring legacy data.',
                    'Developed comprehensive automated test suites dropping regression defects significantly.'
                  ]
                },
                {
                  role: 'Senior Java Developer - Applications Specialist',
                  company: 'Symantec',
                  time: '2017 - 2019',
                  contributions: [
                    'Built robust backend services using Java and Spring Boot.',
                    'Developed automation frameworks from scratch using Selenium and Cucumber for enterprise web portals.'
                  ]
                },
                {
                  role: 'Senior Java Developer - Product Development',
                  company: 'Harman',
                  time: '2015 - 2017',
                  contributions: [
                    'Worked with Harman as a Senior Java Developer in Product Development to build robust app solutions.',
                    'Developed and maintained highly scalable solutions including Vuclip, DeployNow, TestNow, etc.'
                  ]
                }
              ].map((exp, idx) => (
                <div key={idx} className="relative pl-8 md:pl-12">
                  <div className="absolute -left-2 top-1.5 w-4 h-4 rounded-full bg-dark-bg border-2 border-brand-primary"></div>
                  <div className="glass-card p-6 lg:w-3/4">
                    <span className="text-xs font-bold text-brand-secondary tracking-widest uppercase mb-2 block">{exp.time}</span>
                    <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                    <h4 className="text-brand-primary text-sm font-medium mb-4">{exp.company}</h4>
                    <ul className="space-y-2">
                      {exp.contributions.map((point, i) => (
                        <li key={i} className="flex items-start gap-2 text-dark-muted text-sm">
                          <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-dark-border flex-shrink-0"></div>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </section>

        {/* 7. FUTURE VISION SECTION */}
        <section className="pb-20">
          <FadeIn>
            <div className="glass-card p-10 md:p-16 text-center relative overflow-hidden bg-gradient-to-b from-dark-surface to-dark-bg">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMSIgZmlsbD0iIzRmNTk3NSIvPjwvc3ZnPg==')] opacity-30"></div>
              <div className="relative z-10 max-w-3xl mx-auto space-y-6">
                <Rocket className="w-16 h-16 text-brand-secondary mx-auto mb-6" />
                <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">Where I'm Heading</h2>
                <p className="text-xl text-dark-muted leading-relaxed">
                  The future of software is not just about writing syntax; it's about <strong className="text-white">curating intelligence</strong>. 
                </p>
                <div className="grid md:grid-cols-2 gap-6 mt-10 text-left">
                  <div className="bg-dark-bg/50 p-6 rounded-xl border border-dark-border">
                    <h4 className="text-white font-bold mb-2 flex items-center gap-2"><Layout className="w-5 h-5 text-brand-primary" /> Scalable Architecture</h4>
                    <p className="text-sm text-dark-muted">Designing decoupled, robust, and lightning-fast enterprise architectures that effortlessly handle the data pipelines required for the next generation of applications.</p>
                  </div>
                  <div className="bg-dark-bg/50 p-6 rounded-xl border border-dark-border">
                    <h4 className="text-white font-bold mb-2 flex items-center gap-2"><Brain className="w-5 h-5 text-brand-secondary" /> AI-Powered Systems</h4>
                    <p className="text-sm text-dark-muted">Moving beyond traditional logic structures to embed agentic intelligence natively within workflows, drastically accelerating operational efficiency.</p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </section>
      </main>

      <footer className="border-t border-dark-border/50 py-8 text-center text-dark-muted text-sm">
        <p>© {new Date().getFullYear()} Nishant Kumar. Executing ideas into scalable reality.</p>
      </footer>
    </div>
  );
}
