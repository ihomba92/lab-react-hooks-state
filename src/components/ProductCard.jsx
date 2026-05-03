import React from 'react'
import styles from '../styles/ProductCard.module.css'

const ProductCard = ({ product, addToCart }) => {
  return (
    <div
    data-testid={`product-${product.id}`}
    className={`${styles.card} ${!product.inStock ? styles.outOfStock : ''}`}
    >
      <h3>{product.name}</h3>
      <p>Price: {product.price}</p>
      <button onClick={() => addToCart(product)} disabled={!product.inStock}>Add to Cart</button>
    </div>
  )
}

export default ProductCard
