import React from 'react';
import PriceOption from '../PriceOption/PriceOption';

const Pricing = () => {
    const pricingOptions = [
        { id:1 , name:'Free', price:0,features:[
            'feature-1',
            'feature-2',
            'feature-3',
            'feature-4',
            'feature-5',
            'feature-6',
        ]
    },
        { id:2 , name:'Medium', price:9.99, features:[
            'everything on free',
            'feature-2',
            'feature-3',
            'feature-4',
            'feature-5',
            'feature-6',
        ]},
        { id:3 , name:'Premium', price: 19.99, features:[
            'everything on medium',
            'feature-2',
            'feature-3',
            'feature-4',
            'feature-5',
            'feature-6',
        ]},
    ]
    return (
        <div>
            <h2 className='text-5xl bg-fuchsia-600 p-12 mt-6'>Best Deal</h2>
            <div className='grid container m-auto md:grid-cols-3 mt-4 gap-3'>
                {
                    pricingOptions.map(option => <PriceOption
                        key={option.id}
                        option={option}
                    ></PriceOption>)
                }
            </div>
        </div>
    );
};

export default Pricing;