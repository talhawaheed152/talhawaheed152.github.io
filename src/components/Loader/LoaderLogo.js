import React from "react";
import "./LoaderLogo.css";
import { greeting } from "../../portfolio";

// Animated name-based splash loader
class LogoLoader extends React.Component {
  render() {
    const { theme, name } = this.props;

    // Uses your portfolio name by default (greeting.title).
    // You can override by passing <LoaderLogo name="Talha Waheed" />
    const displayName = (name || greeting?.title || "Your Name").toUpperCase();
    const letters = displayName.length;

    return (
      <div
        className="logo-loader"
        style={{
          "--accent": theme?.body || "#ffffff",
          "--letters": letters,
        }}
      >
        <div className="nameWrap" aria-label={displayName}>
          <div className="nameText">
            {displayName.split("").map((ch, i) => (
              <span
                key={`${ch}-${i}`}
                className="nameChar"
                style={{ "--i": i }}
              >
                {ch === " " ? "\u00A0" : ch}
              </span>
            ))}
          </div>

          <div className="underline" />
          <div className="sub">LOADING</div>
        </div>
      </div>
    );
  }
}

export default LogoLoader;
