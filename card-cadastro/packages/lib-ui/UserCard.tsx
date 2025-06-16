import React from "react";
import { MdEdit, MdVisibility } from "react-icons/md";

type StatusUsuario = "ativa" | "inativa" | "emFila";

interface UserCardProps {
  nome: string;
  cpf: string;
  contato: string;
  cidade: string;
  avatar: string; // URL do avatar
  status: StatusUsuario;
  onEdit: () => void; // Função chamada ao clicar em Editar
  onViewMore: () => void; // Função chamada ao clicar em Ver mais
}

/**
 * Componente UserCard exibe informações de um usuário em um cartão.
 */
const UserCard: React.FC<UserCardProps> = ({
  nome,
  cpf,
  contato,
  cidade,
  avatar,
  status,
  onEdit,
  onViewMore,
}) => {
  // Define classes para o status
  const statusClasses = {
    ativa: "text-green-600",
    inativa: "text-red-600",
    emFila: "text-gray-600 ",
  };

  // Define a borda geral do cartão:
  // Se usuário estiver inativo, aplica borda vermelha, senão aplica sombra padrão
  const cardClassNames =
    status === "inativa"
      ? "border-4 border-red-600"
      : "shadow-md";

  return (
    <div
      className={`max-w-sm mx-auto bg-white rounded-lg p-6 flex flex-col gap-4 ${cardClassNames}`}
    >
      <div className="flex items-center">
        <img src={avatar} alt={nome} className="w-16 h-16 rounded-full mr-4" />
        <div className="flex flex-col">
          <h2 className="text-xl font-semibold">{nome}</h2>
          <p className="text-gray-500">CPF: {cpf}</p>
          <p className="text-gray-500">Contato: {contato}</p>
          <p className="text-gray-500">Cidade: {cidade}</p>
        </div>
      </div>
      <div className={`${statusClasses[status]}`}>
        {status === "ativa" && <span>Ativo</span>}
        {status === "inativa" && <span>Inativo</span>}
        {status === "emFila" && <span>Em Fila</span>}
      </div>
      <div className="flex justify-between">
        <button
          onClick={onEdit}
          className="flex items-center text-indigo-600 hover:underline"
        >
          <MdEdit className="mr-1" />
          Editar
        </button>
        <button
          onClick={onViewMore}
          className="flex items-center text-indigo-600 "
        >
          <MdVisibility className="mr-1" />
          Ver mais
        </button>
      </div>
    </div>
  );
};

export default UserCard;


