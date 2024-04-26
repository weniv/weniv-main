'use client';

import { useEffect, useState } from 'react';

import { useRouter, usePathname, useSearchParams } from 'next/navigation';

import data from '@data/learn.json';
import SearchFilter from '@components/learn/SearchFilter';

import { CardProps } from '@weniv/components-card';
import Lectures from '@components/learn/Lectures';
import { FilterType } from '@types';

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

  const initialFilters: FilterType = {
    keyword: '',
    category: [],
    teacher: [],
    tech: [],
    brand: [],
    difficulty: [],
    price: [],
    platform: [],
    year: 5,
    time: 50,
  };

  const [filters, setFilters] = useState<FilterType>(initialFilters);
  const {
    keyword,
    category,
    teacher,
    tech,
    brand,
    difficulty,
    price,
    platform,
    year,
    time,
  } = filters;

  // URL 체크
  useEffect(() => {
    const updateFilters = (filters: FilterType) => {
      const queryParams = Object.fromEntries(searchParams.entries());
      return Object.entries(queryParams).reduce((acc, [key, value]) => {
        switch (key) {
          case 'category':
          case 'teacher':
          case 'tech':
          case 'brand':
          case 'difficulty':
          case 'price':
          case 'platform':
            return {
              ...acc,
              [key]: value.split(','),
            };
          case 'year':
          case 'time':
            return {
              ...acc,
              [key]: Number(value),
            };
          case 'keyword':
            return {
              ...acc,
              [key]: value,
            };
          default:
            return acc;
        }
      }, filters);
    };
    setFilters(updateFilters);
  }, [searchParams]);

  // 필터링
  useEffect(() => {
    let data = learn;

    if (keyword) {
      const text = keyword.toLowerCase();

      data = data.filter((item) => {
        const isTitle = item.title.toLowerCase().includes(text);
        const isDescription = item.description?.toLowerCase().includes(text);
        const isDifficulty = item.difficulty?.toLowerCase().includes(text);
        const isCategory = item.category?.toLowerCase().includes(text);

        const isTeacher = item.teacher.join(',').includes(text);
        const isPlatform = item.platform.join(',').includes(text);
        const isTech = item.tech.join(',').includes(text);

        return (
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

    let updatedArray: string[];

    switch (name) {
      case 'category':
        updatedArray = category.slice();
        if (updatedArray) {
          if (checked) {
            updatedArray.push(value);
          } else {
            updatedArray = updatedArray.filter((item) => item !== value);
          }
          setFilters((prev) => ({
            ...prev,
            category: updatedArray,
          }));
        }
        break;
      case 'teacher':
        updatedArray = teacher.slice();
        if (updatedArray) {
          if (checked) {
            updatedArray.push(value);
          } else {
            updatedArray = updatedArray.filter((item) => item !== value);
          }
          setFilters((prev) => ({
            ...prev,
            teacher: updatedArray,
          }));
        }
        break;
      case 'tech':
        updatedArray = tech.slice();
        if (updatedArray) {
          if (checked) {
            updatedArray.push(value);
          } else {
            updatedArray = updatedArray.filter((item) => item !== value);
          }
          setFilters((prev) => ({
            ...prev,
            tech: updatedArray,
          }));
        }
        break;
      case 'brand':
        updatedArray = brand.slice();
        if (updatedArray) {
          if (checked) {
            updatedArray.push(value);
          } else {
            updatedArray = updatedArray.filter((item) => item !== value);
          }
          setFilters((prev) => ({
            ...prev,
            brand: updatedArray,
          }));
        }
        break;
      case 'difficulty':
        updatedArray = difficulty.slice();
        if (updatedArray) {
          if (checked) {
            updatedArray.push(value);
          } else {
            updatedArray = updatedArray.filter((item) => item !== value);
          }
          setFilters((prev) => ({
            ...prev,
            difficulty: updatedArray,
          }));
        }
        break;
      case 'price':
        updatedArray = price.slice();
        if (updatedArray) {
          if (checked) {
            updatedArray.push(value);
          } else {
            updatedArray = updatedArray.filter((item) => item !== value);
          }
          setFilters((prev) => ({
            ...prev,
            price: updatedArray,
          }));
        }
        break;
      case 'platform':
        updatedArray = platform.slice();
        if (updatedArray) {
          if (checked) {
            updatedArray.push(value);
          } else {
            updatedArray = updatedArray.filter((item) => item !== value);
          }
          setFilters((prev) => ({
            ...prev,
            platform: updatedArray,
          }));
        }
        break;
      case 'year':
        setFilters((prev) => ({ ...prev, year: Number(value) }));
        break;
      case 'time':
        setFilters((prev) => ({ ...prev, time: Number(value) }));
        break;
      case 'keyword':
        setFilters((prev) => ({ ...prev, keyword: value }));
        break;
      default:
        return;
    }
  };

  return (
    <div className="flex">
      <SearchFilter handleQueryChange={handleQueryChange} filters={filters} />
      <Lectures data={filteredData} />
    </div>
  );
}
