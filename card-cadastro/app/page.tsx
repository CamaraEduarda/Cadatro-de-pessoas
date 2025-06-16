"use client";

import React from "react";
import UserCard from "../packages/lib-ui/UserCard";

export default function Home() {
  const handleEdit = () => {
    alert("Editar usuário clicado");
  };
  const handleViewMore = () => {
    alert("Ver mais clicado");
  };
  return (
    <main className="min-h-screen bg-gray-50 p-8 flex justify-center items-start">
      <UserCard
        nome="João da Silva"
        cpf="123.456.789-00"
        contato="(11) 98765-4321"
        cidade="São Paulo"
        avatar="https://placehold.co/128x128?text=Avatar+Joao+da+Silva"
        status="inativa"
        onEdit={handleEdit}
        onViewMore={handleViewMore}
      />
    </main>
  );
}