/* eslint-disable camelcase */
/* eslint-disable no-alert */
/* eslint-disable prettier/prettier */
import React, { ReactElement, useEffect, useState } from 'react';
import { RootState } from 'app/store';
import axios from 'axios';
import { useSelector } from 'react-redux';
import DeleteIcon from '@mui/icons-material/Delete';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { Button, Box, Typography, Modal, TextField } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

interface Column {
    id: 'id' | 'description' | 'detail' | 'actions' ;
    label: string;
    minWidth?: number;
    align?: 'right';
    format?: (value: number) => string;
}

const columns: Column[] = [
    { id: 'id', label: '#', minWidth: 170 },
    { id: 'description', label: 'Descrição', minWidth: 100 },
    {
      id: 'detail',
      label: 'Detalhamento',
      minWidth: 170,
      align: 'right',
      
    },
    {
      id: 'actions',
      label: 'Ações',
      minWidth: 170,
      align: 'right',
    },
  
 
];

interface Data {
  id: string;
  description: string;
  detail: string;
  actions: ReactElement,
}
  
  
export default function Task() {
  const token = useSelector((state: RootState ) => state.user.data.currToken);
  const [inputDescription, setInputDescription] = React.useState('');
  const [inputDescriptionUpdate, setInputDescriptionUpdate] = React.useState('');
  const [inputDetail, setInputDetail] = React.useState('');
  const [inputDetailUpdate, setInputDetailUpdate] = React.useState('');
  const [uuidLocal, setUuidLocal ] = React.useState('');
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [rows, setRows] = useState<Array<Data>>([]);
  const [refreshTable, setRefreshTable] = useState(true);
  const [openUpdate, setOpenUpdate] = React.useState(false);
  const [openDelete, setOpenDelete] = React.useState(false);

  const handleOpenUpdate = (uuid: string, description: string, detail: string) => {
    setOpenUpdate(true);
    setUuidLocal(uuid)
    setInputDescriptionUpdate(description);
    setInputDetailUpdate(detail);
  };

  const handleCloseUpdate = () => setOpenUpdate(false);

  const handleOpenDelete = (uuid: string) => {
    setOpenDelete(true);
    setUuidLocal(uuid);
  };

  const handleCloseDelete = () => {
    setOpenDelete(false);
    setUuidLocal('');
  };


  useEffect(() => {
    if(refreshTable) {
      setRows([]);
      axios.get(`https://tasklist-back-crhist0.herokuapp.com/task/readTasksByUserId?token=${JSON.stringify(token)}`)
      .then((response) => {
        console.log("aqui: ",response.data.data);
        loadList(response.data.data);
      })
      .catch((err) => {
      console.log('err :', err);
          alert('Deu Ruim')
      })
      setRefreshTable(false)
    }

}, [refreshTable])

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const loadList = (list: Data[]) => {
    list.forEach((item: Data) => {
      setRows(prev => [...prev, item])
    })
  }

  const onSave = () => {
    const body = {
      description: inputDescription,
      detail: inputDetail,
      token,
    };
    axios
    .post('https://tasklist-back-crhist0.herokuapp.com/task/', body)
    .then((response) => {
      console.log('aqui: ', response.data.data);
      setRefreshTable(true)
    })
    .catch((err) => {
      console.log('err :', err);
      alert('Deu Ruim');
    });

    setInputDescription('');
    setInputDetail('')
  };

  const onDelete = (uuid: string) => {
    axios
      .delete(
        `https://tasklist-back-crhist0.herokuapp.com/task?token=${JSON.stringify(token)}&id=${uuid}`
      )
      .then((response) => {
        console.log('aqui: ', response);
        // buildList(response.data.data);
         setRefreshTable(true);
      })
      .catch((err) => {
        console.log('err :', err);
        alert('Não foi possível realizar a exclusão');
      });
    
    handleCloseDelete();
  }

  const onUpdate = () => {
    const bodyEditing = {
      id: uuidLocal,
      description: inputDescriptionUpdate,
      detail: inputDetailUpdate,
      token,
    };
    axios
    .put('https://tasklist-back-crhist0.herokuapp.com/task/', bodyEditing)
    .then((response) => {
      console.log('aqui: ', response.data.data);
      setRefreshTable(true);
      handleCloseUpdate();
    })
    .catch((err) => {
      console.log('err :', err);
      alert('Deu Ruim');
    });

  };

  return(
    <>
      <Paper sx={{ width: '100%' }}>
        <Box justifyContent='center'>
          <TextField
            id="descriptionInput"
            label="Descrição"
            value={inputDescription}
            onChange={(e) => setInputDescription(e.target.value)}
          />
          <TextField
            id="detailInput"
            label="Detalhamento"
            value={inputDetail}
            onChange={(e) =>setInputDetail(e.target.value)}
          />
          <Button disabled={!inputDetail || !inputDescription} 
            variant="text" 
            color="primary" 
            onClick={() => onSave() }
          >
            Salvar Recado
          </Button>
        </Box>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ top: 57, minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                      {columns.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {column.id === 'id' ? index + 1 : value}
                            {column.id === 'actions' && <Box>
                                <Button onClick={() => handleOpenUpdate(row.id, row.description, row.detail)} variant="outlined" color='primary'>Editar</Button>
                                <Button onClick={() => handleOpenDelete(row.id)} variant="outlined" startIcon={<DeleteIcon />} color='error' >Apagar</Button>
                              </Box>
                            }
                          </TableCell>
                          
                        );
                      })}
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
      <Modal
          open={openUpdate}
          onClose={handleCloseUpdate}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <TextField
              id="descriptionInputUpdate"
              label="Descrição"
              value={inputDescriptionUpdate}
              onChange={(e) => setInputDescriptionUpdate(e.target.value)}
            />
            <TextField
              id="detailInputUpdate"
              label="Detalhamento"
              value={inputDetailUpdate}
              onChange={(e) => setInputDetailUpdate(e.target.value)}
            />
            <Button onClick={onUpdate}  variant="text" disabled={!inputDescriptionUpdate || !inputDetailUpdate} color="primary">
              Confirmar
            </Button>
            <Button onClick={handleCloseUpdate} variant="text" color="primary">
              Cancelar
            </Button>
          </Box>
      </Modal>
      <Modal
        open={openDelete}
        onClose={handleCloseDelete}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Deseja mesmo apagar o item?
          </Typography>
          <Button onClick={() => onDelete(uuidLocal)} variant="text" color="success">
            Confirmar
          </Button>
          <Button onClick={handleCloseDelete} variant="text" color="error">
            Cancelar
          </Button>
        </Box>
      </Modal>
  </>
    );
}