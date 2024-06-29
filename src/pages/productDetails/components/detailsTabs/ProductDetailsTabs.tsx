import type { TabsProps } from "antd";
import { Tabs } from "antd";
import { IProduct } from "../../../../types";
import AddReviewTab from "./AddReviewTab";
import ProductDetailCardTab from "./ProductDetailCardTab";
import ProductReviewTab from "./ProductReviewTab";

const ProductDetailsTabs = ({ data }: { data: IProduct }) => {
  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "Product Details",
      children: <ProductDetailCardTab data={data} />,
    },
    {
      key: "2",
      label: "Reviews",
      children: <ProductReviewTab data={data} />,
    },
    {
      key: "3",
      label: "Add Review",
      children: <AddReviewTab data={data} />,
    },
  ];

  return <Tabs defaultActiveKey="1" items={items} />;
};

export default ProductDetailsTabs;
