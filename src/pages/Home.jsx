import React from "react";
import Navbar from "../components/Navbar";

const data = {
  0: {
    startTimeFormatted: "7 PM",
    endTimeFormatted: "9 PM",
    weekDay: "Wednesday",
    name: "Lillian Brekke",
    reason: "Laborum repellat esse.",
  },
  1: {
    startTimeFormatted: "3 PM",
    endTimeFormatted: "7 PM",
    weekDay: "Wednesday",
    name: "Ruben Mann-Hudson",
    reason: "Facilis ratione dolor suscipit atque.",
  },
  2: {
    startTimeFormatted: "8 PM",
    endTimeFormatted: "12 AM",
    weekDay: "Wednesday",
    name: "Marty Lakin",
    reason: "Vero dignissimos repellat veniam provident repellat unde laborum.",
  },
  3: {
    startTimeFormatted: "10 AM",
    endTimeFormatted: "1 PM",
    weekDay: "Wednesday",
    name: "Beatrice Berge",
    reason: "Accusantium eius nesciunt sunt.",
  },
  4: {
    startTimeFormatted: "1 PM",
    endTimeFormatted: "5 PM",
    weekDay: "Wednesday",
    name: "Ryan Cummerata",
    reason: "Vel earum reiciendis dolore harum vero impedit ducimus suscipit.",
  },
  5: {
    startTimeFormatted: "3 PM",
    endTimeFormatted: "7 PM",
    weekDay: "Wednesday",
    name: "Dr. Gordon Roob-Kuhn",
    reason:
      "Accusantium deleniti doloribus nobis praesentium dolores accusamus.",
  },
  6: {
    startTimeFormatted: "10 AM",
    endTimeFormatted: "12 PM",
    weekDay: "Wednesday",
    name: "Jason Rolfson",
    reason: "Repudiandae dolor itaque molestias dolorum molestiae ratione.",
  },
  7: {
    startTimeFormatted: "9 AM",
    endTimeFormatted: "11 AM",
    weekDay: "Wednesday",
    name: "Dr. Cecil Schmidt",
    reason: "Odit nulla quisquam ex recusandae laboriosam.",
  },
  8: {
    startTimeFormatted: "7 PM",
    endTimeFormatted: "10 PM",
    weekDay: "Wednesday",
    name: "Carolyn Casper",
    reason: "Eveniet sapiente veniam pariatur et consectetur quos dolore.",
  },
  9: {
    startTimeFormatted: "11 AM",
    endTimeFormatted: "1 PM",
    weekDay: "Wednesday",
    name: "Hugh Funk III",
    reason: "Enim perferendis saepe voluptatem voluptatum.",
  },
  10: {
    startTimeFormatted: "1 PM",
    endTimeFormatted: "2 PM",
    weekDay: "Wednesday",
    name: "Vivian McDermott III",
    reason: "Provident eos dolorum cum.",
  },
  11: {
    startTimeFormatted: "10 AM",
    endTimeFormatted: "2 PM",
    weekDay: "Wednesday",
    name: "Beatrice Waelchi",
    reason: "Nesciunt cupiditate qui modi suscipit cum officia ullam.",
  },
  12: {
    startTimeFormatted: "2 PM",
    endTimeFormatted: "4 PM",
    weekDay: "Wednesday",
    name: "Chelsea Kozey",
    reason: "Nihil numquam nemo totam sequi iste officiis quas quibusdam.",
  },
  13: {
    startTimeFormatted: "6 PM",
    endTimeFormatted: "7 PM",
    weekDay: "Wednesday",
    name: "May Kuvalis",
    reason: "Totam quam sint nulla illo ut error.",
  },
  14: {
    startTimeFormatted: "11 AM",
    endTimeFormatted: "1 PM",
    weekDay: "Wednesday",
    name: "Mr. Al Larkin",
    reason: "Esse quas aliquam autem voluptas doloremque.",
  },
  15: {
    startTimeFormatted: "12 PM",
    endTimeFormatted: "3 PM",
    weekDay: "Wednesday",
    name: "Gladys Bins",
    reason: "Consequuntur hic aperiam dolore ipsam illo labore.",
  },
  16: {
    startTimeFormatted: "10 AM",
    endTimeFormatted: "2 PM",
    weekDay: "Wednesday",
    name: "Meghan O'Connell IV",
    reason: "Eaque at explicabo.",
  },
  17: {
    startTimeFormatted: "6 PM",
    endTimeFormatted: "10 PM",
    weekDay: "Wednesday",
    name: "Marcia Jast",
    reason: "Rem fugiat iste sapiente animi repellat est nam aspernatur.",
  },
  18: {
    startTimeFormatted: "8 AM",
    endTimeFormatted: "10 AM",
    weekDay: "Wednesday",
    name: "Corey Fisher",
    reason: "Ut tempore repellat eligendi culpa asperiores qui.",
  },
  19: {
    startTimeFormatted: "10 AM",
    endTimeFormatted: "12 PM",
    weekDay: "Wednesday",
    name: "Sarah Conn",
    reason: "Blanditiis omnis quidem dolorem nulla quidem voluptas.",
  },
  MIN_HOUR: 8,
  MAX_HOUR: 20,
};

const Home = () => {
  console.log(data);
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
  console.log(timeArr);
  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const dataArr = Object.keys(data)
    .map((i) => data[i])
    .slice(0, 20);
  console.log(dataArr);

  return (
    <>
      <Navbar />
      {/* Table */}
      <div style={{ width: "100%" }}>
        <div className="tableHead">
          <div className="td">Time</div>
          {days.map((day) => (
            <div className="td">{day}</div>
          ))}
        </div>
        {/* Time Column */}
        <div style={{ display: "flex" }}>
          <div className="timeColumn">
            {timeArr.map((time) => (
              <div className="td">{time}</div>
            ))}
          </div>
          <div>
            {timeArr.map((time) => {
              return (
                <div className="td">
                  {dataArr.map((data) => {
                    if (data.startTimeFormatted === time) {
                      return (
                        <div className="appointment">
                          <div className="appointmentName">{data.name}</div>
                          {/* <div className="appointmentReason">{data.reason}</div> */}
                        </div>
                      );
                    }
                  })}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
