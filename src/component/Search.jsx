import { useState } from "react";

function Search(props) {
    const [search, setSearch] = useState("")

    const onSearchChange = () => {
        props.onSearchChange(search)
    }

    const searchKeydown = (e) => {
        if (e.key === 'Enter') {
            onSearchChange();
        }
        else if (!isNaN(e.key)) {
            setSearch((prevSearch) => prevSearch + e.key);
        }
    }
    return (
        <>
            <div>
                Cari Article:{" "}
                <input onChange={(e) => setSearch(e.target.value)} onKeyDown={searchKeydown}></input> {" "}
                <button onClick={onSearchChange}>Cari</button>
            </div>
            <small>Ditemukan {props.totalPost} data dengan pencarian kata {search}</small>
        </>
    );
}

export default Search;


