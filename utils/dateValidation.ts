const parseDate = (value: string): Date | null => {
  const parts = value.split('/');
  if (parts.length !== 2) return null;
  const [month, year] = parts.map(Number);
  if (!month || !year || month < 1 || month > 12) return null;
  return new Date(year, month - 1);
};

export const isEndDateBeforeStartDate = (startDate: string, endDate: string): boolean => {
  if (!startDate || !endDate) return false;
  const start = parseDate(startDate);
  const end = parseDate(endDate);
  if (!start || !end) return false;
  return end < start;
};
