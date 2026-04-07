export default function handleItems(API) {
    return (
        fetch(API)
        .then((res) => {
                return res.json();
        })
        .then((data) => {
                setPlanets(data.results);
                //console.log(data.results);
        })
    )
}