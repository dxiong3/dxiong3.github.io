
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { portfolioData } from '@/data/portfolio-data';
import { ArrowRight } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="space-y-12 animate-fade-in">
      {/* Hero Section */}
      <section className="flex flex-col items-center text-center py-12 md:py-20 bg-secondary rounded-lg shadow-sm">
        <div className="relative w-40 h-40 md:w-48 md:h-48 mb-6 rounded-full overflow-hidden shadow-lg border-4 border-primary">
          <Image
            src={portfolioData.profilePhotoUrl}
            alt={`${portfolioData.name}'s profile photo`}
            layout="fill"
            objectFit="cover"
          />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold font-headline text-primary mb-2">
          {portfolioData.name}
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mb-6 max-w-2xl px-4">
          {portfolioData.shortDescription}
        </p>
        <Link href="/projects" passHref>
          <Button size="lg">
            View My Work <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </Link>
      </section>

      {/* Image Break 1 */}
      {/* <section className="py-8 md:py-12">
        <div className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden shadow-md">
          <Image
            src="https://placehold.co/1200x400.png"
            alt="Descriptive alt text for image 1"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </section> */}

      {/* Current Role Section */}
      <section>
        <Card className="bg-accent/20 border-accent shadow-lg">
          <CardHeader>
            <CardTitle className="text-3xl font-headline text-primary">Currently</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-xl text-foreground">
              {portfolioData.currentRole}
            </p>
            <CardDescription className="mt-2 text-muted-foreground">
              Developing critical infrastructure software at Brock Solutions, focusing on backend systems and API development for airport and airline operations.
            </CardDescription>
          </CardContent>
        </Card>
      </section>

      {/* About Me Section */}
      <section>
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-3xl font-headline text-primary">About Me</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg text-foreground/80 leading-relaxed whitespace-pre-line">
              {portfolioData.longDescription}
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Image Break 2 */}
      {/* <section className="pb-12 md:pb-16">
         <div className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden shadow-md">
          <Image
            src="https://placehold.co/1200x400.png"
            alt="Descriptive alt text for image 2"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </section> */}
    </div>
  );
}
