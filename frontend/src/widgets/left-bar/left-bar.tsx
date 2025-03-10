import { LeftBarWrapper, Logo, MenuIcon, MenuIcons } from './left-bar.styled';

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
    link: '/',
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
    <LeftBarWrapper>
      <MenuIcons>
        {linkMap.map(({ link, img, alt }) => {
          return (
            <MenuIcon key={img} href={link}>
              <Logo src={img} alt={alt} />
            </MenuIcon>
          );
        })}
      </MenuIcons>
      <MenuIcon href="/">
        <Logo src="/general/settings.svg" alt="messages setting" />
      </MenuIcon>
    </LeftBarWrapper>
  );
};
