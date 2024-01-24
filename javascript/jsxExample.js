/*
const a=<h1>Hello World</h1>
console.log(a)

//It can be only written in react
*/
import { jsx as _jsx } from "react/jsx-runtime";
const a = /*#__PURE__*/_jsx("h1", {
  children: "Helloworld"
});
console.log(a);