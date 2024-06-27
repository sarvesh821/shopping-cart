const   CURRENCY_FORMATTER=new Intl.NumberFormat(undefined,{currency:"USD" ,style:"currency"})

export function FormatCurrency(number:number){
    const formattedCurrency = CURRENCY_FORMATTER.format(number);
    const formattedWithoutUS = formattedCurrency.replace("US", "").trim();
  
    return formattedWithoutUS;
}