import React, { useEffect } from "react";

const SseTest = () => {
  const eventSource = new EventSource("");

  eventSource.onmessage = (event) => {
    console.log(event.data);
  };

  return (
    <>
      <div> SseTest</div>
    </>
  );
};

export default SseTest;
