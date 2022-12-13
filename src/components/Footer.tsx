
type FooterTypeProps = {
    title: string
}
export const Footer = function (props:FooterTypeProps){
    return (
        <div>{props.title}</div>
    )
}