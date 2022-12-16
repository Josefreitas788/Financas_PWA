import React from 'react';
import { Button, View } from 'react-native';
import { BarChart } from "react-native-chart-kit";

function Home() {

  return (
    <View >
      <>
      </>
      <View>
        <Text>{"Receita"}{}</Text><Button />
        <Text>{"Gastos Totais"}{}</Text><Button />
      </View>
      <View>
        <Text>{"Gastos Mensais"}</Text>
        <BarChart 
          data={data}
          width={Dimensions.get("window").width}
          height={220}
          yAxisLabel={"$"}
          chartConfig={chartConfig}
        />
      </View>
    </View>
  );
}

export default Home;