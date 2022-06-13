import { db } from './FirebaseConfig';
import {
    collection, 
    getDocs, 
    // where, 
    // query
} from 'firebase/firestore';
import { useState, useEffect} from 'react';

const Firebase = () => {

    /* this is used for data to be displayed in the UI by using useState and useEffect start */

    const [posts, setposts] = useState([]);

    useEffect(() => {
            
        const getPost = async () => {
           
          const postCol = collection(db, 'books');
          // const q = query(postCol, where("title","==","The Tale of Nine tailed"));
          const postSnapshot = await getDocs(postCol);
          const postList = postSnapshot.docs.map(doc => doc.data());

          // Set the result to the useState.
          setposts(postList);
        }
        
        // Call the async function.
        getPost()
          .catch(console.error);

       }, []);

    return (<div >
            
        {posts.map((post) => (
         <>
          <h1>{post.Author}</h1>
          <h1>{post.title}</h1>
         </>
        ))}
      </div>);

    

    /* this is used for data to be displayed in the UI by using useState and useEffect end */

    /* this is used for data to be displayed in the console start */

    // collection of Reference - collection Ref
    // const colRef = collection(db, 'books')

    // get collection data
    // getDocs(colRef)
    // .then((snapshot) => {
    //    let books = []
    //    snapshot.docs.forEach((doc) => {
    //         books.push({ ...doc.data(), id: doc.id })
    //    })
    //    console.log(books);
    // })
    // .catch(err => {
    //     console.log(err.message);
    // })

    /* this is used for data to be displayed in the console end */
    
}

export default Firebase;