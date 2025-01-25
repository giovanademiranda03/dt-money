import styled from "styled-components";

export const TransctionsContainer = styled.main`
  width: 100%;
  max-width: 1120px;
  margin: 4rem auto 0;
  padding: 0 1.5rem;

  @media (max-width: 900px) {
    padding: 0 1rem;
  }

  @media (max-width: 600px) {
    margin: 2rem auto 0;
  }
`;

export const TransactionsTable = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 0.5rem;
  margin-top: 1.5rem;

  td {
    padding: 1.25rem 2rem;
    background: ${(props) => props.theme["gray-700"]};
    white-space: nowrap; /* Impede a quebra de texto */
    text-overflow: ellipsis; /* Adiciona reticências se o texto for longo */
    overflow: hidden; /* Garante que o conteúdo não ultrapasse os limites */

    &:first-child {
      border-top-left-radius: 6px;
      border-bottom-left-radius: 6px;
    }

    &:last-child {
      border-top-right-radius: 6px;
      border-bottom-right-radius: 6px;
    }
  }

  th {
    text-align: left; /* Ajusta o alinhamento */
    white-space: nowrap; /* Evita quebra em cabeçalhos */
  }

  @media (max-width: 768px) {
    td {
      padding: 1rem 1.5rem;
    }
  }

  @media (max-width: 600px) {
    margin-top: 1rem;

    td {
      width: 100%;
      display: block;
      padding: 1rem;
      text-align: center;
      position: relative;

      &:before {
        position: absolute;
        top: 50%;
        left: 1rem;
        transform: translateY(-50%);
        font-weight: bold;
        white-space: nowrap;
      }
    }
  }
`;

interface PriceHighLightProps {
  variant: "income" | "outcome";
}

export const PriceHighLight = styled.span<PriceHighLightProps>`
  color: ${(props) =>
    props.variant === "income"
      ? props.theme["green-300"]
      : props.theme["red-300"]};
`;
