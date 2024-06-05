import React, { useEffect } from 'react';
import { Image, Text, View } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import Icon from 'react-native-vector-icons/Feather';
import { ResizableWhiteCard } from '../../../components/resizableWhiteCard';
import colors from '../../../global/colors';
import { units, useAppDispatch, useAppSelector } from '../../../hooks/hooks';
import { getStudentData, userData } from '../../../redux/authSlice';
import { style } from './style';

const Measurements = () => {
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
      ? colors.badGraph
      : colors.goodGraph;

  return (
    <>
      <ResizableWhiteCard
        width="86%"
        height={units.vh * 20}
        marginTop={24}
        children={
          <View style={style.targetContainer}>
            <Text style={style.textFirstLine}>Evolução de peso</Text>
            <Text style={style.targetSecondLine}>
              {user?.student_wished_weight} kg
            </Text>
            {user?.objective_id === 1 ? (
              <Text
                style={[
                  style.targetThirdLine,
                  {
                    backgroundColor:
                      user &&
                        user.student_actual_weight &&
                        user.student_initial_weight &&
                        user.student_actual_weight - user.student_initial_weight <
                        0
                        ? colors.goodGraph
                        : colors.badGraph,
                  },
                ]}>
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
                  : '0.00'}{' '}
                kg
              </Text>
            ) : (
              <Text
                style={[
                  style.targetThirdLine,
                  {
                    backgroundColor:
                      user &&
                        user.student_actual_weight &&
                        user.student_initial_weight &&
                        user.student_actual_weight - user.student_initial_weight <
                        0
                        ? colors.badGraph
                        : colors.goodGraph,
                  },
                ]}>
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
                  : '0.00'}{' '}
                kg
              </Text>
            )}
          </View>
        }
      />
      <ResizableWhiteCard
        width="86%"
        height={250}
        children={
          <LineChart
            data={{
              labels: ['Inicial', 'Agora', 'Desejo'],
              datasets: [
                {
                  data: [
                    user?.student_initial_weight || 0,
                    user?.student_actual_weight || 0,
                    user?.student_wished_weight || 0,
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
                r: '6',
                strokeWidth: '2',
                stroke: colorGraph,
              },
            }}
            bezier
            style={{
              borderRadius: 16,
              marginLeft: 2 * units.vw,
              marginTop: 2 * units.vw,
            }}
          />
        }
      />

      <ResizableWhiteCard
        width="86%"
        height={units.vh * 13}
        marginTop={22}
        children={
          <View style={style.infosContainer}>
            <Image
              source={require('../../../assets/img/fitness-ico.png')}
              style={style.ico}
            />
            <View>
              <Text style={style.infosTitle}>Altura</Text>
              <Text style={style.infosDescription}>{user?.student_height}</Text>
            </View>
            <View>
              <Text style={style.infosTitle}>Peso</Text>
              <Text style={style.infosDescription}>
                {user?.student_actual_weight} kg
              </Text>
            </View>
            <View>
              <Text style={style.infosTitle}>IMC</Text>
              <Text style={style.infosDescription}>
                {(
                  Number(user?.student_actual_weight) /
                  (Number(user?.student_height) * Number(user?.student_height))
                ).toFixed(1)}
              </Text>
            </View>
          </View>
        }
      />
    </>
  );
};

export default Measurements;

