import React from "react";
import { Grid, styled, Typography } from "@mui/material";

const Root = styled(Grid)`
  background-image: url("https://danzadefogones.com/wp-content/uploads/2018/06/Ceviche-vegano-2.jpg");
  flex: 1;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
`;

const Description = styled(Typography)`
  && {
    padding: 24px;
  }
`;

interface Props {
  title: string;
  description: string;
}

const VeganRecipe: React.FC<Props> = ({ title, description }) => {
  return (
    <>
      <img
        height="300px"
        width="100%"
        src={`https://www.somnatur.com/wp-content/uploads/2017/11/ceviche-de-calabaza-eco.jpg`}
        alt={title}
      />
      <Typography textAlign="center" variant="h3">
        {title}
      </Typography>
      <Grid container pt={2} xs={12} height="30%" overflow="scroll">
        <Description variant="body1">{description}</Description>
      </Grid>
    </>
  );
};

export default VeganRecipe;
