import { SquarePen } from "lucide-react";
import React from "react";

type StatusUsuario = "ativa" | "inativa" | "emFila";

interface UserCardProps {
  nome: string;
  cpf: string;
  contato: string;
  cidade: string;
  avatar: string; // URL do avatar
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
  // Define classes para o status
  const statusClasses = {
    ativa: "text-green-600",
    inativa: "text-[#7f0a05]",
    emFila: "text-gray-600",
  };

  // Define a borda geral do cartão:
  const cardClassNames = status === "inativa" ? "border-2 border-[#7f0a05]" : "shadow-md";

  const cardTextColor = "#0D4F97";

  return (
    <div
      className={`w-full max-w-lg mx-auto bg-white rounded-lg p-6 flex flex-col gap-4 relative ${cardClassNames}`}
      style={{ fontFamily: "'Baloo 2', cursive", color: cardTextColor }}
    >
      <button
        onClick={onEdit}
        className="absolute top-1 right-1 p-1"
        style={{ background: 'transparent', border: 'none' }}
      >
        <SquarePen size={30} color={cardTextColor} />
      </button>

      <div className="flex items-center">
        <img src={avatar} alt={nome} className="w-16 h-16 rounded-lg mr-4" />
        <div className="flex flex-col">
          <h2 className="text-xl font-bold" style={{ color: cardTextColor }}>{nome}</h2>
          <p style={{ fontWeight: 'normal', color: cardTextColor, paddingLeft: '10px' }}>CPF: {cpf}</p>
          <p style={{ fontWeight: 'normal', color: cardTextColor, paddingLeft: '10px' }}>Contato: {contato}</p>
          <p style={{ fontWeight: 'normal', color: cardTextColor, paddingLeft: '10px' }}>Cidade: {cidade}</p>
        </div>

      </div>
      <div className={`flex justify-center ${statusClasses[status]} mt-[-15px]`} style={{ marginRight: '380px' }}>
        {status === "ativa" && <span>Ativo</span>}
        {status === "inativa" && <span>Inativo</span>}
        {status === "emFila" && <span>Em Fila</span>}
      </div>

      <div className="absolute bottom-2 right-4" style={{ marginLeft: '1px' }}>
        <button
          onClick={onViewMore}
          className="flex rounded px-6 py-0"
          style={{ color: '#FFFFFF', backgroundColor: cardTextColor, height: '28px' }} 
        >
          Ver mais
        </button>
      </div>
    </div>
  );
};

export default UserCard;
