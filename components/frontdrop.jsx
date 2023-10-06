export default function FrontDrop({ children, isOpen, replayHandler, isBoardFull }) {
    return(
        <div className="grid grid-cols-3 gap-4 relative">
            {children}
            {(isOpen != null || isBoardFull == 9) && <button className='bg-gray-500 opacity-80 absolute inset-0 z-20' onClick={replayHandler}>Replay</button>}
        </div>
    );
};