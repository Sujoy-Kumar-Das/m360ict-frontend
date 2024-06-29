import { Button, Form, Input, Rate } from "antd";
import { useState } from "react";
import { toast } from "sonner";
import { productApi } from "../../../../redux/features/product/product.api";
import { useAppSelector } from "../../../../redux/redux.hooks";
import { IProduct, IReview } from "../../../../types";

export default function AddReviewTab({ data }: { data: IProduct }) {
  // Destructure the data to find the review
  const { reviews, id, ...rest } = data;

  const [form] = Form.useForm();

  const [reviewData, setReviewData] = useState<IReview[]>([...reviews]);

  // redux hook for get the user info
  const { user } = useAppSelector((state) => state.auth);

  // redux hook for update the review
  const [updateProduct] = productApi.useUpdateProductDataMutation();

  const handleAddReview = async (values: IReview) => {
    // Create the new review
    const newReview = {
      ...values,
      reviewerName: user!.name,
      reviewerEmail: user!.email,
      date: new Date().toString(),
    };

    // Create a new array with the new review
    const updatedReviews = [...reviewData, newReview];

    // Update reviewData state
    setReviewData(updatedReviews as IReview[]);

    // Create data for the product update
    const newData = { ...rest, reviews: updatedReviews };

    // call the hook for update
    const res = await updateProduct({
      id: id,
      data: newData,
    }).unwrap();

    if (res.id) {
      toast.success("Review added successfully.");
      console.log("Review added successfully.");
      form.resetFields();
    } else {
      toast.error("Failed to add review.");
    }
  };

  return (
    <Form form={form} layout="vertical" onFinish={handleAddReview}>
      <Form.Item
        name="rating"
        label="Rating"
        rules={[
          {
            required: true,
            type: "number",
            min: 1,
            message: "Rating is required.",
          },
        ]}
      >
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
