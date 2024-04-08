import { BRAND, TEACHER, TECH } from "@/src/constants/constants";

interface SearchFilterProps {
  handleQueryChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  teacher: string[];
  tech: string[];
  brand: string[];
}

const SearchFilter = ({
  handleQueryChange,
  teacher,
  tech,
  brand,
}: SearchFilterProps) => {
  return (
    <form>
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
    </form>
  );
};

export default SearchFilter;
