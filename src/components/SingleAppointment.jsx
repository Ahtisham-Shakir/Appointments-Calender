import React from "react";

const SingleAppointment = ({ name, startTime, endTime }) => {
  return (
    <div className={`td ${startTime && "singleCon"}`}>
      <div>
        <p>{name}</p>
        <div>
          {startTime && endTime ? (
            <p>
              {startTime} - {endTime}
            </p>
          ) : (
            <p>{name}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SingleAppointment;
