import type { ReactNode } from 'react'

export default function ProtectedRoute({ children }: { children: ReactNode }) {
  // TODO: check auth state and redirect.
  return children
}
