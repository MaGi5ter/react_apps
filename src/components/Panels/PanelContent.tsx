import "./panel-content.css";

interface content {
  content: string;
}

function PanelContent(content: content) {
  return (
    <>
      <p className="panel-content">{content.content}</p>
    </>
  );
}

export default PanelContent;
