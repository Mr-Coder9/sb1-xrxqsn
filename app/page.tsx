import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Code2, Trophy, Users } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-12">
      <section className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
          Master Your Coding Journey
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Practice coding, compete in exams, and track your progress across multiple programming languages.
        </p>
        <div className="mt-8 flex gap-4 justify-center">
          <Button asChild size="lg">
            <Link href="/practice">Start Practicing</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/exam-rooms">Join Exam</Link>
          </Button>
        </div>
      </section>

      <section className="grid md:grid-cols-3 gap-8 mb-16">
        <Card className="p-6 flex flex-col items-center text-center hover:shadow-lg transition-shadow">
          <Code2 className="w-12 h-12 mb-4 text-primary" />
          <h3 className="text-xl font-semibold mb-2">Multi-Language Support</h3>
          <p className="text-muted-foreground">
            Practice and excel in Python, Java, C++, and more with our advanced code compiler.
          </p>
        </Card>

        <Card className="p-6 flex flex-col items-center text-center hover:shadow-lg transition-shadow">
          <Trophy className="w-12 h-12 mb-4 text-primary" />
          <h3 className="text-xl font-semibold mb-2">Real-time Competitions</h3>
          <p className="text-muted-foreground">
            Join exam rooms and compete with peers while tracking your progress on live leaderboards.
          </p>
        </Card>

        <Card className="p-6 flex flex-col items-center text-center hover:shadow-lg transition-shadow">
          <Users className="w-12 h-12 mb-4 text-primary" />
          <h3 className="text-xl font-semibold mb-2">Community Learning</h3>
          <p className="text-muted-foreground">
            Connect with fellow coders, share solutions, and learn from the community.
          </p>
        </Card>
      </section>

      <section className="text-center">
        <h2 className="text-3xl font-bold mb-8">Ready to Begin?</h2>
        <div className="flex gap-4 justify-center">
          <Button asChild variant="secondary" size="lg">
            <Link href="/auth/register">Create Account</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/auth/login">Sign In</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}