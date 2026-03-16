const venueData = new Map([
  ["001",{name:"The Bloom Pavilion",img:"/img/bloom.jpg"}],
  ["002",{name:"Spark Space",img:"/img/sparkspace.jpg"}],
  ["003",{name:"The Grand Table",img:"/img/grandtable.jpg"}]
]);

export default async function VenueDetail({
  params
}:{
  params: Promise<{ vid: string }>
}){

  const { vid } = await params

  const venue = venueData.get(vid) ?? venueData.get("001")

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