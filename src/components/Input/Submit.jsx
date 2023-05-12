import "./Input.scss";

export default function Submit({ className, style, value }) {
  
  return (
    <button className={`submit ${className}`} style={style} type="submit">
      {value}
    </button>
  );
}
