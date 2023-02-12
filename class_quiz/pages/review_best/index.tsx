import { gql, useQuery } from "@apollo/client";

const BEST_ITEM = gql`
  query {
    fetchBoardsOfTheBest {
      _id
      writer
      title
      contents
      images
      likeCount
    }
  }
`;

export default function BestItem() {
  const { data } = useQuery(BEST_ITEM);

  console.log(data);

  return (
    <div>
      <div>
        {data?.fetchBoardsOfTheBest.map((el) => (
          <div>{el.writer}</div>
        ))}
      </div>
    </div>
  );
}
