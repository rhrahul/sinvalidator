import React, { useState, useEffect, useRef } from "react";
import SINValidator from "../helper/SINValidator";

function SINValidatorComp(props) {
  const [sin, setSin] = useState("");
  const [valid, setValid] = useState(false);
  const [error, setError] = useState(false);
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  useEffect(() => {
    if (sin) {
      try {
        setValid(SINValidator(sin, true));
        setError(false);
      } catch (e) {
        setValid(false);
        setError(e.message);
      }
    } else {
      setValid(false);
      setError(false);
    }
  }, [sin]);

  const inputClass = `w-full p-5 text-lg text-center rounded-lg border-2 ${
    error ? "!border-red-500" : valid ? "!border-green-500" : "border-slate-300"
  } focus:border-blue-500`;

  const msgClass = `text-md font-bold w-full p-3 text-center rounded-b-lg -z-1 -mt-2`;

  return (
    <div className="flex flex-col items-center justify-center m-20">
      <input
        className={inputClass}
        type="text"
        ref={inputRef}
        placeholder="Enter your SIN"
        value={sin}
        onChange={(e) => setSin(e.target.value)}
      />

      <div className="mt-0 w-full text-slate-50">
        {error && <div className={`${msgClass} bg-red-500`}>{error}</div>}
        {valid && <div className={`${msgClass} bg-green-500`}>Valid SIN</div>}
      </div>
    </div>
  );
}

export default SINValidatorComp;
