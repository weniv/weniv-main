import {
  BRAND,
  CATEGORY,
  DIFFICULTY,
  PLATFORM,
  PRICE,
  TEACHER,
  TECH,
} from '@/src/constants/constants';
import styles from './SearchFilter.module.css';
import { SearchFilterProps } from '@/src/types/searchType';

import '@weniv/components-icons/style.css';
import { Icon } from '@weniv/components-icons';
import '@weniv/components-search/style.css';
import { Search } from '@weniv/components-search';

import '@weniv/components-button/style.css';
import { Button } from '@weniv/components-button';

import CheckboxSet from './CheckboxSet';
import RangeSet from './RangeSet';

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
    <div className={styles.wrap}>
      <div className="flex items-center justify-between mb-4">
        <h2 className="font-bold">강의 필터</h2>
        <Button
          as="a"
          href="/learn"
          leftIcon="reset"
          variant="outline"
          size="xxs"
          color="grayLv2"
        >
          필터 초기화
        </Button>
        {/* 
        <a
          href="/learn"
          className="flex items-center gap-1 border rounded border-slate-300 h-6 px-2 text-slate-500 text-xs"
        >
          <Icon name="reset" color="grayLv3" width={16} />
          필터 초기화
        </a> */}
      </div>

      {/* 검색어 */}
      <Search
        placeholder="검색어 입력"
        name="keyword"
        value={keyword}
        onChange={handleQueryChange}
      />

      {/* CheckboxSet */}
      <CheckboxSet
        legend="개발분야"
        name="category"
        options={CATEGORY}
        values={category}
        onChange={handleQueryChange}
      />
      <CheckboxSet
        legend="강사"
        name="teacher"
        options={TEACHER}
        values={teacher}
        onChange={handleQueryChange}
      />
      <CheckboxSet
        legend="기술"
        name="tech"
        options={TECH}
        values={tech}
        onChange={handleQueryChange}
      />
      <CheckboxSet
        legend="난이도"
        name="difficulty"
        options={DIFFICULTY}
        values={difficulty}
        onChange={handleQueryChange}
      />
      <CheckboxSet
        legend="가격"
        name="price"
        options={PRICE}
        values={price}
        onChange={handleQueryChange}
      />
      <CheckboxSet
        legend="브랜드"
        name="brand"
        options={BRAND}
        values={brand}
        onChange={handleQueryChange}
      />
      <CheckboxSet
        legend="플랫폼"
        name="platform"
        options={PLATFORM}
        values={platform}
        onChange={handleQueryChange}
      />

      <RangeSet
        title="출시년도"
        min={0}
        max={5}
        step={1}
        value={year}
        name="year"
        onChange={handleQueryChange}
      />
      <RangeSet
        title="시간"
        min={1}
        max={10}
        step={1}
        value={time}
        name="time"
        onChange={handleQueryChange}
      />
    </div>
  );
};

export default SearchFilter;
