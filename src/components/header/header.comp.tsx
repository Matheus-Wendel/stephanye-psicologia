import { useState } from "react";

const Header = ({
  externalActual = 1,
  setExternalActual = (value: any) => {},
}) => {
  const [actual, setActual] = useState<number | null>(1);

  const ITEMS = [
    { order: 1, name: "Início", accent: false, id: "start" },
    { order: 2, name: "Sobre", accent: false, id: "about" },
    { order: 3, name: "Atendimento", accent: false, id: "treatment" },
  ];

  return (
    <div className="w-full  p-2 sticky top-0 z-50" style={{ height: "7dvh" }}>
      <div className="bg-primary h-[54px] rounded-md w-full md:h-full flex items-center justify-between pr-2">
        <div
          onClick={() => {
            document.getElementById("start")?.scrollIntoView();
          }}
          className="p-2"
        >
          <div className="p-3">
            <p className="text-white">SL</p>
          </div>
        </div>
        <div className="flex h-full gap-4">
          {ITEMS.map((headerItem) => {
            return (
              <div
                onClick={() => {
                  setActual(headerItem.order);
                  document.getElementById(headerItem.id)?.scrollIntoView();
                  setExternalActual(headerItem.order);
                }}
                className={`h-full flex items-center justify-center md:pl-3  ${headerItem.order === 3 ? "pr-3" : "md:pr-3"}`}
                key={`menu_item_${headerItem.order}`}
              >
                <p className="tracking-wider text-white cursor-pointer">
                  {headerItem.name}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Header;
