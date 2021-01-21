import React from 'react';
import { useHistory } from "react-router-dom";

export default function NotFound() {
    let interval = null;
    let history = useHistory();
    let [time, setTime] = React.useState(5);

    React.useEffect(() => {
      const id = setInterval(() => updateCountdown(), 1000);
      // eslint-disable-next-line react-hooks/exhaustive-deps
      interval = id;
      return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const updateCountdown = () => {
        if (time <= 0) {
            clearInterval(interval);
            setTime("∞");
            history.push("/");
        } else {
            setTime(--time);
        }
    };

    return (
      <div
        style={{
          width: "100%",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className="big-timer">
          {time !== null ? time.toString() : "5"}
        </div>
        <span className="svg-stripes" />
        <h1 className="big-header">404</h1>
        <h4 className="small-header">Page not found</h4>
        <span className="svg-stripes" />
      </div>
    );
}
