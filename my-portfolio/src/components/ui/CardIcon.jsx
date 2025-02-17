import Image from "next/image";

const CardIcon = ({ index, value }) => {
  return (
    <div
      key={index}
      className="p-5 max-h-[241px] col-span-12 sm:col-span-6 md:col-span-4
      lg:col-span-4 xl:col-span-3 bg-secondary-100 flexGroup flex-col gap-4
      hoverTransition hover:bg-secondary-200/50"
    >
      <Image src={value?.icon} alt="" width={50} height={50} />
      <span className="text-secondary-500 text-lg mt-2 block">
        {value.label}
      </span>
    </div>
  );
};

export default CardIcon;
