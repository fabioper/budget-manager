import type React from "react"
import { useCallback, useState } from "react"
import { useFormik } from "formik"
import { type Schema } from "yup"
import cn from "classnames"

interface UseFormConfig<T extends Record<string, any>> {
  initialValues: T
  schema: Schema
}

export default function useForm<T extends Record<string, any>>(
  config: UseFormConfig<T>
) {
  const [dirty, setDirty] = useState<Set<keyof T>>(new Set())

  const form = useFormik<T>({
    initialValues: config.initialValues,
    onSubmit: () => {},
    validationSchema: config.schema,
  })

  const handleSubmit = useCallback(
    (handler: (values: T) => Promise<void>) => {
      return async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        if (form.isValid) {
          await form.handleSubmit(event)
          await handler(form.values)
        }
      }
    },
    [form]
  )

  const markAsDirty = useCallback((field: keyof T) => {
    setDirty((prevState) => prevState.add(field))
  }, [])

  const isValid = useCallback(
    (field: keyof T) => {
      const hasError = !!form.errors[field]
      const isDirty = dirty.has(field)
      return !((isDirty || form.submitCount > 0) && hasError)
    },
    [dirty, form.errors, form.submitCount]
  )

  const field = useCallback(
    (
      name: keyof T & string
    ): React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> => {
      return {
        name,
        id: name,
        value: form.values[name],
        onChange: (event) => {
          markAsDirty(name)
          form.handleChange(event)
        },
        onBlur: form.handleBlur,
        className: cn({ invalid: !isValid(name) }),
      }
    },
    [form, isValid, markAsDirty]
  )

  return { isValid, field, handleSubmit }
}
