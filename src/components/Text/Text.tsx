interface Props {
  text: string;
  fontSize: string;
}

function Text(prop: Props) {
  let style = {
    fontSize: prop.fontSize,
  };

  return (
    <>
      <span className="text" style={style}>
        {prop.text}
      </span>
    </>
  );
}

export default Text;
