import './BodyProduct.scss'
import {Colors,Info} from '.././'

const BodyProduct = ({productColors,setProductColors}) => {
  return (
    <div className='body-product text-lg-start text-center'>
      <h1 className="title-product">Shoe</h1>
      <h2 className="price-product">$102</h2>
      <Colors productColors={productColors} setProductColors={setProductColors}/>
      <button className="btn-cart">Add to Card</button>
      <Info />
    </div>
  )
}

export default BodyProduct