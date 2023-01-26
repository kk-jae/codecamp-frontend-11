import { Modal,Button } from 'antd';
import { useState } from 'react';
import DaumPostcodeEmbed from 'react-daum-postcode';

export default function LibraryModal () {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [address, setAddress] =useState("");

  const onClickShowModal = () => {
    setIsModalOpen((prev) =>!prev);
  };

  // const handleOk = () => {
  //   setIsModalOpen((prev) =>!prev);
  // };

  // const handleCancel = () => {
  //   setIsModalOpen((prev) =>!prev);
  // };

  const handleComplete = (data:any) => {
    console.log(data);
    onClickShowModal();
    // isModalOpen(false);
    setAddress(data.address)
  }

  return (
    <>
    <Button type="primary" onClick={onClickShowModal}>
    모달 열기
    </Button>

    {isModalOpen &&
      <Modal open={isModalOpen} onOk={onClickShowModal} onCancel={onClickShowModal}>
        <DaumPostcodeEmbed onComplete={handleComplete}></DaumPostcodeEmbed>
    </Modal>
}     
      <p>{address}</p>  

    </>
  );
} 