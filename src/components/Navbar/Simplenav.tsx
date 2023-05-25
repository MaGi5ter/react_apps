import Text from "../Text/Text";
import "./style.css";

function SimpleNav() {
  return (
    <>
      <div id="simple-nav">
        <div id="leftFlex">
          <div className="flex-row">
            <Text text="Designed" fontSize="xx-large"></Text>
          </div>
          <div className="flex-row">
            <Text text="by StableDiffiusion" fontSize="18px"></Text>
          </div>
        </div>
        <div id="rightFlex">
          <div className="flex-row"></div>
          <div className="flex-row">
            <Text text="created by @me" fontSize="18px"></Text>
          </div>
        </div>
      </div>
    </>
  );
}

export default SimpleNav;
