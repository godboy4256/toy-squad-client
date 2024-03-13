import { ModalBackground } from "@/component/input/PositionFiled/PositionModal.style";
import { myUserId } from "@/utils/GetMyInfo";
import { ListKeyGenerater } from "@/utils/ListKeyGenerate";
import { SendToServer } from "@/utils/SendToServer";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "antd";
import Input from "antd/es/input/Input";
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

const ProfileSkillsEditContainer = styled.div`
  width: 100%;
  max-width: 400px;
  padding: 30px;
  border-radius: 25px;
  background-color: white;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  & > h3 {
    font-size: 1.4rem;
    margin-bottom: 20px;
    font-weight: 700;
  }
  z-index: 10000000;
`;

const ProfileSkillsEditButtons = styled.div`
  margin: 30px 0;
  & button {
    margin-right: 5px;
  }
`;
const ProfileSkillsSearchList = styled.ul`
  width: 100%;
  padding: 20px;
  background-color: white;
  max-height: 200px;
  margin-top: 5px;
  border-radius: 10px;
  margin-bottom: 30px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  overflow: auto;
  position: absolute;
  left: 0;
  z-index: 1000;
  & > li {
    font-size: 1.5rem;
    padding: 10px 15px;
    cursor: pointer;
    :hover {
      color: #e0234d;
    }
  }
`;
const ProfileSkillsEditSearch = styled.div`
  margin-bottom: 20px;
  position: relative;
`;
const ProfileSkillsEditAdds = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 20px;
  border-bottom: 1px solid #ccc;
  & > li {
    display: flex;
    align-items: center;
    font-size: 1.3rem;
    border-radius: 30px;
    border: 1px solid #ccc;
    padding: 10px;
    margin-right: 10px;
    margin-bottom: 10px;
    & > div {
      margin-right: 10px;
    }
    & > button {
      font-size: 1.2rem;
      color: #ccc;
    }
  }
`;

const ProfileSkillsEdit = ({ value, setValue, offEdit }) => {
  const [addSkills, setAddSkills] = useState(value || []);
  const [searchList, setSearchList] = useState([]);
  const [serachValue, setSerachValue] = useState("");
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
  const onClickSkliiremove = (skill: string) => {
    setAddSkills((prev) => {
      return prev.filter((inSkill: string) => {
        return skill !== inSkill;
      });
    });
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
    <>
      <ModalBackground />
      <ProfileSkillsEditContainer>
        <h3>스킬 관리</h3>
        <ProfileSkillsEditAdds>
          {addSkills?.map((skill: string, idx: number) => {
            return (
              <li key={ListKeyGenerater(idx, skill)}>
                <div>{skill}</div>
                <button onClick={() => onClickSkliiremove(skill)}>
                  <FontAwesomeIcon icon={faX} />
                </button>
              </li>
            );
          })}
        </ProfileSkillsEditAdds>
        <ProfileSkillsEditButtons>
          <Button
            onClick={() => {
              setValue(addSkills);
              const postData = {
                userId: myUserId,
                skills: [...addSkills],
              };
              sessionStorage.setItem(
                "my_info",
                JSON.stringify({
                  ...JSON.parse(sessionStorage.getItem("my_info")),
                  skills: [...addSkills],
                })
              );

              SendToServer({
                path: `users`,
                method: "PATCH",
                data: postData,
                needAuth: true,
              });
              offEdit();
            }}
            type="primary"
          >
            확인
          </Button>
          <Button onClick={offEdit}>취소</Button>
        </ProfileSkillsEditButtons>
        <ProfileSkillsEditSearch>
          <Input
            onChange={onKeyWordSearch}
            placeholder="스킬을 추가해주세요."
          />
          {searchList?.length > 0 ? (
            <ProfileSkillsSearchList>
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
            </ProfileSkillsSearchList>
          ) : (
            serachValue &&
            (!addSkills?.includes(serachValue) || !addSkills) && (
              <ProfileSkillsSearchList>
                <button
                  onClick={() => {
                    onClickSkliiAdd(serachValue);
                    setSerachValue("");
                  }}
                >
                  {serachValue} 새롭게 추가하기 +
                </button>
              </ProfileSkillsSearchList>
            )
          )}
        </ProfileSkillsEditSearch>
      </ProfileSkillsEditContainer>
    </>
  );
};

export default ProfileSkillsEdit;
