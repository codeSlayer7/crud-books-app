import  { useState,useEffect} from "react"; 
import axios from "axios";
import { Link } from "react-router-dom";



const EditBook = ()=>{
    // const {id}=useParams()
    // const [book,setBook]= useState({});
  
    // useEffect( ()=>{  
    //     try {
    //     axios.get(`http://localhost:4000/books/${id}`)
    //     .then( res => setBook(res.data))

    //     } catch (error) {
    //       console.log("Тут ошибка", error.message);
    //     }
      
    // }, [id])
    // console.log(book)

    const [id, setID] = useState(null);
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    console.log(title)
    useEffect(() => {
        setID(localStorage.getItem('id'))
        setTitle(localStorage.getItem('title'));
        setAuthor(localStorage.getItem('author'));
    }, []);
  

    const update = () => {
        axios.put(`http://localhost:4000/books/${id}`, {
            title,
            author
        })
    }
    
    const style = {
        display: 'flex',
        flexDirection: 'column',
        alignItem: 'center'
    }

    return(
        <>
        
        { <form style={style}>
            <label>name</label>
            <input type="text" placeholder="name" value={title} onChange={(e)=> setTitle(e.target.value)}/>
            <label>Name of author</label>
            <input  type="text" placeholder="author" value={author} onChange={(e)=> setAuthor(e.target.value)}/>
            <Link to='/books'>  <button onClick={update} type='submit' > submit</button> </Link>
    
        </form> }
        </>
    )
}
export default EditBook;



