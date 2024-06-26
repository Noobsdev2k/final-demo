import React from 'react';
import BestQtyImg from '@/utils/assets/images/Group 18.png';
import LoadedImage from '@/utils/helpers/imageLoading';
function HomeBestQty() {
    return (
        <section className="pt-20 pb-4 HomeBestQty">
            <div className="container flex flex-col items-center justify-between mx-auto mt-0 md:mt-20 md:flex-row">
                <img src={LoadedImage(BestQtyImg)} alt="BestQtyImg" className="max-w-xl flex-1 h-[550px] object-center" />
                <div className="text-center md:text-left md:w-1/2">
                    <h1 className="py-4 font-semibold md:text-4xl xl:text-6xl xl:pr-10 text-textPrimary">
                        Best Quality Food Just For You
                    </h1>
                    <p className="py-4 text-xl font-normal text-textGray">
                        We prioritize quality in each of our foods, below are the advantages of our food
                    </p>
                    <div className="flex flex-col items-center py-4 md:items-start">
                        <div className="flex py-2">
                            <span></span>
                            <span>Best service than others</span>
                        </div>
                        <div className="flex py-2">
                            <span></span>
                            <span>Use experience staff than others</span>
                        </div>
                        <div className="flex py-2">
                            <span></span>
                            <span>User friendly app</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HomeBestQty;
