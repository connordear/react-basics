import { useEffect, useState } from "react";

function EffectExample() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Component is mounted");
  }, []);

  useEffect(() => {
    console.log(`Count is now ${count}`);
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default EffectExample;
