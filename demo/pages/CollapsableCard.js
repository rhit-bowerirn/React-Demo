
import { Card, Text, Collapse, Image, Avatar } from "@nextui-org/react";



export default function CollapsableCard(props) {
    return (
        <div>
            <Collapse.Group splitted css={{width: "40vw"}}>
                <Collapse
                    class="collapse"
                    css={{ backgroundColor: "black !important" }}
                    title={
                    <Text h2 color="white">
                        {props.title}
                    </Text>
                    }
                    contentLeft={
                        <Avatar
                            size="xl"
                            src={props.avatar}
                            squared
                        />
                    }
                >
                    <Text h4 color="white">
                        {props.subtitle}
                    </Text>
                    <Image
                        src={props.src}
                        objectFit="cover"
                        width="100%"
                        height="100%"
                        alt={props.title}
                    />
                </Collapse>
            </Collapse.Group>

        </div>
    );
}