import { zodResolver } from "@hookform/resolvers/zod";
import * as Dialog from "@radix-ui/react-dialog";
import { ArrowCircleDown, ArrowCircleUp, X } from "phosphor-react";
import { Controller, useForm } from "react-hook-form";
import { useContextSelector } from "use-context-selector";
import * as z from "zod";
import { TransactionsContext } from "../../contexts/TransactionsContext";

import {
  CloseButton,
  Content,
  ErrorMessage,
  InputWrapper,
  Overlay,
  TransactionType,
  TransactionTypeButton,
} from "./styles";

const newTransactionsFormSchema = z.object({
  description: z.string().nonempty("Descrição é obrigatória"),
  price: z
    .number({
      required_error: "Preço é obrigatório",
    })
    .positive("O preço deve ser maior que zero"),
  category: z.string().nonempty("Categoria é obrigatória"),
  type: z.enum(["income", "outcome"], {
    required_error: "O tipo de transação é obrigatório",
  }),
});

type NewTransactionsFormInputs = z.infer<typeof newTransactionsFormSchema>;

export default function NewTransactionModal() {
  const createTransaction = useContextSelector(
    TransactionsContext,
    (context) => context.createTransaction
  );

  const {
    control,
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<NewTransactionsFormInputs>({
    resolver: zodResolver(newTransactionsFormSchema),
    defaultValues: {
      type: "income",
    },
  });

  async function handleCreateNewTransaction(data: NewTransactionsFormInputs) {
    const { description, price, category, type } = data;

    try {
      await createTransaction({
        description,
        price,
        category,
        type,
      });

      reset();
    } catch (error) {
      console.error("Erro ao criar transação:", error);
    }
  }

  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <Dialog.Title>Nova Transação</Dialog.Title>
        <CloseButton>
          <X size={24} />
        </CloseButton>
        <form onSubmit={handleSubmit(handleCreateNewTransaction)}>
          <InputWrapper>
            <input
              type="text"
              placeholder="Descrição"
              {...register("description")}
            />
            {errors.description && (
              <ErrorMessage>{errors.description.message}</ErrorMessage>
            )}
          </InputWrapper>

          <InputWrapper>
            <input
              type="number"
              placeholder="Preço"
              {...register("price", { valueAsNumber: true })}
            />
            {errors.price && (
              <ErrorMessage>{errors.price.message}</ErrorMessage>
            )}
          </InputWrapper>

          <InputWrapper>
            <input
              type="text"
              placeholder="Categoria"
              {...register("category")}
            />
            {errors.category && (
              <ErrorMessage>{errors.category.message}</ErrorMessage>
            )}
          </InputWrapper>

          <Controller
            control={control}
            name="type"
            render={({ field }) => (
              <TransactionType
                onValueChange={field.onChange}
                value={field.value}
              >
                <TransactionTypeButton variant="income" value="income">
                  <ArrowCircleUp size={24} />
                  Entrada
                </TransactionTypeButton>
                <TransactionTypeButton variant="outcome" value="outcome">
                  <ArrowCircleDown size={24} />
                  Saída
                </TransactionTypeButton>
              </TransactionType>
            )}
          />
          {errors.type && <ErrorMessage>{errors.type.message}</ErrorMessage>}

          <button type="submit" disabled={isSubmitting}>
            Cadastrar
          </button>
        </form>
      </Content>
    </Dialog.Portal>
  );
}
