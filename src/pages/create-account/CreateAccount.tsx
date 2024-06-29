import { Button, Form, Input } from "antd";

import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { userAuth } from "../../firebase/firebase.auth";
import { setUser } from "../../redux/features/auth/auth.reducer";
import { useAppDispatch } from "../../redux/redux.hooks";

interface ICreateUser {
  name: string;
  password: string;
  email: string;
}

export default function CreateAccount() {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  //   redux hooks
  const dispatch = useAppDispatch();

  const handleCreateAccount = async (values: ICreateUser) => {
    const res = await userAuth.createUser(values.email, values.password);
    if (res.user.email) {
      const userData = { name: values.name, email: values.email };

      await userAuth.updateUser({ displayName: values.name });
      toast.success(`Account created successfully`);
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
      <Form form={form} layout="vertical" onFinish={handleCreateAccount}>
        <Form.Item
          name="name"
          label="Name"
          rules={[
            {
              required: true,
              type: "string",
              min: 1,
              message: "Name is required.",
            },
          ]}
        >
          <Input placeholder="Enter Your Name" style={{ width: "100%" }} />
        </Form.Item>
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
            Create Account
          </Button>
        </Form.Item>
      </Form>
      <p>
        Already have an account ?{" "}
        <Button type="link">
          <Link to={"/auth/login"}>Login Now</Link>
        </Button>
      </p>
    </div>
  );
}
