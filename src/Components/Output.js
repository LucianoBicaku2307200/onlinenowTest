import React from "react";

function Output({ data, showOutput }) {
  return (
    showOutput && (
      <div className="w-75 d-flex flex-column gap-3">
        <div>Output</div>
        {data?.email && (
          <div className="d-flex gap-2">
            <span className="font-weight-bold">Email:</span> {data.email}
          </div>
        )}
        {data?.first_name && (
          <div className="d-flex gap-2">
            <span className="font-weight-bold">First Name:</span>{" "}
            {data.first_name}
          </div>
        )}
        {data?.last_name && (
          <div className="d-flex gap-2">
            <span className="font-weight-bold">Last Name:</span>{" "}
            {data.last_name}
          </div>
        )}
        {data?.hobbies && (
          <div className="d-flex gap-2">
            <span className="font-weight-bold">Hobbies: </span>
            {(data.hobbies || []).map((el, index) => (
              <div key={index}>{el.label}</div>
            ))}
          </div>
        )}
      </div>
    )
  );
}

export default Output;
