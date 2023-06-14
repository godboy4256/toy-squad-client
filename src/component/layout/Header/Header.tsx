// import { useNavigate } from 'react-router-dom';
// import IMGLogo from '../../assets/images/common/logo.svg';
// import IMGSearch from '../../assets/images/common/search.svg';
// import IMGUser from '../../assets/images/common/user.svg';
// import {
//   HeaderInfoContainer,
//   HeaderContainer,
//   HeaderNav,
//   HeaderNavButton,
//   HeaderInfoButton,
// } from './Header.style';

// const Header = () => {
//   const navigate = useNavigate();
//   const onClickNavRouter = (path: string) => {
//     navigate(path);
//   };
//   return (
//     <HeaderContainer>
//       <div className="common_wrapper flex_box">
//         <img src={IMGLogo} alt="header logo" />
//         <HeaderNav id="header_menu" className="flex_left flex_box">
//           <HeaderNavButton
//             className="font_famliy_semibold"
//             onClick={() => onClickNavRouter('/projects')}
//           >
//             프로젝트
//           </HeaderNavButton>
//           <HeaderNavButton
//             className="font_famliy_semibold"
//             onClick={() => onClickNavRouter('/users')}
//           >
//             팀원 모집
//           </HeaderNavButton>
//           <HeaderNavButton
//             className="font_famliy_semibold"
//             onClick={() => onClickNavRouter('/expos')}
//           >
//             전시회
//           </HeaderNavButton>
//         </HeaderNav>
//         <HeaderInfoContainer>
//           <HeaderInfoButton className="bg_color_main header_button flex_box">
//             <img src={IMGSearch} alt="header search icon" />
//           </HeaderInfoButton>
//           <HeaderInfoButton className="bg_color_main header_button flex_box">
//             <img src={IMGUser} alt="header users icon" />
//           </HeaderInfoButton>
//         </HeaderInfoContainer>
//       </div>
//     </HeaderContainer>
//   );
// };

// export default Header;
