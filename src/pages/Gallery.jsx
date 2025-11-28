import React from 'react'
import { Helmet } from 'react-helmet-async'

function Gallery() {
  return (
    <div>
      <Helmet>
        <title>Photo Gallery | Uniworld Education Consultancy Nepal</title>
        <meta name="description" content="View our photo gallery showcasing Uniworld Educational Consultancy's events, student achievements, and campus life. See why we're Nepal's leading education consultancy." />
        <meta name="keywords" content="photo gallery, education consultancy, nepal, student events, campus life, study abroad" />
        <meta property="og:title" content="Photo Gallery | Uniworld Education Consultancy Nepal" />
        <meta property="og:description" content="View our photo gallery showcasing Uniworld Educational Consultancy's events, student achievements, and campus life. See why we're Nepal's leading education consultancy." />
        <meta property="og:image" content="/og-image-gallery.jpg" />
        <meta property="og:url" content="https://www.uniworldnepal.com/gallery" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Photo Gallery | Uniworld Education Consultancy Nepal" />
        <meta name="twitter:description" content="View our photo gallery showcasing Uniworld Educational Consultancy's events, student achievements, and campus life. See why we're Nepal's leading education consultancy." />
        <meta name="twitter:image" content="/og-image-gallery.jpg" />
        <link rel="canonical" href="https://www.uniworldnepal.com/gallery" />
      </Helmet>
      <div>Gallery</div>
    </div>
  )
}

export default Gallery