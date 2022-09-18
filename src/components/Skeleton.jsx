import React from "react";

function Skeleton(props) {
  return (
    <div className="bg-slate-200 h-full w-full rounded-lg p-10 shadow-xl text-slate-900">
      {props.children}
    </div>
  );
}

export default Skeleton;
