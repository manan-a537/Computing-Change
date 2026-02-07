import { Layout } from "@/components/layout/Layout";
import { FileText, ArrowLeft, Download, ExternalLink } from "lucide-react";
import posterImage from "@/assets/poster.jpg";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Poster = () => {
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
              <FileText className="h-5 w-5" />
            </div>
            <span className="text-sm font-medium text-muted-foreground">Research Poster</span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 max-w-3xl">
            Academic Research Poster
          </h1>
          
          <p className="text-muted-foreground max-w-2xl">
            A visual representation of research findings on computing for social good and sustainable technology.
          </p>
        </div>
      </section>

      {/* Poster Content */}
      <section className="page-container py-12 sm:py-16">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Poster Preview */}
            <div className="lg:col-span-2">
              <div className="card-base p-0 overflow-hidden group">
                <div className="relative">
                  <img 
                    src={posterImage} 
                    alt="Computing for Social Good: Leveraging Technology for Sustainable Development - Research Poster"
                    className="w-full h-auto transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-4 bg-muted/30 flex gap-3 justify-center border-t border-border">
                  <Button variant="outline" size="sm" asChild>
                    <a href={posterImage} download="research-poster.jpg">
                      <Download className="mr-2 h-4 w-4" />
                      Download
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <a href={posterImage} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      View Full Size
                    </a>
                  </Button>
                </div>
              </div>
            </div>

            {/* Metadata */}
            <div className="space-y-6">
              {/* Title */}
              <div className="card-base">
                <h3 className="text-sm font-medium text-muted-foreground mb-2">Title</h3>
                <p className="font-semibold">
                  Sustainable Computing: Reducing the Environmental Impact of Digital Technology
                </p>
              </div>

              {/* Abstract */}
              <div className="card-base">
                <h3 className="text-sm font-medium text-muted-foreground mb-2">Abstract</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  This research examines the environmental footprint of modern computing infrastructure 
                  and explores strategies for developing more sustainable technology solutions. Through 
                  analysis of current industry practices and emerging green computing initiatives, 
                  we identify key areas for improvement and propose actionable recommendations.
                </p>
              </div>

              {/* Methodology */}
              <div className="card-base">
                <h3 className="text-sm font-medium text-muted-foreground mb-2">Methodology</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Literature review of academic sources</li>
                  <li>• Analysis of industry sustainability reports</li>
                  <li>• Comparative study of green computing practices</li>
                  <li>• Case study examination of leading tech companies</li>
                </ul>
              </div>

              {/* Key Findings */}
              <div className="card-base">
                <h3 className="text-sm font-medium text-muted-foreground mb-2">Key Findings</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Data centre efficiency has improved 40% in 5 years</li>
                  <li>• Renewable energy adoption varies significantly by region</li>
                  <li>• Software optimisation can reduce energy use by up to 30%</li>
                  <li>• E-waste management remains a critical challenge</li>
                </ul>
              </div>

              {/* Conclusion */}
              <div className="card-base">
                <h3 className="text-sm font-medium text-muted-foreground mb-2">Conclusion</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Sustainable computing requires a multi-faceted approach involving hardware efficiency, 
                  software optimisation, renewable energy adoption, and improved e-waste management. 
                  The technology industry has the tools and responsibility to lead environmental change.
                </p>
              </div>

              {/* Author Info */}
              <div className="card-base bg-muted/50">
                <h3 className="text-sm font-medium text-muted-foreground mb-2">Author</h3>
                <p className="font-medium">Kasib Tanveer</p>
                <p className="text-sm text-muted-foreground">BSc Computer Science</p>
                <p className="text-sm text-muted-foreground">Birmingham Newman University, 2025–2026</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Poster;
