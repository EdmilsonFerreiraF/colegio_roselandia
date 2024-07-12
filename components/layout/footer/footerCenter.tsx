import Link from "next/link";

const FooterCenter = ({ address }: any) => {
  return (
    <div className="footer-center">
      <p className="footer-address">
        {address?.map((address: any) => (
          <Link
            key={address?.item?.link}
            href={address?.item?.link}
            target="_blank"
          >
            <div
              dangerouslySetInnerHTML={{
                __html: address?.item?.endereco,
              }}
            ></div>
          </Link>
        ))}
      </p>
    </div>
  );
};

export default FooterCenter;
