const ContextBar = ({breadCrumbs, children}) => {
    return (
        <div className="bg-[#EAEAEA] px-16 py-6">
            <p className="font-openSans font-semibold text-base">{breadCrumbs}</p>
            <h4 className="font-montserrat font-semibold text-2xl">{children}</h4>
        </div>
    )
}
export default ContextBar;