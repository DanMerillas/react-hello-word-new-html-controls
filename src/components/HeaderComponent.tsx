import CustomOption from "./CustomOption"

type Props = {
    texto: string,
    options: string[],
    customHeaderStyles:object
}

export default function HeaderComponent(props: Props) {

    return (
        <header style={props.customHeaderStyles}>
            <h1>{props.texto}</h1>
            <nav>
                <ul>
                    <CustomOption op={props.options} />
                </ul>
            </nav>
        </header>
    )
}