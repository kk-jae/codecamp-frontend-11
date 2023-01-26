import { Modal,Button } from 'antd';
import { useState } from 'react';

export default function LibraryModal () {

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

  return (
    <>
    <Button type="primary" onClick={showModal}>
    모달 열기
    </Button>
      <Modal title="게시물 등록" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <p>게시물이 등록되었습니다.</p>
    </Modal>
    </>
  );
} 