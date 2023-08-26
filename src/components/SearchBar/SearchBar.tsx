import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

function SearchBar({ setFilter }: any) {
  const handleChange = (e: any) => {
    setFilter(e.target.value);
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();
  };
  return (
    <Box
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <TextField
        id="outlined-search"
        label="Search by Name"
        type="search"
        margin="normal"
        sx={{ background: "rgba(240, 240, 240, 0.2)" }}
        onChange={handleChange}
      ></TextField>
    </Box>
  );
}

export default SearchBar;
