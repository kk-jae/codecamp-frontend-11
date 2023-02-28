import { useRouter } from "next/router";

export const useMoveToPage = () => {
  const router = useRouter();

  const onClickMoveToPage = (url: string) => () => {
    router.push(url);
  };

  const onClickMoveToPageAddBasket = (el) => () => {
    router.push(el._id);
    console.log(el);

    const baskets = JSON.parse(localStorage.getItem("baskets") ?? "[]");

    baskets.push(el);

    localStorage.setItem("baskets", JSON.stringify(baskets));
  };

  return {
    onClickMoveToPage,
    onClickMoveToPageAddBasket,
  };
};
