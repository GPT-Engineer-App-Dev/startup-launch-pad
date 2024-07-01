import { Button } from "@/components/ui/button";

function Index() {
  return (
    <div className="text-center space-y-6">
      <h1 className="text-5xl font-bold">Welcome to SaaS Startup</h1>
      <p className="text-lg text-muted-foreground">
        We provide the best solutions to manage your business efficiently.
      </p>
      <div className="space-x-4">
        <Button variant="primary" size="lg">
          Get Started
        </Button>
        <Button variant="outline" size="lg">
          Learn More
        </Button>
      </div>
    </div>
  );
}

export default Index;