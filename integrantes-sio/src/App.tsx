import * as React from "react";

import Autoplay from "embla-carousel-autoplay";

import { Card, CardContent } from "./components/ui/card";
import "./index.css";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const integrantes = [
  {
    title: "Aguilar Panameño",
    profession: "CEO",
    img: "/David.jpg",
  },
  {
    title: "Molina Menjivar",
    profession: "Jugador profesional",
    img: "./Daniel.jpg",
  },
  {
    title: "Merino Guerra",
    profession: "Director técnico",
    img: "/Jaime.jpg",
  },
  {
    title: "Linares López",
    profession: "Jugardor profesional",
    img: "/Oscar.jpg",
  },
];

function App() {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );

  return (
    <div className="bg-slate-200 w-full min-h-screen flex flex-col ">
      <header className="bg-blue-950 p-10 flex justify-center">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 ">
          <p className="font-bold text-3xl text-red-700 uppercase">
            El mejor club
          </p>
          <img
            className="w-20"
            src="https://upload.wikimedia.org/wikipedia/en/thumb/4/47/FC_Barcelona_%28crest%29.svg/1200px-FC_Barcelona_%28crest%29.svg.png"
            alt="Escudo del Barcelona"
          />
          <p className="font-bold text-3xl text-red-700 uppercase">
            de todo el mundo
          </p>
        </div>
      </header>
      <div className="flex justify-center flex-grow items-center">
        <Carousel
          plugins={[plugin.current]}
          className="w-full max-w-lg"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent>
            {integrantes.map((item) => (
              <CarouselItem key={item.img} className="basis-3/4">
                <div>
                  <Card>
                    <CardContent className="flex flex-col aspect-square p-2 text-center">
                      <img src={item.img} alt="" />
                      <p className="font-bold text-lg"> {item.title} </p>
                      <p className="font-semibold text-lg">
                        {" "}
                        {item.profession}{" "}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
      <footer className="mt-auto bg-blue-950 p-4 text-center text-white">
        <p>&copy; 2024, Barcelona Team. Todos los derechos reservador</p>
      </footer>
    </div>
  );
}

export default App;
