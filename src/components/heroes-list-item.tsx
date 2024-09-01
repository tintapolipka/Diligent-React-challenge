import { useState } from "react";
import "./heroes-list-item.css";

interface HeroAttributes {
  id: number;
  name: string;
  isAvailable: boolean;
}

export default function HeroesListItem(hero: HeroAttributes) {
  const [isAvailable,setIsAvailable] = useState<boolean>(hero.isAvailable);

  function handleOnClick() {
    setIsAvailable(!isAvailable);
  }
  return (
    <div
        onClick={handleOnClick}
      className={`heroes-list-item ${
        isAvailable
          ? "color-green"
          : "color-red"
          }`
      }
    >
      <span>{hero.id}. </span>
      {hero.name}
      {isAvailable && (
        <span className="is-hero-available"> "Available"</span>
      )}
    </div>
  );
}
