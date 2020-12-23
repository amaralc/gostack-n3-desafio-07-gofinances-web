const formatValue = (value: number): string => {
  const result = Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value);

  return result;
};

export default formatValue;
