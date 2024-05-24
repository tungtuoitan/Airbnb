import { useCalculateTotalPriceIncludeTaxes } from "../hooks/useCalculateTotalPriceIncludeTaxes";

export default function TextTotalBeforeTax2() {
  const totalFeeAfterTaxes = useCalculateTotalPriceIncludeTaxes();
  return (
    <p
      className="flex justify-between  pt-c12
    font-semibold"
    >
      <span className="text-left">Total (included 10% taxes)</span>

      <span className="underline-color underline underline-offset-2 font-bold text-c16 ">
        <span>$</span>
        <span>{totalFeeAfterTaxes}</span>
      </span>
    </p>
  );
}
