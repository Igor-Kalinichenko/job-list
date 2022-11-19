import { useContext, useState } from 'react';
import { Link } from "react-router-dom";
import GetLocationName from './GetLocationName';
import {ReactComponent as Star} from '../../svg/star-rating.svg';
import Pagination from './Pagination';
import DataContext from '../../context/DataContext';
import PostedDays from './PostedDays';
import MyFavorites from '../MyFavorites';

function JobList () {
    const jobList = useContext(DataContext);

    const [currentPage, setCurrentPage] = useState(1);
    const [jobsPerPage] = useState(10);
    
    const currentJobList = jobList?.slice((currentPage * jobsPerPage) - jobsPerPage, (currentPage * jobsPerPage));

    const paginate = pageNumber => setCurrentPage(pageNumber);
    const nextPage = () => {if(currentPage !== jobList?.length / jobsPerPage) setCurrentPage(prev => prev + 1)};
    const prevPage = () => {if(currentPage !== 1) setCurrentPage(prev => prev - 1)};


    return <>
    <main className='bg-mainBgColor py-4'>
        <div className='container mx-auto w-11/12 sm:w-4/5'>
            {
                currentJobList?.map(jobItem => 
                <div key={jobItem.id}
                    className='flex justify-between bg-[#EFF0F5] mb-2 rounded-lg shadow-lg shadow-black-500/50 px-4 py-6 lg:bg-white'>
                    <div className='flex w-full'>
                        <div className='min-w-[4.1rem] h-[4.1rem] bg-cover rounded-full mr-6 mt-8 lg:mt-0 sm:min-w-[5.3rem] sm:h-[5.3rem]' 
                            style={{backgroundImage: `url(${jobItem.pictures[0]}?random=${Math.floor(Math.random() * (100 - 1 + 1)) + 1})`}}>
                        </div>
                        <div className='flex justify-between w-full flex-col lg:flex-row'>
                            <div>
                                <Link to={jobItem.id}>
                                    <h2 className='font-bold text-lg text-textColorH2 mb-2 lg:text-xl hover:text-textColorH2Hover'>
                                        {jobItem.title}
                                    </h2>
                                </Link>
                                <p className='font-normal text-base text-textColorSub mb-2'>Department name &#183; {jobItem.name}</p>
                                <GetLocationName location={jobItem.location}/>
                            </div>
                            <div className='flex justify-between order-first lg:order-last'>
                                <div className='flex mx-0 lg:mx-8'>
                                    <Star className='w-[0.625rem] h-[0.625rem] fill-[#384564] sm:w-[1.187rem] sm:h-[1.125rem] sm:fill-[#38415D]' />
                                    <Star className='w-[0.625rem] h-[0.625rem] fill-[#384564] sm:w-[1.187rem] sm:h-[1.125rem] sm:fill-[#38415D]' />
                                    <Star className='w-[0.625rem] h-[0.625rem] fill-[#384564] sm:w-[1.187rem] sm:h-[1.125rem] sm:fill-[#38415D]' />
                                    <Star className='w-[0.625rem] h-[0.625rem] fill-[#384564] sm:w-[1.187rem] sm:h-[1.125rem] sm:fill-[#38415D]' />
                                    <Star className='w-[0.625rem] h-[0.625rem] fill-[#384564] sm:w-[1.187rem] sm:h-[1.125rem] sm:fill-[#38415D]' />
                                </div>
                                <div className='flex flex-col justify-between items-end'>
                                    <div className='hidden lg:block'><MyFavorites id={jobItem.id} /></div>
                                    <div className='font-normal text-textColorSub self-end whitespace-nowrap text-sm lg:text-base'>
                                        <PostedDays updatedAt={jobItem.updatedAt} />
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>)
            }
            <Pagination jobsPerPage={jobsPerPage}
                        totalJobs={jobList?.length}
                        paginate={paginate}
                        nextPage={nextPage}
                        prevPage={prevPage}
                        currentPage={currentPage} />
        </div>
    </main>
    </>
}

export default JobList;