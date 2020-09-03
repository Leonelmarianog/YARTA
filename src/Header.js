import React from "react";

export default function Header() {
  return (
    <header>
      <nav className="level">
        <div className="level-item py-5">
          <div>
            <h1 className="title is-spaced is-size-2 is-size-5-mobile is-size-4-tablet is-size-3-desktop has-text-white mt-0">
              YARTA: Yet Another React Todo App
            </h1>
            <h2 className="subtitle is-size-5 is-size-6-mobile is-size-5-tablet is-size-4-desktop has-text-white has-text-centered">
              Made with{" "}
              <span
                style={{ color: "crimson" }}
                className="is-size-4 is-size-5-mobile is-size-4-tablet is-size-3-desktop"
              >
                ♥
              </span>{" "}
              by Leonel Gauna
            </h2>
          </div>
        </div>
      </nav>
    </header>
  );
}
