import { Layout } from "@/components/layout/Layout";
import { Video, ArrowLeft, Users, Lightbulb, TrendingUp, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const VideoPage = () => {
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
            <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
              <Video className="h-5 w-5" />
            </div>
            <span className="text-sm font-medium text-muted-foreground">Video Content</span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 max-w-3xl">
            Diversity in Computer Science
          </h1>
          
          <p className="text-muted-foreground max-w-2xl">
            Exploring why diversity matters in technology and how varied perspectives drive innovation in the computing field.
          </p>
        </div>
      </section>

      {/* Video Section */}
      <section className="page-container py-12 sm:py-16">
        <div className="max-w-4xl mx-auto">
          {/* Video Embed */}
          <div className="card-base p-0 overflow-hidden mb-8">
            <video 
              className="w-full aspect-video bg-muted"
              controls
              preload="metadata"
              poster=""
            >
              <source src="/videos/diversity-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          {/* Video Description */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-4">About This Video</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              This video explores the importance of diversity in computer science and technology careers. 
              It highlights how diverse teams create better products, solve problems more effectively, 
              and drive innovation in the tech industry.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              The content addresses common misconceptions about who can succeed in tech and provides 
              inspiring examples of how diverse perspectives have shaped groundbreaking innovations.
            </p>
          </div>

          {/* Key Points */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Key Messages</h2>
            
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="card-base">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                    <Users className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Diverse Teams Excel</h3>
                    <p className="text-muted-foreground text-sm">
                      Research shows that diverse teams outperform homogeneous ones in problem-solving 
                      and innovation, bringing varied perspectives to complex challenges.
                    </p>
                  </div>
                </div>
              </div>

              <div className="card-base">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                    <Lightbulb className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Innovation Through Inclusion</h3>
                    <p className="text-muted-foreground text-sm">
                      Many groundbreaking technologies have emerged from diverse teams that challenged 
                      conventional thinking and brought fresh approaches to old problems.
                    </p>
                  </div>
                </div>
              </div>

              <div className="card-base">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Growing Opportunities</h3>
                    <p className="text-muted-foreground text-sm">
                      The tech industry is actively working to increase representation, creating 
                      more pathways for underrepresented groups to enter and thrive in computing careers.
                    </p>
                  </div>
                </div>
              </div>

              <div className="card-base">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                    <Globe className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Global Impact</h3>
                    <p className="text-muted-foreground text-sm">
                      Technology built by diverse teams better serves global users, ensuring 
                      products are accessible, culturally sensitive, and address varied needs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="card-base bg-primary/5 border-primary/20 text-center">
            <h3 className="text-xl font-semibold mb-3">Everyone Belongs in Tech</h3>
            <p className="text-muted-foreground max-w-lg mx-auto">
              Regardless of background, gender, ethnicity, or experience, there is a place for you in computer science. 
              Your unique perspective is exactly what the industry needs to build better technology for everyone.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default VideoPage;
