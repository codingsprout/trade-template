import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import StatsRow from './StatsRow';
import { db } from '../firebase';
import '../compcss/stats.css';

const TOKEN = 'bv3vn3748v6tcp17cp2g';
const API_URL = 'https://finnhub.io/api/v1/quote';

const Stats = () => {
  const [stockData, setStockData] = useState([]);
  const [myStocks, setMyStocks] = useState([]);

  const getMyStocks = () => {
    db.collection('myStocks').onSnapshot((snapshot) => {
      let promises = [];
      let tempData = [];
      snapshot.docs.map((doc) => {
        promises.push(
          getStockData(doc.data().ticker).then((res) => {
            tempData.push({
              id: doc.id,
              data: doc.data(),
              info: res.data,
            });
          })
        );
        Promise.all(promises).then(() => {
          setMyStocks(tempData);
        });
      });
    });
  };

  const getStockData = (stock) => {
    return Axios.get(`${API_URL}?symbol=${stock}&token=${TOKEN}`).catch(
      (error) => {
        console.log('Error', error.message);
      }
    );
  };

  useEffect(() => {
    let tempStockList = [];
    let promises = [];
    getMyStocks();
    const stocksList = [
      'AAPL',
      'MSFT',
      'TSLA',
      'FB',
      'BABA',
      'UBER',
      'DIS',
      'SBUX',
    ];

    stocksList.map((stock) => {
      promises.push(
        getStockData(stock).then((res) => {
          console.log(res);
          tempStockList.push({
            name: stock,
            ...res.data,
          });
        })
      );
    });

    Promise.all(promises).then(() => {
      setStockData(tempStockList);
      console.log(tempStockList);
    });
  }, []);

  return (
    <div className='stats'>
      <div className='stats__container'>
        <div className='stats__header'>
          <p>Stocks</p>
        </div>
        <div className='stats__content'>
          <div className='stats__rows'>
            {/* User's current stocks */}
            {myStocks.map((stock) => (
              <StatsRow
                key={stock.data.ticker}
                name={stock.data.ticker}
                openPrice={stock.info.o}
                shares={stock.data.shares}
                price={stock.info.c}
              />
            ))}
          </div>
        </div>
        <div className='stats__header stats__lists'>
          <p>Lists</p>
        </div>
        <div className='stats__content'>
          <div className='stats__rows'>
            {/* Possible stocks to buy/sell */}
            {stockData.map((stock) => (
              <StatsRow
                key={stock.name}
                name={stock.name}
                openPrice={stock.o}
                price={stock.c}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
