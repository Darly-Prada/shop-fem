import { useState, useEffect } from "react"
import ItemList from "./ItemList.jsx"
import { useParams } from "react-router-dom"
import { FadeLoader} from "react-spinners"
import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer.jsx"
import {collection, getDocs,query, where} from "firebase/firestore"
import db from "../../db/db.js"
import "./Item.css";


const ItemListContainer = ({saludo}) => {

const [products, setProducts] =useState([])
const [loading, setLoading]= useState(true) //empieza antes del llamado 
const {idCategoria} = useParams()

const collectionName = collection (db, "productos")

const getProducts = async() =>{
  try{
    setLoading(true);  // agregado 
    const dataDb = await getDocs(collectionName)

    const data = dataDb.docs.map((productDb)=> {
      return {id:productDb.id, ...productDb.data()}
    })
    setProducts(data)

  } catch (error){
    console.log(error)
  }
  setLoading(false);  
}
const getProductsByCategory = async() =>{
  try {
    setLoading(true);  
  const question = query (collectionName, where("categoria", "==" , idCategoria))
  const dataDb = await getDocs(question)

  const data = dataDb.docs.map((productDb)=> {
    return {id:productDb.id, ...productDb.data()}
  })

  setProducts(data)

} catch (error){
  console.log(error)
}finally{
  setLoading(false);  
}

}
useEffect(()=> {
  if(idCategoria){
    getProductsByCategory()
  }else{
    getProducts()
  }
setLoading(true) 

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
