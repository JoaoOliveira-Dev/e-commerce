"use client";

import Cadastro from "@/components/cadastro/cadastro";

import { Autocomplete, Button, Grid, TextField } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import Input from "@/components/shared/input/input";

export default function Page() {
  const optionCategories = [
    { label: "Camiseta Oversized", id: 1 },
    { label: "Camiseta Raglan", id: 2 },
    { label: "Regata", id: 3 },
    { label: "StreetWare", id: 4 },
  ];

  const optionSizes = [
    { label: "PP", id: 1 },
    { label: "P", id: 2 },
    { label: "M", id: 3 },
    { label: "G", id: 4 },
    { label: "GG", id: 5 },
  ];

  return (
    <Cadastro titulo="Cadastro de promoção" buttonCancel buttonSucess twoinput>
      <Grid container spacing={1}>
        <Grid
          xs={4}
          md={8}
          sm={8}
          sx={{
            width: { 300: "100%", 600: "50%" },
          }}
          item
        >
          <Input label="Nome do Produto" inputCadastro />
        </Grid>
        <Grid xs={5} md={4} sm={4} item>
          <Autocomplete
            disablePortal
            options={optionCategories}
            renderInput={(params) => (
              <TextField {...params} label="Categoria" />
            )}
          />
        </Grid>
        <Grid xs={3} md={4} sm={4} item>
          <Input label="Preço do Produto" inputCadastro />
        </Grid>
        <Grid xs={5} md={4} sm={4} item>
          <Autocomplete
            style={{ marginLeft: "5px" }}
            disablePortal
            options={optionSizes}
            renderInput={(params) => <TextField {...params} label="Tamanho" />}
          />
        </Grid>
        <Grid
          xs={1}
          md={1}
          sm={2}
          item
          style={{
            display: "flex",

            marginLeft: "10px",
            flexDirection: "column",
          }}
        >
          <label
            style={{
              width: "100%",
              minWidth: "140px",
              paddingLeft: "5px",
              fontSize: "0.9rem",
              fontWeight: "600",
            }}
          >
            Imagem do Produto
          </label>
          <Button
            component="label"
            variant="contained"
            startIcon={<CloudUploadIcon />}
            style={{
              minWidth: "140px",
            }}
          >
            Upload
            <Input type="file" hidden />
          </Button>
        </Grid>
      </Grid>
    </Cadastro>
  );
}
