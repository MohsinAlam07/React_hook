import React, { useContext } from 'react';
import { AssetContext } from './FamilyTree';

const Special = ({name,asset}) => {
    const newAsset=useContext(AssetContext);
    console.log('newAsset',newAsset)
    return (
        <div>
            <h3>Special:{name}</h3>
            <p>Asset:{asset}</p>
            <p>newasset:{newAsset}</p>
        </div>
    );
};

export default Special;