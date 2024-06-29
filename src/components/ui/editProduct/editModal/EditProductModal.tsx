import { Tabs } from "antd";
import React from "react";
import { IProduct } from "../../../../types";
import CustomModal from "../../shared/CustomModal/CustomModal";
import EditBasicDataTab from "../editTabls/EditBasicDataTab";

interface IEditProductModalProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  data: IProduct | {};
}

const EditProductModal = ({ open, setOpen, data }: IEditProductModalProps) => {
  const { title } = data as IProduct;
  return (
    <CustomModal
      open={open}
      setOpen={setOpen}
      title={`Edit ${title}`}
      width={"90%"}
    >
      <Tabs
        defaultActiveKey="1"
        items={[
          {
            label: "Basic Information",
            key: "1",
            children: (
              <EditBasicDataTab data={data as IProduct} setOpen={setOpen} />
            ),
          },
          {
            label: "Tab 2",
            key: "2",
            children: "Tab 2",
          },
          {
            label: "Tab 3",
            key: "3",
            children: "Tab 3",
          },
        ]}
      />
    </CustomModal>
  );
};

export default EditProductModal;
