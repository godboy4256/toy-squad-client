import MiniProfileCard from "@/component/common/UserInfo/MiniProfileCard";
import React, { useState } from "react";
import {
  LeaderMark,
  MemberContainer,
  MemberListBody,
  MemberListContainer,
  MemberListTitle,
  MemberSetting,
} from "./MemberList.style";
import Button from "@/component/input/Button/Button";
import { ListKeyGenerater } from "@/utils/ListKeyGenerate";
import MemberReviewModal from "../MemberReviewModal/MemberReviewModal";
import { projectMemberList } from "@/data/temp";

const MemberList = ({ type }: { type: "COM" | "PRO" }) => {
  const [isReviewModal, setIsReviewModal] = useState(false);
  const projectLeader = 1;
  return (
    <MemberListContainer>
      {isReviewModal ? (
        <MemberReviewModal setOpen={setIsReviewModal} />
      ) : (
        <>
          <MemberListTitle>팀원 목록</MemberListTitle>
          <MemberListBody>
            {projectMemberList.map((member, idx) => {
              return (
                <MemberContainer key={ListKeyGenerater(idx, member.name)}>
                  <MiniProfileCard
                    name={member.name}
                    appPosition={member.appPosition}
                    rating={member.rating}
                    like={member.like}
                    position={member.postion}
                    imgUrl=""
                  />
                  {type === "PRO" ? (
                    projectLeader !== member.id ? (
                      <MemberSetting>
                        <Button>팀장 임명</Button>
                        <Button>방출하기</Button>
                      </MemberSetting>
                    ) : (
                      <LeaderMark>L</LeaderMark>
                    )
                  ) : (
                    <>
                      <MemberSetting>
                        <Button onClick={() => setIsReviewModal(true)}>
                          리뷰 작성
                        </Button>
                      </MemberSetting>
                    </>
                  )}
                </MemberContainer>
              );
            })}
          </MemberListBody>
        </>
      )}
    </MemberListContainer>
  );
};

export default MemberList;
