import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

const AutoComplete = ({ items }) => {
  return (
    <div style={{ width: "300px" }}>
      <Autocomplete
        id="free-solo-demo"
        freeSolo
        disableClearable
        options={items.map((option) => option.name)}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search input"
            margin="normal"
            variant="outlined"
            InputProps={{ ...params.InputProps, type: "search" }}
          />
        )}
      />
    </div>
  );
};

export default AutoComplete;
