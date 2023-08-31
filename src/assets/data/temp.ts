type ProjectDataType = {
  title: string;
  field: string;
  type: string;
  appNum?: number;
  appResult?: boolean;
  infoList: {
    infoKey: string;
    infoValue: string;
  }[];
  leader?: number;
};

export const projectDataRecruitMent: [] | ProjectDataType[] = [
  {
    title: '당근마켓 클론코딩',
    field: '소셜네트워크',
    type: 'WEB',
    appNum: 0,
    infoList: [
      { infoKey: '모집 기간', infoValue: '2023.08.01 ~ 2023.09.01' },
      { infoKey: '시작일', infoValue: '2023.09.03' },
      { infoKey: '인원', infoValue: '3/5' },
    ],
  },
  {
    title: '토이스쿼드',
    field: '소셜네트워크',
    type: 'WEB',
    appNum: 2,
    infoList: [
      { infoKey: '모집 기간', infoValue: '2023.10.01 ~ 2023.11.01' },
      { infoKey: '시작일', infoValue: '2023.12.03' },
      { infoKey: '인원', infoValue: '4/5' },
    ],
  },
  {
    title: '축구소식 어플',
    field: '소셜네트워크',
    type: 'APP',
    appNum: 0,
    infoList: [
      { infoKey: '모집 기간', infoValue: '2023.08.01 ~ 2023.09.01' },
      { infoKey: '시작일', infoValue: '2023.09.03' },
      { infoKey: '인원', infoValue: '1/3' },
    ],
  },
];

export const projectDataProceeding: [] | ProjectDataType[] = [
  {
    title: '운동메이트',
    field: '건강/운동',
    type: 'APP',
    infoList: [
      { infoKey: '시작일', infoValue: '2023.09.03' },
      { infoKey: '종료일', infoValue: '2023.12.01' },
      { infoKey: '인원', infoValue: '4' },
    ],
    leader: 0,
  },
  {
    title: '블록체인 사이트 만들기',
    field: '금융',
    type: 'WEB',
    infoList: [
      { infoKey: '시작일', infoValue: '2023.12.02' },
      { infoKey: '종료일', infoValue: '2024.01.08' },
      { infoKey: '인원', infoValue: '2' },
    ],
    leader: 1,
  },
];

export const projectDataComplete: [] | ProjectDataType[] = [
  {
    title: '여행 커뮤니티',
    field: '여행',
    type: 'APP',
    appNum: 0,
    infoList: [
      { infoKey: '시작일', infoValue: '2023.09.03' },
      { infoKey: '완료일', infoValue: '2023.12.01' },
      { infoKey: '인원', infoValue: '4' },
    ],
  },
];

export const projectDataApplication: [] | ProjectDataType[] = [
  {
    title: '채팅 프로그램 만들기',
    field: '소셜네트워크',
    type: 'PC프로그램',
    appNum: 0,
    appResult: true,
    infoList: [
      { infoKey: '신청일', infoValue: '2023.08.04' },
      { infoKey: '신청 결과', infoValue: '수락' },
      // {
      //   infoKey: '신청글',
      //   infoValue: '재밌어 보이네요. 꼭 참여하고 싶습니다.',
      // },
    ],
  },
];

export const projectApplicationUser = [
  {
    name: '김민수',
    postion: 'UIUX 디자이너',
    level: '중급자',
    appPosition: 'UIUX 디자이너',
    rating: 5.0,
    like: 51,
    profile: '',
  },
  {
    name: '김철수',
    postion: '프론트엔드 개발자',
    level: '입문자',
    appPosition: '풀스택 개발자',
    rating: 4.2,
    like: 30,
    profile: '',
  },
];

export const projectMemberList = [
  {
    id: 1,
    name: '석지웅',
    postion: '풀스택 개발자',
    level: '주니어',
    appPosition: '풀스택 개발자',
    rating: 3.2,
    like: 1,
    profile: '',
  },
  {
    id: 192,
    name: '마이클',
    postion: 'UIUX 디자이너',
    level: '중급자',
    appPosition: 'UIUX 디자이너',
    rating: 5.0,
    like: 51,
    profile: '',
  },
  {
    id: 33,
    name: '김영희',
    postion: '풀스택 개발자',
    level: '입문자',
    appPosition: '풀스택 개발자',
    rating: 3.2,
    like: 1,
    profile: '',
  },
  {
    id: 56,
    name: '이진호',
    postion: '백엔드 개발자',
    level: '시니어',
    appPosition: '백엔드 개발자',
    rating: 4.5,
    like: 30,
    profile: '',
  },
];

export const userCommentsList = [
  {
    content: '안녕하세요.',
    createAt: '2022-12-03',
  },
];
