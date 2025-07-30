import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import {
  HiLogout,
  HiLogin,
  HiOutlineChevronRight,
  HiOutlineChevronLeft,
} from "react-icons/hi";
import { BiSortAlt2 } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import "./searchbar.css";
import { useStateContext } from "../../contexts/ContextProvider";

import { useNavigate } from 'react-router-dom';

const columnWidths = ["15%", "15%", "20%", "20%", "20%", "12%"];

const customerHeaders = [
  { key: "id", label: "Customer ID" },
  { key: "name", label: "Customer Name" },
  { key: "spend", label: "Annual Spend" },
  { key: "category", label: "Primary Category" },
  { key: "credit_score", label: "Credit Score" },
  { key: "status", label: "Status" },
];
const customerData = [
  {
    id: "CUST001",
    name: "Alice Johnson",
    spend: 12000,
    category: "Travel",
    credit_score: 780,
    status: "Active",
  },
  {
    id: "CUST002",
    name: "Bob Smith",
    spend: 8500,
    category: "Travel",
    credit_score: 715,
    status: "Active",
  },
  {
    id: "CUST003",
    name: "Carol Lee",
    spend: 9400,
    category: "Dining",
    credit_score: 730,
    status: "Active",
  },
  {
    id: "CUST004",
    name: "David Kim",
    spend: 10600,
    category: "Entertainment",
    credit_score: 760,
    status: "Inactive",
  },
  {
    id: "CUST005",
    name: "Eva Green",
    spend: 9900,
    category: "Retail",
    credit_score: 745,
    status: "Active",
  },
  {
    id: "CUST006",
    name: "Frank Moore",
    spend: 11100,
    category: "Travel",
    credit_score: 700,
    status: "Active",
  },
  {
    id: "CUST007",
    name: "Grace Liu",
    spend: 8700,
    category: "Dining",
    credit_score: 720,
    status: "Inactive",
  },
  {
    id: "CUST008",
    name: "Henry Patel",
    spend: 10200,
    category: "Fuel",
    credit_score: 735,
    status: "Active",
  },
  {
    id: "CUST009",
    name: "Ivy Wang",
    spend: 11300,
    category: "Wellness",
    credit_score: 755,
    status: "Active",
  },
  {
    id: "CUST010",
    name: "Jack Brown",
    spend: 9600,
    category: "Entertainment",
    credit_score: 710,
    status: "Active",
  },
  {
    id: "CUST011",
    name: "Karen White",
    spend: 12500,
    category: "Travel",
    credit_score: 800,
    status: "Active",
  },
  {
    id: "CUST012",
    name: "Leo Martinez",
    spend: 10900,
    category: "Travel",
    credit_score: 790,
    status: "Inactive",
  },
  {
    id: "CUST013",
    name: "Mona Singh",
    spend: 9200,
    category: "Dining",
    credit_score: 725,
    status: "Active",
  },
  {
    id: "CUST014",
    name: "Nate Adams",
    spend: 9800,
    category: "Entertainment",
    credit_score: 705,
    status: "Inactive",
  },
  {
    id: "CUST015",
    name: "Olivia Chen",
    spend: 9500,
    category: "Retail",
    credit_score: 740,
    status: "Active",
  },
  {
    id: "CUST016",
    name: "Paul Davis",
    spend: 11700,
    category: "Travel",
    credit_score: 770,
    status: "Active",
  },
  {
    id: "CUST017",
    name: "Quincy Evans",
    spend: 8900,
    category: "Dining",
    credit_score: 710,
    status: "Inactive",
  },
  {
    id: "CUST018",
    name: "Rachel Scott",
    spend: 9800,
    category: "Fuel",
    credit_score: 725,
    status: "Active",
  },
  {
    id: "CUST019",
    name: "Sam Taylor",
    spend: 10000,
    category: "Wellness",
    credit_score: 750,
    status: "Active",
  },
  {
    id: "CUST020",
    name: "Tina Turner",
    spend: 10500,
    category: "Entertainment",
    credit_score: 760,
    status: "Active",
  },
];

const categories = [
  { id: 1, category: "Travel" },
  { id: 2, category: "Dining" },
  { id: 3, category: "Entertainment" },
  { id: 4, category: "Retail" },
  { id: 5, category: "Fuel" },
  { id: 6, category: "Wellness" },
];

function TableView() {
  const [currentPage, setCurrentPage] = useState(1);
  const { isDelete, setIsDelete, selectedCustomerId, setSelectedCustomerId } =
    useStateContext();
  const [inputText, setInputText] = useState("");
  const [selects, setSelects] = useState(5);
  const [selectedCategory, setSelectedCategory] = useState("");

  const [sort, setSort] = useState({
    keyToSort: "name",
    direction: "asc",
  });
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
   const navigate = useNavigate();
  // Fetch data
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(
          "http://localhost:8000/users/get_all_users",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
            credentials: "include",
          }
        );
        if (!response.ok) throw new Error("Network response was not ok");
        const data = await response.json();
        setUsers(data);
        setIsDelete(false);
      } catch (error) {
        setUsers(customerData);
        setError(error);
      }
    };

    fetchUsers();
  }, []);
  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };
  // Event handler to capture the customerID when a row is clicked
  const handleRowClick = (customerID) => {
    console.log("Customer ID:", customerID);
    setSelectedCustomerId(customerID)
    navigate('/customerView')
    // You can add more logic here, such as navigating to a customer detail page or updating state
  };
  let filteredUsers = users;
  if (selectedCategory) {
    // Filter only if a specific category is selected
    filteredUsers = users.filter(
      (el) => el.category.toLowerCase() === selectedCategory.toLowerCase()
    );
  }
  // Sort users if needed
  if (sort.keyToSort) {
    filteredUsers.sort((a, b) => {
      if (sort.direction === "asc") {
        return a[sort.keyToSort] > b[sort.keyToSort] ? 1 : -1;
      }
      return a[sort.keyToSort] < b[sort.keyToSort] ? 1 : -1;
    });
  }

  // Pagination
  const recordsPerPage = selects;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = filteredUsers.slice(firstIndex, lastIndex);
  const npage = Math.ceil(filteredUsers.length / recordsPerPage);

  // Now, `records` contains the paginated, filtered, and sorted users.

  function handleHeaderClick(column) {
    setSort({
      keyToSort: column.key,
      direction: sort.direction === "asc" ? "desc" : "asc",
    });
  }

  // Paging functions
  function prePage() {
    setCurrentPage((prev) => (prev > 1 ? prev - 1 : 1));
  }
  function nextPage() {
    setCurrentPage((prev) => (prev < npage ? prev + 1 : npage));
  }
  function firstPage() {
    setCurrentPage(1);
  }
  function lastPage() {
    setCurrentPage(npage);
  }

  return (
    <div className="w-[160%] h-screen ">
      {/* Search and Title */}
      <div className="flex justify-between p-2 h-70 md:mx-0 relative w-full ">
        <div className="absolute inset-y-0 left-12 w-13  justify-center">
          <div className="">
            <div className="flex justify-between items-center">
              <div>
                <div className="flex " style={{marginLeft:'-30px'}}>
                  <p className="text-3xl font-extrabold tracking-tight text-white">
                    Customers portfolio Overview
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="justify-end absolute w-50 right-0">
          <select
            className="text-black outline-none bg-white dropdown"
            value={selectedCategory}
            onChange={handleCategoryChange}
          >
            <option value="">All Categories</option>
            {categories.map((c) => (
              <option key={c.id} value={c.category}>
                {c.category}
              </option>
            ))}
          </select>
        </div>
      </div>
      {/* Table */}

      <div className="mt-10 rounded-lg shadow">
        <table className="min-w-full divide-y divide-gray-200 border border-gray-600 rounded-lg overflow-hidden">
          <thead className="bg-[#52529a] text-white">
            <tr style={{ height: "55px" }}>
              {customerHeaders.map((column, index) => (
                <th
                  key={column.key}
                  style={{ width: columnWidths[index] }}
                  className="text-left px-4 py-3 font-semibold"
                >
                  <span
                    className="cursor-pointer flex items-center"
                    onClick={() => handleHeaderClick(column)}
                  >
                    {column.label}
                    <BiSortAlt2 className="ml-1 text-gray-400" />
                  </span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {records.map((item) => (
              <tr
                key={item.id}
                className="bg-[#352f6e] text-[#CAD5DF] hover:bg-slate-600 cursor-pointer"
                onClick={() => handleRowClick(item.id)} // Add the click event handler here
              >
                <td className="px-4 py-2 border-b border-gray-600">
                  {item.id}
                </td>
                <td className="px-4 py-2 border-b border-gray-600">
                  {item.name}
                </td>
                <td className="px-4 py-2 border-b border-gray-600">
                  {item.spend}
                </td>
                <td className="px-4 py-2 border-b border-gray-600">
                  {item.category}
                </td>
                <td className="px-4 py-2 border-b border-gray-600">
                  {item.credit_score}
                </td>
                <td className="px-4 py-2 border-b border-gray-600">
                  {item.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-between p-2 md:mx-0 relative w-full">
        <div className="flex ml-10 mt-2">
          <div className="text-white">Items per Page</div>
          <div className="ml-2">
            <select
              value={selects}
              onChange={(e) => setSelects(Number(e.target.value))}
            >
              <option value={5}>5</option>
              <option value={10}>10</option>
              <option value={12}>12</option>
              <option value={15}>15</option>
            </select>
          </div>
        </div>
        <div className="justify-end absolute right-0 mt-2">
          <div className="flex items-center">
            <span className="text-white mr-6 whitespace-nowrap">
              Showing page {currentPage} of {npage}
            </span>
            <button onClick={firstPage} className="mx-2 text-white">
              <HiLogin />
            </button>
            <button onClick={prePage} className="mx-2 text-white">
              <HiOutlineChevronLeft />
            </button>
            <button onClick={nextPage} className="mx-2 text-white">
              <HiOutlineChevronRight />
            </button>
            <button onClick={lastPage} className="mx-2 text-white">
              <HiLogout />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TableView;
