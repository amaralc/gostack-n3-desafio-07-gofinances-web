const formatValue = (value: number): string =>
  Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRA' }).format(
    value,
  ); // TODO

export default formatValue;
