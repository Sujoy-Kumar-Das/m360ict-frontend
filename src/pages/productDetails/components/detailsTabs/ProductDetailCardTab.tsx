import { Card, Descriptions, Rate, Tag, Typography } from "antd";
import { IProduct } from "../../../../types";

const { Title, Paragraph, Text } = Typography;

const ProductDetailCardTab = ({ data: product }: { data: IProduct }) => (
  <Card>
    <Title level={3}>{product.title}</Title>
    <Paragraph>{product.description}</Paragraph>
    <Descriptions bordered>
      <Descriptions.Item label="Category">{product.category}</Descriptions.Item>
      <Descriptions.Item label="Brand">{product.brand}</Descriptions.Item>
      <Descriptions.Item label="Price">${product.price}</Descriptions.Item>
      <Descriptions.Item label="Discount">
        {product.discountPercentage}%
      </Descriptions.Item>
      <Descriptions.Item label="Rating">
        <Rate disabled allowHalf defaultValue={product.rating} />
        <Text> ({product.rating})</Text>
      </Descriptions.Item>
      <Descriptions.Item label="Stock">{product.stock}</Descriptions.Item>
      <Descriptions.Item label="SKU">{product.sku}</Descriptions.Item>
      <Descriptions.Item label="Weight">{product.weight} kg</Descriptions.Item>
      <Descriptions.Item label="Dimensions">
        {product.dimensions.width} x {product.dimensions.height} x{" "}
        {product.dimensions.depth} cm
      </Descriptions.Item>
      <Descriptions.Item label="Warranty">
        {product.warrantyInformation}
      </Descriptions.Item>
      <Descriptions.Item label="Shipping">
        {product.shippingInformation}
      </Descriptions.Item>
      <Descriptions.Item label="Availability">
        {product.availabilityStatus}
      </Descriptions.Item>
    </Descriptions>
    <div style={{ marginTop: 16 }}>
      {product.tags.map((tag: string) => (
        <Tag key={tag}>{tag}</Tag>
      ))}
    </div>
  </Card>
);

export default ProductDetailCardTab;
