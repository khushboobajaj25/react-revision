import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ComplexUseEffectHook = () => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const navigate = useNavigate();

  // Effect with no dependencies, runs on every render
  useEffect(() => {
    console.log("Effect with no dependencies");
  });

  // Effect with empty dependency array, runs only on mount and unmount
  useEffect(() => {
    console.log("Effect with empty dependency array");
    return () => {
      console.log("Cleanup on unmount");
    };
  }, []);

  // Effect with count dependency, runs on mount and when count changes
  useEffect(() => {
    console.log(`Effect with count dependency: ${count}`);
    return () => {
      console.log(`Cleanup for count dependency: ${count}`);
    };
  }, [count]);

  // Effect with count2 dependency, runs on mount and when count2 changes
  useEffect(() => {
    console.log(`Effect with count2 dependency: ${count2}`);
    return () => {
      console.log(`Cleanup for count2 dependency: ${count2}`);
    };
  }, [count2]);

  // Effect with multiple dependencies, runs on mount and when any dependency changes
  useEffect(() => {
    console.log(
      `Effect with multiple dependencies: count=${count}, count2=${count2}`
    );
    return () => {
      console.log(
        `Cleanup for multiple dependencies: count=${count}, count2=${count2}`
      );
    };
  }, [count, count2]);

  return (
    <div>
      <h1>Complex UseEffectHook</h1>
      <button onClick={() => setCount(count + 1)}>Increase Count</button>
      <button onClick={() => setCount(count - 1)}>Decrease Count</button>
      <button onClick={() => setCount2(count2 + 1)}>Increase Count2</button>
      <button onClick={() => setCount2(count2 - 1)}>Decrease Count2</button>
      <button onClick={() => setIsVisible(!isVisible)}>
        Toggle Visibility
      </button>
      <p>Count: {count}</p>
      <p>Count2: {count2}</p>
      {isVisible && <p>Visibility is ON</p>}
      <button onClick={() => navigate("/home")}>Go to Home</button>
    </div>
  );
};

export default ComplexUseEffectHook;
