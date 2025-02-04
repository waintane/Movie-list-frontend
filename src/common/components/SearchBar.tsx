import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function SearchBar({ placeholder }: { placeholder: string }) {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  const handleSubmit = (e: string) => {
    setSearch(e);
    navigate(`/?filter=${e}`);
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input
          placeholder={placeholder}
          type="text"
          value={search}
          onChange={(e) => handleSubmit(e.target.value)}
        />
      </form>
    </div>
  );
}
