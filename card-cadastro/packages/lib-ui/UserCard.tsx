import { SquarePen } from "lucide-react";
import React from "react";

type StatusUsuario = "ativa" | "inativa" | "em_fila";

interface UserCardProps {
  nome: string;
  cpf: string;
  contato: string;
  cidade: string;
  avatar: string;
  status: StatusUsuario;
  onEdit: () => void;
  onViewMore: () => void;
}

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
  const statusBorderClasses = {
    ativa: "border-green-600",
    inativa: "border-red-700",
    em_fila: "border-gray-400",
  };

  const statusTextClasses = {
    ativa: "text-green-600",
    inativa: "text-red-700",
    em_fila: "text-gray-400",
  };

  const cardClassNames = `shadow-md border-2 rounded-lg p-4 sm:p-6 flex flex-col gap-4 relative ${statusBorderClasses[status]}`;
  const cardTextColor = "#0D4F97";

  return (
    <div
      className={`w-full max-w-lg mx-auto bg-white rounded-lg p-6 flex flex-col gap-4 relative ${cardClassNames}`}
      style={{ fontFamily: "'Baloo 2', cursive", color: cardTextColor }}
    >
      {/*Botão editar*/}
      <button
        onClick={onEdit}
        className="absolute top-2 right-2 p-1"
        style={{ background: "transparent", border: "none" }}
        aria-label="Editar"
      >
        <SquarePen size={28} color={cardTextColor} />
      </button>

      {/*Conteúdo do card*/}
      <div className="flex flex-col sm:flex-row sm:items-start sm:gap-4">
        {/*Avatar + status*/}
        <div className="flex flex-col items-center sm:items-start sm:w-1/4">
          <img
            src={avatar}
            alt={nome}
            className="w-20 h-20 rounded-lg object-cover shadow"
          />
          <span
            className={`mt-2 text-sm font-medium ${statusTextClasses[status]}`}
          >
            {status === "ativa" && "Ativo"}
            {status === "inativa" && "Inativo"}
            {status === "em_fila" && "Em Fila"}
          </span>
        </div>

        {/* Informações do usuário */}
        <div className="mt-4 sm:mt-0 sm:w-3/4 flex flex-col gap-1 text-sm sm:text-base">
          <h2 className="text-xl font-bold">{nome}</h2>
          <p className="pl-1">CPF: {cpf}</p>
          <p className="pl-1">Contato: {contato}</p>
          <p className="pl-1">Cidade: {cidade}</p>
        </div>
      </div>

      {/*Botão ver mais*/}
      <div className="flex justify-end">
        <button
          onClick={onViewMore}
          className="px-5 py-1 rounded text-white text-sm shadow"
          style={{ backgroundColor: cardTextColor }}
        >
          Ver mais
        </button>
      </div>
    </div>
  );
};

export default UserCard;
