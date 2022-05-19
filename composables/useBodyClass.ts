export default function (defaultClasses: string | string[]) {
  const bodyClasses = useState("bodyClasses", () => []);
  bodyClasses.value = [...new Set([...bodyClasses.value, ...defaultClasses])];

  useHead({
    bodyAttrs: {
      class: bodyClasses.value.join(" "),
    },
  });

  return {
    state() {
      return useState("bodyClasses", () => []);
    },
    classList: {
      add(className: string | string[]) {
        const bodyClasses = useState("bodyClasses", () => []);
        bodyClasses.value = [...new Set([...bodyClasses.value, ...className])];
        document.body.classList.add(...[...className]);
      },
      remove(className: string | string[]) {
        const bodyClasses = useState("bodyClasses", () => []);
        [...className].forEach(c => {
          bodyClasses.value = bodyClasses.value.filter(bc => bc !== c);
          document.body.classList.remove(c);
        });
      },
      replace(oldClass: string, newClass: string) {
        const bodyClasses = useState("bodyClasses", () => []);
        bodyClasses.value = bodyClasses.value.map(bc => bc == oldClass ? newClass : bc);
        return document.body.classList.replace(oldClass, newClass);
      }
    },
  };
}