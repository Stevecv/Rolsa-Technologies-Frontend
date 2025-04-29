export default function ImportantText(props) {
    return (
        <div className="text-secondary font-bold text-[50px] inline">
            {props.children}
        </div>
    )
}