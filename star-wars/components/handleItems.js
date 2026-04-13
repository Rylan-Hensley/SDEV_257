  function handleItems(API) {
    return (
        fetch(API)
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            setItems(data.results);
        })  
    )


  }
  


  export default handleItems;