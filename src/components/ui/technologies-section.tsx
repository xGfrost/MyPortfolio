import { ReactNode } from "react";

export default function TechnologiesSection() {
    return (
        <div className="max-w-screen-xl px-6 md:px-10 mx-auto" id="technologies">
            <h1 className="mt-20 text-3xl md:text-4xl text-center font-semibold tracking-wide underline underline-offset-8 decoration-cyan-400" data-aos="fade">
                Technologies
            </h1>

            <div className="mt-20 flex justify-center">
                <div className="columns-3 sm:columns-2 lg:columns-3 gap-16 sm:gap-32 md:gap-52 xl:gap-52 space-y-8" data-aos="fade-up">
                    {skills.map((skills) => (
                        <div className="flex items-center gap-4" key={skills.name}>
                            <span>{skills.icon}</span>
                            <span className="font-semibold md:text-lg hidden sm:block">{skills.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

const skills: { name: string; icon: ReactNode }[] = [
    {
        name: "HTML",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 32 32" className="size-12 lg:size-16">
                <path fill="#e44f26" d="M5.902 27.201L3.655 2h24.69l-2.25 25.197L15.985 30z" />
                <path fill="#f1662a" d="m16 27.858l8.17-2.265l1.922-21.532H16z" />
                <path fill="#ebebeb" d="M16 13.407h-4.09l-.282-3.165H16V7.151H8.25l.074.83l.759 8.517H16zm0 8.027l-.014.004l-3.442-.929l-.22-2.465H9.221l.433 4.852l6.332 1.758l.014-.004z" />
                <path fill="#fff" d="M15.989 13.407v3.091h3.806l-.358 4.009l-3.448.93v3.216l6.337-1.757l.046-.522l.726-8.137l.076-.83zm0-6.256v3.091h7.466l.062-.694l.141-1.567l.074-.83z" />
            </svg>
        ),
    },
    {
        name: "CSS",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 128 128" className="size-12 lg:size-16">
                <path fill="#1572b6" d="M18.814 114.123L8.76 1.352h110.48l-10.064 112.754l-45.243 12.543z" />
                <path fill="#33a9dc" d="m64.001 117.062l36.559-10.136l8.601-96.354h-45.16z" />
                <path fill="#fff" d="M64.001 51.429h18.302l1.264-14.163H64.001V23.435h34.682l-.332 3.711l-3.4 38.114h-30.95z" />
                <path fill="#ebebeb" d="m64.083 87.349l-.061.018l-15.403-4.159l-.985-11.031H33.752l1.937 21.717l28.331 7.863l.063-.018z" />
                <path fill="#fff" d="m81.127 64.675l-1.666 18.522l-15.426 4.164v14.39l28.354-7.858l.208-2.337l2.406-26.881z" />
                <path fill="#ebebeb" d="M64.048 23.435v13.831H30.64l-.277-3.108l-.63-7.012l-.331-3.711zm-.047 27.996v13.831H48.792l-.277-3.108l-.631-7.012l-.33-3.711z" />
            </svg>
        ),
    },
    {
        name: "JavaScript",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256" className="size-12 lg:size-16">
                <path fill="#f7df1e" d="M0 0h256v256H0z" />
                <path d="m67.312 213.932l19.59-11.856c3.78 6.701 7.218 12.371 15.465 12.371c7.905 0 12.89-3.092 12.89-15.12v-81.798h24.057v82.138c0 24.917-14.606 36.259-35.916 36.259c-19.245 0-30.416-9.967-36.087-21.996m85.07-2.576l19.588-11.341c5.157 8.421 11.859 14.607 23.715 14.607c9.969 0 16.325-4.984 16.325-11.858c0-8.248-6.53-11.17-17.528-15.98l-6.013-2.58c-17.357-7.387-28.87-16.667-28.87-36.257c0-18.044 13.747-31.792 35.228-31.792c15.294 0 26.292 5.328 34.196 19.247l-18.732 12.03c-4.125-7.389-8.591-10.31-15.465-10.31c-7.046 0-11.514 4.468-11.514 10.31c0 7.217 4.468 10.14 14.778 14.608l6.014 2.577c20.45 8.765 31.963 17.7 31.963 37.804c0 21.654-17.012 33.51-39.867 33.51c-22.339 0-36.774-10.654-43.819-24.574" />
            </svg>
        ),
    },
    {
        name: "TailwindCSS",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 128 128" className="size-12 lg:size-16">
                <path
                    fill="#38bdf8"
                    d="M64.004 25.602c-17.067 0-27.73 8.53-32 25.597c6.398-8.531 13.867-11.73 22.398-9.597c4.871 1.214 8.352 4.746 12.207 8.66C72.883 56.629 80.145 64 96.004 64c17.066 0 27.73-8.531 32-25.602q-9.6 12.803-22.399 9.602c-4.87-1.215-8.347-4.746-12.207-8.66c-6.27-6.367-13.53-13.738-29.394-13.738M32.004 64c-17.066 0-27.73 8.531-32 25.602Q9.603 76.799 22.402 80c4.871 1.215 8.352 4.746 12.207 8.66c6.274 6.367 13.536 13.738 29.395 13.738c17.066 0 27.73-8.53 32-25.597q-9.6 12.797-22.399 9.597c-4.87-1.214-8.347-4.746-12.207-8.66C55.128 71.371 47.868 64 32.004 64m0 0"
                />
            </svg>
        ),
    },
    {
        name: "Sass",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="1.34em" height="1em" viewBox="0 0 256 192" className="size-12 lg:size-16">
                <path
                    fill="#cd6799"
                    d="M220.281 110.514c-8.906.046-16.647 2.191-23.128 5.362c-2.379-4.71-4.757-8.906-5.176-11.984c-.467-3.59-1.026-5.782-.467-10.072c.56-4.29 3.078-10.399 3.031-10.865s-.56-2.658-5.689-2.704s-9.559.979-10.072 2.331s-1.492 4.43-2.145 7.6c-.886 4.664-10.258 21.31-15.62 30.03c-1.726-3.403-3.218-6.388-3.545-8.766c-.466-3.59-1.026-5.782-.466-10.072s3.078-10.398 3.031-10.865c-.047-.466-.56-2.658-5.689-2.704c-5.13-.047-9.56.979-10.072 2.331c-.513 1.353-1.073 4.523-2.145 7.601s-13.523 30.87-16.787 38.05a215 215 0 0 1-4.15 8.627s-.047.14-.187.373a118 118 0 0 1-1.398 2.658v.046c-.7 1.26-1.446 2.425-1.819 2.425c-.28 0-.793-3.357.093-7.927c1.865-9.652 6.295-24.667 6.249-25.18c0-.28.839-2.891-2.891-4.244c-3.638-1.352-4.943.886-5.27.886s-.56.793-.56.793s4.058-16.88-7.74-16.88c-7.367 0-17.533 8.067-22.569 15.341a6270 6270 0 0 0-17.16 9.373c-2.75 1.539-5.595 3.078-8.253 4.523c-.187-.186-.373-.42-.56-.606c-14.269-15.248-40.661-26.02-39.542-46.49c.42-7.461 2.984-27.046 50.687-50.827c39.262-19.352 70.505-13.99 75.914-2.099c7.74 16.974-16.74 48.496-57.309 53.065c-15.481 1.726-23.595-4.243-25.646-6.481c-2.145-2.332-2.472-2.472-3.265-2.005c-1.305.7-.466 2.798 0 4.01c1.213 3.17 6.202 8.766 14.642 11.518c7.461 2.424 25.6 3.777 47.563-4.71c24.574-9.513 43.786-35.952 38.144-58.101c-5.643-22.476-42.947-29.89-78.246-17.347C61.086 13.99 38.33 25.74 21.963 41.035C2.518 59.22-.56 75.028.699 81.65c4.524 23.501 36.932 38.796 49.895 50.127c-.653.373-1.26.7-1.772.98c-6.482 3.217-31.196 16.133-37.351 29.796c-6.994 15.481 1.12 26.58 6.482 28.071c16.647 4.617 33.76-3.683 42.946-17.393c9.186-13.709 8.067-31.522 3.824-39.682c-.047-.093-.093-.187-.187-.28c1.679-.979 3.404-2.005 5.083-2.984a248 248 0 0 1 9.373-5.27c-1.586 4.337-2.752 9.513-3.311 16.974c-.7 8.767 2.89 20.144 7.6 24.62c2.099 1.96 4.57 2.006 6.156 2.006c5.502 0 7.974-4.57 10.725-9.979c3.357-6.621 6.388-14.315 6.388-14.315s-3.777 20.797 6.482 20.797c3.73 0 7.507-4.85 9.186-7.321v.046s.093-.14.28-.466c.373-.606.606-.98.606-.98v-.092c1.492-2.612 4.85-8.534 9.839-18.373c6.435-12.683 12.637-28.537 12.637-28.537s.56 3.87 2.471 10.305c1.12 3.777 3.45 7.927 5.316 11.937c-1.492 2.099-2.425 3.264-2.425 3.264l.047.047c-1.213 1.585-2.518 3.31-3.964 4.99c-5.083 6.061-11.144 13.01-11.984 15.014c-.98 2.378-.746 4.104 1.12 5.503c1.352 1.026 3.776 1.165 6.248 1.026c4.57-.327 7.787-1.446 9.372-2.145c2.472-.886 5.363-2.239 8.067-4.244c4.99-3.684 8.02-8.953 7.741-15.9c-.14-3.824-1.399-7.648-2.938-11.239c.467-.652.886-1.305 1.353-1.958c7.88-11.518 13.989-24.155 13.989-24.155s.56 3.87 2.471 10.306c.933 3.264 2.845 6.808 4.523 10.258c-7.414 6.016-11.984 13.01-13.616 17.58c-2.937 8.487-.653 12.31 3.684 13.196c1.958.42 4.756-.513 6.808-1.399c2.611-.839 5.689-2.284 8.627-4.43c4.99-3.683 9.792-8.813 9.512-15.76c-.14-3.171-.979-6.296-2.145-9.327c6.295-2.61 14.409-4.056 24.76-2.844c22.197 2.611 26.58 16.46 25.74 22.29c-.839 5.828-5.502 8.999-7.04 9.978c-1.54.98-2.052 1.306-1.912 2.005c.186 1.026.932.98 2.238.793c1.819-.326 11.658-4.71 12.077-15.435c.7-13.709-12.357-28.677-35.439-28.537M49.055 168.242c-7.368 8.02-17.626 11.051-22.056 8.487c-4.756-2.752-2.891-14.596 6.155-23.082c5.502-5.176 12.59-9.98 17.3-12.917c1.072-.653 2.658-1.585 4.57-2.751c.326-.187.513-.28.513-.28l1.119-.7c3.31 12.124.14 22.803-7.601 31.243m53.625-36.465c-2.565 6.249-7.927 22.243-11.191 21.357c-2.798-.746-4.524-12.87-.56-24.854c2.005-6.016 6.248-13.197 8.72-15.994c4.01-4.477 8.44-5.97 9.512-4.15c1.353 2.378-4.896 19.724-6.481 23.641m44.252 21.17c-1.073.56-2.098.933-2.565.653c-.326-.187.467-.933.467-.933s5.549-5.968 7.74-8.673c1.26-1.585 2.751-3.45 4.337-5.549v.606c0 7.135-6.902 11.938-9.98 13.896m34.133-7.787c-.793-.56-.653-2.425 2.005-8.254c1.026-2.285 3.45-6.108 7.601-9.792c.466 1.492.793 2.938.746 4.29c-.047 9-6.481 12.357-10.352 13.756"
                />
            </svg>
        ),
    },
    {
        name: "Node.js",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 32 32" className="size-12 lg:size-16">
                <path
                    fill="#83cd29"
                    d="M16 30a2.15 2.15 0 0 1-1.076-.288L11.5 27.685c-.511-.286-.262-.387-.093-.446a6.8 6.8 0 0 0 1.549-.7a.26.26 0 0 1 .255.019l2.631 1.563a.34.34 0 0 0 .318 0l10.26-5.922a.32.32 0 0 0 .157-.278V10.075a.33.33 0 0 0-.159-.283l-10.26-5.917a.32.32 0 0 0-.317 0L5.587 9.794a.33.33 0 0 0-.162.281v11.841a.32.32 0 0 0 .161.274L8.4 23.814c1.525.762 2.459-.136 2.459-1.038V11.085a.3.3 0 0 1 .3-.3h1.3a.3.3 0 0 1 .3.3v11.692c0 2.035-1.108 3.2-3.038 3.2a4.4 4.4 0 0 1-2.363-.642l-2.697-1.547a2.17 2.17 0 0 1-1.076-1.872V10.075A2.16 2.16 0 0 1 4.661 8.2l10.261-5.924a2.25 2.25 0 0 1 2.156 0L27.338 8.2a2.17 2.17 0 0 1 1.077 1.87v11.846a2.17 2.17 0 0 1-1.077 1.872l-10.26 5.924A2.15 2.15 0 0 1 16 30"
                />
                <path
                    fill="#83cd29"
                    d="M14.054 17.953a.3.3 0 0 1 .3-.3h1.327a.3.3 0 0 1 .295.251c.2 1.351.8 2.032 3.513 2.032c2.161 0 3.082-.489 3.082-1.636c0-.661-.261-1.152-3.62-1.481c-2.808-.278-4.544-.9-4.544-3.144c0-2.07 1.745-3.305 4.67-3.305c3.287 0 4.914 1.141 5.12 3.589a.3.3 0 0 1-.295.323h-1.336a.3.3 0 0 1-.288-.232c-.319-1.421-1.1-1.875-3.2-1.875c-2.36 0-2.634.822-2.634 1.438c0 .746.324.964 3.51 1.385c3.153.417 4.651 1.007 4.651 3.223c0 2.236-1.864 3.516-5.115 3.516c-4.495.006-5.436-2.055-5.436-3.784"
                />
            </svg>
        ),
    },
    {
        name: "React",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="1.13em" height="1em" viewBox="0 0 256 228" className="size-12 lg:size-16">
                <path
                    fill="#00d8ff"
                    d="M210.483 73.824a172 172 0 0 0-8.24-2.597c.465-1.9.893-3.777 1.273-5.621c6.238-30.281 2.16-54.676-11.769-62.708c-13.355-7.7-35.196.329-57.254 19.526a171 171 0 0 0-6.375 5.848a156 156 0 0 0-4.241-3.917C100.759 3.829 77.587-4.822 63.673 3.233C50.33 10.957 46.379 33.89 51.995 62.588a171 171 0 0 0 1.892 8.48c-3.28.932-6.445 1.924-9.474 2.98C17.309 83.498 0 98.307 0 113.668c0 15.865 18.582 31.778 46.812 41.427a146 146 0 0 0 6.921 2.165a168 168 0 0 0-2.01 9.138c-5.354 28.2-1.173 50.591 12.134 58.266c13.744 7.926 36.812-.22 59.273-19.855a146 146 0 0 0 5.342-4.923a168 168 0 0 0 6.92 6.314c21.758 18.722 43.246 26.282 56.54 18.586c13.731-7.949 18.194-32.003 12.4-61.268a145 145 0 0 0-1.535-6.842c1.62-.48 3.21-.974 4.76-1.488c29.348-9.723 48.443-25.443 48.443-41.52c0-15.417-17.868-30.326-45.517-39.844m-6.365 70.984q-2.102.694-4.3 1.345c-3.24-10.257-7.612-21.163-12.963-32.432c5.106-11 9.31-21.767 12.459-31.957c2.619.758 5.16 1.557 7.61 2.4c23.69 8.156 38.14 20.213 38.14 29.504c0 9.896-15.606 22.743-40.946 31.14m-10.514 20.834c2.562 12.94 2.927 24.64 1.23 33.787c-1.524 8.219-4.59 13.698-8.382 15.893c-8.067 4.67-25.32-1.4-43.927-17.412a157 157 0 0 1-6.437-5.87c7.214-7.889 14.423-17.06 21.459-27.246c12.376-1.098 24.068-2.894 34.671-5.345q.785 3.162 1.386 6.193M87.276 214.515c-7.882 2.783-14.16 2.863-17.955.675c-8.075-4.657-11.432-22.636-6.853-46.752a157 157 0 0 1 1.869-8.499c10.486 2.32 22.093 3.988 34.498 4.994c7.084 9.967 14.501 19.128 21.976 27.15a135 135 0 0 1-4.877 4.492c-9.933 8.682-19.886 14.842-28.658 17.94M50.35 144.747c-12.483-4.267-22.792-9.812-29.858-15.863c-6.35-5.437-9.555-10.836-9.555-15.216c0-9.322 13.897-21.212 37.076-29.293c2.813-.98 5.757-1.905 8.812-2.773c3.204 10.42 7.406 21.315 12.477 32.332c-5.137 11.18-9.399 22.249-12.634 32.792a135 135 0 0 1-6.318-1.979m12.378-84.26c-4.811-24.587-1.616-43.134 6.425-47.789c8.564-4.958 27.502 2.111 47.463 19.835a144 144 0 0 1 3.841 3.545c-7.438 7.987-14.787 17.08-21.808 26.988c-12.04 1.116-23.565 2.908-34.161 5.309a160 160 0 0 1-1.76-7.887m110.427 27.268a348 348 0 0 0-7.785-12.803c8.168 1.033 15.994 2.404 23.343 4.08c-2.206 7.072-4.956 14.465-8.193 22.045a381 381 0 0 0-7.365-13.322m-45.032-43.861c5.044 5.465 10.096 11.566 15.065 18.186a322 322 0 0 0-30.257-.006c4.974-6.559 10.069-12.652 15.192-18.18M82.802 87.83a323 323 0 0 0-7.227 13.238c-3.184-7.553-5.909-14.98-8.134-22.152c7.304-1.634 15.093-2.97 23.209-3.984a322 322 0 0 0-7.848 12.897m8.081 65.352c-8.385-.936-16.291-2.203-23.593-3.793c2.26-7.3 5.045-14.885 8.298-22.6a321 321 0 0 0 7.257 13.246c2.594 4.48 5.28 8.868 8.038 13.147m37.542 31.03c-5.184-5.592-10.354-11.779-15.403-18.433c4.902.192 9.899.29 14.978.29c5.218 0 10.376-.117 15.453-.343c-4.985 6.774-10.018 12.97-15.028 18.486m52.198-57.817c3.422 7.8 6.306 15.345 8.596 22.52c-7.422 1.694-15.436 3.058-23.88 4.071a382 382 0 0 0 7.859-13.026a347 347 0 0 0 7.425-13.565m-16.898 8.101a359 359 0 0 1-12.281 19.815a329 329 0 0 1-23.444.823c-7.967 0-15.716-.248-23.178-.732a310 310 0 0 1-12.513-19.846h.001a307 307 0 0 1-10.923-20.627a310 310 0 0 1 10.89-20.637l-.001.001a307 307 0 0 1 12.413-19.761c7.613-.576 15.42-.876 23.31-.876H128c7.926 0 15.743.303 23.354.883a329 329 0 0 1 12.335 19.695a359 359 0 0 1 11.036 20.54a330 330 0 0 1-11 20.722m22.56-122.124c8.572 4.944 11.906 24.881 6.52 51.026q-.518 2.504-1.15 5.09c-10.622-2.452-22.155-4.275-34.23-5.408c-7.034-10.017-14.323-19.124-21.64-27.008a161 161 0 0 1 5.888-5.4c18.9-16.447 36.564-22.941 44.612-18.3M128 90.808c12.625 0 22.86 10.235 22.86 22.86s-10.235 22.86-22.86 22.86s-22.86-10.235-22.86-22.86s10.235-22.86 22.86-22.86"
                />
            </svg>
        ),
    },
    {
        name: "Next.js",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 128 128" className="size-12 lg:size-16">
                <circle cx="64" cy="64" r="64" />
                <path fill="url(#deviconNextjs0)" d="M106.317 112.014L49.167 38.4H38.4v51.179h8.614v-40.24l52.54 67.884a64 64 0 0 0 6.763-5.209" />
                <path fill="url(#deviconNextjs1)" d="M81.778 38.4h8.533v51.2h-8.533z" />
                <defs>
                    <linearGradient id="deviconNextjs0" x1="109" x2="144.5" y1="116.5" y2="160.5" gradientTransform="scale(.71111)" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#fff" />
                        <stop offset="1" stop-color="#fff" stop-opacity="0" />
                    </linearGradient>
                    <linearGradient id="deviconNextjs1" x1="121" x2="120.799" y1="54" y2="106.875" gradientTransform="scale(.71111)" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#fff" />
                        <stop offset="1" stop-color="#fff" stop-opacity="0" />
                    </linearGradient>
                </defs>
            </svg>
        ),
    },
    {
        name: "Typescript",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 128 128" className="size-12 lg:size-16">
                <path fill="#fff" d="M22.67 47h99.67v73.67H22.67z" />
                <path
                    fill="#007acc"
                    d="M1.5 63.91v62.5h125v-125H1.5zm100.73-5a15.56 15.56 0 0 1 7.82 4.5a20.6 20.6 0 0 1 3 4c0 .16-5.4 3.81-8.69 5.85c-.12.08-.6-.44-1.13-1.23a7.09 7.09 0 0 0-5.87-3.53c-3.79-.26-6.23 1.73-6.21 5a4.6 4.6 0 0 0 .54 2.34c.83 1.73 2.38 2.76 7.24 4.86c8.95 3.85 12.78 6.39 15.16 10c2.66 4 3.25 10.46 1.45 15.24c-2 5.2-6.9 8.73-13.83 9.9a38.3 38.3 0 0 1-9.52-.1a23 23 0 0 1-12.72-6.63c-1.15-1.27-3.39-4.58-3.25-4.82a9 9 0 0 1 1.15-.73L82 101l3.59-2.08l.75 1.11a16.8 16.8 0 0 0 4.74 4.54c4 2.1 9.46 1.81 12.16-.62a5.43 5.43 0 0 0 .69-6.92c-1-1.39-3-2.56-8.59-5c-6.45-2.78-9.23-4.5-11.77-7.24a16.5 16.5 0 0 1-3.43-6.25a25 25 0 0 1-.22-8c1.33-6.23 6-10.58 12.82-11.87a31.7 31.7 0 0 1 9.49.26zm-29.34 5.24v5.12H56.66v46.23H45.15V69.26H28.88v-5a49 49 0 0 1 .12-5.17C29.08 59 39 59 51 59h21.83z"
                />
            </svg>
        ),
    },
    {
        name: "PHP",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 128 128" className="size-12 lg:size-16">
                <path fill="url(#deviconPhp0)" d="M0 64c0 18.593 28.654 33.667 64 33.667S128 82.593 128 64S99.345 30.333 64 30.333S0 45.407 0 64" />
                <path fill="#777bb3" d="M64 95.167c33.965 0 61.5-13.955 61.5-31.167c0-17.214-27.535-31.167-61.5-31.167S2.5 46.786 2.5 64c0 17.212 27.535 31.167 61.5 31.167" />
                <path d="M34.772 67.864c2.793 0 4.877-.515 6.196-1.53c1.306-1.006 2.207-2.747 2.68-5.175c.44-2.27.272-3.854-.5-4.71c-.788-.874-2.493-1.317-5.067-1.317h-4.464l-2.473 12.732zM20.173 83.547a.694.694 0 0 1-.68-.828l6.557-33.738a.695.695 0 0 1 .68-.561h14.134c4.442 0 7.748 1.206 9.827 3.585c2.088 2.39 2.734 5.734 1.917 9.935c-.333 1.711-.905 3.3-1.7 4.724a15.8 15.8 0 0 1-3.128 3.92c-1.531 1.432-3.264 2.472-5.147 3.083c-1.852.604-4.232.91-7.07.91h-5.724l-1.634 8.408a.695.695 0 0 1-.682.562z" />
                <path
                    fill="#fff"
                    d="M34.19 55.826h3.891c3.107 0 4.186.682 4.553 1.089c.607.674.723 2.097.331 4.112c-.439 2.257-1.253 3.858-2.42 4.756c-1.194.92-3.138 1.386-5.773 1.386h-2.786zm6.674-8.1H26.731a1.39 1.39 0 0 0-1.364 1.123L18.81 82.588a1.39 1.39 0 0 0 1.363 1.653h7.35a1.39 1.39 0 0 0 1.363-1.124l1.525-7.846h5.151c2.912 0 5.364-.318 7.287-.944c1.977-.642 3.796-1.731 5.406-3.237a16.5 16.5 0 0 0 3.259-4.087c.831-1.487 1.429-3.147 1.775-4.931c.86-4.423.161-7.964-2.076-10.524c-2.216-2.537-5.698-3.823-10.349-3.823zM30.301 68.557h4.471q4.445.001 6.62-1.675q2.175-1.674 2.938-5.591q.728-3.762-.665-5.308q-1.395-1.546-5.584-1.546h-5.036l-2.743 14.12m10.563-19.445q6.378 0 9.303 3.348t1.76 9.346q-.482 2.472-1.625 4.518q-1.145 2.048-2.991 3.747q-2.2 2.06-4.892 2.935q-2.691.876-6.857.875h-6.296l-1.743 8.97h-7.35l6.558-33.739z"
                />
                <path d="M69.459 74.577a.694.694 0 0 1-.682-.827l2.9-14.928c.277-1.42.209-2.438-.19-2.87c-.245-.263-.979-.704-3.15-.704h-5.256l-3.646 18.768a.695.695 0 0 1-.683.56h-7.29a.695.695 0 0 1-.683-.826l6.558-33.739a.695.695 0 0 1 .682-.561h7.29a.695.695 0 0 1 .683.826L64.41 48.42h5.653c4.307 0 7.227.758 8.928 2.321c1.733 1.593 2.275 4.14 1.608 7.573l-3.051 15.702a.695.695 0 0 1-.682.56z" />
                <path
                    fill="#fff"
                    d="M65.31 38.755h-7.291a1.39 1.39 0 0 0-1.364 1.124l-6.557 33.738a1.39 1.39 0 0 0 1.363 1.654h7.291a1.39 1.39 0 0 0 1.364-1.124l3.537-18.205h4.682c2.168 0 2.624.463 2.641.484c.132.14.305.795.019 2.264l-2.9 14.927a1.39 1.39 0 0 0 1.364 1.654h7.408a1.39 1.39 0 0 0 1.363-1.124l3.051-15.7c.715-3.686.103-6.45-1.82-8.217c-1.836-1.686-4.91-2.505-9.398-2.505h-4.81l1.421-7.315a1.39 1.39 0 0 0-1.364-1.655m0 1.39l-1.743 8.968h6.496q6.131 0 8.457 2.14q2.328 2.138 1.398 6.93l-3.052 15.699h-7.407l2.901-14.928q.495-2.547-.365-3.474q-.86-.926-3.658-.926h-5.829l-3.756 19.327H51.46l6.558-33.739h7.292z"
                />
                <path d="M92.136 67.864c2.793 0 4.878-.515 6.198-1.53c1.304-1.006 2.206-2.747 2.679-5.175c.44-2.27.273-3.854-.5-4.71c-.788-.874-2.493-1.317-5.067-1.317h-4.463l-2.475 12.732zM77.54 83.547a.694.694 0 0 1-.682-.828l6.557-33.738a.695.695 0 0 1 .682-.561H98.23c4.442 0 7.748 1.206 9.826 3.585c2.089 2.39 2.734 5.734 1.917 9.935a15.9 15.9 0 0 1-1.699 4.724a15.8 15.8 0 0 1-3.128 3.92c-1.53 1.432-3.265 2.472-5.147 3.083c-1.852.604-4.232.91-7.071.91h-5.723l-1.633 8.408a.695.695 0 0 1-.683.562z" />
                <path
                    fill="#fff"
                    d="M91.555 55.826h3.891c3.107 0 4.186.682 4.552 1.089c.61.674.724 2.097.333 4.112c-.44 2.257-1.254 3.858-2.421 4.756c-1.195.92-3.139 1.386-5.773 1.386h-2.786zm6.674-8.1H84.096a1.39 1.39 0 0 0-1.363 1.123l-6.558 33.739a1.39 1.39 0 0 0 1.364 1.653h7.35a1.39 1.39 0 0 0 1.363-1.124l1.525-7.846h5.15c2.911 0 5.364-.318 7.286-.944c1.978-.642 3.797-1.731 5.408-3.238a16.5 16.5 0 0 0 3.258-4.086c.832-1.487 1.428-3.147 1.775-4.931c.86-4.423.162-7.964-2.076-10.524c-2.216-2.537-5.697-3.823-10.35-3.823zM87.666 68.557h4.47q4.445.001 6.622-1.675q2.175-1.674 2.936-5.591q.731-3.762-.665-5.308t-5.583-1.546h-5.035Zm10.563-19.445q6.378 0 9.303 3.348t1.759 9.346q-.48 2.472-1.624 4.518q-1.144 2.048-2.992 3.747q-2.2 2.06-4.892 2.935q-2.69.876-6.856.875h-6.295l-1.745 8.97h-7.35l6.558-33.739h14.133"
                />
                <defs>
                    <radialGradient id="deviconPhp0" cx="0" cy="0" r="1" gradientTransform="translate(38.426 42.169)scale(84.04136)" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#aeb2d5" />
                        <stop offset=".3" stop-color="#aeb2d5" />
                        <stop offset=".75" stop-color="#484c89" />
                        <stop offset="1" stop-color="#484c89" />
                    </radialGradient>
                </defs>
            </svg>
        ),
    },
    {
        name: "Laravel",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="0.97em" height="1em" viewBox="0 0 256 264" className="size-12 lg:size-16">
                <path
                    fill="#ff2d20"
                    d="M255.856 59.62c.095.351.144.713.144 1.077v56.568c0 1.478-.79 2.843-2.073 3.578L206.45 148.18v54.18a4.14 4.14 0 0 1-2.062 3.579l-99.108 57.053c-.227.128-.474.21-.722.299c-.093.03-.18.087-.278.113a4.15 4.15 0 0 1-2.114 0c-.114-.03-.217-.093-.325-.134c-.227-.083-.464-.155-.68-.278L2.073 205.938A4.13 4.13 0 0 1 0 202.36V32.656c0-.372.052-.733.144-1.083c.031-.119.103-.227.145-.346c.077-.216.15-.438.263-.639c.077-.134.19-.242.283-.366c.119-.165.227-.335.366-.48c.119-.118.274-.206.408-.309c.15-.124.283-.258.453-.356h.005L51.613.551a4.14 4.14 0 0 1 4.125 0l49.546 28.526h.01c.165.104.305.232.454.351c.134.103.284.196.402.31c.145.149.248.32.371.484c.088.124.207.232.279.366c.118.206.185.423.268.64c.041.118.113.226.144.35c.095.351.144.714.145 1.078V138.65l41.286-23.773V60.692c0-.36.052-.727.145-1.072c.036-.124.103-.232.144-.35c.083-.217.155-.44.268-.64c.077-.134.19-.242.279-.366c.123-.165.226-.335.37-.48c.12-.118.269-.206.403-.309c.155-.124.289-.258.454-.356h.005l49.551-28.526a4.13 4.13 0 0 1 4.125 0l49.546 28.526c.175.103.309.232.464.35c.128.104.278.197.397.31c.144.15.247.32.37.485c.094.124.207.232.28.366c.118.2.185.423.267.64c.047.118.114.226.145.35m-8.115 55.258v-47.04l-17.339 9.981l-23.953 13.792v47.04l41.297-23.773zm-49.546 85.095V152.9l-23.562 13.457l-67.281 38.4v47.514zM8.259 39.796v160.177l90.833 52.294v-47.505L51.64 177.906l-.015-.01l-.02-.01c-.16-.093-.295-.227-.444-.34c-.13-.104-.279-.186-.392-.3l-.01-.015c-.134-.129-.227-.289-.34-.433c-.104-.14-.227-.258-.31-.402l-.005-.016c-.093-.154-.15-.34-.217-.515c-.067-.155-.154-.3-.196-.464v-.005c-.051-.196-.061-.403-.082-.604c-.02-.154-.062-.309-.062-.464V63.57L25.598 49.772l-17.339-9.97zM53.681 8.893L12.399 32.656l41.272 23.762L94.947 32.65L53.671 8.893zm21.468 148.298l23.948-13.786V39.796L81.76 49.778L57.805 63.569v103.608zM202.324 36.935l-41.276 23.762l41.276 23.763l41.271-23.768zm-4.13 54.676l-23.953-13.792l-17.338-9.981v47.04l23.948 13.787l17.344 9.986zm-94.977 106.006l60.543-34.564l30.264-17.272l-41.246-23.747l-47.489 27.34l-43.282 24.918z"
                />
            </svg>
        ),
    },
    {
        name: "MySQL",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="1.47em" height="1em" viewBox="0 0 512 349" className="size-12 lg:size-16">
                <path
                    fill="#00758f"
                    d="m152.31 230.297l15.56 50.487c3.496 11.463 4.954 19.465 4.37 24.026q12.765-34.188 17.839-74.513h18.71q-12.069 65.65-31.827 95.41c-10.262 15.289-21.504 22.933-33.746 22.933c-3.264 0-7.288-.986-12.063-2.944v-10.55c2.333.342 5.07.525 8.218.525q8.565-.002 13.816-4.742c4.193-3.849 6.292-8.175 6.292-12.97c0-3.274-1.637-9.993-4.896-20.157l-21.68-67.505zM33.223 199.266l28.5 86.956h.176l28.675-86.956h23.428c5.13 43.124 8.16 82.581 9.09 118.346H103.34q-1.044-50.148-5.768-94.32H97.4l-30.078 94.32H52.28l-29.896-94.32h-.176q-3.325 42.422-4.196 94.32H0c1.164-42.08 4.077-81.525 8.739-118.346z"
                />
                <path
                    fill="#f29111"
                    d="M352.498 197.51c30.657 0 45.986 19.586 45.986 58.739c0 21.276-4.61 37.347-13.821 48.204c-1.66 1.984-3.495 3.698-5.427 5.286l21.695 10.727l-.021-.001l-7.703 13.302l-28.253-16.485q-7.026 2.08-15.451 2.08c-15.053 0-26.297-4.387-33.731-13.15c-8.16-9.694-12.238-24.955-12.238-45.757c0-21.156 4.602-37.166 13.816-48.037c8.392-9.944 20.11-14.909 35.148-14.909m-93.88.172c10.957 0 20.92 2.932 29.894 8.775l-4.558 10.157c-7.679-3.264-15.25-4.903-22.716-4.903c-6.058 0-10.726 1.458-13.98 4.392c-3.272 2.908-5.296 6.65-5.296 11.212c0 7.01 4.994 13.089 14.215 18.225a816 816 0 0 1 9.031 5.011l.688.387l.345.194l.689.387l.344.194l.688.388c6.98 3.935 13.548 7.691 13.548 7.691c9.22 6.545 13.816 13.523 13.816 25.016c0 10.037-3.678 18.276-11.01 24.723c-7.337 6.418-17.194 9.636-29.538 9.636c-11.545 0-22.734-3.704-33.572-11.05l5.07-10.166c9.327 4.675 17.767 7.01 25.346 7.01c7.108 0 12.672-1.587 16.697-4.721c4.017-3.157 6.424-7.56 6.424-13.143c0-7.027-4.888-13.034-13.855-18.073a898 898 0 0 1-8.395-4.697l-.687-.389c-1.262-.713-2.533-1.435-3.778-2.142l-.675-.384c-6.055-3.444-11.29-6.453-11.29-6.453c-8.964-6.557-13.459-13.592-13.459-25.184c0-9.587 3.352-17.336 10.046-23.231q10.066-8.862 25.968-8.862m175.895 1.584v103.788h37.238v14.558h-56.124V199.266zm57.93 103.833v2.46h-4.094v12.04h-3.13v-12.04h-4.253v-2.46zm7.56 0l3.931 9.884l3.611-9.884h4.437v14.5h-2.95v-11.035l-4.11 11.035h-2.127l-4.117-11.035h-.158v11.035h-2.791v-14.5zM350.57 212.064c-18.066 0-27.104 14.91-27.104 44.71c0 17.07 2.395 29.448 7.176 37.163c4.428 7.14 11.363 10.703 20.806 10.703c18.066 0 27.103-15.026 27.103-45.064c0-16.831-2.395-29.103-7.17-36.822c-4.433-7.124-11.365-10.69-20.81-10.69"
                />
                <path
                    fill="#00758f"
                    d="M303.218 7.333c5.993-14.726 26.948-3.574 35.08 1.57c1.993 1.287 4.279 4.006 6.564 5.011c3.565.14 7.127.419 10.698.568c6.698 1.574 12.972 2.86 18.25 5.866c24.528 14.445 40.495 29.165 55.19 53.479c3.14 5.15 4.709 10.723 7.274 16.296c3.56 8.307 7.56 17.027 11.692 24.882c1.85 3.724 3.281 7.865 5.85 11.01c1.003 1.438 3.852 1.862 5.555 2.721c4.708 2.437 10.412 4.287 14.84 7.147c8.269 5.156 16.264 11.3 23.532 17.59c2.709 2.428 4.555 5.865 7.136 8.433v1.296c-2.291.703-4.574 1.423-6.859 2c-4.991 1.282-9.412.992-14.254 2.275c-2.992.868-6.707 2.013-9.845 2.304l.29.292c1.846 5.275 11.834 9.565 16.402 12.72c5.548 4.004 10.689 8.86 14.827 14.437c1.429 1.423 2.858 2.718 4.28 4.137c.994 1.438 1.274 3.298 2.28 4.58v.434c-1.114-.393-1.915-1.143-2.674-1.927l-.453-.473c-.453-.47-.91-.932-1.431-1.313c-3.148-2.15-6.274-4.722-9.422-6.721c-5.412-3.434-11.689-5.427-17.246-8.874c-3.142-2.001-6.137-4.28-9.132-6.57c-2.715-2.007-5.705-5.861-7.411-8.721c-1.005-1.58-1.143-3.437-2.291-4.58c.205-1.909 1.954-2.476 3.719-2.942l.406-.107c.609-.158 1.205-.316 1.725-.525c7.414-3.148 16.253-4.29 27.667-4.004c-.43-2.866-7.562-6.437-9.839-8.153c-4.57-3.294-9.409-6.731-14.257-9.729c-2.569-1.57-6.996-2.716-9.842-3.999c-3.851-1.574-12.41-3.147-14.544-6.145c-3.625-4.726-6.229-10.363-8.757-16.057l-.688-1.554l-.69-1.553c-2.988-6.857-6.7-14.006-9.695-21.027c-1.566-3.425-2.285-6.431-4-9.716c-10.407-20.158-25.81-37.035-44.485-48.904c-6.137-3.862-12.98-7.436-20.534-9.865c-4.281-1.293-9.419-.578-13.98-1.57h-3.002c-2.562-.722-4.701-3.438-6.7-4.87c-4.415-2.998-8.837-5.011-14.117-7.15c-1.85-.858-7.133-2.856-8.977-1.283c-1.142.287-1.721.718-2.002 1.864c-1.136 1.71-.137 4.286.57 5.863c2.142 4.57 5.134 7.286 7.85 11.148c2.416 3.425 5.417 7.287 7.13 11.011c3.696 8.005 5.417 16.874 8.842 24.878c1.27 3.01 3.279 6.435 5.128 9.15c1.567 2.155 4.416 3.713 5.278 6.441c1.718 2.86-2.572 12.297-3.565 15.294c-3.715 11.727-2.995 28.028 1.283 38.193l.228.536l.228.543c1.562 3.723 3.234 7.732 7.387 8.773c.286-.284 0-.135.567-.284c1.005-7.868 1.288-15.445 4-21.601c1.567-3.849 4.696-6.57 6.841-9.712c1.43.856 1.43 3.437 2.282 5.145c1.856 4.43 3.849 9.287 6.137 13.73c4.696 9.15 9.98 18.021 15.967 26.025c2.005 2.859 4.85 6.006 7.416 8.581c1.143.997 2.423 1.573 3.282 2.856h.28v.432c-4.278-1.577-6.99-6.003-10.402-8.587c-6.424-4.857-14.117-12.151-18.545-19.15c-1.852-4.018-3.854-7.869-5.85-11.867v-.289c-.853 1.142-.567 2.276-.994 4.004c-1.852 7.145-.426 15.296-6.843 17.866c-7.274 3.01-12.7-4.857-14.977-8.432c-7.276-11.866-9.269-31.884-4.138-48.043c1.14-3.577 1.295-7.867 3.285-10.723c-.43-2.582-2.42-3.288-3.571-4.87c-1.996-2.704-3.705-5.854-5.268-8.857c-3.002-5.866-5.138-12.875-7.417-19.166c-1.002-2.569-1.289-5.148-2.288-7.58c-1.704-3.712-4.845-7.436-7.268-10.72c-3.281-4.72-12.837-13.868-8.985-23.168m46.772 28.015c.381.382.841.716 1.317 1.045l.574.394c.765.53 1.506 1.088 1.96 1.848c.72 1.006.854 1.999 1.716 3.007c0 3.437-.996 5.722-3.007 7.146c0 0-.137.15-.278.29c-1.14-2.291-2.139-4.57-3.287-6.859c-1.414-1.998-3.413-3.583-4.565-5.866h-.277v-.287c1.721-.425 3.428-.718 5.847-.718"
                />
            </svg>
        ),
    },
];