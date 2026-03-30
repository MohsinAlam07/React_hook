import React, { createContext, useState } from 'react';
import Grandpa from './Grandpa';
import Dad from './Dad';
import Uncle from './Uncle';
import Aunt from './Aunt';
import './FamilyTree.css'

export const AssetContext=createContext('');
export const MoneyContext=createContext(0);

const FamilyTree = () => {
    const [money,setMoney]=useState(0);
    const asset='Diamond'
    const newAsset='Napa'
    return (
        <div className='family-tree'>
            <h3>Famiy Tree</h3>
            <h4>Total Family money: {money}</h4>
          <MoneyContext value={[money,setMoney]}>
             <AssetContext.Provider value={newAsset}>
             <Grandpa asset={asset}></Grandpa>
           
           </AssetContext.Provider>
          </MoneyContext>
        </div>
    );
};

export default FamilyTree;