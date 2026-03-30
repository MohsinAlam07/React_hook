import React, { use } from 'react';
import { MoneyContext } from './FamilyTree';

const Brother = () => {
    const[money,setMoney]=use(MoneyContext);
    return (
        <div>
            <h3>My brothers</h3>
            <button onClick={()=>setMoney(money+1000)}>Add $1k </button>
        </div>
    );
};

export default Brother;<h3>My brothers</h3>