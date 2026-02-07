import { Layout } from "@/components/layout/Layout";
import { BarChart3, ArrowLeft, Users, Award, TrendingUp, Heart, Briefcase, GraduationCap } from "lucide-react";
import infographicImage from "@/assets/infographic.png";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const stats = [
  {
    value: "28%",
    label: "of computing workforce are women",
    icon: Users,
  },
  {
    value: "21%",
    label: "of CS graduates are female",
    icon: GraduationCap,
  },
  {
    value: "11%",
    label: "of tech executives are women",
    icon: Briefcase,
  },
  {
    value: "50%",
    label: "of women leave tech by mid-career",
    icon: TrendingUp,
  },
];

const pioneers = [
  {
    name: "Ada Lovelace",
    contribution: "First computer programmer, wrote algorithms for Charles Babbage's Analytical Engine (1840s)",
  },
  {
    name: "Grace Hopper",
    contribution: "Developed COBOL and pioneered the concept of machine-independent programming languages",
  },
  {
    name: "Katherine Johnson",
    contribution: "NASA mathematician whose calculations were critical to early space missions",
  },
  {
    name: "Margaret Hamilton",
    contribution: "Led the team that developed Apollo flight software, coined 'software engineering'",
  },
];

const challenges = [
  "Unconscious bias in hiring and promotion",
  "Lack of visible role models and mentors",
  "Hostile work environments and microaggressions",
  "Unequal pay for equivalent work",
  "Limited access to networking opportunities",
  "Work-life balance pressures",
];

const Infographic = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="hero-section">
        <div className="page-container py-12 sm:py-16">
          <Button asChild variant="ghost" size="sm" className="mb-6">
            <Link to="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>
          
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-accent/10 text-accent flex items-center justify-center">
              <BarChart3 className="h-5 w-5" />
            </div>
            <span className="text-sm font-medium text-muted-foreground">Infographic</span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 max-w-3xl">
            Women in Computer Science
          </h1>
          
          <p className="text-muted-foreground max-w-2xl">
            A visual exploration of the representation, challenges, and contributions of women in the computing field.
          </p>
        </div>
      </section>

      {/* Infographic Content */}
      <section className="page-container py-12 sm:py-16">
        <div className="max-w-5xl mx-auto space-y-12">
          
          {/* Statistics Section */}
          <div>
            <h2 className="text-2xl font-bold mb-6 text-center">Current Statistics</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="card-base text-center">
                  <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="h-6 w-6" />
                  </div>
                  <p className="text-3xl font-bold text-primary mb-2">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Pioneers Section */}
          <div>
            <h2 className="text-2xl font-bold mb-6 text-center">Pioneering Women in Computing</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {pioneers.map((pioneer, index) => (
                <div key={index} className="card-base">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-accent/10 text-accent flex items-center justify-center flex-shrink-0">
                      <Award className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{pioneer.name}</h3>
                      <p className="text-sm text-muted-foreground">{pioneer.contribution}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Timeline Visual */}
          <div className="card-base">
            <h2 className="text-xl font-bold mb-6 text-center">Historical Timeline</h2>
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-border" />
              
              <div className="space-y-8">
                {[
                  { year: "1843", event: "Ada Lovelace writes first computer algorithm" },
                  { year: "1945", event: "ENIAC programmed by six women mathematicians" },
                  { year: "1959", event: "Grace Hopper develops COBOL language" },
                  { year: "1969", event: "Margaret Hamilton's code lands Apollo 11" },
                  { year: "1984", event: "Peak: 37% of CS degrees went to women" },
                  { year: "2024", event: "Industry initiatives aim to close the gap" },
                ].map((item, index) => (
                  <div key={index} className={`flex items-center gap-4 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                    <div className={`flex-1 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                      <p className="font-semibold text-primary">{item.year}</p>
                      <p className="text-sm text-muted-foreground">{item.event}</p>
                    </div>
                    <div className="w-4 h-4 rounded-full bg-primary border-4 border-background z-10" />
                    <div className="flex-1" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Challenges Section */}
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="card-base">
              <h2 className="text-xl font-bold mb-4">Current Challenges</h2>
              <ul className="space-y-3">
                {challenges.map((challenge, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-destructive mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground text-sm">{challenge}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="card-base bg-accent/5 border-accent/20">
              <h2 className="text-xl font-bold mb-4">Moving Forward</h2>
              <div className="space-y-4 text-sm text-muted-foreground">
                <p>
                  Addressing the gender gap in computer science requires systemic change at all levels—from 
                  early education to corporate leadership.
                </p>
                <p>
                  Key initiatives include mentorship programmes, inclusive hiring practices, family-friendly 
                  workplace policies, and visibility campaigns showcasing diverse role models.
                </p>
                <p>
                  When women thrive in technology, everyone benefits from more innovative, inclusive, and 
                  equitable products and services.
                </p>
              </div>
              <div className="mt-6 flex items-center gap-2 text-accent">
                <Heart className="h-5 w-5" />
                <span className="text-sm font-medium">Everyone belongs in tech</span>
              </div>
            </div>
          </div>

          {/* Full Infographic Image */}
          <div className="card-base p-0 overflow-hidden group">
            <h2 className="text-2xl font-bold p-6 pb-4 text-center">Complete Infographic</h2>
            <div className="relative">
              <img 
                src={infographicImage} 
                alt="Women in Computer Science - Importance of Gender Diversity: Driving Innovation, Inclusion, and Ethical Computing"
                className="w-full h-auto transition-transform duration-500 group-hover:scale-[1.01]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </div>

        </div>
      </section>
    </Layout>
  );
};

export default Infographic;
