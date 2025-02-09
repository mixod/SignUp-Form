import axios from "axios";
import { useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
function App() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  async function Get() {
    const response = await axios.get("https://fakestoreapi.com/carts");
    console.log(response);
  }

  useEffect(() => {
    Get();
  }, []);
  return (
    <div>
      <div>
        <Slider {...settings}>
          <div>
            <img src="public/images/first.jpg" className="h-100 w-100"></img>
          </div>
          <div>
            <img src="public/images/second.jpg" className="h-100 w-100"></img>
          </div>
          <div>
            <img src="public/images/third.jpg" className="h-100 w-100"></img>
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default App;
