import { Card, CardContent, CardHeader } from "./ui/card";
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

const Header = () => {
   return (
      <Card className="rounded-none">
         <CardContent className="px-4 py-5  justify-between flex flex-row items-center">
            <div>
               <h1 className="text-primary  text-2xl">NextCut</h1>
            </div>

            <div>
               <Sheet>
                  <SheetTrigger>
                     <Button variant={"outline"} className="px-2"><Menu /></Button>
                  </SheetTrigger>
                  <SheetContent>
                     <SheetHeader>
                        <SheetTitle>Edit profile</SheetTitle>
                        <SheetDescription>
                           Make changes to your profile here. Click save when you're done.
                        </SheetDescription>
                     </SheetHeader>
                     <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                           <Label htmlFor="name" className="text-right">
                              Name
                           </Label>
                           <Input id="name" value="Pedro Duarte" className="col-span-3" />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                           <Label htmlFor="username" className="text-right">
                              Username
                           </Label>
                           <Input id="username" value="@peduarte" className="col-span-3" />
                        </div>
                     </div>
                     <SheetFooter>
                        <SheetClose asChild>
                           <Button type="submit">Save changes</Button>
                        </SheetClose>
                     </SheetFooter>
                  </SheetContent>
               </Sheet>
            </div>
         </CardContent>
      </Card>
   );
}

export default Header;  