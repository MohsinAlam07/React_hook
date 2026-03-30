import React, { use } from 'react';
import Cousin from './Cousin';
import { MoneyContext } from './FamilyTree';

const Aunt = ({asset}) => {
    const [money,setMoney]=use(MoneyContext);
    const handleAddMoney=()=>{
        setMoney(money+5000);
    }
    return (
        <div>
           <h3>Aunt</h3>
           <section className='flex'>
            <Cousin name="Sraboni"></Cousin>
            <Cousin asset={asset} name="Afroz"></Cousin>
            <button onClick={handleAddMoney}>Add $5K</button>
            </section> 
        </div>
    );
};

export default Aunt;