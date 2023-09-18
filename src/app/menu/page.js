import NavBar from "@/components/NavBar";
import Item from "./Item";
import Button from "@/components/Button";
import { PlusIcon } from "@heroicons/react/24/outline";

async function getItens() {
  const url = "http://localhost:8080/menu";
  const resp = await fetch(url);
  return resp.json();
}

export default async function Home() {
  const data = await getItens();

  return (
    <>
      <NavBar />
      <main className="mx-44 flex flex-col justify-center items-center ">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl">Cardápio</h1>
          <Button href="/menu/new">
            <PlusIcon className="h6 w-6 text-stone-900" />
            <h2 className="text-stone-900">Criar item</h2>
          </Button>
        </div>
        <div>
          {data.map((item) => (
            <Item key={item.id} item={item} />
          ))}
        </div>
      </main>
    </>
  );
}
