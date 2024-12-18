import { useState, useEffect } from "react"
import {getProducts} from "../../data/data.js"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom"
import { FadeLoader} from "react-spinners"
import "./Item.css";

const ItemListContainer = ({saludo}) => {
const [products, setProducts] =useState([])
const [loading, setLoading]= useState(false)


const {idCategoria} = useParams()

useEffect(()=> {

  setLoading(true)

    getProducts()
    .then((data)=>{
        if(idCategoria){
          const productsFilter =data.filter((product)=> product.categoria === idCategoria )
           setProducts(productsFilter)
        }else{
          setProducts(data)
        }      
    })   
    .catch((error) =>{
        console.log(error)
    })
    .finally(()=> {
       setLoading(false)
    })
}, [idCategoria]) 
  return (
    <div className="itemlistcontainer">
     <h1>{saludo}</h1>
    {
      loading === true ? (<div className="espiner"><FadeLoader
        color="#a039ef"loading size={200} speedMultiplier={1} /></div>): (<ItemList products={products}/>)
    }
    </div>

  )
}
export default ItemListContainer
