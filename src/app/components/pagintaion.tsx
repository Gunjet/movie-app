// 'use client';

// import { usePathname, useSearchParams, useRouter } from "next/navigation";

// export const Pagintaion = ({}) => {
//     const pathname = usePathname
//     const searchParams = useSearchParams
//     const router = useRouter 

//     const onChange = (newPage: number) => {
//         const newSearchParams = new URLSearchParams(searchParams.toString())
//         newSearchParams.set('page', newPage.toString());
//         const newUrl = pathname + '?' + newSearchParams.toString();
//         router.push(newUrl)
//     }
//     return(
//         <div className='gap-10 flex'>
//           <div onClick={() => onChangePage(1)}>1</div>
//           <div onClick={() => onChangePage(10)}>10</div>
//           <div onClick={() => onChangePage(100)}>100</div>
//         </div>
//     )
// }


'use client';

import { usePathname, useSearchParams, useRouter } from "next/navigation";

export const Pagination = () => {
    const pathname = usePathname(); 
    const searchParams = useSearchParams(); 
    const router = useRouter(); 

    const onChangePage = (newPage: number) => {
        const newSearchParams = new URLSearchParams(searchParams.toString());
        newSearchParams.set('page', newPage.toString());
        const newUrl = pathname + '?' + newSearchParams.toString(); 
        router.push(newUrl); 
    };

    return (
        <div className="gap-10 flex">
            <div
                onClick={() => onChangePage(1)}
                className="cursor-pointer text-blue-500"
            >
                1
            </div>
            <div
                onClick={() => onChangePage(10)}
                className="cursor-pointer text-blue-500"
            >
                10
            </div>
            <div
                onClick={() => onChangePage(100)}
                className="cursor-pointer text-blue-500"
            >
                100
            </div>
        </div>
    );
};
