import React, { useState } from "react";
import "./Dock.css";

// Example SVG icon set (replace with your own icons as needed)
const icons = [
  [
    { label: "VS Code", svg: <svg viewBox="0 0 64 64" width="48" height="48"><circle cx="32" cy="32" r="28" fill="#0078d4" /></svg> },
    { label: "Terminal", svg: <svg viewBox="0 0 64 64" width="48" height="48"><rect x="12" y="12" width="40" height="40" rx="8" fill="#222" /></svg> },
    { label: "GitHub", svg: <svg viewBox="0 0 64 64" width="48" height="48"><circle cx="32" cy="32" r="28" fill="#333" /></svg> },
    { label: "Figma", svg: <svg viewBox="0 0 64 64" width="48" height="48"><rect x="16" y="16" width="32" height="32" rx="16" fill="#a259ff" /></svg> },
  ],
  [
    { label: "Chrome", svg: <svg viewBox="0 0 64 64" width="48" height="48"><circle cx="32" cy="32" r="28" fill="#fbbc05" /></svg> },
    { label: "Slack", svg: <svg viewBox="0 0 64 64" width="48" height="48"><rect x="16" y="16" width="32" height="32" rx="8" fill="#611f69" /></svg> },
    { label: "Notion", svg: <svg viewBox="0 0 64 64" width="48" height="48"><rect x="12" y="12" width="40" height="40" rx="10" fill="#fff" stroke="#222" strokeWidth="2" /></svg> },
    { label: "Mail", svg: <svg viewBox="0 0 64 64" width="48" height="48"><rect x="16" y="20" width="32" height="24" rx="6" fill="#2196f3" /></svg> },
  ],
  [
    { label: "Settings", svg: <svg viewBox="0 0 64 64" width="48" height="48"><circle cx="32" cy="32" r="28" fill="#888" /></svg> },
    { label: "Calendar", svg: <svg viewBox="0 0 64 64" width="48" height="48"><rect x="16" y="16" width="32" height="32" rx="8" fill="#e91e63" /></svg> },
    { label: "Photos", svg: <svg viewBox="0 0 64 64" width="48" height="48"><circle cx="32" cy="32" r="28" fill="#4caf50" /></svg> },
    { label: "Music", svg: <svg viewBox="0 0 64 64" width="48" height="48"><rect x="16" y="16" width="32" height="32" rx="16" fill="#ff9800" /></svg> },
  ],
];

function Dock() {
  // Track hovered icon for magnification effect
  const [hovered, setHovered] = useState({ row: -1, col: -1 });
  // Track active (clicked/focused) icon
  const [active, setActive] = useState({ row: -1, col: -1 });

  return (
    <nav
      className="dock-glassmorphism"
      aria-label="Developer Dock"
      tabIndex={0}
    >
      <div className="dock-grid">
        {icons.map((row, rowIdx) => (
          <div className="dock-row" key={rowIdx}>
            {row.map((icon, colIdx) => {
              // Calculate magnification for hover/adjacent
              let scale = 1;
              if (hovered.row === rowIdx && hovered.col === colIdx) scale = 1.4;
              else if (
                hovered.row === rowIdx &&
                (hovered.col === colIdx - 1 || hovered.col === colIdx + 1)
              ) scale = 1.2;
              // Keyboard focus/active state
              const isActive = active.row === rowIdx && active.col === colIdx;
              return (
                <button
                  key={icon.label}
                  className="dock-icon-btn"
                  style={{
                    // Use CSS custom properties for easy theming
                    "--icon-scale": scale,
                    zIndex: scale > 1 ? 2 : 1,
                  }}
                  aria-label={icon.label}
                  tabIndex={0}
                  onMouseEnter={() => setHovered({ row: rowIdx, col: colIdx })}
                  onMouseLeave={() => setHovered({ row: -1, col: -1 })}
                  onFocus={() => setActive({ row: rowIdx, col: colIdx })}
                  onBlur={() => setActive({ row: -1, col: -1 })}
                  onMouseDown={() => setActive({ row: rowIdx, col: colIdx })}
                  onMouseUp={() => setActive({ row: -1, col: -1 })}
                >
                  <span className={`dock-icon${isActive ? " dock-icon-active" : ""}`}>{icon.svg}</span>
                  <span className="dock-tooltip" role="tooltip">{icon.label}</span>
                </button>
              );
            })}
          </div>
        ))}
      </div>
    </nav>
  );
}

export default Dock; 