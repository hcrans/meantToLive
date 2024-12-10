import { createTheme } from "@suid/material";

// const background = getComputedStyle(document.documentElement)
//   .getPropertyValue('--background');
// const primary = getComputedStyle(document.documentElement)
//   .getPropertyValue('--primary');
// const primaryText = getComputedStyle(document.documentElement)
//   .getPropertyValue('--primary-text');
// const secondary = getComputedStyle(document.documentElement)
//   .getPropertyValue('--secondary');
const muiColor = getComputedStyle(document.documentElement)
  .getPropertyValue('--mui-color');

// const primaryMain = '#282c34';
// const secondaryMain = '#282c34';
// const primaryText = '#282c34';

// export const DarkTheme = createTheme({
//   palette: {
//     mode: 'dark',
//     primary: {
//       dark: primaryMain,
//     },
//     secondary: {
//       dark: secondaryMain,
//     },
//     text: {
//       primary: primaryText,
//     }
//   },
// });
export const customTheme = createTheme({
  // components: {
  //   MuiButtonBase: {
  //     defaultProps: {
  //       sx: { 
  //         color: secondaryText,
  //         background: secondary},
  //     }
  //   }
  // },
  // palette: {
  //   mode: 'dark',
  //   primary: {
  //     main: muiColor,
  //   },
  // },
});
