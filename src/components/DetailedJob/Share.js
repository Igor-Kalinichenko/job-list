import {ReactComponent as ShareIcon} from '../../svg/shareIcon.svg';

function Share () {
    return <>
        <div className="flex">
            <div className="ml-6"><ShareIcon /></div>
            <div className="font-normal sm:font-sans text-base sm:text-lg text-textColorH2 ml-4">Share</div>
        </div>
    </>
}

export default Share;