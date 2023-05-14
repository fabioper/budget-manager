"use client"

import styles from "./form.module.css"
import useForm from "@/shared/hooks/useForm"
import NewBudgetInput from "@/models/requests/new-budget-input"
import { number, object, string } from "yup"
import Button from "@/shared/components/button"

const initialValues = {
  title: "",
  value: 0,
  content: "",
}

const schema = object<NewBudgetInput>({
  title: string(),
  content: string(),
  value: number().min(0),
})

export function Form() {
  const { field, handleSubmit } = useForm<NewBudgetInput>({
    initialValues,
    schema,
  })

  const onSubmit = async (values: NewBudgetInput) => console.log(values)

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.budgetHeader}>
        <div className={styles.control}>
          <label htmlFor="title">Título</label>
          <input
            type="text"
            {...field("title")}
            placeholder="Insira o título do orçamento"
          />
        </div>

        <div className={styles.control}>
          <label htmlFor="content">Valor</label>
          <input
            type="number"
            {...field("value")}
            min={0}
            placeholder="Insira o valor do orçamento"
          />
        </div>
      </div>

      <div className={styles.control}>
        <label htmlFor="content">Conteúdo</label>
        <textarea
          {...field("content")}
          placeholder="Insira o conteúdo do orçamento"
        />
      </div>

      <div className={styles.buttons}>
        <Button type="submit">Enviar</Button>
      </div>
    </form>
  )
}
