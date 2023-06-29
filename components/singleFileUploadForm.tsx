import axios from "axios";
import Image from "next/image";
import { ChangeEvent, MouseEvent, useState } from "react";

const SingleFileUploadForm = ({ emailProps }: any) => {
  const [file, setFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const onFileUploadChange = (e: ChangeEvent<HTMLInputElement>) => {
    const fileInput = e.target;

    if (!fileInput.files) {
      alert("Nenhum arquivo foi escolhido");
      return;
    }

    if (!fileInput.files || fileInput.files.length === 0) {
      alert("A lista de arquivos está vazia");
      return;
    }

    const file = fileInput.files[0];
    console.log("file", file);

    /** File validation */
    if (
      file.type !== "application/pdf" &&
      file.type !==
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
    ) {
      alert("Por favor, selecione um documento PDF ou DOCX");
      return;
    }

    /** Setting file state */
    setFile(file); // we will use the file state, to send it later to the server
    setPreviewUrl(URL.createObjectURL(file)); // we will use this to show the preview of the image

    /** Reset file input */
    e.currentTarget.type = "text";
    e.currentTarget.type = "file";
  };

  const onCancelFile = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!previewUrl && !file) {
      return;
    }
    setFile(null);
    setPreviewUrl(null);
  };

  const onUploadFile = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (!file) {
      return;
    }

    try {
      let formData = new FormData();
      
      formData.append("media", file);
      formData.append("name", emailProps.name);
      formData.append("subject", emailProps.subject);
      formData.append("from", emailProps.from);
      formData.append("to", emailProps.to);
      formData.append("text", emailProps.text);

      const res = await axios.post("/api/sendmailwithfile", formData);

      const {
        data,
        error,
      }: {
        data: {
          url: string | string[];
        } | null;
        error: string | null;
      } = await res.data;

      if (error || !data) {
        alert(
          error ||
            "Desculpe, não foi possível enviar o arquivo. Tente novamente mais tarde"
        );
        return;
      }

      console.log("Arquivo enviado com sucesso.", data);
    } catch (error) {
      console.error(error);
      alert(
        "Desculpe, não foi possível enviar o arquivo. Tente novamente mais tarde"
      );
    }
  };

  return (
    <div className="w-full max-w-3xl px-3 mx-auto">
      <h1 className="mb-10 text-3xl font-bold text-gray-900">
        Envie seu currículo
      </h1>

      <form
        className="w-full p-3 border border-gray-500 border-dashed"
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="flex flex-col md:flex-row gap-1.5 md:py-4">
          <div className="flex-grow">
            {previewUrl ? (
              <div className="mx-auto w-80">
                <Image
                  alt="file uploader preview"
                  objectFit="cover"
                  src={
                    file?.type === "application/pdf"
                      ? "/pdf.jpg"
                      : file?.type ===
                        "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                      ? "/docx.jpg"
                      : "/document.png"
                  }
                  style={{
                    width: "50px",
                  }}
                  width={50}
                  height={50}
                  layout="fixed"
                />
                {file?.name}
              </div>
            ) : (
              <label className="flex flex-col items-center justify-center h-full py-3 transition-colors duration-150 cursor-pointer hover:text-gray-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-14 h-14"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                  />
                </svg>
                <strong className="text-sm font-medium">
                  Selecione um arquivo
                </strong>
                <input
                  className="block w-0 h-0"
                  name="file"
                  type="file"
                  onChange={onFileUploadChange}
                />
              </label>
            )}
          </div>
          <div className="flex mt-4 md:mt-0 md:flex-col justify-center gap-1.5">
            <button
              disabled={!previewUrl}
              onClick={onCancelFile}
              className="w-1/2 px-4 py-3 text-sm font-medium text-white transition-colors duration-300 bg-gray-700 rounded-sm md:w-auto md:text-base disabled:bg-gray-400 hover:bg-gray-600"
            >
              Remover arquivo
            </button>
          </div>
        </div>
      </form>
      <div className="form-actions">
        <label htmlFor="file" className="attach-resume-button">
          Anexar currículo
        </label>
        <input
          id="file"
          name="file"
          type="file"
          onChange={onFileUploadChange}
          className="fileInput"
          placeholder="Anexar currículo"
        />
        <button
          disabled={!previewUrl}
          onClick={onUploadFile}
          className="attach-resume-button"
        >
          Enviar
        </button>
      </div>
    </div>
  );
};

export default SingleFileUploadForm;
