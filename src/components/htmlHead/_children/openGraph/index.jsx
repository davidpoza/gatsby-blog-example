import React from 'react';
import Helmet from 'react-helmet';

const OpenGraph = ({
  isArticle,
  title,
  description,
  url,
  image
}) => (
  <Helmet>
    {isArticle && <meta property="og:type" content="article" />}
    {title && <meta property="og:title" content={title} />}
    {description && <meta name="og:description" content={description} />}
    {url && <meta name="og:url" content={url} />}
    {image && <meta name="og:image" content={image} />}
  </Helmet>
);

export default OpenGraph;