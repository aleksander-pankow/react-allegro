import React from "react";
function ResultCard() {
    return (

        <a href="#" className="flex flex-col items-center text-left mt-5 bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <img className="object-cover rounded-t-lg md:max-h-[150px] md:max-w-[100px] md:rounded-none md:rounded-l-lg" src="https://picsum.photos/300/500" alt="" />
                <div className="flex flex-col justify-between p-4 leading-normal">
                    <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Рубашка Polo Ralph Lauren</h5>
                    <p className="text-base font-normal text-gray-700 dark:text-gray-400"><span className="text-xs text-gray-500">Цвет:</span> Белый</p>
                    <p className="text-base mb-3 font-normal text-gray-700 dark:text-gray-400"><span className="text-xs text-gray-500">Размер:</span> L</p>
                </div>
        </a>

)

}
export default ResultCard;


