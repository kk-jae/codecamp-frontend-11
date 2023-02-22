import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { useQueryIdChecker } from "../../../../commons/hooks/custom/useQueryIdChecker";
import UsedItemQuestion from "../../../../commons/hooks/custom/useUsedItemQuestion";
import { useQueryFetchUsedItemQuestions } from "../../../../commons/hooks/query/useQueryFetchUsedItemQuestions";
import QuestionsList from "../../../../commons/questions/detail";
import QuestionsWrite from "../../../../commons/questions/write";

export default function UsedItemDetailFooter() {
  return (
    <>
      <QuestionsWrite />
      <QuestionsList />
    </>
  );
}
