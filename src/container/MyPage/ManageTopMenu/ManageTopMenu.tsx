import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

type ManageTopMenuContainerProps = {
  width: number;
};

export const ManageTopMenuContainer = styled.ul<ManageTopMenuContainerProps>`
  display: flex;
  border: 1px solid #222;
  border-radius: 5px;
  padding: 20px 0;
  & > li {
    width: ${(props) => `${props.width}%`};
    text-align: center;
    font-size: 1.4rem;
    border-left: 1px solid rgba(0, 0, 0, 0.3);
    color: rgba(0, 0, 0, 0.3);
    &:first-child {
      border-left: none;
    }
    cursor: pointer;
    & > div:first-child {
      font-size: 2rem;
      font-weight: 700;
      margin-bottom: 10px;
    }
    &.active {
      color: #222;
    }
  }
`;

const MyPageManageTopMenu = ({
  menuList,
}: {
  menuList: { title: string; path: string; length: number }[];
}) => {
  const navigate = useNavigate();
  const [path, setPath] = useState('recruitment');
  const onClickRouting = (path: string) => {
    setPath(path);
    navigate(path);
  };
  return (
    <ManageTopMenuContainer width={100 / menuList.length}>
      {menuList.map((menu: { title: string; path: string; length: number }) => {
        return (
          <li
            className={path === menu.path ? 'active' : ''}
            onClick={onClickRouting.bind(null, menu.path)}
          >
            <div>{menu.length}</div>
            <div>{menu.title}</div>
          </li>
        );
      })}
    </ManageTopMenuContainer>
  );
};

export default MyPageManageTopMenu;
