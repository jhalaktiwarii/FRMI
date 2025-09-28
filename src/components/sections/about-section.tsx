import { Button } from "@/components/ui/button";
import Link from "next/link";

const AboutSection = () => {
  return (
    <section className="bg-background py-[120px]">
      <div className="container">
        <div className="flex flex-col lg:flex-row lg:items-center gap-[30px] lg:gap-[80px]">
          <div className="flex-1">
            <h2 className="text-[56px] font-bold text-foreground leading-[1.2] tracking-[-1px]">
              Serving since 2005
            </h2>
          </div>
          <div className="flex flex-1 flex-col items-start gap-10">
            <p className="text-xl font-medium text-muted-foreground leading-[1.6]">
              With over two decades of unparalleled expertise, Houseplus curates
              extraordinary properties for discerning clients worldwide. We
              don&apos;t just find houses; we craft lifestyles, turning your
              vision of luxury into reality.
            </p>
            <Button
              asChild
              className="h-auto rounded-lg bg-primary px-8 py-4 text-base font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              <Link href="https://housepluss.framer.website/about">
                Learn More
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;