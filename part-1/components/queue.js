export default function Queue(props) {

    return (
        <div className="max-w-sm max-h-96 overflow-y-scroll">
            {

                props.data.map((item, index) => {
                    return (
                        <div key={index} className="flex flex-row items-center space-x-16 w-60">
                            <h1 className="text-lg font-bold">{index + 1}</h1>

                            <div className="text-sm">
                                <h3 className="font-bold">{item.snippet.title}</h3>
                                <p>{item.snippet.channelTitle}</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}
