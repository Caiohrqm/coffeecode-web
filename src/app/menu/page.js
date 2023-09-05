import NavBar from "@/components/NavBar";
import Item from "./Item";

async function getItens() {
  const url = "http://localhost:8080/menu";
  const resp = await fetch(url, { next: { revalidate: 0 } });
  return resp.json();
}

export default async function Home() {
  const data = await getItens();

  return (
    <>
      <NavBar />
      <main className="mx-44 flex flex-col justify-center items-center ">
        <h1 className="text-2xl mt-20 mb-8">Cardápio</h1>
        <div>
          {data.map((item) => (
            <Item key={item.id} item={item} />
          ))}
        </div>
      </main>
    </>
  );
}
