import { faApple, faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import {
    faChevronDown,
    faUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";
export default function Page() {
    return (
        <>
            <div className="flex items-center justify-center min-h-screen">
                <div className="text-center mb-48">
                    <h1 className="text-6xl md:text-7xl lg:text-8xl font-Poppins">
                        <span className="text-burrowPurple font-bold">Burrow</span> Through{" "}
                        <span className="font-SpaceMono font-bold">Firewall</span>
                    </h1>
                    <div className="text-lg md:text-2xl font-Poppins my-2 md:my-10 w-11/12 md:w-3/4 mx-auto">
                        <p>
                            Burrow is an open source tool for burrowing through firewalls,
                            built by teenagers at{" "}
                            <span className="font-PhantomSans text-hackClubRed underline">
                                <a href="https://www.hackclub.com/" target="_blank">
                                    HackClub.
                                </a>
                            </span>{" "}
                            <span className="font-SpaceMono bg-burrowHover rounded-md p-0.5">
                                burrow
                            </span>{" "}
                            provides a simple command-line tool to open virtual interfaces and
                            direct traffic through them.
                        </p>
                    </div>
                    <div className="flex justify-center flex-wrap">
                        <div className="flex justify-center gap-x-4 w-full md:w-auto">
                            <a>
                                <button className="bg-burrowPurple border-2 border-burrowStroke font-SpaceMono w-40 md:w-auto md:text-2xl rounded-xl md:rounded-2xl h-12 md:h-16 px-3">
                                    Install
                                </button>
                            </a>

                            <a href="https://github.com/hackclub/burrow" target="_blank">
                                <button className="bg-transparent border-2 border-burrowStroke font-SpaceMono w-40 md:w-auto md:text-2xl rounded-xl md:rounded-2xl h-12 md:h-16 px-3">
                                    <FontAwesomeIcon icon={faGithub} className="pr-3" />
                                    Contribute
                                </button>
                            </a>
                        </div>
                        <div className="flex justify-center w-full md:w-auto mt-4 md:mt-0 md:pl-4">
                            <a>
                                <button className="bg-transparent border-2 border-burrowStroke font-SpaceMono text-lg md:text-2xl rounded-xl md:rounded-2xl h-12 md:h-16 px-3">
                                    Docs
                                    <FontAwesomeIcon
                                        icon={faUpRightFromSquare}
                                        className="pl-3"
                                    />
                                </button>
                            </a>
                        </div>
                    </div>
                    <div className="fixed bottom-0 mb-20 left-[25vw] md:left-[40vw] lg:left-[44vw]">
                        <a href="https://hackclub.com/" target="_blank">
                            <button className="flex items-center bg-transparent border-2 border-burrowStroke text-hackClubRed font-SpaceMono text-lg md:text-2xl rounded-xl md:rounded-2xl h-12 md:h-16 px-3">
                                <Image
                                    src="/hackclub.svg"
                                    width={35}
                                    height={35}
                                    className="mx-2"
                                    alt="HackClub's logo"
                                />
                                By HackClub
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}
