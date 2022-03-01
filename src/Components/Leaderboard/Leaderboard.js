import React from "react";
// import { Link } from "react-router-dom";
import LeftNavBar from "../Navigation/SideNav/SideNav";
import TopNavBar from "../Navigation/TopNav/TopNav";
import Table from "./Table";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import {
  SectionRight,
  MainSection,
  HeadingText,
  Button,
} from "../../Styles/styles";
import styled from "styled-components";

export default function Leaderboard() {
  const [shift, setShift] = React.useState("Shift-1");
  const [date,setDate] = React.useState(new Date(Date.now()).toISOString().split('T')[0])

  const handleChange = (event) => {
    setShift(event.target.value);
  };
  return (
    <>
      <LeftNavBar />
      <SectionRight className="section-leaderboard">
        <TopNavBar />
        <MainSection>
          <HeadingText align="left">Leaderboard</HeadingText>
          <ButtonWrapper>
            <Button>Supervisor Leaderboard</Button>
            <Button primary>Weaver Leaderboard</Button>
          </ButtonWrapper>
          {/* component for slecting various data */}
          <Box sx={{ width: "20rem", display: "flex", gap: "2rem" }}>
            <FormControl fullWidth size="small">
              <InputLabel id="select-label">
                Select Shift
              </InputLabel>
              <Select
                labelId="select-label"
                id="select-shift"
                value={shift}
                label="select shift"
                onChange={handleChange}>
                <MenuItem value={'Shift-1'}>Shfit-1</MenuItem>
                <MenuItem value={'Shift-2'}>Shift-2</MenuItem>
              </Select>
            </FormControl>
            <FormControl fullWidth>
              <TextField
                id="date"
                label="Select Date"
                type="date"
                defaultValue={date}
                sx={{ width: 220 }}
                size="small"
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={(e) => {
                  setDate(e.target.value)
                }}
              />
            </FormControl>
          </Box>

          <Table />
        </MainSection>
      </SectionRight>
    </>
  );
}

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-content: center;
  gap: 2rem;
  margin: 2rem 0;
`;
