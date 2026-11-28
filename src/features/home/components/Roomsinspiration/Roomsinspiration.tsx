import styles from "./Roomsinspiration.module.css";
import Link from "next/link";
import Container from "@/src/components/ui/Container/Container";
import RoomSlider from "./RoomSlider/RoomSlider";
import { ROOMS } from "../../constants/room";
export default function Roomsinspiration() {
  return (
    <section className={styles.roomsInspiration}>
      <Container>
        <div className={styles.roomsContent}>
          <div className={styles.roomsHeader}>
            <h2>50+ Beautiful rooms inspiration</h2>
            <p>
              Our designer already made a lot of beautiful prototipe of rooms
              that inspire you
            </p>
            <Link href="/shop">Explore More</Link>
          </div>
          <RoomSlider rooms={ROOMS} />
        </div>
      </Container>
    </section>
  );
}
