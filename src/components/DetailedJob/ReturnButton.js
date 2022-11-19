import { Link } from 'react-router-dom';
import {ReactComponent as Arrow} from '../../svg/arrow-return-button.svg';

function ReturnButton () {
    return <div className="my-20 ml-16 hidden sm:block">
        <Link to="/">
            <button type="button" className='flex font-semibold text-textColorH2 text-xs bg-[#c6c6c6] rounded-lg py-4 px-6'>
                <Arrow className='mr-5' />
                <div className='self-end'>RETURN TO JOB BOARD</div>
            </button>
        </Link>
    </div>
}

export default ReturnButton;