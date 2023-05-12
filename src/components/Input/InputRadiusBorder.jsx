import "./Input.scss";

export default function InputRadiusBorder({ className, style, value }) {
  return (
    <input
      className={`inputRadiusBorder ${className}`}
      style={style}
      type="submit"
      value={value}
    />
  );
}
