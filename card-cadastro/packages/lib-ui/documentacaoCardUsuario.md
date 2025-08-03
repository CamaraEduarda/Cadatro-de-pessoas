# UserCard – Componente de Cartão de Usuário

Componente de cartão informativo e reutilizável para exibir dados de um usuário, com botões de edição e visualização.

---

## ✅ Props

| Prop         | Tipo                                | Descrição                                |
|--------------|-------------------------------------|--------------------------------------------|
| `nome`       | `string`                            | Nome completo do usuário.                 |
| `cpf`        | `string`                            | CPF do usuário.                           |
| `contato`    | `string`                            | Telefone ou outro contato.                |
| `cidade`     | `string`                            | Cidade de residência.                     |
| `avatar`     | `string`                            | URL da imagem de avatar do usuário.       |
| `status`     | `"ativa"` \| `"inativa"` \| `"em_fila"` | Status atual do usuário.                  |
| `onEdit`     | `() => void`                        | Callback para ação de edição.             |
| `onViewMore` | `() => void`                        | Callback para ação de ver mais detalhes.  |

---

## 🎨 Status e Cores

| Status     | Borda         | Texto         | Rótulo     |
|------------|---------------|---------------|------------|
| `ativa`    | Verde (600)   | Verde (600)   | "Ativo"    |
| `inativa`  | Vermelho (700)| Vermelho (700)| "Inativo"  |
| `em_fila`  | Cinza (400)   | Cinza (400)   | "Em Fila"  |

---

## 🧪 Exemplo de uso

```tsx
import React from "react";
import UserCard from "./components/UserCard";

export default function App() {
  return (
    <div className="p-6">
      <UserCard
        nome="João da Silva"
        cpf="123.456.789-00"
        contato="(11) 91234-5678"
        cidade="São Paulo"
        avatar="https://via.placeholder.com/150"
        status="ativa"
        onEdit={() => alert("Editar usuário")}
        onViewMore={() => alert("Visualizar mais")}
      />
    </div>
  );
}
