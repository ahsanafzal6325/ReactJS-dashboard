import React from "react";
import { BadgeDelta, Flex, Card, Metric, Text } from "@tremor/react";

const CardItem = () => {
    return(
      <Card className="w-xs" decoration="top" decorationColor="indigo">
        <Flex justifyContent="between" alignItems="center"> 
            <Text>Sales</Text>
            <BadgeDelta>+12.5%</BadgeDelta>
        </Flex>
        <Metric>$ 34,743</Metric>
      </Card>
    )
}

export default CardItem