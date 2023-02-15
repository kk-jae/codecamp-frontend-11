import type { FormEvent } from "react";

export const wrapAcync = (asyncFunc: () => Promise<void>) => () => {
  void asyncFunc();
};

export const wrapFormAcync =
  (asyncFunc: () => Promise<void>) => (event: FormEvent<HTMLFormElement>) => {
    event?.preventDefault();
    void asyncFunc();
  };
