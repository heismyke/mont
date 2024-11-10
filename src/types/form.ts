export interface FormStyles {
  logo?: File;
  primaryColor: string;
  backgroundColor: string;
  fontFamily: string;
  gradientBackground: boolean;
}

export interface WelcomeContent {
  title: string;
  subtitle: string;
  videoFeedback: boolean;
}

export interface ResponseContent {
  prompt1: string;
  prompt2: string;
  rating: boolean;
}

export interface CustomerDetails {
  name: string;
  projectName: string;
  email: string;
  walletAddress: string;
  photo?: File;
  nationality: string;
  comment?: string;
}

export interface ThankYouContent {
  title: string;
  message: string;
} 