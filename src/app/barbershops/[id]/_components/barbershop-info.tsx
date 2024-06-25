'use client'

import { Button } from "@/app/_components/ui/button";
import { Barbershop } from '@prisma/client';
import { ChevronLeft, Menu, MapPinIcon, Star } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";


interface BarbershopInfoProp {
   Barbershop: Barbershop
}

const BarberShopInfo = ({ Barbershop }: BarbershopInfoProp) => {
   const router = useRouter();
   const handleBackClick = () => {
      router.back();
   }


   return (
      <div>
         <div className='h-[250px] w-full relative '>
            <Button onClick={handleBackClick} variant={'outline'} size={'icon'} className='z-40 left-6 top-4 absolute opacity-85'><ChevronLeft /></Button>
            <Button variant={'outline'} size={'icon'} className='z-40 right-6 top-4 absolute opacity-85'><Menu /></Button>
            <Image src={Barbershop.imageUrl} fill alt={Barbershop.name} className='object-cover opacity-85' />
         </div>


         <div className="px-5 pt-3 pb-6 border-b">
            <h1 className='text-xl font-bold mb-1'>{Barbershop.name}</h1>
            <div className="flex gap-1 mb-2">
               <MapPinIcon className='text-primary' size={14} />
               <p className='text-sm text-muted-foreground'>{Barbershop.address}</p>
            </div>
            <div className="flex gap-1 mb-2">
               <Star className='text-primary' size={14} />
               <p className='text-xs text-muted-foreground'>4,7 (900 avaliações)</p>
            </div>

         </div>
      </div>
   );
}

export default BarberShopInfo;