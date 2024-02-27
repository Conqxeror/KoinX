'use client'

import React, { useState, useEffect } from 'react';
import TradingViewWidget from '../components/TradingViewWidget';
import Image from 'next/image';
import Poly from '../../public/Polygon.png'

async function fetchBitcoinPrice() {
  const apiKey = process.env.REACT_APP_COINGECKO_API_KEY || 'CG-ZSz98ULg5JFjCW48XxAzJbzB';

  if (!apiKey) {
    throw new Error('Coingecko API key not found. Please set the REACT_APP_COINGECKO_API_KEY environment variable.');
  }

  const url = `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd,inr&include_24hr_change=true`;
  const headers = {
    'X-Cg-Api-Key': apiKey,
  };

  try {
    const response = await fetch(url, { headers });
    const data = await response.json();
    return data.bitcoin;
  } catch (error) {
    console.error('Error fetching Bitcoin price:', error);
    return null;
  }
}

const HeroChart = () => {
  const [bitcoinPrice, setBitcoinPrice] = useState(null);

  const symbol = JSON.stringify([
    [
      "BITSTAMP:BTCUSD|1M"
    ]
  ]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const priceData = await fetchBitcoinPrice();
        setBitcoinPrice(priceData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  if (!bitcoinPrice) {
    return <div className='h-96 w-full flex justify-center items-center bg-white rounded-lg'>Loading Bitcoin price...</div>;
  }

  const { usd, inr, usd_24h_change } = bitcoinPrice;

  return (
    <div>
      <div className='flex md:hidden gap-3 items-center my-3'>
        <div className='flex gap-2 font-bold text-xl sm:text-xl md:text-2xl lg:text-3xl items-center'>
          <Image src={'https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1696501400'} alt="BTC" width={50} height={50} className='md:h-10 md:w-10 h-7 w-7' /> Bitcoin <span className='text-gray-400 text-lg sm:text-xl md:text-xl'>BTC</span>
        </div>
        <div className='p-2 rounded-md bg-gray-500 text-white sm:text-sm text-xs'>Rank #1</div>
      </div>
      <div className='bg-white rounded-md p-3 md:p-5'>
        <div className='hidden md:flex gap-3 items-center mb-3'>
          <div className='flex gap-2 font-bold text-xl sm:text-xl md:text-2xl lg:text-3xl items-center'>
            <Image src={'https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1696501400'} alt="BTC" width={50} height={50} className='md:h-10 md:w-10 h-7 w-7' /> Bitcoin <span className='text-gray-400 text-lg sm:text-xl md:text-xl'>BTC</span>
          </div>
          <div className='p-2 rounded-md bg-gray-500 text-white sm:text-sm text-xs'>Rank #1</div>
        </div>
        <div className=''>
          <div className='flex gap-3 items-center'>
            <div className='font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl'>${usd.toFixed(2)}</div>
            <div className='flex gap-1 items-center'>
              <div className={`gap-1 flex items-center p-1 rounded-sm text-sm sm:text-base md:text-lg ${usd_24h_change >= 0 ? 'bg-green-200 text-green-500' : 'bg-red-200 text-red-500'}`}>
                <Image alt='L' src={Poly} width={10} height={10} /> {usd_24h_change.toFixed(2)}%
              </div>
              <div className='text-gray-400 text-sm sm:text-base md:text-lg'>(24hr)</div>
            </div>
          </div>
          <div className='text-lg sm:text-xl md:text-2xl lg:text-xl mt-1 md:mt-2 mb-5'>₹{inr.toLocaleString('en-IN')}</div>
        </div>
        <div className='h-96 w-full'>
          <TradingViewWidget key={symbol} symbol={symbol} />
        </div>
      </div>
    </div>
  );
}

export default HeroChart;
