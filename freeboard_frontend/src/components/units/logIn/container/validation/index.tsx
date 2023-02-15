import * as yup from "yup";

const regexSpacing = /^[^\s]+$/;
const regexPassword =
  /^(?=.*[a-zA-z])(?=.*\d)(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+])(?!.*[^a-zA-z0-9$`~!@$!%*#^?&\\(\\)\-_=+])/;

export const schema = yup.object({
  email: yup.string().required("이메일을 입력해주세요"),
  password: yup
    .string()
    // .matches(regexPassword, "영문과 숫자, 기호를 최소 1글자씩 포함해주세요")
    // .matches(regexSpacing, "비밀번호에는 띄어쓰기를 사용할 수 없어요")
    // .max(8, "비밀번호는 최대 8글자 입니다.")
    .required("비밀번호를 입력해주세요"),
});
