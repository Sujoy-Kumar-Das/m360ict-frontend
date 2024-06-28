import { DeleteFilled, EditFilled } from "@ant-design/icons";
import type { PaginationProps, TableColumnsType } from "antd";
import { Button, Pagination, Table } from "antd";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { productApi } from "../../redux/features/product/product.api";

interface DataType {
  key: React.Key;
  title: string;
  brand: number;
  category: string;
  price: number;
}

const Products = () => {
  // react hooks
  const [current, setCurrent] = useState(1);
  const [params, setParams] = useState([
    { name: "limit", value: 10 },
    { name: "skip", value: 0 },
  ]);

  // all products redux hooks
  const { useGetAllProductsQuery } = productApi;
  const { data } = useGetAllProductsQuery(params);

  useEffect(() => {
    setParams([
      { name: "limit", value: 10 },
      { name: "skip", value: (current - 1) * 10 },
    ]);
  }, [current]);

  const onChange: PaginationProps["onChange"] = (page) => {
    setCurrent(page);
  };

  // table colum
  const columns: TableColumnsType<DataType> = [
    {
      title: "Id",
      dataIndex: "id",
    },
    {
      title: "Title",
      dataIndex: "title",
    },
    {
      title: "Brand",
      dataIndex: "brand",
    },
    {
      title: "Category",
      dataIndex: "category",
    },
    {
      title: "Price",
      dataIndex: "price",
    },
    {
      title: "Detail",
      dataIndex: "id",
      render: (id) => (
        <NavLink to={`/products/${id}`}>
          <Button type="primary">View</Button>
        </NavLink>
      ),
    },
    {
      title: "Edit",
      dataIndex: "id",
      render: (id) => (
        <Button onClick={() => handleEdit(id)} type="primary">
          <EditFilled />
        </Button>
      ),
    },
    {
      title: "Delete",
      dataIndex: "id",
      render: (id) => (
        <Button onClick={() => handleDelete(id)} danger>
          <DeleteFilled />
        </Button>
      ),
    },
  ];

  const handleDelete = (id) => {
    console.log({ id });
  };
  const handleEdit = (id) => {
    console.log({ id });
  };

  return (
    <div style={{ marginBottom: 16 }}>
      <Button type="primary" style={{ marginBottom: "10px" }}>
        Add a product
      </Button>
      <Table
        columns={columns}
        dataSource={data?.products}
        pagination={false}
        scroll={{ x: true }}
      />
      <div
        style={{ marginTop: "30px", display: "flex", justifyContent: "end" }}
      >
        {" "}
        <Pagination
          current={current}
          onChange={onChange}
          total={data?.total}
          showSizeChanger={false}
        />
      </div>
    </div>
  );
};

export default Products;
