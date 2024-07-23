import AccountInterest from "../../../sections/tax/AccountInterest";
import AnnualTax from "../../../sections/tax/AnnualTax";

const TaxPage = () => {
  return (
    <div>
      <div>
      <h1 className="text-4xl text-center text-slate-500 text-bold mt-10">
        FinanSage Calculators
      </h1>
      <AnnualTax />
      <AccountInterest />
    </div>
    </div>
  );
}

export default TaxPage;
