export interface Project {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  projectUrl: string;
  tags: string[];
  imageAiHint?: string;
}

export interface PortfolioData {
  name: string;
  shortDescription: string;
  currentRole: string;
  longDescription: string;
  profilePhotoUrl: string;
  resumePdfUrl: string;
  githubUrl?: string;
  linkedinUrl?: string;
}

