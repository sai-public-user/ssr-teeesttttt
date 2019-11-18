import Countries from "../components/Countries";
import Country from "../components/Country";
import Hello from "../components/Hello";


export default [
  {
    component: Hello,
    path: '/',
    exact: true
  },
  {
    component: Country,
    path: '/:name'
  }
];