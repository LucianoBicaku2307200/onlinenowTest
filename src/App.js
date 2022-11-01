import { useState } from "react";
import { Row, Col } from "react-bootstrap";
import { CustomForm, Output } from "./Components";

const errors = [
  {
    name: "email",
    label: "Email Error",
    display: false,
    validationFnc: function (vl) {
      return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(vl);
    },
  },
  {
    name: "first_name",
    label: "first name Error",
    display: false,
    validationFnc: function (vl) {
      return !/^[a-zA-Z]+$/.test(vl);
    },
  },
  {
    name: "last_name",
    label: "last name Error",
    display: false,
    validationFnc: function (vl) {
      return !/^[a-zA-Z]+$/.test(vl);
    },
  },
  {
    name: "hobbies",
    label: "pick a hobbie or add one",
    display: false,
    validationFnc: function (vl) {
      return !vl.length;
    },
  },
];

function App() {
  const [data, setData] = useState({
    email: "",
    first_name: "",
    last_name: "",
    hobbies: [],
    errors,
  });
  const [showOutput, setshowOutput] = useState(false);

  const handeStateChange = (newData) => {
    setData({ ...data, ...newData });
  };

  const validate = () => {
    let errors = data.errors;
    let returnValue = false;

    errors.forEach((el, index) => {
      if (el?.validationFnc && el?.validationFnc(data[el.name])) {
        returnValue = true;
        errors[index] = { ...el, display: true };
      } else {
        errors[index] = { ...el, display: false };
      }
    });

    setData({ ...data, errors });
    return returnValue;
  };
  const handleSubmit = () => {
    if (!validate()) {
      setshowOutput(true);
    }
  };

  return (
    <Row>
      <Col
        className="d-flex justify-content-center align-items-center p-5"
        xs={6}
      >
        <CustomForm
          data={data}
          handeStateChange={handeStateChange}
          handleSubmit={handleSubmit}
        />
      </Col>
      <Col
        className="d-flex justify-content-center align-items-center p-5"
        xs={6}
      >
        <Output data={data} showOutput={showOutput} />
      </Col>
    </Row>
  );
}

export default App;
