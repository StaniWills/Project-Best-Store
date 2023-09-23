import React from 'react'
import s from './index.module.css'
import { Link } from 'react-router-dom'
import { addToCart } from '../../store/reducers/cart';
import { useDispatch } from 'react-redux';

export default function ProductCard({ id, title, image, price }) {
  const product_url = `/product/${id}`;

  const dispatch = useDispatch();
  const add_to_cart = () => dispatch(addToCart({ id, title, image, price }))

  return (
    <div className={s.product_card}>
      <div>
        <Link to={product_url}>
          <img src={image} alt={title} />
        </Link>
        <button onClick={add_to_cart}>Add to cart</button>
      </div>
      <Link to={product_url}><p>{ title }</p></Link>
      <p>Price: { price }$</p>
    </div>
  )
}
