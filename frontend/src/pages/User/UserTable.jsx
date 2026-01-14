import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import {
  Box,
  CircularProgress,
  IconButton,
  Tooltip,
  Typography,
} from "@mui/material";
import TableHeader from "../../components/TableHeader";
import DeleteIcon from "@mui/icons-material/Delete";
import React, { useState } from "react";
import DeleteDialog from "../../components/modal/DeleteDialog";
import {
  useDeleteUserQueries,
  useUserQueries,
} from "../../queries/userQueries";

const UserTable = React.memo(({ open }) => {
  // de lete
  const [openDelete, setOpenDelete] = useState(false);
  const [deleteId, setDeletedId] = useState(null);

  const { data, isLoading, isError, error } = useUserQueries();
  const { mutateAsync } = useDeleteUserQueries();

  const handleOpenDelete = async (id) => {
    setOpenDelete(true);
    setDeletedId(id);
  };

  const handleDelete = async () => {
    if (!deleteId) return;
    await mutateAsync(deleteId);
    setDeletedId(null);
    setOpenDelete(false);
  };
  if (isLoading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  if (isError) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography>{error.message}</Typography>
      </Box>
    );
  }
  return (
    <>
      <TableHeader name="User" open={open} />
      <TableContainer component={Paper}>
        <Table
          stickyHeader
          sx={{ minWidth: 650 }}
          size="small"
          aria-label="a dense table"
        >
          <TableHead>
            <TableRow>
              <TableCell>Sr. No</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data?.data.map((row, index) => (
              <TableRow
                key={row._id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>{index + 1}</TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.email}</TableCell>
                <TableCell>
                  <Tooltip title="Delete" arrow>
                    <IconButton onClick={() => handleOpenDelete(row._id)}>
                      <DeleteIcon color="error" />
                    </IconButton>
                  </Tooltip>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* delete modal */}
      {openDelete && (
        <DeleteDialog
          open={openDelete}
          onClose={() => setOpenDelete(false)}
          title="User"
          onDelete={handleDelete}
        />
      )}
    </>
  );
});

export default UserTable;
