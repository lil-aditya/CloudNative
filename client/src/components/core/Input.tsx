type Props = {
  label?: string
  value?: string
  onChange?: (value: string) => void
  type?: string
}

export default function Input({ label, value, onChange, type = 'text' }: Props) {
  return (
    <label style={{ display: 'grid', gap: 6 }}>
      {label ? <span>{label}</span> : null}
      <input
        type={type}
        value={value ?? ''}
        onChange={(e) => onChange?.(e.target.value)}
        style={{ padding: 10, borderRadius: 8, border: '1px solid #ddd' }}
      />
    </label>
  )
}
