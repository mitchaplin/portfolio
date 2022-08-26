import Image from "next/image";
import Link from "next/link";
import { footer } from "../../types/global";

function Footer() {
  return (
    <footer className="flex flex-row bg-bg-primary">
      <div className="max-w-4xl m-auto grid grid-col-1 sm:grid-cols-2 justify-between items-start">
        {footer.columns.map((item, index) => {
          return (
            <div key={index} className="text-center mb-5 sm:mb-0">
              {item.links.map((item, index) => {
                return (
                  <span key={index} className="mr-8">
                    {item.leavesWebsite ? (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="items-left"
                      >
                        {item.icon && (
                          <span className="pr-4 mb-4">
                            <Image src={item.icon} width={32} height={32} />
                          </span>
                        )}
                        {item.name}
                      </a>
                    ) : (
                      <Link href={item.link}>{item.name}</Link>
                    )}
                  </span>
                );
              })}
            </div>
          );
        })}
      </div>
      <div className="max-w-4xl m-auto mt-2 pt-2  ml-10 sm:mt-2 sm:pt-3 text-center">
        <p className="flex flex-col items-center justify-center">
          <div className="items-center uppercase text-xs font-bold tracking-widest ">
            Made with{" "}
            <div className="space-x-2 inline-flex items-center -mt-1 ml-3">
              <span>
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                  width="26"
                  title="React"
                />
                <span className="sr-only">React</span>
              </span>
              <span>
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg"
                  width="40"
                  className="invert"
                  title="NextJS"
                />
                <span className="sr-only">NextJS</span>
              </span>
              <span>
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"
                  width="26"
                  title="TailwindCSS"
                />
                <span className="sr-only">TailwindCSS</span>
              </span>
            </div>
          </div>
        </p>
        <div className="mt-8 mb-8">
          <a
            className="w-auto inline-flex items-center sm:w-auto font-bold flex-shrink text-xs border border-fun-pink px-4 py-2 rounded-xl text-fun-pink cursor-pointer opacity-50"
            href="https://github.com/mitchaplin/portfolio"
            target="_blank"
            rel="nooreferrer"
          >
            <Image
              src="/static/icons/github.png"
              width={32}
              height={32}
              alt="Github Icon"
            />
            <span className="ml-2">View Source Code</span>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
