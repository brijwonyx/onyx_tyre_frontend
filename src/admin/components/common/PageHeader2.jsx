const PageHeader2 = ({title}) => {
    return (
        <>
            <div className="border-b border-[var(--Border-primary, #E4E4E7)] p-3">
                <h2 className="font-medium text-lg leading-7">{title}</h2>
            </div>
        </>
    )
}
export default PageHeader2;