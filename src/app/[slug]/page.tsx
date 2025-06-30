

import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import { pagesContent, getAllPageSlugs } from '../data/pages-content'
import PageLayout from '../components/PageLayout'

interface PageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  const slugs = getAllPageSlugs()
  return slugs.map((slug) => ({
    slug: slug,
  }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const pageContent = pagesContent[slug]
  
  if (!pageContent) {
    return {
      title: 'Page Not Found',
    }
  }

  return {
    title: pageContent.title,
    description: pageContent.metaDescription,
  }
}

export default async function DynamicPage({ params }: PageProps) {
  const { slug } = await params
  const pageContent = pagesContent[slug]
  
  if (!pageContent) {
    notFound()
  }

  return <PageLayout pageContent={pageContent} />
} 