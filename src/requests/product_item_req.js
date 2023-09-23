import { loadProduct } from "../store/reducers/product_item"

export const load_product = id => {
  return dispatch => {
    fetch(`https://fakestoreapi.com/products/${id}`)
    .then(resp => resp.json())
    .then(json => dispatch(loadProduct(json)))
  }
}
