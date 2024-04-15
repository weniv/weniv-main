import {
  BRAND,
  CATEGORY,
  DIFFICULTY,
  PLATFORM,
  PRICE,
  TEACHER,
  TECH,
} from "@/src/constants/constants";

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
    <form>
      <input
        type="search"
        placeholder="검색어"
        name="keyword"
        value={keyword}
        onChange={handleQueryChange}
        className="bg-slate-100 p-2 w-full"
      />
      <fieldset>
        <legend>개발분야</legend>
        {CATEGORY.map((name, index) => (
          <label key={index}>
            <input
              type="checkbox"
              name="category"
              value={name}
              onChange={handleQueryChange}
              checked={category.includes(name)}
            />
            {name}
          </label>
        ))}
      </fieldset>
      <fieldset>
        <legend>강사</legend>
        {TEACHER.map((name, index) => (
          <label key={index}>
            <input
              type="checkbox"
              name="teacher"
              value={name}
              onChange={handleQueryChange}
              checked={teacher.includes(name)}
            />
            {name}
          </label>
        ))}
      </fieldset>
      <fieldset>
        <legend>기술</legend>
        {TECH.map((name, index) => (
          <label key={index}>
            <input
              type="checkbox"
              name="tech"
              value={name.toLowerCase()}
              onChange={handleQueryChange}
              checked={tech.includes(name.toLowerCase())}
            />
            {name}
          </label>
        ))}
      </fieldset>
      <fieldset>
        <legend>난이도</legend>
        {DIFFICULTY.map((name, index) => (
          <label key={index}>
            <input
              type="checkbox"
              name="difficulty"
              value={name}
              onChange={handleQueryChange}
              checked={difficulty.includes(name)}
            />
            {name}
          </label>
        ))}
      </fieldset>
      <fieldset>
        <legend>가격</legend>
        {PRICE.map((name, index) => (
          <label key={index}>
            <input
              type="checkbox"
              name="price"
              value={name}
              onChange={handleQueryChange}
              checked={price.includes(name)}
            />
            {name}
          </label>
        ))}
      </fieldset>
      <fieldset>
        <legend>브랜드</legend>
        {BRAND.map((name, index) => (
          <label key={index}>
            <input
              type="checkbox"
              name="brand"
              value={name}
              onChange={handleQueryChange}
              checked={brand.includes(name)}
            />
            {name}
          </label>
        ))}
      </fieldset>
      <fieldset>
        <legend>플랫폼</legend>
        {PLATFORM.map((name, index) => (
          <label key={index}>
            <input
              type="checkbox"
              name="platform"
              value={name}
              onChange={handleQueryChange}
              checked={platform.includes(name)}
            />
            {name}
          </label>
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
    </form>
  );
};

export default SearchFilter;
