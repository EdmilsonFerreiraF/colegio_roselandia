type IProps = {
  label: string;
  name: string;
};

const FormControl = ({ label, name }: IProps) => {
  return (
    <div className="form-control">
      <label htmlFor={name} className="label">
        {label}
      </label>
      {name === "message" ? (
        <textarea className="input-textarea input"></textarea>
      ) : (
        <input id={name} type="text" className="input" />
      )}
    </div>
  );
};

export default FormControl;
