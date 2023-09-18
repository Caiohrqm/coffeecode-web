"use client";

import { create } from "@/actions/menu";
import Button from "@/components/Button";
import NavBar from "@/components/NavBar";
import TextField from "@/components/TextField";
import { CheckCircleIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

import { redirect } from "next/navigation";

export default function FormContas() {
  const [error, setError] = useState("");

  async function handleSubmit(formData) {
    const resp = await create(formData);

    if (resp.message) {
      setError(resp.message);
      return;
    }
    redirect("/menu");
  }

  return (
    <>
      <NavBar />

      <main className="mt-10 m-auto max-w-md p-6 rounded flex gap-3 flex-col">
        <form action={handleSubmit}>
          <h1 className="text-2xl">Cadastrar Item</h1>
          <TextField label="Nome" id="nome" name="nome" />

          <TextField label="Descrição" id="descricao" name="descricao" />

          <TextField label="Preço" id="preco" name="preco" />

          <div className="flex justify-around mt-4">
            <Button href="/menu" variant="secondary">
              Cancelar
            </Button>
            <Button type="button">
              <CheckCircleIcon className="h-6 w-6 text-stone-900" />
              <h2 className="text-stone-900">Salvar</h2>
            </Button>
          </div>

          <span className="text-amber-200">{error}</span>
        </form>
      </main>
    </>
  );
}
