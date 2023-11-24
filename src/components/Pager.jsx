import { useState } from "react";

export function Pager() {
  //Paginador
  const [page, setPage] = useState(1);

  //Manejadores de paginador
  const HandleIncrementPage = () => {
    setPage(page + 1);
  };

  const HandleDecrementPage = () => {
    setPage(page > 1 ? page - 1 : page);
  };

  return <></>;
}
