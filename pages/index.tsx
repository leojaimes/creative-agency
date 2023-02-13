import { Button, Stack } from "@mui/material";
import Head from "next/head";
import Image from "next/image";
import { LinkComponent } from "components";


export default function Home() {
  return (
    <>
      {
        /*
        <Button sx={{ backgroundColor: "orange", color: "white " }}>test</Button>
        <CustomButton
          sx={{ backgroundColor: "red" }}
          bgcolor="#FF7377"
          txtcolor="white"
        >
          {" "}
          Custom Button{" "}
        </CustomButton>
        <FCustomButton bgColor="#FF7377" txtColor="black"></FCustomButton>

        <MuiButton></MuiButton>
        */
      }
      <LinkComponent />
    </>
  );
}
