import axios from "axios";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Button, Checkbox, Form, Input } from "antd";
import "./App.css";
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
  const submit = (values) => {
    console.log(values);
    Get();
  };

  return (
    <div className=" mt-10 max-w-6xl mx-auto pt-20 shadow-xl">
      <div className="flex max-w-4xl mx-auto gap-30 ">
        <div className="mb-30 w-100 ">
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
        <div>
          <Form
            onFinish={submit}
            className="flex flex-col gap-2 border text-white "
          >
            <Form.Item
              label="Username "
              name="username"
              rules={[
                {
                  required: true,
                  message: "Please input your username!",
                },
              ]}
            >
              <Input type="name" />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
            >
              <Input type="password" />
            </Form.Item>
            <Form.Item
              label="Email"
              name="email"
              rules={[
                {
                  required: true,
                  message: "Please input your email!",
                },
              ]}
            >
              <Input type="email" />
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
