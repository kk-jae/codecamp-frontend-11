import { gql, useMutation } from "@apollo/client";
import { Modal } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";

const LOGIN_USER = gql`
  mutation loginUser($password: String!, $email: String!) {
    loginUser(password: $password, email: $email) {
      accessToken
    }
  }
`;

export default function PaymentLoadingPage() {
  const [loginUser] = useMutation(LOGIN_USER);
  const { register, handleSubmit } = useForm();
  const router = useRouter();

  const onClickLogin = async (data: any) => {
    try {
      const result = await loginUser({
        variables: {
          email: data.email,
          password: data.password,
        },
      });
      console.log(result);
      void router.push("/28/payment/loading");
      Modal.success({
        content: "로그인에 성공하였습니다.",
      });
    } catch (error) {
      console.log("다시 시도해주세요");
    }
  };

  return (
    <form onSubmit={handleSubmit(onClickLogin)}>
      <div>
        이메일 : <input type="text" {...register("email")} />
      </div>
      <div>
        비밀번호 : <input type="password" {...register("password")} />
      </div>
      {/* <button>
        <a href="/28/payment/loading">로그인하기</a>
      </button> */}
      <button>로그인하기</button>
    </form>
  );
}
