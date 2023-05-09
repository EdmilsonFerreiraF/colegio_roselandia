type IProps = {
  partner: any;
};

const Partner = ({ partner }: IProps) => {
  return (
    <div className="partner-item">
      <img src={partner.imageUrl} alt="" />
    </div>
  );
};

export default Partner;
