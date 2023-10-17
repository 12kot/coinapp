import { useMemo, useState } from "react";
import { TSortConfig, TSortKeys } from "types/sort";

const useSort = (items: any) => {
  const [sortConfig, setSortConfig] = useState<TSortConfig>();

  const sortedItems = useMemo(() => {
    if (!sortConfig) return;

    return [...items].sort((a, b) => {
      return sortConfig.isDown
        ? a[sortConfig.key] - b[sortConfig.key]
        : b[sortConfig.key] - a[sortConfig.key];
    });
  }, [items, sortConfig]);

  const requestSort = (key: TSortKeys) => {
    const isDown = sortConfig?.key === key ? !sortConfig.isDown : true;
    setSortConfig({ key, isDown });
  };

  return { items: sortedItems || items, requestSort, sortConfig };
};

export default useSort;
