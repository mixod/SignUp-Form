import axios from "axios";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Button, Checkbox, Form, Input } from "antd";
import "./App.css";
import { useState } from "react";
function App() {
  const [data, setData] = useState([]);
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const submit = (values) => {
    console.log(values);
    Get();
    post(values);
  };

  async function Get() {
    try {
      const response = await axios.get("https://fakestoreapi.com/products", {
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }
  const post = async (values) => {
    try {
      const response = await axios.post(
        "https://fakestoreapi.com/products",
        {
          title: values.name,
          price: 29.99,
          category: "electronics",
          description: "Sample product description",
          image: "https://via.placeholder.com/150",
        },
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      setData(response);
      console.log("res:", response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className=" mt-10 max-w-6xl mx-auto pt-20 ">
      <div className="flex max-w-4xl mx-auto gap-10 ">
        <div className="hidded lg:block mb-30 w-100 ">
          <Slider {...settings}>
            <div>
              <img src="public/images/second.jpg" className="h-100 w-100"></img>
            </div>
            <div>
              <img src="public/images/second.jpg" className="h-100 w-100"></img>
            </div>
            <div>
              <img src="public/images/third.jpg" className="h-100 w-100"></img>
            </div>
          </Slider>
        </div>
        <div>
          <Form
            onFinish={submit}
            className="flex flex-col gap-2 border text-white "
          >
            <div className="text-black">Sign Up Here!!</div>
            <Form.Item
              name="username"
              rules={[
                {
                  required: true,
                  message: "Please input your username!",
                },
              ]}
            >
              <Input
                type="name"
                placeholder="Enter your name "
                style={{ width: "250px" }}
              />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
            >
              <Input type="password" placeholder="Enter your password" />
            </Form.Item>
            <Form.Item
              name="email"
              rules={[
                {
                  required: true,
                  message: "Please input your email!",
                },
              ]}
            >
              <Input type="email" placeholder="Enter your email" />
            </Form.Item>

            <Form.Item name="remember" valuePropName="checked" label={null}>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default App;
