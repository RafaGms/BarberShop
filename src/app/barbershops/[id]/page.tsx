import { db } from '@/app/_lib/prisma';
// vai receber o paramentro da URL ex: http://localhost:3000/barbershops/id
// criando a interface para params
interface BarbershopDetailsPageProps {
   // ? = opcional
   params: {
      id?: string;
   },
}

const BarberShopDetailsPage = async ({ params }: BarbershopDetailsPageProps) => {
   // Chamando Banco de dados, e tenho que passar que a funcao é async

   // req do banco findUnique para saber que to pegando um certo index do banco e tenho 
   // que passar a cláusula where para saber qual é o id

   if (!params.id) {
      // TODO: fazer o redirecionamento para home page
      return null;
   }

   const Barbershop = await db.barbershop.findUnique({
      where: {
         id: params.id,
      },
   })

   if (!Barbershop) {
      // TODO: fazer o redirecionamento para home page
      return null;
   }

   return (
      <h1>{Barbershop.name}</h1>
   );
}

export default BarberShopDetailsPage;