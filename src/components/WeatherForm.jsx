import { IconButton, InputAdornment, TextField } from "@mui/material";
import React, { useState } from "react";
import { Search } from "@mui/icons-material";

export default function WeatherForm(props) {
  const [city, setCity] = useState("");

  function hundleChange(e) {
    const value = e.target.value;

    setCity(value);
  }

  function hundleSubmit(e) {
    e.preventDefault();
    if (city.trim() !== "") {
      props.onLoardInfo(city);
    }
    setCity("");
  }

  return (
    <div className="inputs-container">
      <form onSubmit={hundleSubmit}>
        <TextField
          id="outlined-search"
          label="City"
          type="text"
          fullWidth
          value={city}
          onChange={hundleChange}
          slotProps={{
            input: {
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={hundleSubmit}>
                    <Search />
                  </IconButton>
                </InputAdornment>
              ),
            },
          }}
        />
      </form>
    </div>
  );
}
