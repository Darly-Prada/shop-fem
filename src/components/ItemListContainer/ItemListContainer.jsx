import { useState, useEffect } from "react"
import {getProducts} from "../../data/data.js"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom"
import "./Item.css";

const ItemListContainer = ({saludo}) => {
const [products, setProducts] =useState([])
const {idCategoria} = useParams()


useEffect(()=> {

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
        console.log("Termina la promesa")
    })
}, [idCategoria]) 
  return (
    <div className="itemlistcontainer">
     <h1>{saludo}</h1>
     <ItemList products={products}/>

    </div>

  )
}
export default ItemListContainer
