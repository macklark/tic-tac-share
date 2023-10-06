export default function Toast({ msg }) {

    return(
        <div className={`${msg != null ? 'opacity-100 translate-y-3' : 'opacity-0'} scale-75 translate-y-0 transition-all absolute inset-x-0 bottom-10 flex mx-auto justify-center md:w-1/4 w-1/2 p-5 bg-slate-900 rounded-2xl border-2 border-solid border-sky-500`}>
            <span className="text-2xl font-bold tracking-normal text-white">{ `🎉${msg}` }</span>
        </div>
    )
};