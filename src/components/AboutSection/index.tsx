import { socialLinks } from "@/data/socialLinksData";
import { Heading } from "../Heading";
import Image from "next/image";
import { CustomLink } from "../CustomLink";

export function AboutSection() {
  return (
    <section id="about" className="scroll-mt-20">
      <Heading title="About me" desc="Let me told you something about me" />

      <div className="flex gap-4 flex-col md:flex-row items-center">
        <div className="h-80 w-80 shrink-0 rounded-full overflow-hidden">
          <Image
            src={"/assets/profile.jpg"}
            alt="Person"
            width={600}
            height={800}
            className="w-full h-full object-center object-cover"
          />
        </div>

        <div className="space-y-2">
          <p>Hii, I am Felipe Gomes</p>
          <p className="text-zinc-400">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto
            obcaecati incidunt, assumenda laborum a, necessitatibus non
            repudiandae quae ut inventore libero? Quisquam eum iste est ducimus
            temporibus alias dolorem in.
          </p>

          <ul className="flex gap-2 mt-4">
            {socialLinks.map((link, index) => {
              return (
                <li key={index}>
                  <CustomLink
                    href={link.href}
                    linkType="secondary"
                    className="w-10 h-10 flex justify-center items-center"
                  >
                    <link.icon className="text-xl shrink-0" />
                  </CustomLink>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
