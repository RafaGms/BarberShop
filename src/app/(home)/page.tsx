import Header from "../_components/header";
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import Search from './_components/search';
import BookingItem from "../_components/booking-items";
import BarberShopItem from "./_components/barbershop-item";
import { db } from "../_lib/prisma";



export default async function Home() {
  // Chamar prisma e pegar barbearias, tenho que deixar a função Home async
  const barbershops = await db.barbershop.findMany({

  })


  return (
    <div>
      <Header />

      <div className="mt-4 px-5">
        <h2 className="text-xl font-bold">Olá Rafael</h2>
        <p className="capitalize text-muted-foreground text-sm">{format(new Date(), "EEEE',' d 'de' yyyy", {
          locale: ptBR
        })}</p>
        <p className=""></p>
      </div>

      <div className="px-5 mt-6">
        <Search />
      </div>


      <div className="px-5 my-6">
        <h2 className="uppercase text-xs text-muted-foreground mb-3">Agendamentos</h2>
        <BookingItem />
      </div>

      <div className="pl-5 mb-6">
        <h2 className="uppercase text-xs text-muted-foreground mb-3">Mais Procurados</h2>
        {/* Fazendo um map para pegar os nomes das Barbearias no banco de dados e to passando como prop para o component ||| BARBERSHOPS no .map é o banco de dados */}
        <div className="flex flex-row gap-3 overflow-x-auto [&::-webkit-scrollbar]:hidden">
          {barbershops.map((barbershop) => (
            <BarberShopItem key={barbershop.id} barbershop={barbershop} />
          ))}
        </div>
      </div>


      <div className="pl-5 mb-16">
        <h2 className="uppercase text-xs text-muted-foreground mb-3">Populares</h2>
        <div className="flex flex-row gap-3 overflow-x-auto [&::-webkit-scrollbar]:hidden">
          {barbershops.map((barbershop) => (
            <BarberShopItem key={barbershop.id} barbershop={barbershop} />
          ))}
        </div>
      </div>

    </div>
  );
}
