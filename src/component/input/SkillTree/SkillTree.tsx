import { ListKeyGenerater } from "@/utils/ListKeyGenerate";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Input } from "antd";
import React, { useState } from "react";
import styled from "styled-components";

const SKILL_LIST = [
  "Javascript",
  "Typescript",
  "Python",
  "Java",
  "PHP",
  "SQL",
  "C",
  "C#",
  "C++",
  "Go",
  "Ruby",
  "Node JS",
  "Express JS",
  "Nest JS",
  "React JS",
  "Flask",
  "Fast API",
  "Spring",
  "Spring Boot",
  "Next JS",
  "Vue JS",
  "Angular JS",
  "Nuxt JS",
  "RESTful API",
  "GraphQL",
  "Redux",
  "Fastify",
  "Django",
  "Object C",
  "Kotlin",
  "Unity",
  "Unreal Engine",
  "HTML",
  "CSS",
  "Style Component",
  "React Native",
  "Flutter",
  "AWS",
  "GCP",
  "Azure",
  "Heroku",
  "Firebase",
  "MySQL",
  "PostgreSQL",
  "MariaDB",
  "MongoDB",
  "Redis",
  "Story Book",
  "Git",
  "Github",
  "GitLab",
  "Bit Bucket",
  "Jenkins",
  "Github Action",
  "ORACLE",
  "Figma",
  "Zeplin",
  "Adobe Photoshop",
  "Adobe Illustrator",
  "Adobe XD",
  "Notion",
  "Spread Sheet",
  "Excel",
  "Power Point",
  "Power Mockup",
  "PDF",
  "Story Board",
  "Prototyping",
  "Sketch",
  "InDesign",
  "Oven",
  "Axure",
  "Experience Design CC",
  "InVision",
];

const SkillsEditSearch = styled.div``;
const SkillsSearchList = styled.ul`
  width: 100%;
  padding: 20px;
  background-color: white;
  max-height: 200px;
  border-radius: 10px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  position: absolute;
  z-index: 999999;
  top: 100%;
  left: 0;
  overflow: auto;
  & > li {
    font-size: 1.5rem;
    padding: 10px 15px;
    cursor: pointer;
    :hover {
      color: #e0234d;
    }
  }
`;

const SkillSearchBar = styled.div`
  position: relative;
`;

const SkillsEditAdds = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-bottom: 20px;
  padding: 5px 0;
  border-bottom: 1px solid #ccc;
  & > div {
    padding: 10px;
    font-size: 1.5rem;
    color: #ccc;
  }
  & > li {
    display: flex;
    align-items: center;
    font-size: 1.3rem;
    border-radius: 30px;
    border: 1px solid #ccc;
    padding: 10px;
    margin: 5px;
    & > div {
      margin-right: 10px;
    }
    & > button {
      font-size: 1.2rem;
      color: #ccc;
    }
  }
`;

const SkillTree = ({ value }) => {
  const [addSkills, setAddSkills] = useState(value || []);
  const [searchList, setSearchList] = useState([]);
  const [serachValue, setSerachValue] = useState("");
  const onClickSkliiremove = (skill: string) => {
    setAddSkills((prev) => {
      return prev.filter((inSkill: string) => {
        return skill !== inSkill;
      });
    });
  };
  const onClickSkliiAdd = (skill: string) => {
    setSearchList((prev) => {
      return prev.filter((search) => {
        return search !== skill;
      });
    });
    if (addSkills.includes(skill)) {
      onClickSkliiremove(skill);
    } else {
      setAddSkills((prev) => {
        return [...prev, skill];
      });
    }
  };
  const onKeyWordSearch = (event) => {
    if (!event.currentTarget.value) {
      setSearchList([]);
    } else {
      setSearchList(
        SKILL_LIST.filter((skill) => {
          return (
            skill
              .toLowerCase()
              .includes(event.currentTarget.value.toLowerCase()) &&
            !addSkills.includes(skill)
          );
        })
      );
    }
    setSerachValue(event.currentTarget.value);
  };
  return (
    <SkillsEditSearch>
      <SkillsEditAdds>
        {addSkills.map((skill: string, idx: number) => {
          return (
            <li key={ListKeyGenerater(idx, skill)}>
              <div>{skill}</div>
              <button onClick={() => onClickSkliiremove(skill)}>
                <FontAwesomeIcon icon={faX} />
              </button>
            </li>
          );
        })}
      </SkillsEditAdds>
      <SkillSearchBar>
        {searchList?.length > 0 ? (
          <SkillsSearchList>
            {searchList?.map((skill: string, idx: number) => {
              return (
                <li
                  key={ListKeyGenerater(idx, skill)}
                  onClick={() => onClickSkliiAdd(skill)}
                >
                  {skill}
                </li>
              );
            })}
          </SkillsSearchList>
        ) : (
          serachValue &&
          (!addSkills?.includes(serachValue) || !addSkills) && (
            <SkillsSearchList>
              <button
                onClick={() => {
                  onClickSkliiAdd(serachValue);
                  setSerachValue("");
                }}
              >
                {serachValue} 새롭게 추가하기 +
              </button>
            </SkillsSearchList>
          )
        )}
        <Input
          onFocus={() => setSearchList(SKILL_LIST)}
          onChange={onKeyWordSearch}
          placeholder="스킬을 추가해주세요."
        />
      </SkillSearchBar>
    </SkillsEditSearch>
  );
};

export default SkillTree;
