import React from 'react'
import { Helmet } from 'react-helmet-async'

function Blog() {
  return (
    <div>
      <Helmet>
        <title>Educational Blog | Uniworld Education Consultancy Nepal</title>
        <meta name="description" content="Read our educational blog for expert insights on studying abroad, university admissions, visa processes, scholarship opportunities, and career guidance from Nepal's leading education consultancy." />
        <meta name="keywords" content="educational blog, study abroad, university admissions, visa, scholarship, career guidance, nepal" />
        <meta property="og:title" content="Educational Blog | Uniworld Education Consultancy Nepal" />
        <meta property="og:description" content="Read our educational blog for expert insights on studying abroad, university admissions, visa processes, scholarship opportunities, and career guidance from Nepal's leading education consultancy." />
        <meta property="og:image" content="/og-image-blog.jpg" />
        <meta property="og:url" content="https://www.uniworldnepal.com/blog" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Educational Blog | Uniworld Education Consultancy Nepal" />
        <meta name="twitter:description" content="Read our educational blog for expert insights on studying abroad, university admissions, visa processes, scholarship opportunities, and career guidance from Nepal's leading education consultancy." />
        <meta name="twitter:image" content="/og-image-blog.jpg" />
        <link rel="canonical" href="https://www.uniworldnepal.com/blog" />
      </Helmet>
      <div>Blog</div>
    </div>
  )
}

export default Blog