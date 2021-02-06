/**
 * A card to show the text
 */

import { Card } from "react-bootstrap";
import { connect } from "react-redux";
import { getText } from "../Redux/selectors";

// Get the current state in the store to parse it to props using Redux
export const mapStateToProps = (state) => {
  const currentText = getText(state);
  console.log("Current Redux text: ", currentText);
  return {
    text: getText(state),
  };
};

// React Component
export const TextScreen = (props) => {
  // Screen ID and Text
  const { screenId, text } = props;

  return (
    <Card className="m-5">
      <Card.Header>{`Screen #${screenId}`}</Card.Header>
      <Card.Body>
        <Card.Title>{text}</Card.Title>
      </Card.Body>
    </Card>
  );
};

// Invoke Redux wrapping the current component
export default connect(mapStateToProps)(TextScreen);
