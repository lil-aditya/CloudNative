export function handleError(err: unknown) {
  if (err instanceof Error) return err.message
  return String(err)
}
