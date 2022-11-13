import { useEffect } from "react";
import "./Colors.scss";

const Colors = ({ productColors, setProductColors }) => {
  function onclickbtn(color) {
    let data = productColors;
    color = color.split(' ')[0];
    let d = data.map((product) => {
      product.color = product.color.split(" ")[0];
      if (product.color === color) {
        product.color += " active";
      } 
      return product;
    });
    setProductColors(d);
  }
  return (
    <div className="colors justify-content-lg-start justify-content-center">
      {productColors.map((productColor,index) => {
        return (
          <button
            type="button"
            data-bs-target="#sliderImage"
            data-bs-slide-to={index}
            aria-current="true"
            aria-label={"Slide " + index}
            className={`color ` + productColor.color}
            onClick={() => onclickbtn(productColor.color)}
          ></button>
        );
      })}
    </div>
  );
};

export default Colors;
