import * as React from 'react';
import { css } from "@emotion/react";
import Link from "next/link";

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
// アイコン
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

const classes = {
    scoreDate:css`
        text-align: center;
`,
    deleteButton:css`
        color: #ff0000;
  `
}

  function createData(
    columnName: string,
    valueName: string,
  ) {
    return { columnName, valueName };
  }

  const rows = [
    createData('スコア', '40点'),
    createData('色', '黒'),
    createData('形', 'バナナ'),
    createData('量', '多い'),
    createData('臭い', '臭う'),
    createData('スッキリ感', '気持ち悪い'),
  ];

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>

      <Button size="small" onClick={handleClickOpen}>もっと詳しく見る</Button>

      <Dialog open={open} onClose={handleClose}>

        <DialogTitle css={classes.scoreDate}>日付</DialogTitle>

        <DialogContent>
          {/* ユーザー情報 */}
          <div>
            <TableContainer component={Paper}>
                <Table sx={{ width: '100%' }} aria-label="simple table">
                    
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow
                            key={row.valueName}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                            <TableCell component="th" scope="row">
                                {row.columnName}
                            </TableCell>
                            <TableCell align="right">{row.valueName}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>

                </Table>
            </TableContainer> 
        </div>

        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>キャンセル</Button>
          <Button onClick={handleClose}><DeleteForeverIcon css={classes.deleteButton}/></Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}