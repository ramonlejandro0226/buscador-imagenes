import { Formik,Form,Field } from "formik";
import './header.css'
import './content.css'
import './article.css'
import { useState } from "react";
function App() {
  const[photos,setphotos]=useState([])
  const open = urls => window.open(urls)
  console.log({photos})
  
  return (
    
    <div>
      <header>
        <Formik
        initialValues={{search:''}}
        onSubmit={async values=>{
          const response = await fetch(`https://api.unsplash.com/search/photos?per_page=20&query=${values.search}`,{
            headers:{
              'Authorization': 'Client-ID bviQOeRsiW_Udqvk4NTPK7qyflnitFJKq11l3jhE9uU'
            }
          })
          const data= await response.json()
          //llamar  a api de unsplsh
          setphotos(data.results)
        }}
        >

          <Form>
            <Field name='search'></Field>


          </Form>

        </Formik>
      </header>
      <div className="container">
        <div className="center">
          {photos.map(photo=>
          <article key={photos.id}
          onClick={()=>open(photo.links.html)}>
            <img src={photo.urls.regular}></img>
            <p>{[photo.description,photo.alt_descriptions].join('-')}</p>
          </article>)}

        </div>
      </div>
    </div>
  );
}

export default App;

