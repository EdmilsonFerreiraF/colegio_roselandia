const FooterCenter = ({ address }: any) => {
  return (
    <div className="footer-center">
      <p className="footer-address">
        {address?.map((address: any) => (
          <a
            key={address?.item?.link}
            href={address?.item?.link}
            target="_blank"
          >
            <div
              dangerouslySetInnerHTML={{
                __html: address?.item?.endereco,
              }}
            ></div>
          </a>
        ))}
      </p>
    </div>
  );
};

export default FooterCenter;
