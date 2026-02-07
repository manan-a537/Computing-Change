import { Layout } from "@/components/layout/Layout";
import { 
  ArrowLeft, 
  BookOpen, 
  Code, 
  FileText, 
  CheckCircle2, 
  Users, 
  MessageSquare, 
  Trophy, 
  Rocket,
  GraduationCap,
  Briefcase,
  Target,
  ImageIcon
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const journeySteps = [
  {
    phase: "Foundation",
    title: "Skill Building",
    icon: BookOpen,
    description: "Master the fundamentals that form the backbone of your CS career",
    items: [
      "Data Structures & Algorithms",
      "Core CS subjects (OS, DBMS, Networks, OOP)",
      "Programming languages (Python, Java, C++)",
      "Problem-solving on coding platforms"
    ],
    color: "primary"
  },
  {
    phase: "Application",
    title: "Project Development",
    icon: Code,
    description: "Build real-world projects that showcase your abilities",
    items: [
      "Personal portfolio projects",
      "Open source contributions",
      "Hackathon participation",
      "Technical blog writing"
    ],
    color: "accent"
  },
  {
    phase: "Preparation",
    title: "Internship Prep",
    icon: Target,
    description: "Prepare strategically for internship opportunities",
    items: [
      "Research target companies",
      "Practice mock interviews",
      "Build professional network",
      "Attend career fairs and workshops"
    ],
    color: "primary"
  },
  {
    phase: "Application",
    title: "Resume Shortlisting",
    icon: FileText,
    description: "Craft a compelling resume that gets noticed",
    items: [
      "Optimize for ATS systems",
      "Highlight achievements with metrics",
      "Tailor for each application",
      "Strong LinkedIn profile"
    ],
    color: "accent"
  },
  {
    phase: "Assessment",
    title: "Online Assessments",
    icon: CheckCircle2,
    description: "Excel in technical screening rounds",
    items: [
      "Coding challenges (LeetCode, HackerRank)",
      "MCQ-based aptitude tests",
      "Time management strategies",
      "Practice under exam conditions"
    ],
    color: "primary"
  },
  {
    phase: "Interview",
    title: "Technical Interviews",
    icon: Users,
    description: "Demonstrate your technical expertise",
    items: [
      "DSA problem-solving",
      "System design discussions",
      "Code review exercises",
      "Technical project deep-dives"
    ],
    color: "accent"
  },
  {
    phase: "Final Round",
    title: "HR Interviews",
    icon: MessageSquare,
    description: "Showcase your personality and cultural fit",
    items: [
      "Behavioral questions (STAR method)",
      "Salary negotiation skills",
      "Company culture alignment",
      "Ask thoughtful questions"
    ],
    color: "primary"
  },
  {
    phase: "Success",
    title: "Offer & Onboarding",
    icon: Trophy,
    description: "Celebrate your success and prepare for Day 1",
    items: [
      "Review and negotiate offer",
      "Complete documentation",
      "Pre-joining preparation",
      "Start your professional journey!"
    ],
    color: "accent"
  }
];

const PlacementJourney = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  
  // Placeholder images - user can replace these
  const galleryImages = [
    { id: 1, placeholder: true, caption: "Upload your placement journey photo" },
    { id: 2, placeholder: true, caption: "Add interview preparation moments" },
    { id: 3, placeholder: true, caption: "Share your success story" },
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="hero-section relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        <div className="page-container py-12 sm:py-16 relative">
          <Button asChild variant="ghost" size="sm" className="mb-6">
            <Link to="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>
          
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent text-primary-foreground flex items-center justify-center">
              <Rocket className="h-5 w-5" />
            </div>
            <span className="text-sm font-medium text-muted-foreground">Career Guide</span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 max-w-3xl">
            Your Placement Journey
          </h1>
          
          <p className="text-muted-foreground max-w-2xl text-lg">
            A comprehensive roadmap for Computer Science students to navigate the placement process—from skill building to landing your dream offer.
          </p>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            {[
              { icon: GraduationCap, label: "Skill Building", value: "6+ months" },
              { icon: Briefcase, label: "Internships", value: "2-3 recommended" },
              { icon: Target, label: "Applications", value: "50+ ideal" },
              { icon: Trophy, label: "Success Rate", value: "High with prep" },
            ].map((stat, index) => (
              <div key={index} className="card-base text-center py-4 px-3">
                <stat.icon className="h-6 w-6 text-primary mx-auto mb-2" />
                <p className="text-xs text-muted-foreground">{stat.label}</p>
                <p className="text-sm font-semibold">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="page-container py-12 sm:py-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-12">
            The Complete Placement Roadmap
          </h2>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary transform md:-translate-x-1/2" />
            
            {/* Journey Steps */}
            <div className="space-y-8 md:space-y-12">
              {journeySteps.map((step, index) => {
                const isEven = index % 2 === 0;
                const IconComponent = step.icon;
                
                return (
                  <div 
                    key={index} 
                    className={`relative flex items-start gap-4 md:gap-8 ${
                      isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                    }`}
                  >
                    {/* Timeline node */}
                    <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 z-10">
                      <div className={`w-8 h-8 rounded-full bg-${step.color} text-${step.color}-foreground flex items-center justify-center shadow-lg`}>
                        <span className="text-xs font-bold">{index + 1}</span>
                      </div>
                    </div>
                    
                    {/* Content card */}
                    <div className={`ml-12 md:ml-0 md:w-[calc(50%-2rem)] ${isEven ? 'md:pr-8' : 'md:pl-8'}`}>
                      <div className="card-base group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                        <div className="flex items-start gap-4">
                          <div className={`w-12 h-12 rounded-xl bg-${step.color}/10 text-${step.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                            <IconComponent className="h-6 w-6" />
                          </div>
                          <div className="flex-1">
                            <span className={`text-xs font-semibold text-${step.color} uppercase tracking-wider`}>
                              {step.phase}
                            </span>
                            <h3 className="text-lg font-bold mt-1">{step.title}</h3>
                            <p className="text-sm text-muted-foreground mt-1">{step.description}</p>
                          </div>
                        </div>
                        
                        <ul className="mt-4 space-y-2">
                          {step.items.map((item, itemIndex) => (
                            <li key={itemIndex} className="flex items-center gap-2 text-sm">
                              <CheckCircle2 className={`h-4 w-4 text-${step.color} flex-shrink-0`} />
                              <span className="text-muted-foreground">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    {/* Empty space for opposite side */}
                    <div className="hidden md:block md:w-[calc(50%-2rem)]" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Image Gallery Section */}
      <section className="bg-muted/30 py-12 sm:py-16">
        <div className="page-container">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl font-bold mb-3">My Journey Gallery</h2>
              <p className="text-muted-foreground">
                Capturing moments from my placement preparation and success
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {galleryImages.map((image) => (
                <div 
                  key={image.id}
                  className="card-base p-0 overflow-hidden group cursor-pointer"
                  onClick={() => setSelectedImage(image.id)}
                >
                  <div className="aspect-[4/3] bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center relative overflow-hidden">
                    {image.placeholder ? (
                      <div className="text-center p-6">
                        <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                          <ImageIcon className="h-8 w-8" />
                        </div>
                        <p className="text-sm text-muted-foreground">{image.caption}</p>
                      </div>
                    ) : (
                      <>
                        <img 
                          src="" 
                          alt={image.caption}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <span className="text-white text-sm font-medium">View</span>
                        </div>
                      </>
                    )}
                  </div>
                  <div className="p-4 border-t border-border">
                    <p className="text-sm text-center text-muted-foreground">
                      {image.caption}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
            <p className="text-center text-xs text-muted-foreground mt-6">
              Replace the placeholders above with your actual journey images
            </p>
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="page-container py-12 sm:py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">Pro Tips for Success</h2>
          
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              {
                title: "Start Early",
                description: "Begin your preparation at least 6 months before placement season. Consistency beats intensity."
              },
              {
                title: "Practice Daily",
                description: "Solve at least 2-3 coding problems daily. Quality practice builds problem-solving intuition."
              },
              {
                title: "Build Projects",
                description: "Real-world projects demonstrate practical skills better than certifications alone."
              },
              {
                title: "Network Actively",
                description: "Connect with alumni, attend tech meetups, and engage with the developer community."
              },
            ].map((tip, index) => (
              <div key={index} className="card-base hover:shadow-md transition-shadow">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-accent/10 text-accent flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{tip.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{tip.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PlacementJourney;
