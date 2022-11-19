function PostedDays ({updatedAt}) {
    return <>
    
    Posted {Math.round((Date.parse(new Date()) - Date.parse(updatedAt)) / 86400000)} days ago

    </>
}

export default PostedDays;