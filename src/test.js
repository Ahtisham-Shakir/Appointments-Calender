<table>
  <thead>
    <tr>
      <th>Time</th>
      {days.map((day) => (
        <th>{day}</th>
      ))}
    </tr>
  </thead>
  <tbody>
    {timeArr.map((time) => (
      <tr>
        <td>{time}</td>
        {Object.keys(data).map((i) => (
          <td>
            {data[i].startTimeFormatted === time &&
            data[i].weekDay === "Wednesday" ? (
              <div>
                <p>{data[0].name}</p>
                <p>{data[0].reason}</p>
              </div>
            ) : (
              ""
            )}
          </td>
        ))}
      </tr>
    ))}
  </tbody>
</table>;
