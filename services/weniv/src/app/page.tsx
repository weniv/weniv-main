import Hero from '../components/main/Hero';
import Banner from '../components/main/Banner';

import '@weniv/components-card/style.css';
import { CardList, CardProps } from '@weniv/components-card';

import learnData from '@/src/data/learn.json';
import bookData from '@/src/data/book.json';
import Image from 'next/image';

export default function Home() {
  const learn = learnData.sort((a, b) => {
    const dateA = Number(new Date(a.date));
    const dateB = Number(new Date(b.date));

    return dateB - dateA;
  }) as CardProps[];

  const books = bookData.sort((a, b) => {
    const dateA = Number(new Date(a.date));
    const dateB = Number(new Date(b.date));

    return dateB - dateA;
  });

  return (
    <main>
      <Hero />

      <div className="max-w-screen-xl mx-auto px-10">
        <Banner />

        <h2 className="font-bold text-xl mt-16 mb-4 ">최신강의</h2>
        <CardList data={learn.slice(0, 4)} />

        <h2 className="font-bold text-xl mt-16 mb-4">도서</h2>
        {books.length > 0 && (
          <ul className="grid grid-cols-6 gap-6">
            {books.map((book, i) => (
              <li key={i} className="">
                <Image
                  width="188"
                  height="266"
                  src={book.thumbnail}
                  alt=""
                  className="rounded-lg"
                />
                {book.title}
              </li>
            ))}
          </ul>
        )}

        <h2 className="font-bold text-xl mt-16 mb-4">주요 서비스</h2>
        <h2 className="font-bold text-xl mt-16 mb-4">추천 영상</h2>
      </div>
    </main>
  );
}
