import Link from "next/link";
import Image from "next/image";
import Shop from "@/img/coffee-shop.png";
import Menu from "@/img/coffee-menu.png";
import Bell from "@/img/reception-bell.png";
import Cup from "@/img/coffee-cup.png";

export default function NavBar() {
  return (
    <header className="text-amber-50 mx-44 px-4 py-2 flex justify-between items-center border-b border-amber-50">
      <Link href="/" className="flex items-center">
        <Image src={Shop} width={80} height={80} alt="CoffeeShop" />
        <h1 className="text-4xl">COFFEECode</h1>
      </Link>
      <nav className="flex items-center gap-16">
        <Link href="/menu" className="flex items-center">
          <Image src={Menu} width={40} height={40} alt="CoffeeShop" />
          Cardápio
        </Link>
        <Link href="/pedido" className="flex items-center">
          <Image src={Bell} width={40} height={40} alt="CoffeeShop" />
          Pedir
        </Link>
        <Link href="/entrar" className="flex items-center">
          <Image src={Cup} width={40} height={40} alt="CoffeeShop" />
          Entrar
        </Link>
      </nav>
    </header>
  );
}
