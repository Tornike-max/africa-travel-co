import { Button } from "@nextui-org/button";

function Fallback({ error, resetErrorBoundary }) {

    function handleReset() {
        resetErrorBoundary();
        window.location.href = '/';
    };

    return (
        <div className='flex justify-center items-center flex-col h-screen gap-4'>
            <div className='flex justify-center items-center flex-col gap-1'>
                <h1 className='font-bold text-3xl'>Something went wrong</h1>
                <span className='text-red-500 font-semibold text-lg'>{error.message}</span>
            </div>
            <Button onClick={handleReset} color="danger">
                Try Again
            </Button>
        </div>
    )
}

export default Fallback
