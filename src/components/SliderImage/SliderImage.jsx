import "./SliderImage.scss";
const SliderImage = ({ productColors, setProductColors }) => {
  return (
    <div className="slider-image">
      <div id="sliderImage" className="carousel slide h-100">
        <div className="carousel-inner">
          {productColors.map((productColor) => {
            return (
              <div
                className={
                  "carousel-item " +
                  (productColor == productColors[0] ? "active" : "")
                }
              >
                <img
                  src={productColor.image}
                  className="d-block w-100"
                  alt=""
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SliderImage;
