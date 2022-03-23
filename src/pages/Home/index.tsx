import { Box, CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";
import Loading from "../../components/Loading";
import { ListGames } from "../../services/games";
import { Container } from "./styles"
import bg from '../../assets/img/shape.svg'

const Home = () => {

    const [listGames, setListGames] = useState<any[]>([])
    const [gamesEmphasis, setGamesEmphasis] = useState<any[]>([])
    const [numberGames, setNumberGames] = useState<number | null>(null)
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const getListGames = async () => {
        const result = await ListGames()
        setListGames(result)
        await getGamesEmphasis(result)
    }

    function getRandom(arr: string | any[], n: number) {
        var result = new Array(n),
            len = arr.length,
            taken = new Array(len);
        if (n > len)
            throw new RangeError("getRandom: more elements taken than available");
        while (n--) {
            var x = Math.floor(Math.random() * len);
            result[n] = arr[x in taken ? taken[x] : x];
            taken[x] = --len in taken ? taken[len] : len;
        }
        return result;
    }
    const getGamesEmphasis = async (yourGames: any[]) => {
        const result = await getRandom(yourGames, 5)
        setGamesEmphasis(result)
        setNumberGames(result.length)
    }


    const load = async () => {
        try {
            setIsLoading(true);
            await getListGames()
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        load();
    }, []);


    return (
        <Container>
            {isLoading ?
                <Loading />
                :
                <div className="content">
                    <div>
                        <h1>Todos os seus Jogos ({numberGames})</h1>
                        <div className="linha"></div>
                    </div>
                    <div className='yours-games'>
                        {gamesEmphasis.map(games => {
                            return <div className="card">
                                <img src={games.thumbnail} alt="sim" />
                                <div className="description" >
                                    <h2>{games.title}</h2>
                                    <span>{games.genre}</span>
                                </div>
                            </div>
                        }
                        )}
                    </div>
                    <div className="linha"></div>

                </div>
            }
        </Container >
    );
};

export default Home;