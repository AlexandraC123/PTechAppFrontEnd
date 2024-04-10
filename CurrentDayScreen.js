import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Card, Button, Icon } from 'react-native-elements';
import { LineChart } from 'react-native-chart-kit';

const pastData = [
  { day: 'Day 1', calcium: 12, pH: 7.2 },
  { day: 'Day 2', calcium: 12, pH: 7.3 },
  { day: 'Day 3', calcium: 10, pH: 7.1 },
  { day: 'Day 4', calcium: 14, pH: 7.4 },
  { day: 'Day 5', calcium: 15, pH: 7.5 },
];

const todayData = { calcium: 15, pH: 7.5 }; 

const riskAssessment = (pH, calcium) => {
  if (pH > 7.5 || calcium > 3.14) {
    return 'Higher risk - calcium';
  } else if (pH < 6.5 || calcium < 100) {
    return 'Lower risk';
  } else {
    return 'Normal risk';
  }
};

export default function CurrentDayScreen() {
  const [showPastData, setShowPastData] = useState(false);

  const handleShowPastData = () => {
    setShowPastData(!showPastData);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Results</Text>
      <Card>
        <Card.Title>Today's Values</Card.Title>
        <Text>pH: {todayData.pH.toFixed(1)}</Text>
        <Text>Calcium: {todayData.calcium.toFixed(1)} mmol/L</Text>
        <Text style={styles.riskText}>Risk: {riskAssessment(todayData.pH, todayData.calcium)}</Text>
      </Card>
      <Card>
        <Card.Title>pH Level</Card.Title>
        <LineChart
          data={{
            labels: pastData.map(item => item.day),
            datasets: [{ data: pastData.map(item => item.pH) }],
          }}
          width={300}
          height={200}
          yAxisLabel=""
          yAxisSuffix=""
          yAxisInterval={0.5}
          chartConfig={{
            backgroundColor: '#fff',
            backgroundGradientFrom: '#fff',
            backgroundGradientTo: '#fff',
            decimalPlaces: 1,
            color: (opacity = 1) => `rgba(0, 128, 0, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            style: {
              borderRadius: 16,
            },
          }}
          bezier
        />
      </Card>
      <Card>
        <Card.Title>Calcium Level (mmol/L)</Card.Title>
        <LineChart
          data={{
            labels: pastData.map(item => item.day),
            datasets: [{ data: pastData.map(item => item.calcium) }],
          }}
          width={300}
          height={200}
          yAxisLabel=""
          yAxisSuffix=""
          yAxisInterval={2}
          yAxisMin = {0}
          chartConfig={{
            backgroundColor: '#fff',
            backgroundGradientFrom: '#fff',
            backgroundGradientTo: '#fff',
            decimalPlaces: 1,
            color: (opacity = 1) => `rgba(0, 0, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            style: {
              borderRadius: 16,
            },
          }}
          bezier
        />
      </Card>
      <Button
        icon={<Icon name="refresh" color="#ffffff" />}
        title="Show Past Month Data"
        onPress={handleShowPastData}
      />
      {showPastData && (
        <>
          <Card>
            <Card.Title>Past Month Data - pH </Card.Title>
            <LineChart
              data={{
                labels: Array.from({ length: 30 }, (_, i) => ''),
                datasets: [
                  {
                    data: Array.from({ length: 30 }, (_, i) => {
                      if (i < 25) return Math.random() * (7.5 - 5) + 5;
                      else return pastData[i - 25].pH;
                    }),
                  },
                ],
              }}
              width={300}
              height={200}
              yAxisLabel=""
              yAxisSuffix=""
              yAxisInterval={0.5}
              chartConfig={{
                backgroundColor: '#fff',
                backgroundGradientFrom: '#fff',
                backgroundGradientTo: '#fff',
                decimalPlaces: 1,
                color: (opacity = 1) => `rgba(255, 0, 0, ${opacity})`,
                labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                style: {
                  borderRadius: 16,
                },
              }}
              bezier
            />
          </Card>
          <Card>
            <Card.Title>Past Month Data - Calcium </Card.Title>
            <LineChart
              data={{
                labels: Array.from({ length: 30 }, (_, i) => ''),
                datasets: [
                  {
                    data: Array.from({ length: 30 }, (_, i) => {
                      if (i < 25) return Math.random() * (315 - 75) + 75;
                      else return pastData[i - 25].calcium;
                    }),
                  },
                ],
              }}
              width={300}
              height={200}
              yAxisLabel=""
              yAxisSuffix=""
              yAxisInterval={50}
              chartConfig={{
                backgroundColor: '#fff',
                backgroundGradientFrom: '#fff',
                backgroundGradientTo: '#fff',
                decimalPlaces: 1,
                color: (opacity = 1) => `rgba(0, 0, 255, ${opacity})`,
                labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                style: {
                  borderRadius: 16,
                },
              }}
              bezier
            />
          </Card>
        </>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fffacd',
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  riskText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'red',
  },
});
