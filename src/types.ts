export interface ProjectDetailContent {
  whoItIsFor: string;
  whatIBuilt: string;
  keyFeatures: string[];
  whatILearned: string;
}

export interface Project {
  slug: string;
  name: string;
  category: 'Frontend' | 'Full-Stack' | 'AI' | 'ML';
  description: string;
  techStack: string[];
  liveDemoUrl: string;
  gitHubUrl: string;
  featured: boolean;
  image: string; // Illustration/SVG or hotlinked premium mockup
  showDetail: boolean;
  detailContent?: ProjectDetailContent;
}

export interface ServicePackage {
  id: string;
  title: string;
  description: string;
  features: string[];
  badge?: string;
  deliveryTime: string;
}
