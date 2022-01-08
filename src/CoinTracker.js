import { useEffect, useState } from "react";

function CoinTracker() {
const [loading, setLoading] = useState(true);
const [coins, setCoins] = useState([]);
useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
    .then((response) => response.json())
    .then((json) => {// network에서 코인 정보를 받아오면
        setCoins(json); 
        setLoading(false); // 해당 함수를 실행 - 인수를 변화시킴
    })
}, [])
    return (
        <div>
            <h1>Coins! {loading ? "" : `(${coins.length})`}</h1>
            {loading ? <strong>Loading,,,</strong>:
            <select>
                {coins.map((coin) => 
                <option key={coin.id}>
                    {coin.name}({coin.symbol}): {coin.quotes.USD.price} USD
                </option>)}
            </select>
            
            }
            
        </div>
    )
}

export default CoinTracker;