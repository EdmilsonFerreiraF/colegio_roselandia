import { Box, FormControl } from "@mui/material";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import TextField from "@mui/material/TextField";
import Image from "next/image";
import * as React from "react";

export default function NovicesModal() {
  const [open, setOpen] = React.useState(true);
  const [subscribedMessage, setSubscribedMessage] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
    setSubscribedMessage(true);
    setTimeout(() => {
      handleClose();
    }, 3000);
  };

  const subscribeModal = (
    <Box component="form" className="form" onSubmit={handleSubmit} noValidate>
      <Button className="closeButton" onClick={handleClose}>
        x
      </Button>
      <div className="image">
        <Image
          src="open_enrollment_asset.jpg"
          alt=""
          height="300"
          width="300"
        />
        <span className="image-legend">Se inscreva e receba todas as informações de nossas atividades</span>
      </div>
      <Box display="flex" flexDirection="column">
        <Box display="flex" gap=".5rem">
          <FormControl
            sx={{
              flex: 1,
              marginBottom: ".35rem"
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
      <Button type="submit" className="submit">
        Inscrever
      </Button>
    </Box>
  );

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
          ".MuiBackdrop-root": {
            backgroundColor: "rgba(0, 0, 0, 0.6)"
          }
        }}
      >
        <DialogContent className="novicesModal">
          {subscribedMessage ? (
            <>Cadastrado com sucesso</>
          ) : open ? (
            subscribeModal
          ) : null}
        </DialogContent>
      </Dialog>
    </div>
  );
}
