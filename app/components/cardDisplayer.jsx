"use client"
import styles from "./cardDisplayer.module.css";
import Card from "@/app/components/card";
import {Modal} from "@mui/material";
import {useState} from "react";
import { DataGrid } from '@mui/x-data-grid';
import Image from "@/app/components/image";

const CardDisplayer = ({ data }) => {
  const [showModal, setShowModal] = useState(false);
  const [product, setProduct] = useState({});
  const handleClose = () => {
    setProduct({});
    setShowModal(false);
  }
  const handleOpen = (index) => {
    data[index].products = data[index].products.map((row ,index) => ({id: index, ...row}));
    setProduct(data[index]);
    setShowModal(true);
  }
  const columns = [
    { field: 'numberOfPieces', headerName: 'Number Of Pieces', width: 200},
    { field: 'packageType', headerName: 'Package Type', width: 200 },
    { field: 'netWeight', headerName: 'Net Weight', width: 200 },
  ];
  return (
    <div className={styles.cardContainer}>
      {data.map((product, index) => (
        <div key={index} className={styles.card} onClick={() => handleOpen(index)}>
          <Card image={product.image ?? ''} description={product.name}></Card>
        </div>
      ))}
      <Modal
        open={showModal}
        onClose={handleClose}
      >
        <div className={styles.modal}>
          <div>
            <h1>{product.name}</h1>
          </div>
          <div className="flex flex-row-reverse items-center">
            <div>
              <Image src={product.image ?? ''} />
            </div>
            <div>
              <DataGrid
                rows={product.products}
                columns={columns}
                hideFooterPagination={true}
                rowSelection={false}
                disableColumnMenu={true}
                disableSelectionOnClick
              />
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default CardDisplayer;