import { useNavigate } from 'react-router-dom';
import LogoImg from '@/assets/images/common/logo.svg';
import UserIcon from '@/assets/images/common/user.svg';
import SearchIcon from '@/assets/images/common/search.svg';
import {
  HeaderInfoContainer,
  HeaderContainer,
  HeaderNav,
  HeaderNavButton,
  HeaderInfoButton,
  HeaderRightBox,
} from './Header.style';
import { CommonCenterWrapper } from '@/styles/CommonStyles';

const Header = () => {
  const navigate = useNavigate();
  const onClickNavRouter = (path: string) => {
    navigate(path);
  };
  return (
    <HeaderContainer>
      <CommonCenterWrapper>
        <img src={LogoImg} alt="header logo" />
        <HeaderRightBox>
          <HeaderNav id="header_menu" className="flex_left flex_box">
            <HeaderNavButton onClick={() => onClickNavRouter('/projects')}>
              프로젝트
            </HeaderNavButton>
            <HeaderNavButton onClick={() => onClickNavRouter('/users')}>
              팀원 모집
            </HeaderNavButton>
            <HeaderNavButton onClick={() => onClickNavRouter('/expos')}>
              전시회
            </HeaderNavButton>
          </HeaderNav>
          <HeaderInfoContainer>
            <HeaderInfoButton>
              <img src={SearchIcon} alt="header search icon" />
            </HeaderInfoButton>
            <HeaderInfoButton>
              <img src={UserIcon} alt="header users icon" />
            </HeaderInfoButton>
          </HeaderInfoContainer>
        </HeaderRightBox>
      </CommonCenterWrapper>
    </HeaderContainer>
  );
};

export default Header;
