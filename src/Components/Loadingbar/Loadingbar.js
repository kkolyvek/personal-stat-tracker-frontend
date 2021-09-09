import "./Loadingbar.css";

export default function Loadingbar(props) {
  return (
    <div className="loadingbar">
      {props.loaded === 0 ? null : (
        <div
          style={{
            background: "green",
            width: `${props.loaded}%`,
            transition: "width 300ms",
          }}
        ></div>
      )}
      <div style={{ width: `${100 - props.loaded}%` }}></div>
    </div>
  );
}
