import { Button, Col, Form, Input, Row, Select } from "antd";
import { Dispatch, SetStateAction, useEffect } from "react";
import { toast } from "sonner";
import { categoryApi } from "../../../../redux/features/category/category.api";
import { productApi } from "../../../../redux/features/product/product.api";

import { IProduct } from "../../../../types";
import { IBasicInfoFieldsValues } from "../../../../types/product/IUpdateProduct";

interface IEditProductBasicInfo {
  data: IProduct;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

export default function EditBasicProductData({
  data,
  setOpen,
}: IEditProductBasicInfo) {
  const [form] = Form.useForm();

  //   get all categories
  const { useGetAllCategoriesQuery } = categoryApi;
  const { data: categories } = useGetAllCategoriesQuery(undefined);

  //   update data hook
  const { useUpdateProductDataMutation } = productApi;
  const [updateProductData, { isLoading }] = useUpdateProductDataMutation();

  // destructure product
  const {
    id,
    title,
    description,
    category,
    price,
    discountPercentage,
    rating,
    stock,
    brand,
    sku,
    weight,
    availabilityStatus,
    minimumOrderQuantity,
    returnPolicy,
    shippingInformation,
    warrantyInformation,
  } = data as IProduct;

  // from default values
  const defaultValue = {
    id,
    title,
    description,
    category,
    price,
    discountPercentage,
    rating,
    stock,
    brand,
    sku,
    weight,
    availabilityStatus,
    minimumOrderQuantity,
    returnPolicy,
    shippingInformation,
    warrantyInformation,
  };

  // Reset the form and set values when data changes
  useEffect(() => {
    form.resetFields();
  }, [data, form]);

  const handleSubmitBasicInfo = async (values: IBasicInfoFieldsValues) => {
    const res = await updateProductData({ id, data: values }).unwrap();
    if (res.id) {
      toast.success("Products basic information updated successfully.");
      setOpen(false);
    }
  };

  const categoriesItems = categories?.map(
    (category: { slug: string; name: string }) => ({
      value: category.slug,
      label: category.name,
    })
  );

  return (
    <Form
      form={form}
      layout="vertical"
      onFinish={handleSubmitBasicInfo}
      initialValues={defaultValue}
    >
      <Row gutter={[16, 16]}>
        <Col md={8} sm={12}>
          <Form.Item
            label="Title"
            name="title"
            rules={[{ required: true, message: "Please enter title" }]}
          >
            <Input placeholder="Enter title" />
          </Form.Item>
        </Col>
        <Col md={8} sm={12}>
          <Form.Item
            label="Category"
            name="category"
            rules={[{ required: true, message: "Please enter category" }]}
          >
            <Select defaultValue={category} options={categoriesItems} />
          </Form.Item>
        </Col>
        <Col md={8} sm={12}>
          <Form.Item
            label="Price"
            name="price"
            rules={[
              {
                required: true,
                type: "number",
                min: 0,
                message: "Please enter valid price",
              },
            ]}
          >
            <Input type="number" placeholder="Enter price" />
          </Form.Item>
        </Col>
        <Col md={8} sm={12}>
          <Form.Item label="Discount Percentage" name="discountPercentage">
            <Input placeholder="Enter Discount" />
          </Form.Item>
        </Col>
        <Col md={8} sm={12}>
          <Form.Item
            label="Stock"
            name="stock"
            rules={[
              {
                required: true,
                type: "number",
                min: 0,
                message: "Please enter valid stock",
              },
            ]}
          >
            <Input type="number" placeholder="Enter stock" />
          </Form.Item>
        </Col>
        <Col md={8} sm={12}>
          <Form.Item label="Brand" name="brand">
            <Input placeholder="Enter brand" />
          </Form.Item>
        </Col>
        <Col md={8} sm={12}>
          <Form.Item label="SKU" name="sku">
            <Input placeholder="Enter SKU" />
          </Form.Item>
        </Col>
        <Col md={8} sm={12}>
          <Form.Item label="Weight" name="weight">
            <Input placeholder="Enter weight" />
          </Form.Item>
        </Col>
        <Col md={8} sm={12}>
          <Form.Item label="Availability Status" name="availabilityStatus">
            <Input placeholder="Enter availability status" />
          </Form.Item>
        </Col>
        {/*  */}
        <Col md={8} sm={12}>
          <Form.Item label="Availability Status" name="availabilityStatus">
            <Input placeholder="Enter availability status" />
          </Form.Item>
        </Col>
        <Col md={8} sm={12}>
          <Form.Item label="Minimum Order Quantity" name="minimumOrderQuantity">
            <Input placeholder="Enter Minimum Order Quantity" />
          </Form.Item>
        </Col>
        <Col md={8} sm={12}>
          <Form.Item label="Return Policy" name="returnPolicy">
            <Input placeholder="Enter Return Policy" />
          </Form.Item>
        </Col>{" "}
        <Col md={8} sm={12}>
          <Form.Item label="Shipping Information" name="shippingInformation">
            <Input placeholder="Enter Shipping Information" />
          </Form.Item>
        </Col>{" "}
        <Col md={8} sm={12}>
          <Form.Item label="Warranty Information" name="warrantyInformation">
            <Input placeholder="Enter Warranty Information" />
          </Form.Item>
        </Col>
        {/*  */}
        <Col span={24}>
          <Form.Item
            label="Description"
            name="description"
            rules={[
              {
                type: "string",
                min: 50,
                message: "Description must have 50 words long.",
              },
            ]}
          >
            <Input.TextArea placeholder="Enter description" rows={5} />
          </Form.Item>
        </Col>
        <Col span={24}>
          <Form.Item>
            <Button
              disabled={isLoading}
              type="primary"
              htmlType="submit"
              loading={isLoading}
            >
              Update
            </Button>
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
}
