import React from 'react'
import s from './index.module.css'
import { useDispatch } from 'react-redux'
import { incrementCount, decrementCount } from '../../store/reducers/cart'

export default function CartCard({ id, title, image, price, count }) {

  const dispatch = useDispatch();
  const increment = () => dispatch(incrementCount(id));
  const decrement = () => dispatch(decrementCount(id));

  return (
    <div className={s.card}>
      <img src={image} alt={title} />
      <p>{ title }</p>
      <p>{ price }$ x { count } = { price * count }$</p>
      <div className={s.triggers}>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
      </div>
    </div>
  )
}
