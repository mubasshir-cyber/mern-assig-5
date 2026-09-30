import React from 'react';
import useFetch from '../hooks/useFetch';

const ProductList = () => {
  const API_URL = 'https://api.escuelajs.co/api/v1/products';
  const { data: products, loading, error, refetch } = useFetch(API_URL);

  return (
    <div className="product-list-container">
      <div className="header-actions">
        <h2>Product List</h2>
        <button className="refetch-btn" onClick={refetch}>
          Refresh Products
        </button>
      </div>

      {loading && <p className="loading-text">Loading products, please wait...</p>}

      {error && (
        <div className="error-box">
          <p className="error-msg">Error: {error}</p>
          <button className="retry-btn" onClick={refetch}>
            Try Again
          </button>
        </div>
      )}

      {!loading && !error && products && (
        <div className="product-grid">
          {products.map((product) => {
            const imageSrc =
              product.images && product.images[0]
                ? product.images[0].replace(/[\[\]"']/g, '')
                : 'https://placehold.co/300x200?text=No+Image';

            return (
              <div key={product.id} className="product-card">
                <img
                  src={imageSrc}
                  alt={product.title}
                  onError={(e) => {
                    e.target.src = 'https://placehold.co/300x200?text=No+Image';
                  }}
                />
                <div className="product-info">
                  <h3>{product.title}</h3>
                  <p className="category">Category: {product.category?.name || 'General'}</p>
                  <p className="price">${product.price}</p>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default ProductList;
