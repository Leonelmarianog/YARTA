import React from "react";

export default function Header() {
  return (
    <header>
      <nav className="level">
        <div className="level-item py-5">
          <div>
            <h1 className="title is-spaced is-size-2 is-size-4-mobile has-text-white mt-0">
              YARTA: Yet Another React Todo List
            </h1>
            <h2 className="subtitle is-size-5 has-text-white has-text-centered">
              Made by Leonel Gauna - 2020
            </h2>
          </div>
        </div>
      </nav>
    </header>
  );
}
