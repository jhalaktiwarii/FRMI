import Image from "next/image";
import { Play } from "lucide-react";

const CeoVideoSection = () => {
  return (
    <div className="relative">
      <div className="w-full overflow-hidden rounded-[20px]">
        <Image
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/fb03db6c-5ef0-4c5d-a106-339f02e1dcca-housepluss-framer-website/assets/images/farrDCFEWDyAnLGSPsFzGEMOoOw-8.png"
          alt="A message from our CEO. A professional businessman in a blue suit sitting on a yellow chair."
          width={1119}
          height={559}
          className="h-auto w-full object-cover"
        />
      </div>

      <button className="absolute bottom-5 right-5 flex cursor-pointer items-center gap-2.5 rounded-xl bg-white py-4 px-5 shadow-[0px_5px_20px_0px_rgba(0,0,0,0.08)] transition-transform duration-300 hover:scale-105 md:bottom-10 md:right-10">
        <Play className="h-5 w-5 fill-foreground text-foreground" />
        <p className="text-base font-medium leading-6 text-foreground">
          A message from our CEO
        </p>
      </button>
    </div>
  );
};

export default CeoVideoSection;