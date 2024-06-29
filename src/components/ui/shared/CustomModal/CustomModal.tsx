import { Modal } from "antd";
import React, { ReactNode, SetStateAction } from "react";

interface ICustomModal {
  open: boolean;
  setOpen: React.Dispatch<SetStateAction<boolean>>;
  children: ReactNode;
  title: string;
  width: string | number;
}

export default function CustomModal({
  children,
  open,
  setOpen,
  title,
  width,
}: ICustomModal) {
  return (
    <Modal
      title={title}
      centered
      open={open}
      onOk={() => setOpen(false)}
      onCancel={() => setOpen(false)}
      width={width}
    >
      {children}
    </Modal>
  );
}
