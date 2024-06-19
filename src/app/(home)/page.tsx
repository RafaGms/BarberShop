import Header from "../_components/header";
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'
export default function Home() {
  return (
    <div>
      <Header />

      <div className="mt-4 px-5">
        <h2 className="text-xl font-bold">Olá Rafael</h2>
        <p className="capitalize text-muted-foreground text-sm">{format(new Date(), "EEEE',' d 'de' yyyy", {
          locale: ptBR
        })}</p>
      </div>
    </div>
  );
}