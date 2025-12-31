import { Container, PageHeader } from "@/shared";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Layers, Zap, Shield, ArrowRight } from "lucide-react";

const features = [
  {
    icon: Layers,
    title: "Feature-Based Architecture",
    description: "Organized structure with src/app, src/features, and src/shared folders for scalable development.",
  },
  {
    icon: Zap,
    title: "React Query + Recoil",
    description: "Powerful data fetching with React Query and simple UI state management with Recoil.",
  },
  {
    icon: Shield,
    title: "Type-Safe Development",
    description: "Full TypeScript support with strict typing and path aliases for clean imports.",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen gradient-subtle">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        </div>
        
        <Container size="lg">
          <div className="text-center space-y-8 animate-slide-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
              <Zap className="w-4 h-4" />
              React 19 + Vite + TypeScript
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Modern React
              </span>
              <br />
              <span className="text-foreground">Architecture Starter</span>
            </h1>
            
            <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
              A production-ready React SPA with feature-based folder structure, 
              React Query for API data, and Recoil for UI state management.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="gap-2 bg-gradient-to-r from-primary to-accent hover:opacity-90 border-0 shadow-glow text-primary-foreground">
                Get Started
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline">
                View Documentation
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-card">
        <Container>
          <PageHeader
            title="Built for Scale"
            description="Everything you need to build modern web applications"
            className="text-center mb-12"
          />
          
          <div className="grid md:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card 
                key={feature.title} 
                className="border-border/50 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Folder Structure Section */}
      <section className="py-20">
        <Container size="md">
          <Card className="border-border/50 shadow-lg overflow-hidden">
            <CardHeader className="gradient-primary text-primary-foreground">
              <CardTitle className="text-xl">Project Structure</CardTitle>
              <CardDescription className="text-primary-foreground/80">
                Feature-folder architecture for maintainable code
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <pre className="font-mono text-sm leading-relaxed text-muted-foreground">
{`src/
├── app/              # App configuration
│   ├── providers/    # React Query, Recoil, etc.
│   └── router/       # Route definitions
├── features/         # Feature modules
│   └── [feature]/    # Components, hooks, API
└── shared/           # Shared utilities
    ├── components/   # Reusable components
    ├── hooks/        # Custom hooks
    └── state/        # Recoil atoms`}
              </pre>
            </CardContent>
          </Card>
        </Container>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <Container>
          <p className="text-center text-sm text-muted-foreground">
            Built with React 19, Vite, TypeScript, React Query & Recoil
          </p>
        </Container>
      </footer>
    </div>
  );
};

export default Index;
