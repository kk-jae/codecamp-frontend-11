import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { useQueryIdChecker } from "../../../../commons/hooks/custom/useQueryIdChecker";
import UsedItemQuestion from "../../../../commons/hooks/custom/useUsedItemQuestion";
import { useQueryFetchUsedItemQuestions } from "../../../../commons/hooks/query/useQueryFetchUsedItemQuestions";
import QuestionsList from "../../../../commons/questions/detail";
import QuestionsWrite from "../../../../commons/questions/write";

export default function UsedItemDetailFooter() {
  const Container = styled.div`
    width: 1200px;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
    margin: auto;
    padding: 20px;
  `;
  return (
    <Container>
      <QuestionsWrite />
      <QuestionsList />
    </Container>
  );
}
