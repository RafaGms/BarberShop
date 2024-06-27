import { Avatar, AvatarImage } from "./ui/avatar";
import { LogOutIcon, UserCircle2, LogIn, HomeIcon, Calendar } from "lucide-react";
import { Button } from "./ui/button";
import { SheetHeader, SheetTitle } from "./ui/sheet";
import Link from "next/link";
import { signIn, useSession, signOut } from "next-auth/react";

const SideMenu = () => {

   const { data } = useSession()

   const handleLoginClick = async () => {
      await signIn("google");
   }

   const handleLogoutClick = async () => {
      await signOut();
   }

   return (
      <div>
         <SheetHeader className="border-b mb-4 p-4">
            <SheetTitle>Menu</SheetTitle>
         </SheetHeader>

         {data?.user ? (
            <div className="flex justify-between items-center px-5 py-6">
               <div className="flex items-center gap-2 ">
                  <div>
                     <Avatar>
                        <AvatarImage src={data.user?.image ?? ""} />
                     </Avatar>
                  </div>
                  <div><h2 className="text-bold ">{data.user.name}</h2></div>
               </div>
               <div>
                  <Button size={"icon"} onClick={handleLogoutClick} variant={"secondary"}>
                     <LogOutIcon />
                  </Button>
               </div>
            </div>
         ) : (
            <div className="px-5 py-6 flex flex-col justify-center">
               <div className="flex items-center gap-2 mb-3">
                  <UserCircle2 />
                  <h2 className="text-bold">Olá, Faça seu login!</h2>
               </div>
               <Button className="flex gap-2" onClick={handleLoginClick} variant="secondary">
                  Fazer login
                  <LogIn />
               </Button>
            </div>
         )}

         <div className="flex items-center px-5 py-6">
            <Button className="flex items-center w-full justify-start gap-3 py-5" variant="outline" asChild>
               <Link href="/">
                  <HomeIcon />Início
               </Link>
            </Button>
         </div>

         {data?.user && (
            <div className="flex items-center px-5 ">
               <Button className="flex items-center w-full justify-start gap-3 py-5" variant="outline" asChild>
                  <Link href="/booking">
                     <Calendar />
                     Agendamentos
                  </Link>
               </Button>
            </div>
         )}
      </div>
   );
}

export default SideMenu;