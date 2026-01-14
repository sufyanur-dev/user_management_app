import { Box, Button, Typography } from "@mui/material";

const TableHeader = ({ name, open }) => {
  return (
    <Box
      sx={{
        mb: 1,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Typography variant="h6">{name}</Typography>

      <Button
        variant="contained"
        size="small"
        onClick={open}
        sx={{ textTransform: "none" }}
      >
        +New
      </Button>
    </Box>
  );
};

export default TableHeader;
