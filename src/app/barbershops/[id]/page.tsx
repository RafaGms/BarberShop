import { db } from '@/app/_lib/prisma';
import BarberShopInfo from './_components/barbershop-info';
import ServiceItem from './_components/service-item';
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
      include: {
         services: true,
      }
   })

   if (!Barbershop) {
      // TODO: fazer o redirecionamento para home page
      return null;
   }

   return (
      <div>
         <BarberShopInfo Barbershop={Barbershop} />

         <div className='px-5 flex flex-col gap-4 py-6' > {Barbershop.services.map((service) => (
            <ServiceItem key={service.id} service={service} />
         ))}</div>
      </div>
   );
}

export default BarberShopDetailsPage;