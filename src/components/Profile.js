import React from "react";
import{Form} from "react-bootstrap"

function Profile() {
  return (
      <>
        <Form.Group controlId="formFileMultiple" className="mb-3">
          <Form.Label>Multiple files input example</Form.Label>
          <Form.Control type="file" multiple />
        </Form.Group>
        <button className="btn btn-secondary my-2 my-sm-0" type="submit">Upload</button>
      </>
  );
}

export default Profile;
