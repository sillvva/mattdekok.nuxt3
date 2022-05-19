import { CookieOptions } from "nuxt/dist/app/composables";

const stringify = (value: any) => {
  return typeof value == "string" ? value : JSON.stringify(value);
};

const parse = (value: string) => {
  try {
    return JSON.parse(value);
  }
  catch(err) {
    return value;
  }
}

export default function (name: string, defaultValue: any, cookieOptions?: CookieOptions<string>) {
  const cookie = useCookie(name, cookieOptions);
  cookie.value = cookie.value || stringify(defaultValue);
  const state = useState(name);
  state.value = state.value || parse(cookie.value);

  return {
    state: state,
    cookie: cookie,
    value: state.value,
    set: function(newValue: string) {
      cookie.value = stringify(newValue);
      state.value = newValue;
      this.value = newValue;
    },
  };
}
