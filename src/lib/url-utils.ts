// Утилита для нормализации URL стран
// Убирает слэш в конце и возвращает последний сегмент пути
export const normalizeUrl = (url: string) => {
  return url.replace(/\/$/, "").split("/").pop() || "";
};
