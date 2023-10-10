import React from "react";

function Main({ children }) {
  return (
    <main className="h-full overflow-y-auto">
      <div className="container px-6 mx-auto">{children}</div>
    </main>
  );
}

export default Main;
