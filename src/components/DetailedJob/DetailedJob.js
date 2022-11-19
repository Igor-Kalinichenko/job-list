import {useParams} from "react-router-dom";
import { useEffect, useState, useContext } from 'react';
import DataContext from '../../context/DataContext';
import PostedDays from "../JobList/PostedDays";
import Contacts from "./Contacts";
import ReturnButton from "./ReturnButton";
import Description from "./Description";
import ApplyButton from "./ApplyButton";
import Favourites from "./Favourites";
import Share from "./Share";

function DetailedJob () {
    const {jobId} = useParams();
    const jobList = useContext(DataContext);
    const [currentJob, setCurrentJob] = useState([]);

    useEffect(() => {
        setCurrentJob(jobList?.filter(el => el.id === jobId));      
    },[jobList]);

    return <main>
        <div className="container flex flex-col lg:flex-row justify-between mx-auto w-11/12 mt-14">

            <div className="w-full lg:w-[60%] ">

                {/* HEADER */}

                <div className="flex flex-col sm:flex-row justify-between w-full border-0 sm:border-b-[1px] border-textColorH2 pb-2">
                    <div className="sm:border-0 border-b-[1px] border-textColorH2 pb-2">
                        <h1 className="font-bold text-3xl text-textColorH2">Job Details</h1>
                    </div>
                    <div className="flex mt-6 sm:mt-0">
                        <Favourites id={jobId} />
                        <Share />
                    </div>
                </div>

                {/* BUTTON */}

                <div className="hidden sm:block">
                    <ApplyButton />
                </div>

                {/* TITLE */}

                <div className="flex flex-wrap justify-between ">
                    <div className="w-[90%] sm:w-[60%] order-1">
                        <h2 className="font-bold text-textColorH2 text-2xl">{currentJob[0]?.title}</h2>
                    </div>
                    <div className="flex flex-col w-[30%] text-end order-last sm:order-2">
                        <div className="font-bold text-textColorH2 text-xl whitespace-nowrap">
                            {String.fromCharCode(8364)} {currentJob[0]?.salary.replace(/K/gi, ' 000')}
                        </div>
                        <div className="font-sans text-lg text-textColorH2 order-first sm:order-last">Brutto, per year</div>
                    </div>
                    <div className="font-sans text-xs sm:text-lg text-[#38415d5b] order-2 self-center sm:self-auto">
                        <PostedDays updatedAt={currentJob[0]?.updatedAt} />
                    </div>
                </div>

                {/* DESCRIPTION */}

                <Description description={currentJob[0]?.description} />

                {/* BUTTON */}
                
                <div className="text-center sm:text-left">
                    <ApplyButton />
                </div>


                <div className="flex flex-col">

                    {/* ADDITIONAL INFO */}

                    <div className="mt-20 order-last sm:order-first">
                        <h2 className="font-bold text-[1.75rem] text-textColorH2 border-b-[1px] border-textColorH2 pb-2">Additional info</h2>
                        <div className="font-sans text-lg text-textColorH2 mt-4">Employment type</div>
                        <div>
                            {
                                currentJob[0]?.employment_type.map((el, i) => 
                                    <button 
                                        key={i}
                                        type="button"
                                        className="bg-[#a1b1db51] w-2/6 text-base font-bold text-[#55699E] py-4 border-[1px] border-[#55699e4d] rounded-lg mt-2.5 mr-2">
                                            {el}
                                    </button>)
                            }
                        </div>
                        <div className="font-sans text-lg text-textColorH2 mt-4">Benefits</div>
                        <div>
                            {
                                currentJob[0]?.benefits.map((el, i) => 
                                    <button 
                                        key={i}
                                        type="button"
                                        className="bg-[#ffcf0026] w-2/6 text-base font-bold text-[#988B49] py-4 border-[1px] border-[#FFCF00] rounded-lg mt-2.5 mr-2">
                                            {el}
                                    </button>)
                            }
                        </div>
                    </div>

                    {/* ATTACHED IMAGES */}

                    <div className="mt-20">
                        <h2 className="font-bold text-[1.75rem] text-textColorH2 border-b-[1px] border-textColorH2 pb-2">Attached images</h2>
                        <div className="flex mt-3">
                            {
                                currentJob[0]?.pictures.map((el, i) => 
                                <div key={i} className="w-[12.5rem] h-[8.3rem] mr-2.5 overflow-hidden rounded-lg">
                                    <img src={`${el}?random=${Math.floor(Math.random() * (100 - 1 + 1)) + 1}`} alt={"photo-"+i}
                                        className="w-full" />
                                </div>)
                            }
                        </div>
                    </div>
                </div>

            </div>

            {/* CONTACTS */}

            <div className="w-full sm:w-[50%] lg:w-[30%] h-full mx-auto">
                <h2 className="font-bold text-3xl text-textColorH2 border-b-[1px] border-textColorH2 pb-2 mt-16 mb-4 block lg:hidden">Contacts</h2>
                <div className="bg-[#2A3047] rounded-lg overflow-hidden">
                    <Contacts
                        location={currentJob[0]?.location}
                        name={currentJob[0]?.name}
                        address={currentJob[0]?.address}
                        email={currentJob[0]?.email}
                        phone={currentJob[0]?.phone} />
                </div>
            </div>
        </div>
        <ReturnButton />
    </main>
}

export default DetailedJob;