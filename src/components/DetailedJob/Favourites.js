import MyFavorites from "../MyFavorites";

function Favourites ({id}) {
    return <>
    <div className="flex">
        <div>
            <MyFavorites id={id} />
        </div>
        <div className="font-normal sm:font-sans text-base sm:text-lg text-textColorH2 ml-4">Save to my list</div>
    </div>
</>
}

export default Favourites;