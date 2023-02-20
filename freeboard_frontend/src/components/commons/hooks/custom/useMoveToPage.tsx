import { useRouter } from "next/router";

export const useMoveToPage = () => {
  const router = useRouter();

  const onClickMoveToPage = (link: string) => () => {
    router.push(link);
  };

  return {
    onClickMoveToPage,
  };
};
