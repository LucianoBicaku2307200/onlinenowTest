import React from "react";
import { Form, Button } from "react-bootstrap";
import makeAnimated from "react-select/animated";
import CreatableSelect from "react-select/creatable";
const animatedComponents = makeAnimated();
const Hobbies = [
  { value: "Gaming", label: "Gaming" },
  { value: "Coding", label: "Coding" },
  { value: "BasketBall", label: "BasketBall" },
  { value: "Gym", label: "Gym" },
];

const FormInputs = [
  { label: "Email", name: "email", type: "email" },
  { label: "First name", name: "first_name", type: "text" },
  { label: "last name", name: "last_name", type: "text" },
  { label: "hobbies", name: "hobbies", type: "select" },
];

const CustomFormGroup = ({
  inputData,
  handleInpusChange,
  handleSelectValuesChange,
}) => {
  return (
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>{inputData.label}</Form.Label>
      {inputData.type !== "select" ? (
        <Form.Control
          name={inputData.name}
          onChange={handleInpusChange}
          type={inputData.type}
          placeholder={`Enter ${inputData.label.toLowerCase()}`}
          className={`${
            inputData?.error?.display ? "border-danger text-danger" : ""
          }`}
        />
      ) : (
        <CreatableSelect
          onChange={handleSelectValuesChange}
          closeMenuOnSelect={false}
          components={animatedComponents}
          isMulti
          options={Hobbies}
        />
      )}
      {inputData?.error?.display && (
        <div className="text-danger">{inputData?.error?.label}</div>
      )}
    </Form.Group>
  );
};

function CustomForm({ data, handeStateChange, handleSubmit }) {
  const handleInpusChange = (event) => {
    handeStateChange({ [event.target.name]: event.target.value });
  };
  const handleSelectValuesChange = (selectedValues) => {
    handeStateChange({ hobbies: selectedValues });
  };

  return (
    <>
      <Form className="w-75">
        {FormInputs.map((item) => (
          <CustomFormGroup
            key={item.name}
            handleInpusChange={handleInpusChange}
            handleSelectValuesChange={handleSelectValuesChange}
            inputData={{
              ...item,
              error: data.errors.find((el) => el.name == item.name),
            }}
          />
        ))}

        <Button onClick={handleSubmit}>Click</Button>
      </Form>
    </>
  );
}

export default CustomForm;
