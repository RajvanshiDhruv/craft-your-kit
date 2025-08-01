import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Users, Package, Star, Truck } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            About <span className="text-primary">BundleCraft</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We believe that the right combination of products can transform your daily routines. 
            BundleCraft makes it easy to discover, customize, and purchase thoughtfully curated product bundles 
            that work perfectly together.
          </p>
        </div>

        {/* How It Works */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            How the "Build Your Own Kit" Model Works
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-8 text-center card-soft border-0">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Package className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">1. Choose Your Category</h3>
              <p className="text-muted-foreground">
                Select from our curated kit categories: Study, Skincare, or Travel. Each category is designed 
                to solve specific lifestyle needs.
              </p>
            </Card>

            <Card className="p-8 text-center card-soft border-0">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Star className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">2. Customize Your Kit</h3>
              <p className="text-muted-foreground">
                Pick one product from each subcategory to build your perfect kit. Our products are carefully 
                selected to complement each other.
              </p>
            </Card>

            <Card className="p-8 text-center card-soft border-0">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Truck className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">3. Receive Your Bundle</h3>
              <p className="text-muted-foreground">
                Your custom kit is packaged beautifully and shipped directly to your door. 
                Enjoy the convenience of having everything you need in one order.
              </p>
            </Card>
          </div>
        </section>

        {/* Benefits */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            Benefits of Custom Product Bundles
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Package className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Save Time & Money</h3>
                    <p className="text-muted-foreground">
                      Get everything you need in one purchase instead of shopping for individual items. 
                      Our bundles offer better value than buying separately.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Star className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Expertly Curated</h3>
                    <p className="text-muted-foreground">
                      Every product in our kits is selected by experts who understand how different 
                      products work together to enhance your experience.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Personalized Experience</h3>
                    <p className="text-muted-foreground">
                      Unlike one-size-fits-all solutions, our kit builder lets you choose products 
                      that match your specific preferences and needs.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <Card className="p-8 bg-gradient-to-br from-primary/5 to-accent/5 border-0 card-soft">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Why Customers Love BundleCraft
              </h3>
              <blockquote className="text-muted-foreground italic mb-6">
                "I love how easy it is to build my own skincare routine. The products work so well together, 
                and I saved money compared to buying everything separately. Highly recommend!"
              </blockquote>
              <div className="flex items-center gap-2 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                ))}
                <span className="text-sm text-muted-foreground ml-2">4.9/5 from 2,500+ reviews</span>
              </div>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-primary">10K+</div>
                  <div className="text-sm text-muted-foreground">Happy Customers</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">50K+</div>
                  <div className="text-sm text-muted-foreground">Kits Created</div>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* CTA */}
        <section>
          <Card className="p-8 lg:p-16 text-center bg-gradient-to-r from-primary/5 to-accent/5 border-0 card-soft">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Ready to Build Your Perfect Kit?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied customers who have discovered the joy of custom product bundles.
            </p>
            <Link to="/build">
              <Button size="lg" className="group">
                Start Building Your Kit
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default About;