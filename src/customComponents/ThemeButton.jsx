
const ThemeButton = ({label = 'text', width = 'auto'}) => {
  return <button className={`themeButton cursor-pointer  duration-700 hover:pe-10 transition-all hover:bg-gray-900 hover:text-NeonBlue hover:font-bold ease-in-out  w-${width}`}>{label}</button>;
};

export default ThemeButton;
