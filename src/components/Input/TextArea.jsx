import "./Input.scss";

export default function TextArea({
  className,
  style,
  placeholder,
  cols,
  rows,
}) {
  return (
    <textarea
      className={`textarea ${className}`}
      style={style}
      placeholder={placeholder}
      cols={cols}
      rows={rows}
    />
  );
}
