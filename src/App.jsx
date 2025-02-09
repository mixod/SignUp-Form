import axios from "axios";
import { useEffect } from "react";

function App() {
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
        <div>
          <img src="public/images/first.jpg"></img>
        </div>
        <div>
          <img src="public/images/second.jpg"></img>
        </div>
        <div>
          <img src="public/images/third.jpg"></img>
        </div>
      </div>
    </div>
  );
}

export default App;
