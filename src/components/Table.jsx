import React, { useEffect, useState } from "react";
import SingleAppointment from "./SingleAppointment";
import { FiRefreshCw } from "react-icons/fi";
import Loading from "./Loading";
import { toast } from "react-toastify";

const Table = ({ setUser }) => {
  const [timeArray, setTimeArray] = useState([]);
  const [mondayArr, setMondayArr] = useState([]);
  const [tuesdayArr, setTuesdayArr] = useState([]);
  const [wednesdayArr, setWednesdayArr] = useState([]);
  const [thursdayArr, setThursdayArr] = useState([]);
  const [fridayArr, setFridayArr] = useState([]);
  const [saturdayArr, setSaturdayArr] = useState([]);
  const [sundayArr, setSundayArr] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAppointments();
  }, []);

  //   function to refresh token
  const refreshToken = () => {
    const token = JSON.parse(localStorage.getItem("token"));
    fetch("https://hiring-test-task.vercel.app/api/refresh-token", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      body: JSON.stringify({ token: token }),
    })
      .then((res) => {
        if (res.status === 401) {
          localStorage.removeItem("token");
          setUser(null);
          toast.error("Unauthorized");
          throw new Error("Unauthorized");
        } else {
          return res.json();
        }
      })
      .then((data) => {
        localStorage.setItem("token", JSON.stringify(data.newToken));
        setUser({ token: data.newToken });
      })
      .catch((err) => console.log(err));
  };

  //   Function to fetch appointments
  const fetchAppointments = () => {
    const token = JSON.parse(localStorage.getItem("token"));

    setLoading(true);
    fetch("https://hiring-test-task.vercel.app/api/appointments", {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token,
      },
    })
      .then((res) => {
        if (res.status === 401) {
          localStorage.removeItem("token");
          setUser(null);
          toast.error("Unauthorized");
          throw new Error("Unauthorized");
        } else {
          return res.json();
        }
      })
      .then((data) => {
        // refreshing the token
        refreshToken();

        // creating time array and final array
        createTimeArray(data);
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setLoading(false);
      });
  };

  //   Function to create an array of times
  const createTimeArray = (data) => {
    let timeArr = [];
    for (let i = data.MIN_HOUR; i < data.MAX_HOUR; i++) {
      if (i < 12) {
        timeArr.push(`${i} AM`);
      } else if (i === 12) {
        timeArr.push(`${i} PM`);
      } else {
        timeArr.push(`${i - 12} PM`);
      }
    }
    setTimeArray(timeArr);
    // Creating final array
    createFinalArray(data, timeArr);
  };

  // Function to create final array
  const createFinalArray = (data, timeArr) => {
    const blankObj = {
      startTimeFormatted: null,
      name: " ",
      endTimeFormatted: null,
    };

    const length = Object.keys(data).length;
    const dataArr = Object.keys(data)
      .map((i) => data[i])
      .slice(0, length - 1);
    // console.log(dataArr);

    // Create an object to keep track of unique items based on startTimeFormatted
    const uniqueItems = {};

    // Filter out duplicates based on startTimeFormatted
    const filteredArray = dataArr.filter((item) => {
      if (!uniqueItems.hasOwnProperty(item.startTimeFormatted)) {
        uniqueItems[item.startTimeFormatted] = true;
        return true;
      }
      return false;
    });

    // Sort the original array based on startTimeFormatted
    const sortedArray = filteredArray.sort((a, b) => {
      // Convert start times to a 24-hour format for comparison
      const startTimeA = parseInt(a.startTimeFormatted);
      const startTimeB = parseInt(b.startTimeFormatted);

      // Compare start times
      if (startTimeA < startTimeB) {
        return -1;
      }
      if (startTimeA > startTimeB) {
        return 1;
      }
      // If start times are the same, compare end times
      const endTimeA = parseInt(a.endTimeFormatted);
      const endTimeB = parseInt(b.endTimeFormatted);
      if (endTimeA < endTimeB) {
        return -1;
      }
      if (endTimeA > endTimeB) {
        return 1;
      }
      // If both start and end times are the same, return 0 (considered equal)
      return 0;
    });

    // creating array for monday column
    const monArr = [];
    for (let i = 0; i < timeArr.length; i++) {
      let flag = false;
      for (let j = 0; j < sortedArray.length; j++) {
        if (
          sortedArray[j].startTimeFormatted === timeArr[i] &&
          sortedArray[j].weekDay === "Monday"
        ) {
          monArr.push(sortedArray[j]);
          flag = true;
          break;
        }
      }
      if (!flag) {
        monArr.push(blankObj);
      }
    }
    setMondayArr(monArr);

    // creating array for tuesday column
    const tuesArr = [];
    for (let i = 0; i < timeArr.length; i++) {
      let flag = false;
      for (let j = 0; j < sortedArray.length; j++) {
        if (
          sortedArray[j].startTimeFormatted === timeArr[i] &&
          sortedArray[j].weekDay === "Tuesday"
        ) {
          tuesArr.push(sortedArray[j]);
          flag = true;
          break;
        }
      }
      if (!flag) {
        tuesArr.push(blankObj);
      }
    }
    setTuesdayArr(tuesArr);

    // creating array for wednesday column
    const wedArr = [];
    for (let i = 0; i < timeArr.length; i++) {
      let flag = false;
      for (let j = 0; j < sortedArray.length; j++) {
        if (
          sortedArray[j].startTimeFormatted === timeArr[i] &&
          sortedArray[j].weekDay === "Wednesday"
        ) {
          wedArr.push(sortedArray[j]);
          flag = true;
          break;
        }
      }
      if (!flag) {
        wedArr.push(blankObj);
      }
    }
    setWednesdayArr(wedArr);

    // creating array for thursday column
    const thursArr = [];
    for (let i = 0; i < timeArr.length; i++) {
      let flag = false;
      for (let j = 0; j < sortedArray.length; j++) {
        if (
          sortedArray[j].startTimeFormatted === timeArr[i] &&
          sortedArray[j].weekDay === "Thursday"
        ) {
          thursArr.push(sortedArray[j]);
          flag = true;
          break;
        }
      }
      if (!flag) {
        thursArr.push(blankObj);
      }
    }
    setThursdayArr(thursArr);

    // creating array for friday column
    const friArr = [];
    for (let i = 0; i < timeArr.length; i++) {
      let flag = false;
      for (let j = 0; j < sortedArray.length; j++) {
        if (
          sortedArray[j].startTimeFormatted === timeArr[i] &&
          sortedArray[j].weekDay === "Friday"
        ) {
          friArr.push(sortedArray[j]);
          flag = false;
          break;
        }
      }
      if (!flag) {
        friArr.push(blankObj);
      }
    }
    setFridayArr(friArr);

    // creating array for saturday column
    const satArr = [];
    for (let i = 0; i < timeArr.length; i++) {
      let flag = false;
      for (let j = 0; j < sortedArray.length; j++) {
        if (
          sortedArray[j].startTimeFormatted === timeArr[i] &&
          sortedArray[j].weekDay === "Saturday"
        ) {
          satArr.push(sortedArray[j]);
          flag = true;
          break;
        }
      }
      if (!flag) {
        satArr.push(blankObj);
      }
    }
    setSaturdayArr(satArr);

    // creating array for sunday column
    const sunArr = [];
    for (let i = 0; i < timeArr.length; i++) {
      let flag = false;
      for (let j = 0; j < sortedArray.length; j++) {
        if (
          sortedArray[j].startTimeFormatted === timeArr[i] &&
          sortedArray[j].weekDay === "Sunday"
        ) {
          sunArr.push(sortedArray[j]);
          flag = true;
          break;
        }
      }
      if (!flag) {
        sunArr.push(blankObj);
      }
    }
    setSundayArr(sunArr);
  };

  return loading ? (
    <Loading />
  ) : (
    <div className="tableContainer">
      {/* Time Column */}

      <div style={{ display: "flex" }}>
        <div className="timeColumn">
          <div className="td th">
            <FiRefreshCw
              className="reload"
              size={25}
              onClick={fetchAppointments}
            />{" "}
          </div>
          {timeArray.map((time) => (
            <div className="td th">{time}</div>
          ))}
        </div>

        {/* Monay Array */}
        <div>
          <div className="td th">Monday</div>
          {mondayArr.map((item, i) => {
            return (
              <SingleAppointment
                key={i}
                name={item.name}
                startTime={item.startTimeFormatted}
                endTime={item.endTimeFormatted}
              />
            );
          })}
        </div>

        {/* Tuesday Array */}
        <div>
          <div className="td th">Tuesday</div>

          {tuesdayArr.map((item, i) => {
            return (
              <SingleAppointment
                key={i}
                name={item.name}
                startTime={item.startTimeFormatted}
                endTime={item.endTimeFormatted}
              />
            );
          })}
        </div>

        {/* Wednesday Array */}
        <div>
          <div className="td th">Wednesday</div>

          {wednesdayArr.map((item, i) => {
            return (
              <SingleAppointment
                key={i}
                name={item.name}
                startTime={item.startTimeFormatted}
                endTime={item.endTimeFormatted}
              />
            );
          })}
        </div>

        {/* Thursday Array */}
        <div>
          <div className="td th">Thursday</div>

          {thursdayArr.map((item, i) => {
            return (
              <SingleAppointment
                key={i}
                name={item.name}
                startTime={item.startTimeFormatted}
                endTime={item.endTimeFormatted}
              />
            );
          })}
        </div>

        {/* Friday Array */}
        <div>
          <div className="td th">Friday</div>

          {fridayArr.map((item, i) => {
            return (
              <SingleAppointment
                key={i}
                name={item.name}
                startTime={item.startTimeFormatted}
                endTime={item.endTimeFormatted}
              />
            );
          })}
        </div>

        {/* Saturday Array */}
        <div>
          <div className="td th">Saturday</div>

          {saturdayArr.map((item, i) => {
            return (
              <SingleAppointment
                key={i}
                name={item.name}
                startTime={item.startTimeFormatted}
                endTime={item.endTimeFormatted}
              />
            );
          })}
        </div>

        {/* Sunday Array */}
        <div>
          <div className="td th">Sunday</div>

          {sundayArr.map((item, i) => {
            return (
              <SingleAppointment
                key={i}
                name={item.name}
                startTime={item.startTimeFormatted}
                endTime={item.endTimeFormatted}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Table;
