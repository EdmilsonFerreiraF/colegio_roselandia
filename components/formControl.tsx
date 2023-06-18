type IProps = {
  label: string;
  name: string;
  value: string;
  handleChange: any;
};

const FormControl = ({ label, name, value, handleChange }: IProps) => {
  return (
    <div className="form-control">
      <label htmlFor={name} className="label">
        {label}
      </label>
      {name === "message" ? (
        <textarea
          name={name}
          value={value}
          className="input-textarea input"
          onChange={(e: any) => handleChange(e)}
        ></textarea>
      ) : (
        <input
          id={name}
          name={name}
          type="text"
          className="input"
          value={value}
          onChange={(e: any) => handleChange(e)}
        />
      )}
    </div>
  );
};

export default FormControl;
