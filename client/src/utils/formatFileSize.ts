export function formatFileSize(bytes: number) {
  if (!Number.isFinite(bytes)) return '—'
  const units = ['B', 'KB', 'MB', 'GB', 'TB']
  let idx = 0
  let val = bytes
  while (val >= 1024 && idx < units.length - 1) {
    val /= 1024
    idx++
  }
  return `${val.toFixed(val >= 10 || idx === 0 ? 0 : 1)} ${units[idx]}`
}
