import React from "react";

export function HelperText({text, className}) {
  return (
    <div className={className}>
      {text}
    </div>
  );
}