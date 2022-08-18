import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {List, Avatar, Button} from 'antd'

const AllBooks = ()=>{
    
    const [books, setBooks]=useState([]);
    const API_URL = "http://localhost:4000";

    // let {id}=useParams();

   useEffect( ()=>{  
        try {
        axios.get(`${API_URL}/books`)
        .then( res => setBooks(res.data))
        
        } catch (error) {
          console.log("Error", error.message);
        }
      
    }, [])

    const setData = (book) => {
        let { title, author, id } = book;
        localStorage.setItem('title', title);
        localStorage.setItem('author', author)
        localStorage.setItem('id',id)
        }

        const getData = () => {
            try {
                axios.get(`${API_URL}/books`)
                .then( res => setBooks(res.data))
                  } 
                catch (error) {
                  console.log("Error", error.message);
                }
        }



        const onDelete = (id) => {
            axios.delete(`${API_URL}/books/${id}`)
            .then(() => {
                getData();
            })
        }

        const listStyle= {
            maxWidth: "50%",
            margin: '0 auto'   
        }

        // const listItem ={
        //    marginLeft: '100px'
        // }
     
    return (
        // <>
        // {books.map(book=>(
        //      <li> {book.title}

        //         <Link key={book.id} to={`/books/${book.id}`}>
        //         <button onClick={()=>{ setData(book)}}>update</button>
        //         </Link>

        //         <button onClick={()=>{ onDelete(book.id)}}> Delete</button>

        //      </li>

        // ))}
        // Here is exaple page
        // </>



        <List 
        style={listStyle}
       
        grid={{ column: 1}}
        dataSource={books}
        renderItem={(item) => (
         <List.Item >
             {item.title}
             <Link key={item.id} to={`/books/${item.id}`}>
             <Button type="default" onClick={()=>{ setData(item)}}>update</Button>
             </Link>
             <Button type="default" onClick={()=>{ onDelete(item.id)}}> Delete</Button>
               

                <List.Item.Meta
                    avatar={<Avatar src="https://freepikpsd.com/file/2020/02/Book-PNG-Download-Image.png" />}
                    description={item.author}
                    />
          </List.Item>
        )}
        />

        
    )
}

export default AllBooks;