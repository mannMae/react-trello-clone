import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { hourSelector, minuteState } from "./atom";

function App() {
  const [minutes, setMinutes] = useRecoilState(minuteState);
  const [hours, setHours] = useRecoilState(hourSelector);
  const onMinutesChange = (e: React.FormEvent<HTMLInputElement>) => {
    setMinutes(+e.currentTarget.value);
  };
  const onHoursChange = (e: React.FormEvent<HTMLInputElement>) => {
    setHours(+e.currentTarget.value);
  };
  return (
    <div>
      <input
        value={minutes}
        onChange={onMinutesChange}
        type="number"
        placeholder="Minutes"
      />
      <input
        onChange={onHoursChange}
        type="number"
        placeholder="Hours"
        value={hours}
      />
    </div>
  );
}

export default App;
