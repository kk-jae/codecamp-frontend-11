import * as yup from "yup";

const regexSpacing = /^[^\s]+$/;
const regexPassword =
  /^(?=.*[a-zA-z])(?=.*\d)(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+])(?!.*[^a-zA-z0-9$`~!@$!%*#^?&\\(\\)\-_=+])/;

export const schema = yup.object({
  email: yup.string().required("이메일을 입력해주세요"),
  name: yup.string().required("이름을 입력해주세요"),
  pw1: yup.string().required("비밀번호를 입력해주세요"),
  pw2: yup.string().required("비밀번호를 확인해주세요"),
});
