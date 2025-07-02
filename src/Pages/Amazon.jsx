import React from 'react'
import HomeImage from '../Component/header/homeImage';
import Kitchen from '../Component/Kitchen';
import Fashion from '../Component/fashion';
import Single from '../Component/single';
import CustomCarousel from '../Component/carosal';

import { electronicProducts, fashionProducts, kitchenProducts, HomeProducts, SingleProduct } from '../data';
import { } from '../data';



const Amazon = () => {
    return (
        <div className='bg-[#e3e6e6]  '>
            <HomeImage />
        <div className='px-[20px]'>
            <div className='flex   bg-[#e3e6e6] '>
                <div className='z-10 flex gap-4  -mt-[320px]'>
                    <div><Kitchen
                        products={kitchenProducts}
                        title="Top categories in Kitchen appliances"
                        linkText="Explore all products in Kitchen"
                        start={0}
                        end={4}
                    /></div>

                    <div className='z-10'>
                        <Fashion
                            products={HomeProducts}
                            title='Shop for your home essentials'
                            start={0}
                            end={4}
                        />
                    </div>

                    <div className='z-10'>
                        <Fashion
                            title="Fashion trends you like"
                            products={fashionProducts}
                            start={0}
                            end={4}
                        />
                    </div>

                    <div className='z-10'>
                        < Single
                            products={SingleProduct}
                            start={0}
                            title='Get your game on'
                            linkText='Shop Gaming'
                        />
                    </div>
                </div>
            </div>

            <div className='flex  bg-[#e3e6e6] '>
                <div className='z-10 flex gap-4 mt-3'>

                    <div className='z-10'>

                        <Fashion
                            products={fashionProducts}
                            title="Shop Fashion for less"
                            start={4}
                            end={8}
                        />
                    </div>

                    <div className='z-10'>
                        <Fashion
                            products={HomeProducts}
                            title=" for less"
                            start={4}
                            end={8}
                        />
                    </div>

                    <div className='z-10'>
                        < Single
                            products={SingleProduct}
                            start={1}
                            title='Toys under $25'
                            linkText='Shop now'
                        />
                    </div>
                    <div>
                        <Fashion
                            title="Refresh your space"
                            products={fashionProducts}
                            start={8}
                            end={12}
                        />
                    </div>

                </div>
            </div>
            <div className='bg-white my-4'>

                <CustomCarousel
                    title="More items to consider"
                    link="See more"
                    products={electronicProducts}
                    start={0}
                    end={10}
                />
            </div>
            <div className='bg-white my-4'>
                <CustomCarousel
                    title="More items to consider"
                    link="See more"
                    products={electronicProducts}
                    start={10}
                    end={20}
                />
            </div>
          
            </div>
        </div>
    )
}

export default Amazon