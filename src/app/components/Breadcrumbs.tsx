'use client'

import { ChevronRightIcon, HomeIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

type BreadcrumbItem = {
  name: string
  href: string
  icon?: React.ComponentType<{ className?: string }>
}

export default function Breadcrumbs() {
  const pathname = usePathname()
  
  const pathSegments = pathname.split('/').filter(Boolean)
  
  const breadcrumbs: BreadcrumbItem[] = [
    { name: 'Home', href: '/', icon: HomeIcon }
  ]
  
  // Add current page
  if (pathSegments.length > 0) {
    const currentPage = pathSegments[pathSegments.length - 1]
    const pageName = currentPage.charAt(0).toUpperCase() + currentPage.slice(1).replace('-', ' ')
    breadcrumbs.push({ 
      name: pageName === 'Contact' ? 'Contact Us' : pageName, 
      href: pathname 
    })
  }

  return (
    <nav className="flex items-center space-x-2 text-sm">
      {breadcrumbs.map((item, index) => (
        <div key={item.href} className="flex items-center">
          {index > 0 && (
            <ChevronRightIcon className="w-4 h-4 text-gray-400 mx-2" />
          )}
          
          {index === breadcrumbs.length - 1 ? (
            <span className="text-teal-600 font-semibold flex items-center">
              {index === 0 && item.icon && (
                <item.icon className="w-4 h-4 mr-1" />
              )}
              {item.name}
            </span>
          ) : (
            <Link 
              href={item.href} 
              className="text-gray-600 hover:text-teal-600 transition-colors flex items-center font-medium"
            >
              {item.icon && (
                <item.icon className="w-4 h-4 mr-1" />
              )}
              {item.name}
            </Link>
          )}
        </div>
      ))}
    </nav>
  )
} 