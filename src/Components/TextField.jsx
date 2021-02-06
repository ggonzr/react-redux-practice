/**
 * A custom textfield
 */

import { Form, Card } from "react-bootstrap";
import { connect } from "react-redux";
import { changeText } from "../Redux/actions";

export const TextField = (props) => {
  const { changeText } = props;
  const handleText = (event) => {
    event.preventDefault();
    const writtenText = event.target.value;
    changeText(writtenText);
  };

  return (
    <Card className="m-5">
      <Card.Header>{`Textfield`}</Card.Header>
      <Card.Body>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Please write a text</Form.Label>
            <Form.Control
              type="text"
              placeholder="Write a beautifull message"
              onChange={handleText}
            />
            <Form.Text className="text-muted">
              We'll update the text in all screens for you using Redux :D
            </Form.Text>
          </Form.Group>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default connect(null, { changeText })(TextField);
