import {ReactComponent as ArrowRight} from '../../svg/arrow-right.svg';
import {ReactComponent as ArrowLeft} from '../../svg/arrow-left.svg';

function Pagination ({jobsPerPage, totalJobs, paginate, nextPage, prevPage, currentPage}) {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalJobs / jobsPerPage); i++) {
        pageNumbers.push(i);
    }

    return <div className="flex justify-center my-12">
        <ul className="inline-flex py-2.5 bg-white rounded-lg shadow-lg shadow-black-500/50">
            <li className="text-xl font-bold text-[#7D859C] pl-6 pr-8 py-2 mr-10 self-center border-r-2 border-[#DEE3EF] cursor-pointer"
                onClick={prevPage}>
                <ArrowLeft />
            </li>
            {
                pageNumbers.map(num => 
                    <li className={`${currentPage === num ? 'border-b-2 border-[#5876C5] text-[#5876C5]' : 'text-[#70778B]'} text-xl font-bold  px-3 py-2 cursor-pointer hover:text-textColorH2Hover`}
                        key={num}
                        onClick={() => paginate(num)}>
                            {num}
                    </li>
                    )
            }
            <li className="text-xl font-bold text-[#7D859C] pr-6 pl-8 py-2 ml-10 self-center border-l-2 border-[#DEE3EF] cursor-pointer"
                onClick={nextPage}>
                <ArrowRight />
            </li>

        </ul>
    </div>
}

export default Pagination;