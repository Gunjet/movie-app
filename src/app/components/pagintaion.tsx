
// 'use client';

// import { usePathname, useSearchParams, useRouter } from "next/navigation";

// export const Pagination = () => {
//     const pathname = usePathname(); 
//     const searchParams = useSearchParams(); 
//     const router = useRouter(); 

//     const onChangePage = (newPage: number) => {
//         const newSearchParams = new URLSearchParams(searchParams.toString());
//         newSearchParams.set('page', newPage.toString());
//         const newUrl = pathname + '?' + newSearchParams.toString(); 
//         router.push(newUrl); 
//     };

//     return (
//         <div className="gap-10 flex">
//             <div
//                 onClick={() => onChangePage(1)}
//                 className="cursor-pointer text-blue-500"
//             >
//                 1
//             </div>
//             <div
//                 onClick={() => onChangePage(10)}
//                 className="cursor-pointer text-blue-500"
//             >
//                 10
//             </div>
//             <div
//                 onClick={() => onChangePage(100)}
//                 className="cursor-pointer text-blue-500"
//             >
//                 100
//             </div>
//         </div>
//     );
// };

"use client";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export const Pagination = ({ totalPages }: { totalPages: number }) => {
  const pathname = usePathname(); 
  const searchParams = useSearchParams(); 
  const router = useRouter(); 

  const [pageRange, setPageRange] = useState<number[]>([]);

  const currentPage = Number(searchParams.get('page') || 1);
  const getVisiblePages = (currentPage: number, totalPages: number) => {
    const pages = [];
    const maxPages = Math.min(500, totalPages);

    let startPage = Math.max(1, currentPage - 2); 
    let endPage = Math.min(maxPages, currentPage + 2);
    if (currentPage <= 3) {
      endPage = Math.min(maxPages, 5);
    } else if (currentPage >= maxPages - 2) {
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }
    return pages;
  };
  useEffect(() => {
    setPageRange(getVisiblePages(currentPage, totalPages));
  }, [currentPage, totalPages]);

  const onChangePage = (newPage: number) => {
    const newParams = new URLSearchParams(searchParams.toString());
    newParams.set("page", newPage.toString());
    router.push(`${pathname}?${newParams.toString()}`);
  };

  return (
    <div className="flex gap-4 mx-10">
      {currentPage > 1 && (
        <div onClick={() => onChangePage(currentPage - 1)} className="cursor-pointer">
          Prev
        </div>
      )}
      {pageRange.map((page) => (
        <div
          key={page}
          onClick={() => onChangePage(page)}
          className={currentPage === page ? "font-semibold text-blue-500" : "cursor-pointer"}
        >
          {page}
        </div>
      ))}
      {currentPage < totalPages && currentPage < 500 && (
        <div onClick={() => onChangePage(currentPage + 1)} className="cursor-pointer">
          Next
        </div>
      )}
    </div>
  );
};
