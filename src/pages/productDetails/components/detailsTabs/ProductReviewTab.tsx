import { Avatar, Card, Rate, Typography } from "antd";
import { Link } from "react-router-dom";
import { IReview } from "../../../../types";

const { Text, Paragraph } = Typography;

export default function ProductReviewTab({ reviews }: { reviews: IReview[] }) {
  return (
    <>
      {reviews.map((review, index) => (
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
        </Card>
      ))}
    </>
  );
}
