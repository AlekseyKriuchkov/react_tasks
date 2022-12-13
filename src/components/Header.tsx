type HeaderTypeProps = {
    title: string
}
export const Header = function (props:HeaderTypeProps) {
    return (
        <div>{props.title}</div>
    )
}