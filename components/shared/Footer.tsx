import Image from "next/image";
import Link from "next/link";
import { footer } from "../../data/global";

function Footer() {
  return (
    <footer className="flex flex-row bg-bg-primary m-5">
      <div className="max-w-4xl m-auto grid grid-col-1 sm:grid-cols-2 justify-between items-start pt-8">
        {footer.columns.map((item, index) => {
          return (
            <div key={index}>
              {item.links.map((item, index) => {
                return (
                  <span key={index} className="mr-8">
                    {item.leavesWebsite ? (
                      <a
                        href={item.link}
                        target="_blank"
                        className="inline-flex items-center transition hover:-translate-y-2 hover:opacity-75 hover:border-darker=gray will-change-footerLink"
                      >
                        {item.icon && (
                          <span className="inline-flex items-center mr-2">
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
      <div className="max-w-4xl m-auto mt-2 pt-2 ml-10 sm:mt-2 sm:pt-3 text-center">
        <div className="mt-8 mb-4">
          <a
            className="w-auto inline-flex items-center sm:w-auto font-bold flex-shrink text-xs border px-4 py-2 rounded-xl text-gray cursor-pointer transition hover:-translate-y-2 hover:opacity-75 hover:border-darker=gray will-change-footerLink"
            href="https://github.com/mitchaplin/portfolio"
            target="_blank"
            rel="nooreferrer"
          >
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/icons/github/github-original.svg"
              width={32}
              height={32}
            />
            <span className="ml-2">View Source Code</span>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
