import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { ThemeCard } from "@/components/ui/theme-card";
import { Button } from "@/components/ui/button";
import { 
  Leaf, 
  Users, 
  Heart, 
  UserCheck, 
  ArrowRight, 
  BookOpen, 
  Video, 
  FileText, 
  BarChart3,
  Lightbulb
} from "lucide-react";

const themes = [
  {
    icon: Leaf,
    title: "Sustainability",
    description: "Exploring how computer science can address environmental challenges through green computing and sustainable technology practices.",
    color: "accent" as const,
  },
  {
    icon: Users,
    title: "Diversity",
    description: "Examining the importance of diverse perspectives in technology and how varied backgrounds drive innovation in computing.",
    color: "primary" as const,
  },
  {
    icon: Heart,
    title: "Inclusion",
    description: "Understanding how inclusive design and accessible technology can create equitable solutions for all users.",
    color: "primary" as const,
  },
  {
    icon: UserCheck,
    title: "Women in CS",
    description: "Celebrating the contributions of women in computer science and addressing the gender gap in technology fields.",
    color: "accent" as const,
  },
];

const sections = [
  {
    icon: BookOpen,
    title: "Sustainability Blog",
    description: "Written analysis of environmental challenges in computing",
    path: "/blog",
  },
  {
    icon: Video,
    title: "Diversity Video",
    description: "Video content promoting diversity in computer science",
    path: "/video",
  },
  {
    icon: FileText,
    title: "Research Poster",
    description: "Academic poster on computing research topic",
    path: "/poster",
  },
  {
    icon: BarChart3,
    title: "Infographic",
    description: "Visual representation of women in CS statistics",
    path: "/infographic",
  },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="page-container section-spacing">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 animate-fade-in">
              <Leaf className="h-4 w-4" />
              Academic Portfolio 2025–2026
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-balance animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              Computing for Change
            </h1>
            
            <p className="text-xl sm:text-2xl text-muted-foreground mb-4 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              Sustainability, Diversity & Inclusion in Computer Science
            </p>
            
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
              This e-portfolio explores how computer science intersects with critical societal challenges. 
              Through research, visual content, and reflection, I examine how technology professionals 
              can drive positive change in sustainability, foster diversity, and build inclusive digital solutions.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
              <Button asChild size="lg">
                <Link to="/blog">
                  Start Reading
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/poster">View Research</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Themes Section */}
      <section className="page-container section-spacing">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Key Themes</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            This portfolio addresses four interconnected themes that are shaping the future of computer science.
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {themes.map((theme, index) => (
            <div 
              key={theme.title} 
              className="animate-fade-in-up" 
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ThemeCard {...theme} />
            </div>
          ))}
        </div>
      </section>

      {/* Portfolio Sections */}
      <section className="bg-muted/30">
        <div className="page-container section-spacing">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Explore the Portfolio</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Navigate through different sections to discover research, insights, and creative content on computing for positive impact.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {sections.map((section, index) => (
              <Link
                key={section.path}
                to={section.path}
                className="card-base group hover:-translate-y-1 flex items-start gap-4 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                  <section.icon className="h-5 w-5" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold mb-1 group-hover:text-primary transition-colors">
                    {section.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{section.description}</p>
                </div>
                <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all flex-shrink-0" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Reflection Section */}
      <section className="page-container section-spacing">
        <div className="max-w-3xl mx-auto">
          <div className="card-base border-l-4 border-l-primary">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                <Lightbulb className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Personal Reflection</h3>
                <div className="text-muted-foreground space-y-3 leading-relaxed">
                  <p>
                    Working on this portfolio has deepened my understanding of computer science beyond pure technical skills. 
                    I have learned that technology does not exist in isolation—it shapes and is shaped by society, environment, 
                    and the diverse people who create and use it.
                  </p>
                  <p>
                    Through researching sustainability challenges, I now appreciate how computing decisions impact energy consumption 
                    and environmental outcomes. Exploring diversity and inclusion has shown me that better representation leads to 
                    better technology that serves everyone. The history of women in computing has inspired me to advocate for 
                    equitable opportunities in the field.
                  </p>
                  <p>
                    This project has reinforced my commitment to becoming a responsible computer scientist who considers 
                    the broader implications of technology and works toward positive change.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
