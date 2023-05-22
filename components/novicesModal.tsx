import { Box, FormControl } from "@mui/material";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import TextField from "@mui/material/TextField";
import Image from "next/image";
import * as React from "react";

export default function NovicesModal() {
  const [open, setOpen] = React.useState(true);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
    handleClose();
  };

  return (
    <div className="novicesModal">
      <Dialog
        open={open}
        onClose={handleClose}
        sx={{
          ".MuiPaper-root": {
            padding: ".6rem",
          },
          ".MuiDialogContent-root": {
            padding: 0,
          },
        }}
      >
        {/* <DialogTitle>Subscribe</DialogTitle> */}
        <DialogContent className="novicesModal">
          <Button className="closeButton" onClick={handleClose}>
            x
          </Button>
          <div className="image">
            <Image src="agende-visita.jpg" alt="" height="300" width="300" />
          </div>
          <Box
            component="form"
            className="form"
            display="flex"
            flexDirection="column"
          >
            <Box display="flex" gap=".5rem">
              <FormControl
                sx={{
                  flex: 1,
                }}
              >
                <TextField
                  placeholder="Nome *"
                  sx={{
                    ".MuiInputBase-root": {
                      height: "45px",
                    },
                  }}
                />
              </FormControl>
              <FormControl
                sx={{
                  flex: 1,
                }}
              >
                <TextField
                  placeholder="Email *"
                  sx={{
                    ".MuiInputBase-root": {
                      height: "45px",
                    },
                  }}
                />
              </FormControl>
            </Box>
            <FormControl
              sx={{
                flex: 1,
              }}
            >
              <TextField
                placeholder="+55"
                sx={{
                  ".MuiInputBase-root": {
                    height: "45px",
                  },
                }}
              />
            </FormControl>
            <div className="description">
              <p>Você pode atualizar seus dados a qualquer momento.</p>
              <p>
                Utilizaremos seus dados apenas para fins informativos, estamos
                comprometidos em proteger e respeitar sua privacidade.
              </p>
            </div>
          </Box>
          <Button className="submit" onSubmit={handleSubmit}>
            Inscrever
          </Button>
        </DialogContent>
        {/* <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Subscribe</Button>
        </DialogActions> */}
      </Dialog>
    </div>
  );
}
