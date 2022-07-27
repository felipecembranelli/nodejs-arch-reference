import { useCallback, useEffect, useState } from "react";

import {
  httpGetAllProducts,
} from './requests-eShop';

function useCatalog(onSuccessSound, onAbortSound, onFailureSound) {
  // const [launches, saveLaunches] = useState([]);
  // const [isPendingLaunch, setPendingLaunch] = useState(false);

  const getCatalog = useCallback(async () => {
    const fetchedCatalog = await httpGetAllProducts();
    // saveLaunches(fetchedLaunches);
  }, []);

  useEffect(() => {
    getCatalog();
  }, [getCatalog]);
}
  
export default useCatalog;