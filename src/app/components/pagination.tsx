
// "use client";

// import { usePathname, useRouter, useSearchParams } from "next/navigation";

// export type PageInfo = {
//   currentPage: number;
//   totalPages: number;
// };

// const getVisiblePages = (currentPage: number, ) => {
//   if (currentPage < 3) {
//     return [1, 2, 3, 4, 5];
//   }
//   return [
//     currentPage - 2,
//     currentPage - 1,
//     currentPage,
//     currentPage + 1,
//     currentPage + 2,
//   ];
// };

// export const PaginationControls = ({ pageInfo }: { pageInfo: PageInfo }) => {
//   const searchParams = useSearchParams();
//   const page = searchParams.get("page") || 1;
//   const pathname = usePathname();
//   const router = useRouter();

//   let newArray = [];
//   for (let i = Number(page) + 1; i < Number(page) + 10; i++) {
//     newArray.push(i);
//   }

//   const onChangePage = (newPage: number) => {
//     const newParams = new URLSearchParams(searchParams.toString());
//     newParams.set("page", newPage.toString());
//     router.push(`${pathname}?${newParams.toString()}`);
//   };

//   const lastPage = pageInfo.totalPages > 500 ? 500 : pageInfo.totalPages;
//   const visiblePages = getVisiblePages(pageInfo.currentPage,);

//   return (
//     <div className="flex gap-10 mx-10 cursor-pointer">
//       {pageInfo.currentPage > 1 && (
//         <div onClick={() => onChangePage(pageInfo.currentPage - 1)}>Prev</div>
//       )}
//       {visiblePages.map((page) => (
//         <div
//           onClick={() => onChangePage(page)}
//           className={pageInfo.currentPage === page ? "font-semibold" : ""}
//           key={page}
//         >
//           {page}
//         </div>
//       ))}
//       ...
//       <div onClick={() => onChangePage(lastPage)}>{lastPage}</div>
//       {pageInfo.currentPage < lastPage && (
//         <div onClick={() => onChangePage(pageInfo.currentPage + 1)}>Next</div>
//       )}
//     </div>
//   );
// };


'use client';

import { usePathname, useSearchParams, useRouter } from "next/navigation";

export type PageInfo = {
  currentPage: number;
  totalPages: number;
};

const getVisiblePages = (currentPage: number, totalPages: number) => {
  const pages = [];
  const maxPages = Math.min(500, totalPages); 

  let startPage = Math.max(1, currentPage - 2); 
  let endPage = Math.min(maxPages, currentPage + 2); 
  if (currentPage <= 3) {
    endPage = Math.min(maxPages, 5);
  } else if (currentPage >= maxPages - 2) {
    startPage = Math.max(1, maxPages - 5);
  }

  for (let i = startPage; i <= endPage; i++) {
    pages.push(i);
  }
  return pages;
};

export const PaginationControls = ({ pageInfo }: { pageInfo: PageInfo }) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const onChangePage = (newPage: number) => {
    const newParams = new URLSearchParams(searchParams.toString());
    newParams.set('page', newPage.toString()); 
    router.push(`${pathname}?${newParams.toString()}`); 
  };

  const visiblePages = getVisiblePages(pageInfo.currentPage, pageInfo.totalPages);

  return (
    <div className="flex gap-4 mx-10">
      {pageInfo.currentPage > 1 && (
        <div onClick={() => onChangePage(pageInfo.currentPage - 1)} className="cursor-pointer">
          Prev
        </div>
      )}
      {visiblePages.map((page) => (
        <div
          key={page}
          onClick={() => onChangePage(page)}
          className={pageInfo.currentPage === page ? "font-semibold text-blue-500" : "cursor-pointer"}
        >
          {page}
        </div>
      ))}
      {pageInfo.currentPage < pageInfo.totalPages && pageInfo.currentPage < 500 && (
        <div onClick={() => onChangePage(pageInfo.currentPage + 1)} className="cursor-pointer">
          Next
        </div>
      )}
    </div>
  );
};
