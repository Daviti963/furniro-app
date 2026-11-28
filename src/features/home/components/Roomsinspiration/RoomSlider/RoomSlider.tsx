"use client";
import styles from "./RoomSlider.module.css";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import Arrow from "@/src/components/ui/Arrow/Arrow";
import type { Room } from "../../../types/room";

type RoomSliderProps = {
  rooms: Room[];
};

export default function RoomSlider({ rooms }: RoomSliderProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  if (rooms.length === 0) return null;

  const orderedRooms = [
    ...rooms.slice(activeIndex),
    ...rooms.slice(0, activeIndex),
  ];

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % rooms.length);
  };

  return (
    <div
      className={styles.roomSlider}
      aria-roledescription="carousel"
      aria-label="Rooms inspiration"
    >
      <div className={styles.viewport}>
        <ul className={styles.track}>
          {orderedRooms.map((room, position) => {
            const isActive = position === 0;
            const roomNumber = ((activeIndex + position) % rooms.length) + 1;

            return (
              <li
                key={room.id}
                className={`${styles.slide} ${isActive ? styles.slideActive : ""}`}
              >
                <Image
                  src={room.img}
                  width={404}
                  height={582}
                  alt={room.title}
                  className={styles.image}
                />
                {isActive && (
                  <div className={styles.card}>
                    <div className={styles.cardInfo}>
                      <p className={styles.cardMeta}>
                        {String(roomNumber).padStart(2, "0")}
                        <span className={styles.divider} aria-hidden="true" />
                        {room.category}
                      </p>
                      <h3 className={styles.cardTitle}>{room.title}</h3>
                    </div>
                    <Link
                      href={room.href}
                      className={styles.cardLink}
                      aria-label={`View ${room.title}`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="14"
                        viewBox="0 0 20 14"
                        fill="none"
                        aria-hidden="true"
                        focusable="false"
                      >
                        <path
                          d="M18.75 6.75H0.75M12.75 12.75L18.75 6.75L12.75 0.75"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          stroke="white"
                        />
                      </svg>
                    </Link>
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      </div>

      <button
        type="button"
        className={styles.nextButton}
        onClick={handleNext}
        aria-label="Next room"
      >
        <Arrow />
      </button>

      <div className={styles.dots}>
        {rooms.map((room, index) => {
          const isActive = index === activeIndex;

          return (
            <button
              key={room.id}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={`${styles.dotBtn} ${isActive ? styles.dotBtnActive : ""}`}
              aria-label={`Show ${room.title}`}
              aria-current={isActive ? "true" : undefined}
            />
          );
        })}
      </div>
    </div>
  );
}
