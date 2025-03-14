import * as S from './left-bar.styled';

const linkMap = [
  {
    link: '/',
    img: '/general/logo.png',
    alt: 'Logo icon',
  },
  {
    link: '/',
    img: '/general/home.svg',
    alt: 'Home icon',
  },
  {
    link: '/create',
    img: '/general/create.svg',
    alt: 'Create icon',
  },
  {
    link: '/',
    img: '/general/updates.svg',
    alt: 'Updates icon',
  },
  {
    link: '/',
    img: '/general/messages.svg',
    alt: 'setting icon',
  },
];

export const LeftBar = () => {
  return (
    <S.Wrapper>
      <S.MenuIcons>
        {linkMap.map(({ link, img, alt }) => {
          return (
            <S.MenuIcon key={img} to={link}>
              <S.Logo path={img} alt={alt} />
            </S.MenuIcon>
          );
        })}
      </S.MenuIcons>
      <S.MenuIcon to="/">
        <S.Logo path="/general/settings.svg" alt="messages setting" />
      </S.MenuIcon>
    </S.Wrapper>
  );
};
