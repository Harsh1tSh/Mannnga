import { useMangasQuery } from "../features/mangasApi"

function Home(){
    const { data } = useMangasQuery()

    return(
        <div>
            {data && data.map((manga) => (
                <div key={manga.id} className="col-md-6 col-lg-4 text-center">
                    <img src={manga.imgUrl} alt={manga.title}  className="rounded" />
                    <h3 className="fs-5 my-4">{manga.title}</h3>
                    <h2 className="lead fw-bold fs-4 my-2">{manga.price} $</h2>
                </div>
            ))}
        </div>
    );
}

export default Home
