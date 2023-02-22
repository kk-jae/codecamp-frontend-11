import { withAuth } from "../../../../src/components/commons/withAuth";
import CreateUsedItemUI from "../../../../src/components/units/usedItem/write";

function NewUsedItem(): JSX.Element {
  return (
    <>
      <CreateUsedItemUI isEdit={false} />
    </>
  );
}

export default withAuth(NewUsedItem);
