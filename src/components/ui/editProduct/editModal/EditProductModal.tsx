import React from "react";
import { IProduct } from "../../../../types";
import CustomModal from "../../shared/CustomModal/CustomModal";
import EditBasicProductData from "../editBasicProductData/EditBasicProductData";

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
      <EditBasicProductData data={data as IProduct} setOpen={setOpen} />
    </CustomModal>
  );
};

export default EditProductModal;
