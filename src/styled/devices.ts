const size = {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '425px',
    tablet: '768px',
    laptop: '1024px',
    laptopL: '1440px',
    desktop: '2560px',
};

export const device = {
    mobileS: `@media screen and (max-width: ${size.mobileS})`,
    mobileM: `@media screen and (max-width: ${size.mobileM})`,
    mobileL: `@media screen and (max-width: ${size.mobileL})`,
    tablet: `@media screen and (max-width: ${size.laptop})`,
    laptop: `@media screen and (max-width: ${size.laptop})`,
    laptopL: `@media screen and (max-width: ${size.laptopL})`,
    desktop: `@media screen and (max-width: ${size.desktop})`,
    desktopL: `@media screen and (max-width: ${size.desktop})`,
};
