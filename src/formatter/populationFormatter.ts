export function populationFormatter(str: string): string {
  const cleaned = str.toString().replace(/\D/g, "");

  const masks = {
    4: cleaned.match(/^(\d{1})(\d{3})$/),
    5: cleaned.match(/^(\d{2})(\d{3})$/),
    6: cleaned.match(/^(\d{3})(\d{3})$/),
    7: cleaned.match(/^(\d{1})(\d{3})(\d{3})$/),
    8: cleaned.match(/^(\d{2})(\d{3})(\d{3})$/),
    9: cleaned.match(/^(\d{3})(\d{3})(\d{3})$/),
    10: cleaned.match(/^(\d{1})(\d{3})(\d{3})(\d{3})$/),
  };

  const length = cleaned.length as keyof typeof masks;

  const formatters = {
    10: (match: RegExpMatchArray) =>
      `${match[1]}.${match[2]}.${match[3]}.${match[4]}`,
    9: (match: RegExpMatchArray) => `${match[1]}.${match[2]}.${match[3]}`,
    8: (match: RegExpMatchArray) => `${match[1]}.${match[2]}.${match[3]}`,
    7: (match: RegExpMatchArray) => `${match[1]}.${match[2]}.${match[3]}`,
    6: (match: RegExpMatchArray) => `${match[1]}.${match[2]}`,
    5: (match: RegExpMatchArray) => `${match[1]}.${match[2]}`,
    4: (match: RegExpMatchArray) => `${match[1]}.${match[2]}`,
  };

  const match = masks[length];

  if (match) return formatters[length](match);

  return str;
}
