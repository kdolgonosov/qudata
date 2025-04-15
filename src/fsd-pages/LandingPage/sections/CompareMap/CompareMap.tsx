"use client";
import { Badge, Button, ContentContainer, Title } from "@/shared/ui";
import World from "@react-map/world";
import React, { useEffect, useRef } from "react";

export const CompareMap = () => {
  // const data = [
  //   { country: "cn", value: 1389618778 }, // china
  //   { country: "in", value: 1311559204 }, // india
  //   { country: "us", value: 331883986 }, // united states
  //   { country: "id", value: 264935824 }, // indonesia
  //   { country: "pk", value: 210797836 }, // pakistan
  //   { country: "br", value: 210301591 }, // brazil
  //   { country: "ng", value: 208679114 }, // nigeria
  //   { country: "bd", value: 161062905 }, // bangladesh
  //   { country: "ru", value: 141944641 }, // russia
  //   { country: "mx", value: 127318112 }, // mexico
  // ];

  const mapRef = useRef<HTMLDivElement | null | null>(null);

  useEffect(() => {
    if (mapRef.current) {
      const paths = mapRef.current.querySelectorAll("path");
      paths.forEach((path) => {
        const defaultStroke = "rgba(98, 98, 98, 1)";
        const defaultWidth = "1";

        path.addEventListener("mouseenter", () => {
          path.setAttribute("stroke", "rgba(66, 84, 255, 1)");
          path.setAttribute("stroke-width", "3");
        });

        path.addEventListener("mouseleave", () => {
          path.setAttribute("stroke", defaultStroke);
          path.setAttribute("stroke-width", defaultWidth);
        });
      });
    }
  }, []);
  return (
    <section className="py-20 max-md:hidden">
      <ContentContainer className="flex flex-col">
        <Badge className="self-center">Карта мира с ценами</Badge>
        <Title component="h2" className="text-h2 leading-[1] text-center mt-8">
          Сравните цены на GPU во всём мире
        </Title>
        <div ref={mapRef} className="flex flex-col items-center my-20">
          <World
            size={1277}
            hoverColor="rgba(72, 72, 74, 1)"
            type="select-single"
            mapColor="rgba(72, 72, 74, 1)"
            strokeColor="rgba(98, 98, 98, 1)"
            selectColor="green"
          />
        </div>
        <Button size="lg" outline withArrow className="w-full mt-22">
          Смотреть все
        </Button>
      </ContentContainer>
    </section>
  );
};
