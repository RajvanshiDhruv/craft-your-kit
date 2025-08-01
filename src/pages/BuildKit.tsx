import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Check, ShoppingCart } from "lucide-react";
import { kits, products } from "@/data/products";
import { Product } from "@/types/product";
import { useCart } from "@/contexts/CartContext";
import { useToast } from "@/hooks/use-toast";

const BuildKit = () => {
  const location = useLocation();
  const { addToCart } = useCart();
  const { toast } = useToast();
  const [selectedKit, setSelectedKit] = useState<string>("study");
  const [selectedProducts, setSelectedProducts] = useState<Record<string, Product>>({});

  // Get selected kit from navigation state
  useEffect(() => {
    if (location.state?.selectedKit) {
      setSelectedKit(location.state.selectedKit);
    }
  }, [location.state]);

  const currentKit = kits.find(kit => kit.id === selectedKit);
  const kitProducts = products.filter(product => 
    currentKit?.categories.includes(product.category)
  );

  const getProductsByCategory = (category: string) => {
    return kitProducts.filter(product => product.category === category);
  };

  const handleProductSelect = (category: string, product: Product) => {
    setSelectedProducts(prev => ({
      ...prev,
      [category]: product
    }));
  };

  const getProgress = () => {
    if (!currentKit) return 0;
    const selectedCount = Object.keys(selectedProducts).length;
    return (selectedCount / currentKit.categories.length) * 100;
  };

  const getTotalPrice = () => {
    return Object.values(selectedProducts).reduce((total, product) => total + product.price, 0);
  };

  const isKitComplete = () => {
    return currentKit ? Object.keys(selectedProducts).length === currentKit.categories.length : false;
  };

  const handleAddToCart = () => {
    Object.values(selectedProducts).forEach(product => {
      addToCart(product);
    });
    toast({
      title: "Kit added to cart!",
      description: `${Object.keys(selectedProducts).length} items added successfully.`,
    });
  };

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Build Your <span className="text-primary">{currentKit?.name}</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {currentKit?.description}
          </p>
        </div>

        {/* Kit Selector */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-foreground mb-6">Choose Your Kit Type</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {kits.map((kit) => (
              <Card
                key={kit.id}
                className={`p-6 cursor-pointer transition-smooth hover:scale-105 ${
                  selectedKit === kit.id
                    ? "border-primary bg-primary/5"
                    : "border-border hover:border-primary/50"
                }`}
                onClick={() => {
                  setSelectedKit(kit.id);
                  setSelectedProducts({});
                }}
              >
                <h3 className="font-semibold text-foreground mb-2">{kit.name}</h3>
                <p className="text-sm text-muted-foreground">{kit.description}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Progress */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-semibold text-foreground">
              Kit Progress ({Object.keys(selectedProducts).length}/{currentKit?.categories.length || 0})
            </h2>
            <Badge variant={isKitComplete() ? "default" : "secondary"}>
              {isKitComplete() ? "Complete" : "In Progress"}
            </Badge>
          </div>
          <Progress value={getProgress()} className="h-3" />
        </div>

        {/* Product Selection */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="space-y-8">
              {currentKit?.categories.map((category) => (
                <div key={category}>
                  <div className="flex items-center gap-3 mb-6">
                    <h3 className="text-xl font-semibold text-foreground capitalize">
                      Choose Your {category}
                    </h3>
                    {selectedProducts[category] && (
                      <Check className="h-5 w-5 text-success" />
                    )}
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {getProductsByCategory(category).map((product) => (
                      <Card
                        key={product.id}
                        className={`p-6 cursor-pointer transition-smooth hover:scale-105 ${
                          selectedProducts[category]?.id === product.id
                            ? "border-primary bg-primary/5"
                            : "border-border hover:border-primary/50"
                        }`}
                        onClick={() => handleProductSelect(category, product)}
                      >
                        <div className="aspect-square bg-muted rounded-lg mb-4 overflow-hidden">
                          <img 
                            src={product.image} 
                            alt={product.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <h4 className="font-semibold text-foreground mb-2">{product.name}</h4>
                        <p className="text-sm text-muted-foreground mb-3">{product.description}</p>
                        <div className="font-bold text-primary">${product.price.toFixed(2)}</div>
                      </Card>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Summary Sidebar */}
          <div className="lg:col-span-1">
            <Card className="p-6 sticky top-24">
              <h3 className="text-xl font-semibold text-foreground mb-6">Kit Summary</h3>
              
              <div className="space-y-4 mb-6">
                {currentKit?.categories.map((category) => (
                  <div key={category} className="flex items-center justify-between py-2 border-b border-border">
                    <span className="capitalize text-muted-foreground">{category}</span>
                    {selectedProducts[category] ? (
                      <div className="text-right">
                        <div className="font-medium text-foreground text-sm">
                          {selectedProducts[category].name}
                        </div>
                        <div className="text-primary font-bold">
                          ${selectedProducts[category].price.toFixed(2)}
                        </div>
                      </div>
                    ) : (
                      <span className="text-muted-foreground text-sm">Not selected</span>
                    )}
                  </div>
                ))}
              </div>

              <div className="border-t border-border pt-4 mb-6">
                <div className="flex items-center justify-between text-lg font-bold">
                  <span>Total</span>
                  <span className="text-primary">${getTotalPrice().toFixed(2)}</span>
                </div>
              </div>

              <Button
                onClick={handleAddToCart}
                disabled={!isKitComplete()}
                className="w-full"
                size="lg"
              >
                <ShoppingCart className="mr-2 h-5 w-5" />
                Add Kit to Cart
              </Button>

              {!isKitComplete() && (
                <p className="text-sm text-muted-foreground text-center mt-3">
                  Select all products to add kit to cart
                </p>
              )}
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuildKit;