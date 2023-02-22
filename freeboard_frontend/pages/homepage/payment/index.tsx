import { withAuth } from "../../../src/components/commons/withAuth";
import PaymentLoading from "../../../src/components/units/payment/loading";

function PaymentPage() {
  return <PaymentLoading />;
}

export default withAuth(PaymentPage);
