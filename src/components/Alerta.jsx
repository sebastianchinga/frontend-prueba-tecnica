const Alerta = ({ alerta }) => {
    const { msg, error } = alerta
    return (
        <div class={`${error ? 'bg-red-50 border border-red-200' : 'bg-green-50 border border-green-200'} rounded-lg p-4 flex items-center space-x-3 mb-4`}>
            <div class="flex-shrink-0">
                {error ? (
                    <svg class="w-5 h-5 text-red-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                ) : (
                    <svg class="w-5 h-5 text-green-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                )}
            </div>
            <div class="flex-1">
                <h3 class={`text-sm font-medium ${error ? 'text-red-800' : 'text-green-800'}`}>
                    {msg}
                </h3>
            </div>
        </div>
    )
}

export default Alerta