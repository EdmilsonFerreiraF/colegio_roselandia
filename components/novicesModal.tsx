import { AppContext } from "@/contexts/appProvider";
import { Box, FormControl } from "@mui/material";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import TextField from "@mui/material/TextField";
import Image from "next/image";
import * as React from "react";
import { useContext, useEffect, useState } from "react";

export default function NovicesModal() {
  const { isLoadingPages, pagesData } = useContext(AppContext) as any;
  const [enrollmentForm, setEnrollmentForm] = useState<any>({});

  const [open, setOpen] = React.useState(true);
  const [subscribedMessage, setSubscribedMessage] = React.useState(false);

  const [fields, setFields] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const findHome = () => {
    const pageData = pagesData.find(
      (pageItem: any) => pageItem.titulo === "Home"
    );

    return pageData;
  };

  const homePage = findHome();

  useEffect(() => {
    if (pagesData?.length) {
      setEnrollmentForm(homePage.blocos[7].item);
    }
  }, [pagesData, isLoadingPages, homePage?.blocos]);

  const handleInputChange = (e: any) => {
    setFields((prevState: any) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };

  const handleClose = () => {
    setOpen(false);
  };

  const replaceTextVars = () => {
    const regex = /(<nome>)|(<email>)|(<telefone>)/g;

    function replacer(
      _: any,
      p1: any,
      p2: any,
    ) {
      if (p1) return fields.name;
      else if (p2) return fields.email;

      return fields.phone;
    }

    let text = enrollmentForm?.mensagem?.replace(
      regex,
      replacer
    );

    return text;
  };

  const sendMail = async () => {
    const replacedText = replaceTextVars();

    const res = await fetch("/api/sendmail", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        name: fields.name,
        subject: enrollmentForm.assunto,
        from: fields.email,
        to: enrollmentForm.email_destinatario,
        text: replacedText,
      }),
    }).then((res: any) => {
      console.log("res", res);
      setSubscribedMessage(true);

      setTimeout(() => {
        handleClose();
      }, 3000);

      return res;
    });
  };

  const subscribeModal = (
    <Box component="form" className="form" onSubmit={sendMail} noValidate>
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
        <span className="image-legend">
          Se inscreva e receba todas as informações de nossas atividades
        </span>
      </div>
      <Box display="flex" flexDirection="column">
        <Box display="flex" gap=".5rem">
          <FormControl
            sx={{
              flex: 1,
              marginBottom: ".35rem",
            }}
          >
            <TextField
              name="name"
              onChange={handleInputChange}
              label="Nome"
              value={fields["name"]}
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
              name="email"
              onChange={handleInputChange}
              label="Email"
              value={fields["email"]}
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
            name="phone"
            onChange={handleInputChange}
            label="Tel / Whatsapp"
            value={fields["phone"]}
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
            backgroundColor: "rgba(0, 0, 0, 0.6)",
          },
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
