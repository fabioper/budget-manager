"use client"

import styles from "./NewBudgetForm.module.css"
import useForm from "@/shared/hooks/useForm"
import NewBudgetInput from "@/models/requests/new-budget-input"
import { number, object, string } from "yup"

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

function NewBudgetForm() {
  const { field, handleSubmit } = useForm<NewBudgetInput>({
    initialValues: initialValues,
    schema: schema,
  })

  return (
    <form
      className={styles.form}
      onSubmit={handleSubmit(async (values) => {
        console.log(values)
      })}
    >
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

      <div>
        <button type="submit">Enviar</button>
      </div>
    </form>
  )
}

export default NewBudgetForm
