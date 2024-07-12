import Link from "next/link";

const SendButton = ({ sendMail }: any) => {
  return (
    <Link
      href="schedule-visit"
      className="schedule-visit-button"
    >
      Enviar
    </Link>
  );
};

export default SendButton;
