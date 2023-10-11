import { useEffect, useId, useState }  from 'react'

export function useLocalStorageState<T = any>(initialValue: T): [T, React.Dispatch<React.SetStateAction<T>>] {
  const [value, setValue,] = useState<T>(initialValue)
  const id = useId()

  useEffect(() => {
    if (import.meta.hot) {
      const recovedValue = localStorage.getItem(id)
      if (recovedValue) {
        setValue(JSON.parse(recovedValue))
      }
    }
  }, [])

  useEffect(() => {
    if (import.meta.hot) {
      localStorage.setItem(id, JSON.stringify(value))
    }
  }, [value,])

  return [
    value,
    setValue,
  ]
}
