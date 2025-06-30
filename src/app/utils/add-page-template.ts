import { 
  CodeBracketIcon,
  DevicePhoneMobileIcon,
  UserGroupIcon,
  RocketLaunchIcon,
  ShieldCheckIcon,
  LightBulbIcon,
  CpuChipIcon,
  GlobeAltIcon,
  CreditCardIcon,
  CloudIcon,
  EyeIcon,
  PresentationChartBarIcon,
  DocumentTextIcon,
  BeakerIcon,
  CogIcon,
  ComputerDesktopIcon,
  PhoneIcon,
  WrenchScrewdriverIcon,
  ChatBubbleLeftRightIcon,
  ChartBarIcon,
  MegaphoneIcon,
  PaintBrushIcon
} from '@heroicons/react/24/outline'

// Template for adding new pages
export const pageTemplate = {
  'your-service-slug': {
    slug: 'your-service-slug', // This should match the key
    title: 'Your Service Title - Company Name',
    metaDescription: 'Your service description for SEO (max 160 characters)',
    breadcrumb: 'Service Name',
    hero: {
      title: 'Your Service Title',
      subtitle: 'YOUR TAGLINE',
      description: 'Brief description of what your service does and how it benefits clients.',
      ctaText: 'Get Started',
      ctaSecondary: 'Learn More'
    },
    mainContent: {
      sections: [
        {
          type: 'services' as const,
          title: 'Our Service Offerings',
          subtitle: 'What we provide',
          description: 'Optional longer description of your services',
          items: [
            {
              icon: CodeBracketIcon, // Choose appropriate icon
              title: 'Service Feature 1',
              description: 'Detailed description of this service feature.',
              gradient: 'from-blue-500 to-teal-500'
            },
            {
              icon: RocketLaunchIcon,
              title: 'Service Feature 2',
              description: 'Detailed description of this service feature.',
              gradient: 'from-purple-500 to-pink-500'
            },
            {
              icon: ShieldCheckIcon,
              title: 'Service Feature 3',
              description: 'Detailed description of this service feature.',
              gradient: 'from-green-500 to-emerald-500'
            }
          ]
        }
      ]
    }
  }
}

// Available gradients you can use:
export const availableGradients = [
  'from-blue-500 to-teal-500',
  'from-purple-500 to-pink-500',
  'from-green-500 to-emerald-500',
  'from-orange-500 to-red-500',
  'from-indigo-500 to-purple-500',
  'from-teal-500 to-cyan-500',
  'from-pink-500 to-rose-500',
  'from-yellow-500 to-orange-500',
  'from-cyan-500 to-blue-500',
  'from-red-500 to-pink-500'
]

// Available icons you can use:
export const availableIcons = {
  CodeBracketIcon,
  DevicePhoneMobileIcon,
  UserGroupIcon,
  RocketLaunchIcon,
  ShieldCheckIcon,
  LightBulbIcon,
  CpuChipIcon,
  GlobeAltIcon,
  CreditCardIcon,
  CloudIcon,
  EyeIcon,
  PresentationChartBarIcon,
  DocumentTextIcon,
  BeakerIcon,
  CogIcon,
  ComputerDesktopIcon,
  PhoneIcon,
  WrenchScrewdriverIcon,
  ChatBubbleLeftRightIcon,
  ChartBarIcon,
  MegaphoneIcon,
  PaintBrushIcon
}

/*
INSTRUCTIONS FOR ADDING NEW PAGES:

1. Copy the pageTemplate above
2. Replace 'your-service-slug' with your actual service slug (URL-friendly)
3. Update all the content fields
4. Choose appropriate icons from availableIcons
5. Choose gradients from availableGradients
6. Add the new page object to pagesContent in pages-content.tsx

Example URLs after adding:
- /web-development
- /mobile-app-development  
- /your-new-service-slug

All pages will automatically:
- Have the same header, footer, certifications
- Include breadcrumbs
- Have proper SEO metadata
- Be statically generated at build time
*/ 