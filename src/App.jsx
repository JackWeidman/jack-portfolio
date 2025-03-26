import React from "react";
import Footer from "./components/footer";
import "./App.css";

function App() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center">
      <section className="flex flex-col items-center justify-center flex-grow">
        <div className="card bg-accent w-96 shadow-sm mt-16">
          <figure>
            <img src="src/assets/me.png" alt="John W" />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-stone-800">John Weidman</h2>
            <p className="text-stone-800">
              Welcome to my personal portfolio! I'm a software engineer with a
              passion for building web applications and exploring new
              technologies.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </section>
  );
}

export default App;
