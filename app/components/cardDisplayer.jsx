"use client"
import styles from "./cardDisplayer.module.css";
import Card from "@/app/components/card";
import {Box, createTheme, Modal, ThemeProvider} from "@mui/material";
import {useEffect, useState} from "react";
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
    { field: 'numberOfPieces', headerName: 'Number Of Pieces', width: 150, sortable: false },
    { field: 'packageType', headerName: 'Package Type', width: 150, sortable: false },
    { field: 'netWeight', headerName: 'Net Weight', width: 150, sortable: false },
  ];

  return (
    <div className={styles.cardContainer}>
      {data?.map((product, index) => (
        <div key={index} className={styles.card} onClick={() => handleOpen(index)}>
          <Card image={product.image ?? ''} description={product.name ?? ''}></Card>
        </div>
      ))}
      <Modal
        open={showModal}
        onClose={handleClose}
      >
        <div className={styles.modal}>
          <div className={styles.modalHeader}>
            <h1>{product.name}</h1>
          </div>
          <div className={styles.modalContainer}>
            <div className={styles.modalImage}>
              <Image src={product.image ?? ''} />
            </div>
            <Box className={styles.modalTable}>
              <DataGrid
                rows={product.products}
                columns={columns}
                rowSelection={false}
                disableColumnMenu={true}
                disableSelectionOnClick
                hideFooter={true}
                sx={{
                  '& .MuiDataGrid-row--borderBottom': {
                    backgroundColor: "#00000000 !important",
                  },
                }}
              />
            </Box>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default CardDisplayer;