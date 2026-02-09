

const ContentCard = ({children, classname}) =>{
    return (
        <>
        <div className={`border border-solid border-[#E4E4E7] rounded-lg m-3 bg-white ${classname}`}>
            {children}
        </div>
        </>
    )
}
export default ContentCard;
