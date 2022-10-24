
import { Card, Text } from "@nextui-org/react";

export default function ImageCard(props) {
    return (
        <div>
            <Card
                variant="bordered"
                isHoverable
                css={{
                    backgroundColor: "black",
                    borderColor: "#444444",
                    borderWidth: "0.2em",
                    width: "22vw",
                    height: "36vw"
                }}
            >
                <Text size={28} weight="bold" color="#ffffffBB">
                    &nbsp;{props.title}
                </Text>
                <Text h5 color="white">
                    &nbsp;{props.subtitle}
                </Text>

                <Card.Image
                    src={props.src}
                    objectFit="cover"
                    width="100%"
                    height="100%"
                    alt={props.title}
                />
            </Card>
        </div>
    );
}