import { Button } from "@/app/_components/ui/button";
import { Card, CardContent } from "@/app/_components/ui/card";
import { Service } from "@prisma/client";
import Image from "next/image";

interface ServiceItemProp {
   service: Service
}

const ServiceItem = ({ service }: ServiceItemProp) => {
   return (
      <div >
         <Card className="rounded-sm">
            <CardContent className="p-3">
               <div className="flex gap-4 items-center justify-between">
                  <div className="relative min-h-[110px] min-w-[110px] max-h-[110px] max-w-[110px]">
                     <Image src={service.imageUrl} alt={service.name} fill className="object-cover rounded-md" />
                  </div>

                  <div className="flex flex-col gap-3 w-full">
                     <div>
                        <h2 className="font-bold text-sm overflow-hidden text-ellipsis text-nowrap">{service.name}</h2>
                        <p className="text-xs text-muted-foreground ">{service.description}</p>
                     </div>

                     <div className="flex items-center justify-between ">
                        <p className="text-primary text-bold">{Intl.NumberFormat("pt-BR", {
                           style: "currency",
                           currency: "BRL",
                        }).format(Number(service.price))}</p>
                        <Button>Agendar</Button>
                     </div>
                  </div>

               </div>
            </CardContent>
         </Card>
      </div>
   );
}

export default ServiceItem;