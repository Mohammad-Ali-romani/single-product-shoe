import './Content.scss'
import {SliderImage,BodyProduct} from './../../components'
import { useEffect, useState } from 'react';
import products  from '../../assets/images/products/';
const Content = () => {
  const [productColors, setProductColors] = useState([]);
  // async function fetchData(){
  //   let data = await fetch(products);
  //   console.log('data')
  //   setProductColors(await data.json());
  // }
  useEffect(()=>{
    setProductColors(products);
  },[])
  return (
    <div className='content'>
      <div className="container">
        <div className="row">
          <div className="col-lg-6"><SliderImage productColors={productColors} setProductColors={setProductColors} /></div>
          <div className="col-lg-6"><BodyProduct productColors={productColors} setProductColors={setProductColors} /></div>
        </div>
      </div>
    </div>
  )
}

export default Content