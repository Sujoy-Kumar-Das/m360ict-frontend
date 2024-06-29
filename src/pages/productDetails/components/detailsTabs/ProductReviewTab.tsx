import { Avatar, Button, Card, Rate, Typography } from "antd";
import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import { productApi } from "../../../../redux/features/product/product.api";
import { useAppSelector } from "../../../../redux/redux.hooks";
import { IProduct, IReview } from "../../../../types";

const { Text, Paragraph } = Typography;

export default function ProductReviewTab({ data }: { data: IProduct }) {
  // Destructure the data to find the review
  const { reviews, id, ...rest } = data;

  const [reviewData, setReviewData] = useState([...reviews]);

  // redux hook for get the user info
  const { user } = useAppSelector((state) => state.auth);

  // redux hook for update the review
  const [updateProduct] = productApi.useUpdateProductDataMutation();

  const handleDeleteReview = async (review: IReview) => {
    const remainingReview = reviews.reduce(
      (acc, item) => {
        if (
          item.reviewerEmail !== review.reviewerEmail &&
          item.comment !== review.comment
        ) {
          acc.push(item);
        }
        return acc;
      },
      [{}]
    );

    // Create a new array with the new review
    const updatedReviews = [...reviewData, remainingReview];

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
      toast.success("Review Delete successfully.");
      console.log("Review Deleted successfully.");
    } else {
      toast.error("Failed to delete review.");
    }
  };

  return (
    <>
      {data?.reviews.map((review, index) => (
        <Card style={{ margin: "16px 0" }} key={index}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "8px",
            }}
          >
            <Avatar>{review.reviewerName.charAt(0)}</Avatar>
            <div style={{ marginLeft: "8px" }}>
              <Link to={"/"}>{review.reviewerName}</Link>
              <Text type="secondary" style={{ display: "block" }}>
                {new Date(review.date).toLocaleDateString()}
              </Text>
            </div>
          </div>
          <Paragraph>{review.comment}</Paragraph>
          <Rate disabled defaultValue={review.rating} />
          {user?.email === review.reviewerEmail && (
            <div style={{ display: "flex", gap: "10px", marginTop: "8px" }}>
              <Button size="small">Edit</Button>
              <Button size="small" onClick={() => handleDeleteReview(review)}>
                Delete
              </Button>
            </div>
          )}
        </Card>
      ))}
    </>
  );
}
