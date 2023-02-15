import * as yup from "yup";

const regexSpacing = /^[^\s]+$/;
const regexPassword =
  /^(?=.*[a-zA-z])(?=.*\d)(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+])(?!.*[^a-zA-z0-9$`~!@$!%*#^?&\\(\\)\-_=+])/;

export const schema = yup.object({
  writer: yup
    .string()
    .max(5, "5글자 이내로 입력해주세요")
    .required("작성자를 입력해주세요"),
  password: yup
    .string()
    .matches(regexPassword, "영문과 숫자, 기호를 최소 1글자씩 포함해주세요")
    .matches(regexSpacing, "비밀번호에는 띄어쓰기를 사용할 수 없어요")
    .max(8, "비밀번호는 최대 8글자입니다.")
    .required("비밀번호를 입력해주세요"),
  title: yup
    .string()
    .max(100, "제목은 100자 이내입니다.")
    .required("제목을 입력해주세요"),
  contents: yup
    .string()
    .max(1000, "내용은 1000자 이내입니다.")
    .required("내용을 입력해주세요"),
});
