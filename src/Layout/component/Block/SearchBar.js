import React, {useEffect} from 'react';

// style
import './style/SearchBar.scss';

export default function UserSection({searchBar})
{
    const search = document.getElementById("searchBar");
    useEffect(() => {
        search?.addEventListener("click", (e) => {
            e.stopPropagation();
        });
    }, [searchBar, search]);

    return(
        <div className={searchBar ? "d-block" : "d-none"} id="searchBar">
            <input type="text" placeholder="Search..."/>
        </div>
    );
}