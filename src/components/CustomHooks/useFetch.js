import React, { useEffect, useState } from 'react'

const ROOT_URL = 'https://jsonplaceholder.typicode.com'

const useFetch = (url) => {
    const [data, setData] = useState(null);
    useEffect(() => {
            fetch(`${ROOT_URL}/${url}`)
          .then((res) => res.json())
          .then((d) => setData(d));
      }, [url]);
      return [data];


  
}

export default useFetch