import db from "../db/db.js";
import { collection, addDoc } from "firebase/firestore";

const products = [
    {
        id: "clt001",
        nombre:"Vestido Fiesta",
        imagen: "/img/vestido1.webp",
        precio: 34500,
        descripcion:"Un vestido sofisticado que destaca por su diseño atemporal y delicado. Con detalles como bordados, encajes o telas fluidas. Resalta la elegancia natural de quien lo lleva ",
        categoria: "ropa",
        stock: 12,
    },
    {
        id: "clt002",
        nombre:"Vestido Ocasional",
        imagen: "/img/vestido2.jpg",
        precio: 36500,
        descripcion:"Un vestido sofisticado que destaca por su diseño atemporal y delicado. Con detalles como bordados, encajes o telas fluidas. Resalta la elegancia natural de quien lo lleva en cualquier ocasión ",
        categoria: "ropa",
        stock: 6,
    },
    {
        id: "clt003",
        nombre:"Abrigo light",
        imagen: "/img/abrigo1.jpg",
        precio: 45000,
        descripcion:"Un abrigo se convierte en una prenda clave para un look chic durante la temporada de frío, ideal para ocasiones formales o para dar un toque elegante a un conjunto casual.",
        categoria: "ropa",
        stock: 8,
    },
    {
        id: "clt004",
        nombre:"Abrigo Dark",
        imagen: "/img/abrigo4.jpg",
        precio: 45000,
        descripcion:"Un abrigo se convierte en una prenda clave para un look chic durante la temporada de frío, ideal para ocasiones formales o para dar un toque elegante a un conjunto casual.",
        categoria: "ropa",
        stock: 8,
    },
    {
        id: "clt005",
        nombre:"Blusa Formal",
        imagen: "/img/blusa1.jpg", 
        precio: 32500,
        descripcion:"Una blusa refinada, diseñada con materiales ligeros y cómodos, como seda o satén. Con detalles sutiles como mangas largas de volantes, Perfecta para combinarlas con faldas, pantalones de vestir o incluso bajo un blazer para un look profesional.",
        categoria: "ropa",
        stock: 6,
    },
    {
        id: "clt006",
        nombre:"Blusa Color",
        imagen: "/img/blusa5.webp", 
        precio: 32500,
        descripcion:"Una blusa refinada, diseñada con materiales ligeros y cómodos, como seda o satén. Con detalles sutiles como mangas largas de volantes, Perfecta para combinarlas con faldas, pantalones de vestir o incluso bajo un blazer para un look profesional.",
        categoria: "ropa",
        stock: 6,
    },
    {
        id: "clt007",
        nombre:"Falda Clásica",
        imagen: "/img/falda1.jpg", 
        precio: 21500,
        descripcion:"Falda de corte impecable, que puede variar desde una falda lápiz ajustada hasta una falda plisada fluida. Hecha con telas como el terciopelo, seda o lino, esta pieza aporta feminidad y clase, perfecta para eventos formales o cenas elegantes. Puede combinarse con blusas o tops ajustados, y un par de tacones para un acabado refinado.",
        categoria: "ropa",
        stock: 6,
    },
    {
        id: "clt008",
        nombre:"Falda Elegante",
        imagen: "/img/falda3.jpg", 
        precio: 21500,
        descripcion:"Falda de corte impecable, que puede variar desde una falda lápiz ajustada hasta una falda plisada fluida. Hecha con telas como el terciopelo, seda o lino, esta pieza aporta feminidad y clase, perfecta para eventos formales o cenas elegantes. Puede combinarse con blusas o tops ajustados, y un par de tacones para un acabado refinado.",
        categoria: "ropa",
        stock: 4,
    },
    {
        id: "clt009",
        nombre:"Pantalón",
        imagen: "/img/pantalon1.webp", 
        precio: 27500,
        descripcion:"Pantalon elegancia y comodidad; Su diseño estructurado permite que sea ideal tanto para el trabajo como para eventos informales, proporcionando una silueta elegante y estilizada. Combina fácilmente con blusas, chaquetas y zapatos de tacón o zapatillas.",
        categoria: "ropa",
        stock: 3,
    },
    {
        id: "sh010",
        nombre:"Tacón Sensual",
        imagen: "/img/tacon1.avif",
        precio: 37500,
        descripcion:" Tacon que combina lo mejor de ambos mundos: estilo y confort. Con un diseño sofisticado y detalles refinados, su versatilidad permite combinarlos con vestidos, faldas o pantalones, adaptándose a diversas ocasiones.",
        categoria: "zapatos",
        stock: 10,
    }, 
    {
        id: "sh011",
        nombre:"Tacón Sensual Oscuro",
        imagen: "/img/tacon2.jpg",
        precio: 36500,
        descripcion:" Tacon que combina lo mejor de ambos mundos: estilo y confort. Con un diseño sofisticado y detalles refinados, su versatilidad permite combinarlos con vestidos, faldas o pantalones, adaptándose a diversas ocasiones.",
        categoria: "zapatos",
        stock: 10,
    }, 
    {
        id: "sh012",
        nombre:"Tacón Sensual Rojo",
        imagen: "/img/tacon4.jpg",
        precio: 37500,
        descripcion:" Tacon que combina lo mejor de ambos mundos: estilo y confort. Con un diseño sofisticado y detalles refinados, su versatilidad permite combinarlos con vestidos, faldas o pantalones, adaptándose a diversas ocasiones.",
        categoria: "zapatos",
        stock: 4,
    }, 
    {
        id: "sh013",
        nombre:"Sandalia Femeni",
        imagen: "/img/sandal2.png",
        precio: 26500,
        descripcion:"Elegancia y comodidad incorporan tecnologías como plantillas acolchonadas, suelas antideslizantes y un tacón más ancho o de altura moderada para garantizar estabilidad. Son perfectos para quienes desean lucir elegantes en eventos formales, reuniones o cenas sin sacrificar comodidad",
        categoria: "zapatos",
        stock: 5,
    },
    {
        id: "sh014",
        nombre:"Sandalia Plataforma",
        imagen: "/img/sandal5.jpg",
        precio: 26500,
        descripcion:"Elegancia y comodidad incorporan tecnologías como plantillas acolchonadas, suelas antideslizantes y un tacón más ancho o de altura moderada para garantizar estabilidad. Son perfectos para quienes desean lucir elegantes en eventos formales, reuniones o cenas sin sacrificar comodidad",
        categoria: "zapatos",
        stock: 4,
    },
    {
        id: "acs015",
        nombre:"Collar Diamantes",
        imagen: "/img/collar1.jpeg",
        precio: 44500,
        descripcion:"Un collar impresionante que eleva cualquier conjunto a un nivel de sofisticación y lujo. Con piedras preciosas, con “Glamur y altura” se convierte en el punto focal de cualquier atuendo, aportando un toque de opulencia y refinamiento. ",
        categoria: "accesorios",
        stock: 8,
    },
    {
        id: "acs016",
        nombre:"Collar Piedras Plata",
        imagen: "/img/collar4.webp",
        precio: 44500,
        descripcion:"Un collar impresionante que eleva cualquier conjunto a un nivel de sofisticación y lujo. Con piedras preciosas, con “Glamur y altura” se convierte en el punto focal de cualquier atuendo, aportando un toque de opulencia y refinamiento. ",
        categoria: "accesorios",
        stock: 6,
    },
 
    {
        id: "acs017",
        nombre:"Anillo Diamante",
        imagen: "/img/anillo1.jpg",
        precio: 32500,
        descripcion:"Un anillo deslumbrante diseñado para captar todas las miradas, que combina lujo y sofisticación en cada detalle. Con una piedra central de gran tamaño, como un diamante, zafiro o esmeralda, o una serie de cristales facetados, Perfecto para ocasiones especiales como bodas, galas o celebraciones formales, este anillo no solo se convierte en un accesorio de alto impacto, sino también en una pieza atemporal de lujo.",
        categoria: "accesorios",
        stock: 2,
    },
    {
        id: "acs018",
        nombre:"Anillo Oro",
        imagen: "/img/anillo2.jpg",
        precio: 32500,
        descripcion:"Un anillo deslumbrante diseñado para captar todas las miradas, que combina lujo y sofisticación en cada detalle. Con una piedra central de gran tamaño, como un diamante, zafiro o esmeralda, o una serie de cristales facetados, Perfecto para ocasiones especiales como bodas, galas o celebraciones formales, este anillo no solo se convierte en un accesorio de alto impacto, sino también en una pieza atemporal de lujo.",
        categoria: "accesorios",
        stock: 4,
    },
    {
        id: "acs019",
        nombre:"Aretes Esplendor",
        imagen:"/img/aretes1.jpg",
        precio:42500,
        descripcion:"Un par de aretes diseñados para resaltar y aportar sofisticación a cualquier look. Dando un toque de lujo y distinción",
        categoria: "accesorios",
        stock: 4,
    },
    {
        id: "acs020",
        nombre:"Aretes Cobra",
        imagen:"/img/aretes3.jpeg",
        precio:42500,
        descripcion:"Un par de aretes diseñados para resaltar y aportar sofisticación a cualquier look. Dando un toque de lujo y distinción",
        categoria: "accesorios",
        stock: 4,
    },
]

const seedProducts = async() => 
    {
        try {
            const productosRef = collection(db, "productos")
            products.map( async({id, ...dataProductos})=>{
                await addDoc (productosRef,  dataProductos)
            })
            
            console.log("Productos subidos correctamente")
        } catch (error) {
            console.log(error)
            
        }
    }
        seedProducts()
