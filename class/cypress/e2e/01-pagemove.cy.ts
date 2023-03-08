it("페이지 이동 시나리오", () => {
  cy.visit("http://localhost:3000/section33/33-06-cypress-e2e-test");
  cy.get("button").click();
  cy.get("div").contains("철수야 놀자~~~~~");
});

// yarn dev를 실행시킨 후 test해야 잘 됩니다.
