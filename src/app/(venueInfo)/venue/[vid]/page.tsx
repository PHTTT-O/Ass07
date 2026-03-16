interface Props{
  params:{vid:string}
}

const venueData = new Map([
  ["001",{name:"The Bloom Pavilion",img:"/img/bloom.jpg"}],
  ["002",{name:"Spark Space",img:"/img/sparkspace.jpg"}],
  ["003",{name:"The Grand Table",img:"/img/grandtable.jpg"}]
]);

export default function VenueDetail({params}:Props){

  const venue = venueData.get(params?.vid ?? "001")

  return(
    <div>

      <img
        src={venue?.img}
        alt="venue"
      />

      <h1>{venue?.name}</h1>

    </div>
  )
}