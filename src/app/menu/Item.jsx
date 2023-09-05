import DropMenu from "@/components/DropMenu";

export default function Item({ item }) {
  return (
    <div className="group flex flex-col items-center p-2">
      <div className="flex w-96 justify-between">
        <h2 className="text-base">{item.nome}</h2>
        <h2 className="text-base">R${item.preco}</h2>
      </div>
      <div className="flex w-96 justify-between">
        <p className="text-xs">{item.descricao}</p>
        <DropMenu />
      </div>
    </div>
  );
}
