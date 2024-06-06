import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { ResizableWhiteCard } from '../resizableWhiteCard';
import colors from '../../global/colors';
import { units, useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { getStudentData, userData } from '../../redux/authSlice';
import { style } from './style';

//RESTA VALIDAR AS CORES DO GRÁFICO E SE EXISTEM AS LEGENDAS
const DashBoardGraph = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getStudentData());
  }, [dispatch]);
  const user = useAppSelector(userData);
  const colorGraph =
    user &&
      user.student_actual_weight &&
      user.student_initial_weight &&
      user.student_actual_weight - user.student_initial_weight < 0
      ? colors.primary
      : colors.primary;

  return (
    <View style={style.container}>
      <ResizableWhiteCard
        width="86%"
        height={units.vh * 20}
        marginTop={24}
        children={
          <View style={style.targetContainer}>
            <Text style={style.textFirstLine}>Evolução de peso</Text>
            <Text style={style.targetSecondLine}>
              {user?.student_wished_weight} 82.50 kg
            </Text>
            {user?.objective_id === 1 ? (
              <Text
                style={style.targetThirdLine}>
                {user &&
                  user.student_actual_weight &&
                  user.student_initial_weight &&
                  user.student_actual_weight - user.student_initial_weight < 0
                  ? ''
                  : '+'}
                {user &&
                  user.student_actual_weight &&
                  user.student_initial_weight
                  ? (
                    user.student_actual_weight - user.student_initial_weight
                  ).toFixed(2)
                  : '0,00'}{' '}
                kg
              </Text>
            ) : (
              <Text
                style={style.targetThirdLine}>
                {user &&
                  user.student_actual_weight &&
                  user.student_initial_weight &&
                  user.student_actual_weight - user.student_initial_weight < 0
                  ? ''
                  : '+'}
                {user &&
                  user.student_actual_weight &&
                  user.student_initial_weight
                  ? (
                    user.student_actual_weight - user.student_initial_weight
                  ).toFixed(2)
                  : '0,00'}{' '}
                kg
              </Text>
            )}
          </View>
        }
      />
      <ResizableWhiteCard
        width="100%"
        height={250}
        children={
          <LineChart
            data={{
              labels: ['Inicial', 'Agora', 'Desejo'],
              datasets: [
                {
                  data: [
                    user?.student_initial_weight || 80,
                    user?.student_actual_weight || 70,
                    user?.student_wished_weight || 60,
                  ],
                },
              ],
            }}
            width={86 * units.vw} // from react-native
            height={250}
            // yAxisLabel={''}
            yAxisSuffix="kg"
            yAxisInterval={1} // optional, defaults to 1
            chartConfig={{
              backgroundColor: '#fefefe',
              //   backgroundGradientFrom: '#f3f2f0',
              backgroundGradientFrom: '#fefefe',
              backgroundGradientTo: '#fefefe',

              //   decimalPlaces: 2, // optional, defaults to 2dp
              color: (opacity = 1) => colorGraph,
              //   color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,

              style: {
                borderRadius: 16,
              },
              propsForDots: {
                r: '1',
                strokeWidth: '1',
                stroke: colorGraph,
              },
            }}
            segments={0}
            withInnerLines={false}
            withVerticalLines={false}
            withHorizontalLines={false}
            bezier
            style={{
              borderRadius: 16,
              marginLeft: 2 * units.vw,
              marginTop: 2 * units.vw,
            }}
          />
        }
      />
    </View>
  );
};

export default DashBoardGraph;

