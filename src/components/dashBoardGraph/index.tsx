import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { ResizableWhiteCard } from '../resizableWhiteCard';
import { units, useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { getStudentData, userData } from '../../redux/authSlice';
import colors from '../../global/colors';
import { style } from './style';

const DashBoardGraph = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    // dispatch(getStudentData());
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
        width={units.vw * 140}
        height={250}
        children={
          <LineChart
            withVerticalLabels={false}
            withHorizontalLabels={false}
            data={{
              datasets: [{
                data: [
                  user?.student_initial_weight || 65,
                  user?.student_actual_weight || 80,
                  user?.student_wished_weight || 75,
                ]
              }]
            }}
            width={170 * units.vw}
            height={units.vh * 25}
            chartConfig={{
              backgroundColor: '#fefefe',
              backgroundGradientFrom: '#fefefe',
              backgroundGradientTo: '#fefefe',
              color: (opacity = 1) => colorGraph,
              style: { borderRadius: 16 },
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
            style={{ borderRadius: 16, marginLeft: 2 * units.vw, marginTop: 2 * units.vw }}
          />
        }
      />
    </View>
  );
};

export default DashBoardGraph;

