import "./Input.scss";

export default function InputText({ className, style, placeholder, type }) {
  return (
    <input
      className={`text-input ${className || ""}`}
      style={style || {}}
      type={type || "text"}
      placeholder={placeholder || ""}
    />
  );
}
