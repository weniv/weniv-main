import {
  BRAND,
  CATEGORY,
  DIFFICULTY,
  PLATFORM,
  PRICE,
  TEACHER,
  TECH,
} from '@/src/constants/constants';

import '@weniv/components-checkbox/style.css';
import { Checkbox } from '@weniv/components-checkbox';

import '@weniv/components-search/style.css';
import { Search } from '@weniv/components-search';

interface SearchFilterProps {
  handleQueryChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  category: string[];
  teacher: string[];
  tech: string[];
  brand: string[];
  difficulty: string[];
  price: string[];
  platform: string[];
  year: number;
  time: number;
  keyword: string;
}

const SearchFilter = ({
  handleQueryChange,
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
}: SearchFilterProps) => {
  return (
    <>
      <Search
        placeholder="검색어 입력"
        name="keyword"
        value={keyword}
        onChange={handleQueryChange}
      />

      <fieldset>
        <legend>개발분야</legend>

        {CATEGORY.map((name, index) => (
          <Checkbox
            key={index}
            name="category"
            id={`category-${name}`}
            value={name}
            label={name}
            onChange={handleQueryChange}
            checked={category.includes(name)}
          />
        ))}
      </fieldset>
      <fieldset>
        <legend>강사</legend>
        {TEACHER.map((name, index) => (
          <Checkbox
            name="teacher"
            checked={teacher.includes(name)}
            id={`teacher-${name}`}
            key={index}
            value={name}
            label={name}
            onChange={handleQueryChange}
          />
        ))}
      </fieldset>
      <fieldset>
        <legend>기술</legend>
        {TECH.map((name, index) => (
          <Checkbox
            name="tech"
            checked={tech.includes(name)}
            id={`tech-${name}`}
            key={index}
            value={name}
            label={name}
            onChange={handleQueryChange}
          />
        ))}
      </fieldset>
      <fieldset>
        <legend>난이도</legend>
        {DIFFICULTY.map((name, index) => (
          <Checkbox
            name="difficulty"
            checked={difficulty.includes(name)}
            key={index}
            id={`difficulty-${name}`}
            value={name}
            label={name}
            onChange={handleQueryChange}
          />
        ))}
      </fieldset>
      <fieldset>
        <legend>가격</legend>
        {PRICE.map((name, index) => (
          <Checkbox
            name="price"
            checked={price.includes(name)}
            id={`price-${name}`}
            key={index}
            value={name}
            label={name}
            onChange={handleQueryChange}
          />
        ))}
      </fieldset>
      <fieldset>
        <legend>브랜드</legend>
        {BRAND.map((name, index) => (
          <Checkbox
            name="brand"
            checked={brand.includes(name)}
            id={`brand-${name}`}
            key={index}
            value={name}
            label={name}
            onChange={handleQueryChange}
          />
        ))}
      </fieldset>
      <fieldset>
        <legend>플랫폼</legend>
        {PLATFORM.map((name, index) => (
          <Checkbox
            name="platform"
            checked={platform.includes(name)}
            id={`platform-${name}`}
            key={index}
            value={name}
            label={name}
            onChange={handleQueryChange}
          />
        ))}
      </fieldset>

      <fieldset>
        <legend>출시년도</legend>
        <input
          min="0"
          max="5"
          step="1"
          type="range"
          value={year}
          name="year"
          onChange={handleQueryChange}
        />
      </fieldset>

      <fieldset>
        <legend>시간</legend>
        <input
          min="1"
          max="10"
          step="1"
          type="range"
          value={time}
          name="time"
          onChange={handleQueryChange}
        />
      </fieldset>
    </>
  );
};

export default SearchFilter;
