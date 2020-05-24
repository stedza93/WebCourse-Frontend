import React from "react";

export default function myHoc(WrappedComponent) {
  return (props) => {
    return (
      <div>
        Dodati tekst
        <WrappedComponent {...props}></WrappedComponent>
      </div>
    );
  };
}
