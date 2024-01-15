import React from "react";
import {Statistic} from 'semantic-ui-react';

function DisplayBalance({size,color="black",textAlignValue="",label,value}) {
    return (
        <Statistic size={size} color={color}>
        <Statistic.Label style={{textAlign: {textAlignValue}}}>{label}</Statistic.Label>
        <Statistic.Value>$ {value}</Statistic.Value>
      </Statistic>
    )
}

export default DisplayBalance;