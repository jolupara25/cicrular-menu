"use client";

import { useState } from "react";
import styles from "/src/style/CircularMenu.module.css";

const options = [
  { id: 1, label: "Minuta", icon: "📄" },
  { id: 2, label: "Opción 2", icon: "🛠️" },
  { id: 3, label: "Opción 3", icon: "🔒" },
  { id: 4, label: "Opción 4", icon: "📊" },
  { id: 5, label: "Opción 5", icon: "📦" },
];

export default function Home() {
  const [selected, setSelected] = useState<number | null>(null);
  const selectedOption = options.find((option) => option.id === selected);
  return (
    <div className={styles.container}>
      <div className={styles.circle}>
        {options.map((option, index) => (
          <div
            key={option.id}
            className={`${styles.segment} ${
              selected === option.id ? styles.active : ""
            }`}
            style={{
              transform: `rotate(${index * 90}deg)`,
              clipPath: `polygon(50% 50%, 100% 0%, 100% 100%, 50% 50%)`,
            }}
            onClick={() => setSelected(option.id)}
          >
            <span
              className={styles.icon}
              style={{
                transform: `rotate(${-index * 90}deg)`,
              }}
            >
              {option.icon}
            </span>
          </div>
        ))}
        <div className={styles.center}>
          {selectedOption ? (
            <>
              <p>{selectedOption.label}</p>
              <button onClick={() => setSelected(null)}>X</button>
            </>
          ) : (
            <p>Selecciona una opción</p>
          )}
        </div>
      </div>
    </div>
  );
}
