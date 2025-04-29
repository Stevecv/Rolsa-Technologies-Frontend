import Text from "./Text";

export default function LinkButton(props) {
    return (
        <div className="m-5">
            <a href={props.link} className='bg-primary py-3 min-w-[440px]
            flex items-center justify-center w-fit rounded-[9px] px-3'>
                <Text>{props.children}</Text>
            </a>
        </div>
    )
}