import { Col, Rate, Row, Typography } from "antd";
import { useParams } from "react-router-dom";
import Loader from "../../components/ui/shared/loader/Loader";
import { productApi } from "../../redux/features/product/product.api";
import { generateDiscountPrice } from "../../utils/generatePrice";
import ProductDetailsSlider from "./components/ProductDetailsSlider";
import DetailsTabs from "./components/detailsTabs/ProductDetailsTabs";

const { Title, Paragraph } = Typography;

export default function ProductsDetails() {
  const { id } = useParams();
  const { useGetProductDetailsQuery } = productApi;
  const { data, isLoading } = useGetProductDetailsQuery(id);

  if (isLoading) {
    return <Loader />;
  }
  const {
    images,
    price,
    discountPercentage,
    title,
    category,
    description,
    rating,
  } = data;
  return (
    <div>
      <Row gutter={[16, 16]} style={{ display: "flex", flexWrap: "wrap" }}>
        <Col xs={24} md={24} lg={14}>
          <ProductDetailsSlider images={images} />
        </Col>
        <Col xs={24} md={24} lg={10}>
          <Paragraph
            style={{
              textTransform: "capitalize",
              fontWeight: "bold",
              color: "gray",
            }}
          >
            {category}
          </Paragraph>
          <Title level={2}>{title}</Title>
          <Rate allowHalf defaultValue={rating} disabled />

          <div style={{ marginTop: "5px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
              <Title level={4} style={{ margin: 0 }}>
                Description
              </Title>
              <div
                style={{
                  width: "50%",
                  height: "3px",
                  backgroundColor: "orangered",
                  margin: 0,
                }}
              ></div>
            </div>
            <Paragraph>{description}</Paragraph>
          </div>

          <div style={{ display: "flex", gap: "5px" }}>
            <Paragraph strong>Price:</Paragraph>
            <Paragraph>
              {price && discountPercentage ? (
                <>
                  <span style={{ textDecorationLine: "line-through" }}>
                    ${price}
                  </span>{" "}
                  <span>
                    ${generateDiscountPrice(price, discountPercentage)}
                  </span>
                </>
              ) : (
                <>{discountPercentage}</>
              )}
            </Paragraph>
          </div>
        </Col>
      </Row>
      <DetailsTabs data={data} />
    </div>
  );
}
