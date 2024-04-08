"use client";

import "./learn.css";

import { useEffect, useState } from "react";

import Image from "next/image";
import { useRouter, usePathname, useSearchParams } from "next/navigation";

import data from "@/src/data/learn.json";
import SearchFilter from "@/src/components/SearchFilter";

export default function Learn() {
  const learn = data.sort((a, b) => {
    const dateA = Number(new Date(a.date));
    const dateB = Number(new Date(b.date));

    return dateB - dateA;
  });

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [filteredData, setFilteredData] = useState(learn);

  const [teacher, setTeacher] = useState<string[]>([]);
  const [tech, setTech] = useState<string[]>([]);
  const [brand, setBrand] = useState<string[]>([]);
  const [difficulty, setDifficulty] = useState<string[]>([]);

  // URL 체크
  useEffect(() => {
    const teacherParams = searchParams.get("teacher");
    const techParams = searchParams.get("tech");
    const brandParams = searchParams.get("brand");
    const difficultyParams = searchParams.get("difficulty");

    if (teacherParams) {
      setTeacher(teacherParams.split(","));
    }

    if (techParams) {
      setTech(techParams.split(","));
    }

    if (brandParams) {
      setBrand(brandParams.split(","));
    }

    if (difficultyParams) {
      setDifficulty(difficultyParams.split(","));
    }
  }, [searchParams]);

  // 필터링
  useEffect(() => {
    let data = learn;

    // 강사
    if (teacher.length > 0) {
      data = data.filter((item) =>
        teacher.some((q) => {
          if (q === "기타") {
            return (
              !item.teacher.includes("이호준") &&
              !item.teacher.includes("한재현")
            );
          } else {
            return item.teacher.includes(q);
          }
        })
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

    // 브랜드
    if (brand.length > 0) {
      data = data.filter((item) => brand.includes(item.brand));
    }

    setFilteredData(data);

    // URL 파라미터 업데이트
    const queryParams = new URLSearchParams();

    if (teacher.length > 0) {
      queryParams.append("teacher", teacher.join(","));
    }
    if (tech.length > 0) {
      queryParams.append("tech", tech.join(","));
    }
    if (brand.length > 0) {
      queryParams.append("brand", brand.join(","));
    }
    if (difficulty.length > 0) {
      queryParams.append("difficulty", difficulty.join(","));
    }

    const query = queryParams.toString();
    const url = query ? `${pathname}?${query}` : pathname;
    router.push(url);
  }, [learn, pathname, router, teacher, tech, brand, difficulty]);

  const handleQueryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name, checked } = e.target;

    let updatedArray, setUpdatedArray;

    switch (name) {
      case "teacher":
        updatedArray = teacher.slice();
        setUpdatedArray = setTeacher;
        break;
      case "tech":
        updatedArray = tech.slice();
        setUpdatedArray = setTech;
        break;
      case "brand":
        updatedArray = brand.slice();
        setUpdatedArray = setBrand;
        break;
      case "difficulty":
        updatedArray = difficulty.slice();
        setUpdatedArray = setDifficulty;
        break;
      default:
        return;
    }

    if (checked) {
      updatedArray.push(value);
    } else {
      updatedArray = updatedArray.filter((item) => item !== value);
    }

    setUpdatedArray(updatedArray);
  };

  return (
    <div>
      <h1>검색 필터</h1>
      <SearchFilter
        handleQueryChange={handleQueryChange}
        teacher={teacher}
        tech={tech}
        brand={brand}
        difficulty={difficulty}
      />
      {filteredData && (
        <ul className="learn">
          {filteredData.map((item: any, index: number) => (
            <li key={index}>
              <Image
                src={item.image}
                alt=""
                width={300}
                height={300}
                className="image"
                priority={index < 8 ? true : false}
              />
              <p>{item.title}</p>
              <p>{item.price}</p>
              <p>{item.teacher}</p>
              <p>{item.date}</p>
              <p>{item.difficulty}</p>
              <p>{item.time}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
