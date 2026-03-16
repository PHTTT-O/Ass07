"use client"

import { TextField, Select, MenuItem, Button, FormControl, InputLabel } from "@mui/material";
import DateReserve from "@/components/DateReserve";

export default function BookingPage() {

  return (
    <main className="p-10">

      <h1 className="text-3xl font-bold mb-6">
        Venue Booking
      </h1>

      <form className="flex flex-col gap-6 w-96">

        <TextField
          variant="standard"
          name="Name-Lastname"
          label="Name-Lastname"
        />

        <TextField
          variant="standard"
          name="Contact-Number"
          label="Contact-Number"
        />

        <FormControl variant="standard">
          <InputLabel id="venue-label">Venue</InputLabel>

          <Select
            id="venue"
            labelId="venue-label"
            defaultValue=""
          >

            <MenuItem value="Bloom">
              The Bloom Pavilion
            </MenuItem>

            <MenuItem value="Spark">
              Spark Space
            </MenuItem>

            <MenuItem value="GrandTable">
              The Grand Table
            </MenuItem>

          </Select>

        </FormControl>

        <DateReserve/>

        <Button
          variant="contained"
          name="Book Venue"
        >
          Book Venue
        </Button>

      </form>

    </main>
  );
}