import React from 'react';
import './BreadCrum.scss';

const Breadcrumbs = ({ items }) => {
  return (
    <nav aria-label="breadcrumb">
      <ul className="breadcrumb">
        {items.map((item, index) => (
          <React.Fragment key={index}>
            <li className="breadcrumb-item">
              <a href={item.url}>{item.label}</a>
            </li>
            {index < items.length - 1 && (
              <li className="breadcrumb-separator">{'>'}</li>
            )}
          </React.Fragment>
        ))}
      </ul>
    </nav>
  );
};

// Usage
const BreadcrumbExample = () => {
  const breadcrumbs = [
    { label: 'Home', url: '/' },
    { label: 'Hosting for All', url: '/products' },
    { label: 'Hosting', url: '/products/hosting' },
    { label: 'Hosting6', url: '/products/hosting/6' },
    { label: 'Hosting5', url: '/products/hosting/5' },
  ];

  return <Breadcrumbs items={breadcrumbs} />;
};

export default BreadcrumbExample;
