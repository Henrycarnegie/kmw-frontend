"use client";

import TextInput from "./TextInput";
import { SlidersHorizontal } from "lucide-react";
import { useState } from "react";

const Searchbar = () => {
   const [search, setSearch] = useState("");

   return (
      <div className="flex items-center gap-4">
         <TextInput
            placeholder="Search in here..."
            name="global_search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
         />
         <SlidersHorizontal className="size-6" />
      </div>
   );
};

export default Searchbar;
