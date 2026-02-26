
export const getFlagPath = (iso: string) => {
  const isoLower = iso.toLowerCase();
  // Пробуем путь в public/assets (если файлы скопированы туда)
  // Или используем API route для обслуживания файлов из src/assets
  return `/api/flag/${isoLower}`;
};

// Альтернативный вариант - использовать прямой путь к файлу в public
export const getFlagPathDirect = (iso: string) => {
  const isoLower = iso.toLowerCase();
  return `/assets/${isoLower}.svg`;
};
