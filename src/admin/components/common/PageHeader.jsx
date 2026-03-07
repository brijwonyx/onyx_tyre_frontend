import Icon from "./Icons";

const PageHeader = ({ title }) => {
  return (
    <header className="p-3 border-b border-b-[var(--Border-primary, #E4E4E7)]">
      <div className="p-[6px] flex justify-between">
      <h1 className="text-[13px] leading-5 font-medium text-[#71717A]">{title}</h1>
    <Icon name="notification" className="w-4 h-4" />

      </div>
    </header>
  );
};

export default PageHeader;
