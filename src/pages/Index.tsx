import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Package, Sparkles, Heart } from "lucide-react";
import { kits } from "@/data/products";
import heroImage from "@/assets/hero-main.jpg";
import studyKitImage from "@/assets/study-kit-hero.jpg";
import skincareKitImage from "@/assets/skincare-kit-hero.jpg";
import travelKitImage from "@/assets/travel-kit-hero.jpg";

const kitImages = {
  study: studyKitImage,
  skincare: skincareKitImage,
  travel: travelKitImage,
};

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                Build Your Perfect{" "}
                <span className="text-primary">Product Kit</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Create customized bundles tailored to your lifestyle. Whether it's study essentials, 
                skincare routines, or travel gear - we help you craft the perfect kit.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/build">
                  <Button size="lg" className="w-full sm:w-auto group">
                    Start Building Your Kit
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link to="/about">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <img
                src={heroImage}
                alt="Custom product bundles"
                className="rounded-2xl card-soft w-full"
              />
              <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground px-4 py-2 rounded-lg font-semibold shadow-lg">
                100% Customizable
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4">
              Why Choose BundleCraft?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We make it easy to discover and bundle products that work perfectly together
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-8 text-center card-soft border-0 hover:scale-105 transition-smooth">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Package className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Curated Products</h3>
              <p className="text-muted-foreground">
                Every product is carefully selected for quality and compatibility with others in the kit.
              </p>
            </Card>

            <Card className="p-8 text-center card-soft border-0 hover:scale-105 transition-smooth">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Sparkles className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Personalized</h3>
              <p className="text-muted-foreground">
                Build kits that match your specific needs, preferences, and lifestyle choices.
              </p>
            </Card>

            <Card className="p-8 text-center card-soft border-0 hover:scale-105 transition-smooth">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Thoughtfully Bundled</h3>
              <p className="text-muted-foreground">
                Save time and money with bundles designed to work together seamlessly.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Kits Showcase */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4">
              Popular Kit Categories
            </h2>
            <p className="text-xl text-muted-foreground">
              Choose from our most loved kit types and customize them to your heart's content
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {kits.map((kit) => (
              <Card key={kit.id} className="overflow-hidden card-soft border-0 hover:scale-105 transition-smooth group">
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={kitImages[kit.id as keyof typeof kitImages]}
                    alt={kit.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-smooth"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-2">{kit.name}</h3>
                  <p className="text-muted-foreground mb-4">{kit.description}</p>
                  <Link to="/build" state={{ selectedKit: kit.id }}>
                    <Button className="w-full group">
                      Customize This Kit
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Card className="p-8 lg:p-16 text-center bg-gradient-to-r from-primary/5 to-accent/5 border-0 card-soft">
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4">
              Ready to Build Your Perfect Kit?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied customers who have created their ideal product bundles with BundleCraft.
            </p>
            <Link to="/build">
              <Button size="lg" className="group">
                Start Building Now
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Index;
