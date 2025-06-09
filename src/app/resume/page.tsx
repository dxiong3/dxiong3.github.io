import { portfolioData } from '@/data/portfolio-data';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Resume | Personal Website',
  description: 'My professional resume.',
};

export default function ResumePage() {
  return (
    <div className="animate-fade-in">
      <section className="py-8 md:py-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold font-headline text-primary mb-4">
          My Resume
        </h1>
      </section>

      <section className="pb-12 md:pb-16">
        <div className="aspect-[8.5/11] w-full max-w-4xl mx-auto shadow-xl rounded-lg overflow-hidden border border-border">
          <iframe
            src={`${portfolioData.resumePdfUrl}#toolbar=0&navpanes=0&scrollbar=0`}
            title="Resume"
            className="w-full h-full"
            aria-label="My Resume PDF"
          />
        </div>
      </section>
    </div>
  );
}

