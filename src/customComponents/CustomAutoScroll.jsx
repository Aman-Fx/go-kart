const CustomAutoScroll = ({ items = [] }) => {
  return (
    <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
      <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
        {items?.map((i) => (
          <li key={i}>
            <img src={i} alt={"brand logo"} className="rounded-full contrast-125"/>
          </li>
        ))}
      </ul>
      <ul
        className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
        aria-hidden="true"
      >
        {items?.map((i) => (
          <li key={i} className="">
            <img src={i} alt={"brand logo"} className="rounded-full contrast-125 shadow-black  shadow-inner"/>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CustomAutoScroll;