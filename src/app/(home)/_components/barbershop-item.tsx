// Como que esse componente faz interação com o onClick tenho que fala que é um "use Client"
'use client';

import { Badge } from "@/app/_components/ui/badge";
import { Button } from "@/app/_components/ui/button";
import { Card, CardContent } from "@/app/_components/ui/card";
import { Barbershop } from '@prisma/client';
import { Star } from "lucide-react";
import Image from "next/image";
// para fazer a navigation de page
import { useRouter } from "next/navigation";

// tipagem da prop barbershop
interface BarberShopItemProps {
   barbershop: Barbershop
}

const BarberShopItem = ({ barbershop }: BarberShopItemProps) => {

   const route = useRouter()
   // Function para redirecionar o cliente para a tela de detalhe da barbershop
   const handleBookingClick = () => {
      route.push(`/barbershops/${barbershop.id}`)
   }

   return (
      <Card className="max-w-[159px] min-w-[159px] w-full">
         <CardContent className=" p-1 rounded-xl">
            <div className="relative">
               <div className="absolute z-50 ">
                  <Badge className="flex justify-center items-center gap-1 p-1 mt-1 ml-2 bg-[#000000ce] hover:bg-[#000000ce] rounded-3xl text-xs"><Star className="fill-primary text-primary" size={14} /> 5.0</Badge>
               </div>
               <Image sizes="100vw" alt={barbershop.name} width={0} height={0} className="h-[159px] w-[150px]  object-cover rounded-xl" src={barbershop.imageUrl} />
            </div>
            <div className="p-2">
               <h2 className="text-nowrap text-ellipsis overflow-hidden">{barbershop.name}</h2>
               <p className="text-muted-foreground text-xs items-center overflow-hidden text-ellipsis text-nowrap">{barbershop.address}</p>
            </div>
            <div className="p-2 flex justify-center items-center ">
               <Button className="w-full" onClick={handleBookingClick} variant={"secondary"}>Reservar</Button>
            </div>
         </CardContent>
      </Card>
   );
}

export default BarberShopItem;