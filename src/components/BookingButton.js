import Text from "./Text";

export default function BookingButton(props) {
    return (
        <div className="m-5  pt-[55px]">
            <div className='bg-primary py-3 w-[584px] h-[93px]
            flex items-center justify-center rounded-[9px] px-3'>
                <Text>{props.children}</Text>
            </div>
        </div>
    )
}