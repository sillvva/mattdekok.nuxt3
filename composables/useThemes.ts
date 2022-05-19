import useBodyClass from "./useBodyClass";

export default function (themes: string[]) {
  const theme = useStateCookie("theme", themes[0], {
    expires: new Date(new Date().getTime() + 30 * 86400 * 1000),
  });

  const body = useBodyClass(["app", `theme--${theme.value}`]);

  return {
    theme: theme,
    toggle: function() {
      const themeIndex = themes.findIndex((t) => t == theme.value);
      theme.set(themes[themeIndex == themes.length - 1 ? 0 : themeIndex + 1]);
      body.classList.replace(`theme--${themes[themeIndex]}`, `theme--${theme.value}`);
    },
  };
}