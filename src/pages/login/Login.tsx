import { Button, Form, FormInstance, Input } from "antd";

import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { userAuth } from "../../firebase/firebase.auth";
import { setUser } from "../../redux/features/auth/auth.reducer";
import { useAppDispatch } from "../../redux/redux.hooks";

export default function Login() {
  const [form] = Form.useForm<FormInstance>();

  const navigate = useNavigate();
  //   redux hooks
  const dispatch = useAppDispatch();

  const handleLogin = async (values: { email: string; password: string }) => {
    const res = await userAuth.login(values.email, values.password);
    if (res.user.email) {
      const userData = { email: values.email, name: res.user.displayName };

      toast.success(`Logged successfully`);
      dispatch(setUser({ user: userData }));
      navigate("/");
    } else {
      toast.error("Failed to create account.");
    }
  };

  return (
    <div
      style={{
        backgroundColor: "lightgray",
        padding: "30px 100px",
        borderRadius: "8px",
      }}
    >
      <div style={{ display: "flex", justifyContent: "end" }}>
        <Button type="primary">
          <Link to={"/"}>Back To Home</Link>
        </Button>
      </div>
      <Form form={form} layout="vertical" onFinish={handleLogin}>
        <Form.Item
          name="email"
          label="Email"
          rules={[
            {
              required: true,
              type: "string",
              min: 1,
              message: "Email is required.",
            },
            {
              type: "email",
              message: "Enter a valid email.",
            },
          ]}
        >
          <Input placeholder="Enter Your Email" style={{ width: "100%" }} />
        </Form.Item>
        <Form.Item
          name="password"
          label="Password"
          rules={[
            {
              required: true,
              type: "string",
              min: 8,
              message: "Password is required.",
            },
          ]}
        >
          <Input.Password placeholder="Enter Your Password" />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit Review
          </Button>
        </Form.Item>
      </Form>
      <p>
        Dont have account ?{" "}
        <Button type="link">
          <Link to={"/auth/create-account"}>Create Now</Link>
        </Button>
      </p>
    </div>
  );
}
