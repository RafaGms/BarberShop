'use client'
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import {
   Sheet,
   SheetClose,
   SheetContent,
   SheetDescription,
   SheetFooter,
   SheetHeader,
   SheetTitle,
   SheetTrigger,
} from "./ui/sheet"
import { Menu } from 'lucide-react';
import { signIn, useSession } from "next-auth/react";

const Header = () => {

   const { data } = useSession()

   const handleLoginClick = async () => {
      await signIn()
   }

   return (
      <Card className="rounded-none">
         <CardContent className="px-4 py-5  justify-between flex flex-row items-center">
            <div>
               <h1 className="text-primary  text-2xl">NextCut</h1>
            </div>

            <div>


               {data?.user ? (
                  <h1>{data.user.name}</h1>
               ) : (<Button onClick={handleLoginClick}>login</Button>)}
               {/* <Sheet>
                  <SheetTrigger asChild>
                     <Button variant={"outline"} className="px-2"><Menu /></Button>
                  </SheetTrigger>
                  <SheetContent>
                     <SheetHeader>
                        <SheetTitle>Edit profile</SheetTitle>
                        <SheetDescription>
                           Make changes to your profile here. Click save when you're done.
                        </SheetDescription>
                     </SheetHeader>

                     <SheetFooter>
                        <SheetClose asChild>
                           <Button>Save changes</Button>
                        </SheetClose>
                     </SheetFooter>
                  </SheetContent>
               </Sheet> */}
            </div>
         </CardContent>
      </Card>
   );
}

export default Header;  