import { Button, Form, Input, Rate } from "antd";
import { FormInstance } from "antd/lib/form";

export default function AddReviewTab() {
  const [form] = Form.useForm<FormInstance>();

  return (
    <Form form={form} layout="vertical">
      <Form.Item name="rating" label="Rating">
        <Rate />
      </Form.Item>
      <Form.Item
        name="comment"
        label="Comment"
        rules={[{ required: true, message: "Please enter your comment" }]}
      >
        <Input.TextArea rows={4} />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit Review
        </Button>
      </Form.Item>
    </Form>
  );
}
