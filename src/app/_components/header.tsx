'use client'
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button"
import { Sheet, SheetContent, SheetTrigger, } from "./ui/sheet"
import { Menu } from 'lucide-react';
import SideMenu from "./side-menu";

const Header = () => {
   return (
      <Card className="rounded-none">
         <CardContent className="px-4 py-5  justify-between flex flex-row items-center">
            <div>
               <h1 className="text-primary  text-2xl">NextCut</h1>
            </div>
            <div>
               <Sheet>
                  <SheetTrigger asChild>
                     <Button variant={"outline"} className="px-2"><Menu /></Button>
                  </SheetTrigger>
                  <SheetContent className="p-0">
                     <SideMenu />
                  </SheetContent>
               </Sheet>
            </div>
         </CardContent>
      </Card>
   );
}

export default Header;  