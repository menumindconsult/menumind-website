interface PriceProps {
  amount: string;
  bold?: boolean;
  className?: string;
}

/**
 * Renders a price using the official Saudi Riyal symbol (U+20C1), self-hosted
 * via a custom font so it displays correctly regardless of the visitor's
 * system fonts. Per SAMA's usage guidelines, the symbol is always placed to
 * the left of the numeral, with a space, in every language.
 */
export default function Price({ amount, bold = false, className = "" }: PriceProps) {
  return (
    <span className={className}>
      <span className={`sar-symbol${bold ? " bold" : ""}`} aria-hidden="true">
        {"\u20C1"}
      </span>{" "}
      <span>{amount}</span>
      <span className="sr-only"> Saudi Riyals</span>
    </span>
  );
}
