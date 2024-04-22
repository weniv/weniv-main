'use client';

import { useEffect, useState } from 'react';

import { useRouter, usePathname, useSearchParams } from 'next/navigation';

import data from '@/src/data/learn.json';
import SearchFilter from '@/src/components/learn/SearchFilter';

import { CardProps } from '@weniv/components-card';
import Lectures from '@/src/components/learn/Lectures';

export default function Learn() {
  const learn = data.sort((a, b) => {
    const dateA = Number(new Date(a.date));
    const dateB = Number(new Date(b.date));

    return dateB - dateA;
  }) as CardProps[];

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [filteredData, setFilteredData] = useState<CardProps[]>(learn);

  const [keyword, setKeyword] = useState<string>('');
  const [category, setCategory] = useState<string[]>([]);
  const [teacher, setTeacher] = useState<string[]>([]);
  const [tech, setTech] = useState<string[]>([]);
  const [brand, setBrand] = useState<string[]>([]);
  const [difficulty, setDifficulty] = useState<string[]>([]);
  const [price, setPrice] = useState<string[]>([]);

  const [platform, setPlatform] = useState<string[]>([]);

  const [year, setYear] = useState<number>(5);
  const [time, setTime] = useState<number>(50);

  // URL 체크
  useEffect(() => {
    const keywordParams = searchParams.get('keyword');
    const categoryParams = searchParams.get('category');
    const teacherParams = searchParams.get('teacher');
    const techParams = searchParams.get('tech');
    const brandParams = searchParams.get('brand');
    const difficultyParams = searchParams.get('difficulty');
    const priceParams = searchParams.get('price');
    const platformParams = searchParams.get('platform');

    const yearParams = searchParams.get('year');
    const timeParams = searchParams.get('time');

    if (categoryParams) {
      setCategory(categoryParams.split(','));
    }
    if (teacherParams) {
      setTeacher(teacherParams.split(','));
    }

    if (techParams) {
      setTech(techParams.split(','));
    }

    if (brandParams) {
      setBrand(brandParams.split(','));
    }

    if (difficultyParams) {
      setDifficulty(difficultyParams.split(','));
    }
    if (priceParams) {
      setPrice(priceParams.split(','));
    }
    if (platformParams) {
      setPlatform(platformParams.split(','));
    }
    if (yearParams) {
      setYear(Number(yearParams));
    }
    if (timeParams) {
      setTime(Number(timeParams));
    }
    if (keywordParams) {
      setKeyword(keywordParams);
    }
  }, [searchParams]);

  // 필터링
  useEffect(() => {
    let data = learn;

    if (keyword) {
      const text = keyword.toLowerCase();

      data = data.filter((item) => {
        // const isBrand = item.brand.toLowerCase().includes(text);
        const isTitle = item.title.toLowerCase().includes(text);
        const isDescription = item.description?.toLowerCase().includes(text);
        const isDifficulty = item.difficulty?.toLowerCase().includes(text);
        const isCategory = item.category?.toLowerCase().includes(text);

        const isTeacher = item.teacher.join(',').includes(text);
        const isPlatform = item.platform.join(',').includes(text);
        const isTech = item.tech.join(',').includes(text);

        return (
          // isBrand ||
          isTitle ||
          isDescription ||
          isDifficulty ||
          isCategory ||
          isTeacher ||
          isPlatform ||
          isTech
        );
      });
    }
    // 기술
    if (category.length > 0) {
      data = data.filter((item) =>
        category.some((q) => item.category.includes(q)),
      );
    }

    // 강사
    if (teacher.length > 0) {
      data = data.filter((item) =>
        teacher.some((q) => {
          if (q === '기타') {
            return (
              !item.teacher.includes('이호준') &&
              !item.teacher.includes('한재현')
            );
          } else {
            return item.teacher.includes(q);
          }
        }),
      );
    }

    // 기술
    if (tech.length > 0) {
      data = data.filter((item) => tech.some((q) => item.tech.includes(q)));
    }

    // 난이도
    if (difficulty.length > 0) {
      data = data.filter((item) => difficulty.includes(item.difficulty));
    }

    // 가격
    if (price.length > 0) {
      data = data.filter((item) =>
        price.includes(item.price === 0 ? '무료' : '유료'),
      );
    }

    // 브랜드
    if (brand.length > 0) {
      data = data.filter((item) => brand.includes(item.brand));
    }

    // 기술
    if (platform.length > 0) {
      data = data.filter((item) =>
        platform.some((q) => item.platform.includes(q)),
      );
    }

    // 출시기간
    if (year === 0) {
      const time = 1000 * 60 * 60 * 24 * 365 * 0.5;
      data = data.filter(
        (item) => new Date().getTime() - new Date(item.date).getTime() < time,
      );
    } else if (year !== 5) {
      const time = 1000 * 60 * 60 * 24 * 365 * year;
      data = data.filter(
        (item) => new Date().getTime() - new Date(item.date).getTime() < time,
      );
    }

    // 시간
    if (time !== 5) {
      data = data.filter((item) =>
        item.time?.includes('시간')
          ? Number(item.time?.split('시간')[0]) < time
          : !item.time?.includes('시간'),
      );
    }

    setFilteredData(data);

    // URL 파라미터 업데이트
    const queryParams = new URLSearchParams();

    if (category.length > 0) {
      queryParams.append('category', category.join(','));
    }
    if (teacher.length > 0) {
      queryParams.append('teacher', teacher.join(','));
    }
    if (tech.length > 0) {
      queryParams.append('tech', tech.join(','));
    }
    if (brand.length > 0) {
      queryParams.append('brand', brand.join(','));
    }
    if (price.length > 0) {
      queryParams.append('price', price.join(','));
    }
    if (difficulty.length > 0) {
      queryParams.append('difficulty', difficulty.join(','));
    }
    if (platform.length > 0) {
      queryParams.append('platform', platform.join(','));
    }

    if (year) {
      queryParams.append('year', String(year));
    }
    if (time) {
      queryParams.append('time', String(time));
    }
    if (keyword) {
      queryParams.append('keyword', keyword);
    }

    const query = queryParams.toString();
    const url = query ? `${pathname}?${query}` : pathname;
    router.push(url);
  }, [
    learn,
    pathname,
    router,
    category,
    teacher,
    tech,
    brand,
    difficulty,
    price,
    platform,
    year,
    time,
    keyword,
  ]);

  const handleQueryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name, checked } = e.target;

    let updatedArray, setUpdatedArray;

    switch (name) {
      case 'category':
        updatedArray = category.slice();
        setUpdatedArray = setCategory;
        break;
      case 'teacher':
        updatedArray = teacher.slice();
        setUpdatedArray = setTeacher;
        break;
      case 'tech':
        updatedArray = tech.slice();
        setUpdatedArray = setTech;
        break;
      case 'brand':
        updatedArray = brand.slice();
        setUpdatedArray = setBrand;
        break;
      case 'difficulty':
        updatedArray = difficulty.slice();
        setUpdatedArray = setDifficulty;
        break;
      case 'price':
        updatedArray = price.slice();
        setUpdatedArray = setPrice;
        break;
      case 'platform':
        updatedArray = platform.slice();
        setUpdatedArray = setPlatform;
        break;
      case 'year':
        setYear(Number(value));
        break;
      case 'time':
        setTime(Number(value));
        break;
      case 'keyword':
        setKeyword(value);
        break;
      default:
        return;
    }

    if (updatedArray && setUpdatedArray) {
      if (checked) {
        updatedArray.push(value);
      } else {
        updatedArray = updatedArray.filter((item) => item !== value);
      }

      setUpdatedArray(updatedArray);
    }
  };

  return (
    <div className="flex">
      <SearchFilter
        handleQueryChange={handleQueryChange}
        keyword={keyword}
        teacher={teacher}
        category={category}
        tech={tech}
        brand={brand}
        difficulty={difficulty}
        price={price}
        platform={platform}
        year={year}
        time={time}
      />
      <Lectures data={filteredData} />
    </div>
  );
}
