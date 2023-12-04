import useFilter from '../hooks/useFilter';
import { getProducts } from '../services/productsServices'
import Card from '../components/card'
import { useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom';
import { replaceSpacesWithHyphen } from '../utils/stringsUtils';


const MisProductos = () => {
  const [productos, setProductos] = useState([]);
  const {filters,booksFiltered,responseFilter,handleFilter} = useFilter();
  const [categories, setCategories] = useState([]);
  const [rating, setRating] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getProducts().then((data) => {
      setProductos(data)
      const categoriesList = getCategories(data);
      setCategories(categoriesList);
      const ratingList = getRating(data);
      setRating(ratingList);
    })
  }, [])
  useEffect(() => {
    console.log(productos);
  }, [productos]);

    //Funcion que permite extraer las categorias de los libros
    const getCategories = (produclist) => {
      const categoryList = produclist.map((item) => item.category);
      const categoryItems = new Set(categoryList);
      return [...categoryItems];
  }

  const getRating = (produclist) => {
      const ratingList = produclist.map((item) => item.rating);
      const ratingItems = new Set(ratingList);
      return [...ratingItems];
  }

  const onFilter = (event) => handleFilter(event,productos);

  const navigateToBooksDetails = (bookName) => {
    const dinamicParam = replaceSpacesWithHyphen(bookName);
    navigate(dinamicParam);
}

  return (
    <main>
      <section className='filtersContainer'>
        <div>
          <label > Fitrlar Por Categoria</label>
          <select name='category' onChange={onFilter} value={filters.category} >
            <option value=''>Todas</option>
            {
              categories.length ? categories.map((item, index) => <option key={index} value={item}>{item}</option>) : <option value={''}>Cargando</option>
            }
          </select>
        </div>
        <div>
          <label > Fitrlar Por rating</label>
          <select name='rating' onChange={onFilter} value={filters.rating} >
            <option value=''>Todas</option>
            {
              rating.length ? rating.map((item, index) => <option key={index} value={item}>{item}</option>) : <option value={''}>Cargando</option>
            }
          </select>
        </div>
      </section>
      {
        responseFilter && <h2>{responseFilter}</h2>
      }
      <section className='sectionProducts'>
      {
                booksFiltered.length? booksFiltered.map((item, index) => <figure key={index}>
                      <Card product={item} navigate={navigateToBooksDetails} />
                    </figure>):
                productos.length  ? productos.map((item, index) =><figure key={index}>
                       <Card product={item} navigate={navigateToBooksDetails} />
                </figure>):<div>...Cargando</div>
      }
      </section>
      <Outlet/>
    </main>
  )
}

export default MisProductos
