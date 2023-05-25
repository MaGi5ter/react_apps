import React from "react";
import "./panel-style.css";

interface PanelProps {
  children: React.ReactNode;
}

function Panel(props: PanelProps) {
  return (
    <>
      <div className="mid-panel">
        <div className="panel">{props.children}</div>
      </div>
    </>
  );
}

export default Panel;
