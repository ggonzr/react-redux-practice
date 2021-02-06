/**
 * Base Layout
 */

import TextField from "../Components/TextField";
import TextScreen from "../Components/TextScreen";
import { Container, Row } from "react-bootstrap";

export const App = () => {
  let screenId = 1;
  return (
    <Container fluid>
      <Row>
        <TextScreen screenId={screenId++} />
        <TextScreen screenId={screenId++} />
      </Row>
      <Row>
        <TextScreen screenId={screenId++} />
        <TextField />
        <TextScreen screenId={screenId++} />
      </Row>
    </Container>
  );
};

export default App;
