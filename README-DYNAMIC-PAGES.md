# Dynamic Pages Setup for 29 Service Pages

## Overview

This project uses Next.js dynamic routing to efficiently create multiple service pages with the same layout but different content. All pages share the same:
- Header
- Footer
- Certifications section
- Breadcrumbs
- Overall layout structure

Only the middle content (hero section and service details) changes per page.

## Current Working Pages

The system currently includes these example pages:
- `/web-development`
- `/mobile-app-development`
- `/custom-software-development`
- `/ecommerce-development`
- `/ui-ux-design`
- `/digital-marketing`
- `/cloud-solutions`
- `/maintenance-support`
- `/consulting`

## How to Add New Pages

### Step 1: Add Content to `src/app/data/pages-content.tsx`

Add a new entry to the `pagesContent` object:

```typescript
'your-service-slug': {
  slug: 'your-service-slug',
  title: 'Your Service Title - Company Name',
  metaDescription: 'SEO description (max 160 characters)',
  breadcrumb: 'Service Name',
  hero: {
    title: 'Your Service Title',
    subtitle: 'YOUR TAGLINE',
    description: 'Brief description of your service',
    ctaText: 'Get Started',
    ctaSecondary: 'Learn More'
  },
  mainContent: {
    sections: [
      {
        type: 'services',
        title: 'Our Service Offerings',
        subtitle: 'What we provide',
        items: [
          {
            icon: CodeBracketIcon,
            title: 'Feature 1',
            description: 'Description of feature 1',
            gradient: 'from-blue-500 to-teal-500'
          },
          // Add more items...
        ]
      }
    ]
  }
}
```

### Step 2: That's It!

The page will automatically be:
- ✅ Generated at build time
- ✅ Include proper SEO metadata
- ✅ Have breadcrumbs
- ✅ Use the shared layout
- ✅ Be accessible at `/your-service-slug`

## Available Icons

Use any of these icons from Heroicons:
- `CodeBracketIcon`
- `DevicePhoneMobileIcon`
- `UserGroupIcon`
- `RocketLaunchIcon`
- `ShieldCheckIcon`
- `LightBulbIcon`
- `CpuChipIcon`
- `GlobeAltIcon`
- `CreditCardIcon`
- `CloudIcon`
- `CogIcon`
- `ComputerDesktopIcon`
- And many more...

## Available Gradients

Choose from these predefined gradients:
- `from-blue-500 to-teal-500`
- `from-purple-500 to-pink-500`
- `from-green-500 to-emerald-500`
- `from-orange-500 to-red-500`
- `from-indigo-500 to-purple-500`
- `from-teal-500 to-cyan-500`
- `from-pink-500 to-rose-500`

## Creating All 29 Pages

To create all your service pages, follow this pattern:

1. **Identify your 29 services** (e.g., web-dev, mobile-dev, ai-solutions, etc.)
2. **Create URL-friendly slugs** (lowercase, hyphenated)
3. **Add each one to `pages-content.tsx`**
4. **Run `npm run build`** to generate all pages

## Example Services You Might Add

```
- web-development
- mobile-app-development
- ai-machine-learning
- blockchain-development
- devops-services
- qa-testing
- api-development
- database-design
- cybersecurity-services
- data-analytics
- iot-solutions
- ar-vr-development
- game-development
- saas-development
- fintech-solutions
- healthcare-software
- elearning-platforms
- crm-development
- erp-solutions
- inventory-management
- logistics-software
- real-estate-apps
- travel-booking-systems
- food-delivery-apps
- social-media-apps
- video-streaming-apps
- payment-gateways
- chatbot-development
- microservices-architecture
```

## Benefits of This Approach

1. **DRY (Don't Repeat Yourself)** - One layout for all pages
2. **Type Safety** - TypeScript ensures content structure consistency
3. **SEO Optimized** - Automatic meta tags and static generation
4. **Easy Maintenance** - Update layout once, affects all pages
5. **Fast Development** - Add new pages in minutes, not hours
6. **Performance** - All pages are statically generated at build time

## File Structure

```
src/
├── app/
│   ├── [slug]/
│   │   └── page.tsx              # Dynamic route handler
│   ├── components/
│   │   ├── PageLayout.tsx        # Reusable page layout
│   │   ├── Header.tsx            # Shared header
│   │   ├── Footer.tsx            # Shared footer
│   │   ├── Certifications.tsx    # Shared certifications
│   │   └── Breadcrumbs.tsx       # Automatic breadcrumbs
│   ├── data/
│   │   └── pages-content.tsx     # All page content
│   └── utils/
│       └── add-page-template.ts  # Template for new pages
```

## Testing

After adding new pages:

1. Run `npm run build` to ensure no errors
2. Check the build output to see your new pages listed
3. Run `npm run dev` and visit `/your-new-slug` to test

## Next Steps

1. Add your remaining service pages to `pages-content.tsx`
2. Customize the content for each service
3. Update images (currently using placeholder `/next.svg`)
4. Add more section types if needed (features, process, benefits, etc.) 