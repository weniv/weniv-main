'use client';

import { useState } from 'react';
import PageTitle from '@components/commons/PageTitle';

import data from '@data/event.json';
import Image from 'next/image';

import styles from './event.module.css';

export default function EventPage() {
  const [open, setOpen] = useState(false);
  return (
    <main className={styles.event}>
      <div className={styles.inner}>
        <section className={styles.left}>
          <PageTitle text="행사" />
          {data && (
            <ul className={styles.eventList}>
              {data.map((event) => (
                <li>
                  <button
                    type="button"
                    onClick={() => setOpen((prev) => !prev)}
                  >
                    <Image src={event.image} width={200} height={300} alt="" />
                    <p>{event.title}</p>
                    <p>{event.date}</p>
                  </button>
                </li>
              ))}
            </ul>
          )}
        </section>
        {open && (
          <section className={styles.right}>
            <h3>2024 제주 AI 컨퍼런스</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae eligendi, dignissimos quas, accusantium, veritatis
              odio atque dolores amet culpa ipsum enim itaque. Minima veniam
              doloribus molestias assumenda numquam, nemo dolore.
            </p>
          </section>
        )}
      </div>
    </main>
  );
}
