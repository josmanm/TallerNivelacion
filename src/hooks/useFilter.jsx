import { useState } from "react";

const useFilter = (initalValue= {}) => {
    const [filters, setFilters] = useState(initalValue);
    const [booksFiltered, setBooksFiltered] = useState([]);
    const [responseFilter, setResponseFilter] = useState('');
    const handleFilter = (event,productsList,) =>{
        const { name, value } = event.target;
        const filtersParams = {
            ...filters,
            [name]: value
        }
        let filtered = [...productsList];
        for (const key in filtersParams) {
            if(filtersParams[key]){
                const filteredResult = !isNaN(filtersParams[key]) ? filtered.filter(item=> item[key] <= filtersParams[key]) : filtered.filter(item => item[key] == filtersParams[key])
                filtered = [...filteredResult];
            }
        }

        setFilters(filtersParams);
        setBooksFiltered(filtered);
        setResponseFilter(()=>filtered.length?'': 'No se encontraron resultados')
    }

    return {filters,booksFiltered,responseFilter,handleFilter}
}

export default useFilter;