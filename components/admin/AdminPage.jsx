// "use client"
// import React, { use, useState, useEffect } from 'react'
// import { Table, TableHead, TableRow, TableCell, TableBody } from "@/components/ui/table";

// function AdminPage() {
//     const [allUsers, setallUsers] = useState([]);
//     useEffect(() => {
//         const fetchUsers = async () => {
//             try {
//                 const response = await fetch('http://127.0.0.1:3000/users', {
//                     method: 'GET',
//                     headers: {
//                         'Content-Type': 'application/json'
//                     }
//                 });
//                 const data = await response.json();
//                 console.log(data);
//                 setallUsers(data);
//             } catch (error) {
//                 console.error('Error in API call:', error);
//             }
//         };

//         fetchUsers();
//     }, []);
//   return (
//     <div><Table>
//     <TableHead>
//       <TableRow>
//         <TableCell>Name</TableCell>
//         <TableCell>Email</TableCell>
//         <TableCell>Role</TableCell>
//       </TableRow>
//     </TableHead>
//     <TableBody>
//       {allUsers.map((user) => (
//         <TableRow key={user.id}>
//           <TableCell>{user.name}</TableCell>
//           <TableCell>{user.email}</TableCell>
//           <TableCell>{user.role}</TableCell>
//         </TableRow>
//       ))}
//     </TableBody>
//   </Table>

//     </div>
//   )
// }

// export default AdminPage

"use client";

import React, { useEffect, useState } from "react";
import { useReactTable, getCoreRowModel, getPaginationRowModel, getSortedRowModel, getFilteredRowModel, flexRender } from "@tanstack/react-table";
import { Table, TableHead, TableRow, TableCell, TableBody } from "@/components/ui/table";
import { Button } from "@/components/ui/button";

function AdminPage() {
    const [allUsers, setAllUsers] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch("http://127.0.0.1:3000/users", {
                    method: "GET",
                    headers: { "Content-Type": "application/json" }
                });
                const data = await response.json();
                setAllUsers(data);
            } catch (error) {
                console.error("Error in API call:", error);
            }
        };

        fetchUsers();
    }, []);

    // Define Table Columns
    const columns = [
        {
            accessorKey: "name",
            header: "Name",
            cell: (info) => info.getValue(),
        },
        {
            accessorKey: "email",
            header: "Email",
            cell: (info) => info.getValue(),
        },
        {
            accessorKey: "role",
            header: "Role",
            cell: (info) => info.getValue(),
        }
    ];

    // Initialize Table Instance
    const table = useReactTable({
        data: allUsers,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        state: {
            globalFilter: searchTerm,
        },
        onGlobalFilterChange: setSearchTerm,
    });

    return (
        <div className="p-4 ">
            {/* 🔍 Search Bar */}
            <input
                type="text"
                placeholder="Search users..."
                className="mb-4 p-2 border rounded w-full"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />

            {/* 📊 Table */}
            <Table>
                <TableHead >
                    {table.getHeaderGroups().map((headerGroup) => (
                        <TableRow key={headerGroup.id} className="bg-gray-100">
                            {headerGroup.headers.map((header) => (
                                <TableCell
                                    key={header.id}
                                    className="px-6 py-3 font-semibold text-left border border-gray-300"
                                    style={{ width: header.getSize() ?? "auto" }}
                                    onClick={header.column.getToggleSortingHandler()}
                                >
                                    {flexRender(header.column.columnDef.header, header.getContext())}
                                    {header.column.getIsSorted() === "asc" ? " 🔼" : header.column.getIsSorted() === "desc" ? " 🔽" : ""}
                                </TableCell>
                            ))}
                        </TableRow>
                    ))}
                </TableHead>
                <TableBody>
                    {table.getRowModel().rows.map((row) => (
                        <TableRow key={row.id} className="even:bg-gray-50">
                            {row.getVisibleCells().map((cell) => (
                                <TableCell key={cell.id} className="px-6 py-3 border border-gray-300">
                                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                </TableCell>
                            ))}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>

            {/* 📄 Pagination Controls */}
            <div className="flex justify-between mt-4">
                <button
                    className="p-2 border rounded disabled:opacity-50"
                    onClick={() => table.previousPage()}
                    disabled={!table.getCanPreviousPage()}
                >
                    ⬅ Previous
                </button>
                <span>
                    Page {table.getState().pagination.pageIndex + 1} of {table.getPageCount()}
                </span>
                <button
                    className="p-2 border rounded disabled:opacity-50"
                    onClick={() => table.nextPage()}
                    disabled={!table.getCanNextPage()}
                >
                    Next ➡
                </button>
            </div>
        </div>
    );
}

export default AdminPage;

// "use client";

// import React, { useState, useEffect } from "react";
// import {
//   useReactTable,
//   getCoreRowModel,
//   getPaginationRowModel,
//   getSortedRowModel,
//   getFilteredRowModel,
//   getVisibilityModel,
//   flexRender,
// } from "@tanstack/react-table";
// import { Table, TableHead, TableRow, TableCell, TableBody } from "@/components/ui/table";
// import { Checkbox } from "@/components/ui/checkbox";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuCheckboxItem } from "@/components/ui/dropdown-menu";

// function AdminPage() {
//   const [data, setData] = useState([]);
//   const [globalFilter, setGlobalFilter] = useState("");

//   useEffect(() => {
//     // Fetch user data
//     const fetchUsers = async () => {
//       try {
//         const response = await fetch("/api/users", { method: "POST", headers: { "Content-Type": "application/json" } });
//         const result = await response.json();
//         setData(result);
//       } catch (error) {
//         console.error("Error fetching users:", error);
//       }
//     };

//     fetchUsers();
//   }, []);

//   // Table columns
//   const columns = [
//     {
//       id: "select",
//       header: ({ table }) => (
//         <Checkbox
//           checked={table.getIsAllRowsSelected()}
//           onCheckedChange={(value) => table.toggleAllRowsSelected(!!value)}
//         />
//       ),
//       cell: ({ row }) => (
//         <Checkbox checked={row.getIsSelected()} onCheckedChange={(value) => row.toggleSelected(!!value)} />
//       ),
//     },
//     {
//       accessorKey: "status",
//       header: "Status",
//       cell: (info) => info.getValue(),
//     },
//     {
//       accessorKey: "email",
//       header: "Email",
//       cell: (info) => info.getValue(),
//     },
//     {
//       accessorKey: "amount",
//       header: "Amount",
//       cell: (info) => `$${info.getValue()}`,
//     },
//   ];

//   const table = useReactTable({
//     data,
//     columns,
//     getCoreRowModel: getCoreRowModel(),
//     getPaginationRowModel: getPaginationRowModel(),
//     getSortedRowModel: getSortedRowModel(),
//     getFilteredRowModel: getFilteredRowModel(),
//     getVisibilityModel: getVisibilityModel(),
//     state: {
//       globalFilter,
//     },
//     onGlobalFilterChange: setGlobalFilter,
//   });

//   return (
//     <div className="p-4">
//       {/* 🔍 Search Filter & Column Visibility Dropdown */}
//       <div className="flex justify-between mb-4">
//         <Input
//           placeholder="Filter emails..."
//           value={globalFilter}
//           onChange={(e) => setGlobalFilter(e.target.value)}
//           className="w-1/3"
//         />
//         <DropdownMenu>
//           <DropdownMenuTrigger asChild>
//             <Button variant="outline">Columns ▼</Button>
//           </DropdownMenuTrigger>
//           <DropdownMenuContent align="end">
//             {table.getAllColumns().map((column) => (
//               <DropdownMenuCheckboxItem
//                 key={column.id}
//                 checked={column.getIsVisible()}
//                 onCheckedChange={() => column.toggleVisibility()}
//               >
//                 {column.id}
//               </DropdownMenuCheckboxItem>
//             ))}
//           </DropdownMenuContent>
//         </DropdownMenu>
//       </div>

//       {/* 📊 Table */}
//       <Table>
//         <TableHead>
//           {table.getHeaderGroups().map((headerGroup) => (
//             <TableRow key={headerGroup.id}>
//               {headerGroup.headers.map((header) => (
//                 <TableCell key={header.id} className="font-semibold">
//                   {flexRender(header.column.columnDef.header, header.getContext())}
//                 </TableCell>
//               ))}
//             </TableRow>
//           ))}
//         </TableHead>
//         <TableBody>
//           {table.getRowModel().rows.map((row) => (
//             <TableRow key={row.id}>
//               {row.getVisibleCells().map((cell) => (
//                 <TableCell key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</TableCell>
//               ))}
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>

//       {/* 📄 Pagination */}
//       <div className="flex justify-between items-center mt-4">
//         <span>{table.getState().rowSelection.length} of {data.length} row(s) selected.</span>
//         <div className="flex space-x-2">
//           <Button variant="outline" disabled={!table.getCanPreviousPage()} onClick={() => table.previousPage()}>
//             Previous
//           </Button>
//           <Button variant="outline" disabled={!table.getCanNextPage()} onClick={() => table.nextPage()}>
//             Next
//           </Button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default AdminPage;



// "use client";

// import React, { useState, useEffect } from "react";
// import {
//   ColumnDef,
//   ColumnFiltersState,
//   SortingState,
//   VisibilityState,
//   flexRender,
//   getCoreRowModel,
//   getFilteredRowModel,
//   getPaginationRowModel,
//   getSortedRowModel,
//   useReactTable,
// } from "@tanstack/react-table";

// import {
//   Table,
//   TableHead,
//   TableRow,
//   TableCell,
//   TableBody,
// } from "@/components/ui/table";
// import { Checkbox } from "@/components/ui/checkbox";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import {
//   DropdownMenu,
//   DropdownMenuTrigger,
//   DropdownMenuContent,
//   DropdownMenuCheckboxItem,
// } from "@/components/ui/dropdown-menu";

// function AdminPage() {
//   const [data, setData] = useState([]);
//   const [globalFilter, setGlobalFilter] = useState("");
//   const [sorting, setSorting] = useState(""); // Sorting state

//   useEffect(() => {
//     // Fetch user data
//     const fetchUsers = async () => {
//       try {
//         const response = await fetch("http://127.0.0.1:3000/users", {
//           method: "Get",
//           headers: { "Content-Type": "application/json" },
//         });
//         const result = await response.json();
//         setData(result);
//       } catch (error) {
//         console.error("Error fetching users:", error);
//       }
//     };

//     fetchUsers();
//   }, []);

//   // Table columns
//   const columns = [
//     {
//       id: "select",
//       header: ({ table }) => (
//         <Checkbox
//           checked={table.getIsAllRowsSelected()}
//           onCheckedChange={(value) => table.toggleAllRowsSelected(!!value)}
//         />
//       ),
//       cell: ({ row }) => (
//         <Checkbox
//           checked={row.getIsSelected()}
//           onCheckedChange={(value) => row.toggleSelected(!!value)}
//         />
//       ),
//     },
//     {
//       accessorKey: "name",
//       header: "Name",
//       cell: (info) => info.getValue(),
//     },
//     {
//       accessorKey: "email",
//       header: "Email",
//       cell: (info) => info.getValue(),
//     },
//     {
//       accessorKey: "role",
//       header: "Role",
//       cell: (info) => `${info.getValue()}`,
//     },
//   ];

//   const table = useReactTable({
//     data,
//     columns,
//     onSortingChange: setSorting,
//     getCoreRowModel: getCoreRowModel(),
//     getPaginationRowModel: getPaginationRowModel(),
//     getSortedRowModel: getSortedRowModel(),
//     getFilteredRowModel: getFilteredRowModel(),
//     // getVisibilityModel: getVisibilityModel(),
//     state: {
//       globalFilter,
//     },
//     onGlobalFilterChange: setGlobalFilter,
//   });

//   return (
//     <div className="p-4">
//       {/* 🔍 Search Filter & Column Visibility Dropdown */}
//       <div className="flex justify-between mb-4">
//         <Input
//           placeholder="Filter emails..."
//           value={globalFilter}
//           onChange={(e) => setGlobalFilter(e.target.value)}
//           className="w-1/3"
//         />
//         <DropdownMenu>
//           <DropdownMenuTrigger asChild>
//             <Button variant="outline">Columns ▼</Button>
//           </DropdownMenuTrigger>
//           <DropdownMenuContent align="end">
//             {table.getAllColumns().map((column) => (
//               <DropdownMenuCheckboxItem
//                 key={column.id}
//                 checked={column.getIsVisible()}
//                 onCheckedChange={() => column.toggleVisibility()}
//               >
//                 {column.id}
//               </DropdownMenuCheckboxItem>
//             ))}
//           </DropdownMenuContent>
//         </DropdownMenu>
//       </div>

//       {/* 📊 Table */}
//       <Table>
//         <TableHead>
//           {table.getHeaderGroups().map((headerGroup) => (
//             <TableRow key={headerGroup.id}>
//               {headerGroup.headers.map((header) => (
//                 <TableCell key={header.id} className="font-semibold">
//                   {flexRender(
//                     header.column.columnDef.header,
//                     header.getContext()
//                   )}
//                 </TableCell>
//               ))}
//             </TableRow>
//           ))}
//         </TableHead>
//         <TableBody>
//           {table.getRowModel().rows.map((row) => (
//             <TableRow key={row.id}>
//               {row.getVisibleCells().map((cell) => (
//                 <TableCell key={cell.id}>
//                   {flexRender(cell.column.columnDef.cell, cell.getContext())}
//                 </TableCell>
//               ))}
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>

//       {/* 📄 Pagination */}
//       <div className="flex justify-between items-center mt-4">
//         <span>
//           {table.getState().rowSelection.length} of {data.length} row(s)
//           selected.
//         </span>
//         <div className="flex space-x-2">
//           <Button
//             variant="outline"
//             disabled={!table.getCanPreviousPage()}
//             onClick={() => table.previousPage()}
//           >
//             Previous
//           </Button>
//           <Button
//             variant="outline"
//             disabled={!table.getCanNextPage()}
//             onClick={() => table.nextPage()}
//           >
//             Next
//           </Button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default AdminPage;
