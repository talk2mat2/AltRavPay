import { useState } from "react";
import { Modal } from "antd";

const useModals = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return {Modal, isModalOpen, handleCancel, showModal, handleOk};
};

export default useModals;
